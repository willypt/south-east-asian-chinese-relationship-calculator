import { RelationshipStep, UserGender, ResolutionResult, DialectId } from './types';
import { normalizeChain } from './normalizer';
import { RESOLUTION_MAP } from '@/data/resolution-map';
import { CONTINUATION_MAP } from '@/data/continuation-map';
import { getReverseTermId } from '@/data/reverse-map';
import { KINSHIP_LABELS } from '@/data/terms';
import { ALL_DIALECT_TERMS } from '@/data/dialects';

const MAX_DEPTH = 10;

/**
 * Looks up a chain key in the resolution map, trying gender-specific first.
 */
function lookupResolutionMap(chainKey: string, userGender: UserGender): string | null {
  const genderKey = `${chainKey}:${userGender}`;
  return RESOLUTION_MAP[genderKey] ?? RESOLUTION_MAP[chainKey] ?? null;
}

/**
 * Resolves a chain by trying direct lookup first, then iterative continuation.
 *
 * Strategy:
 * 1. Try full chain as direct lookup
 * 2. Find the longest prefix that resolves to a kinship ID
 * 3. Use CONTINUATION_MAP to advance step-by-step through remaining steps
 * 4. Repeat until chain is fully consumed
 */
function resolveChainToId(
  chain: RelationshipStep[],
  userGender: UserGender
): string | null {
  if (chain.length === 0) return null;

  const fullKey = chain.join('.');

  // Fast path: direct lookup of full chain
  const directMatch = lookupResolutionMap(fullKey, userGender);
  if (directMatch) return directMatch;

  // Find longest prefix match
  let bestPrefixLen = 0;
  let bestKinshipId: string | null = null;

  for (let len = chain.length - 1; len >= 1; len--) {
    const prefixKey = chain.slice(0, len).join('.');
    const match = lookupResolutionMap(prefixKey, userGender);
    if (match) {
      bestPrefixLen = len;
      bestKinshipId = match;
      break;
    }
  }

  if (!bestKinshipId) return null;

  // Now use continuation map to consume remaining steps
  let currentId = bestKinshipId;
  let pos = bestPrefixLen;
  let iterations = 0;

  while (pos < chain.length && iterations < MAX_DEPTH) {
    iterations++;
    const nextStep = chain[pos];
    const continuations = CONTINUATION_MAP[currentId];

    if (!continuations) return null;

    const nextId = continuations[nextStep];
    if (!nextId) return null;

    currentId = nextId;
    pos++;
  }

  if (pos < chain.length) return null; // Chain not fully consumed

  return currentId;
}

/**
 * Resolves a relationship chain to kinship terms across all dialects.
 */
export function resolve(
  chain: RelationshipStep[],
  userGender: UserGender
): ResolutionResult | null {
  if (chain.length === 0) return null;

  const normalized = normalizeChain(chain);
  if (normalized.length === 0) return null;

  const kinshipId = resolveChainToId(normalized, userGender);
  if (!kinshipId) return null;

  const label = KINSHIP_LABELS[kinshipId] ?? kinshipId;
  const terms: ResolutionResult['terms'] = {};

  for (const dialectId of Object.keys(ALL_DIALECT_TERMS) as DialectId[]) {
    const dialectTerms = ALL_DIALECT_TERMS[dialectId];
    if (dialectTerms[kinshipId]) {
      terms[dialectId] = dialectTerms[kinshipId];
    }
  }

  return { kinshipId, label, terms };
}

/**
 * Resolves the reverse relationship: what does the person call the user?
 */
export function resolveReverse(
  chain: RelationshipStep[],
  userGender: UserGender
): ResolutionResult | null {
  if (chain.length === 0) return null;

  const normalized = normalizeChain(chain);
  if (normalized.length === 0) return null;

  const kinshipId = resolveChainToId(normalized, userGender);
  if (!kinshipId) return null;

  const reverseId = getReverseTermId(kinshipId, userGender);
  if (!reverseId) return null;

  const label = KINSHIP_LABELS[reverseId] ?? reverseId;
  const terms: ResolutionResult['terms'] = {};

  for (const dialectId of Object.keys(ALL_DIALECT_TERMS) as DialectId[]) {
    const dialectTerms = ALL_DIALECT_TERMS[dialectId];
    if (dialectTerms[reverseId]) {
      terms[dialectId] = dialectTerms[reverseId];
    }
  }

  return { kinshipId: reverseId, label, terms };
}

/**
 * Gets just the kinship term ID for a chain (useful for testing).
 */
export function resolveToId(
  chain: RelationshipStep[],
  userGender: UserGender = 'male'
): string | null {
  const result = resolve(chain, userGender);
  return result?.kinshipId ?? null;
}
