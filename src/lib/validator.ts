import { RelationshipStep, UserGender } from './types';
import { RESOLUTION_MAP } from '@/data/resolution-map';
import { CONTINUATION_MAP } from '@/data/continuation-map';
import { resolveToId } from './resolver';

const ALL_STEPS: RelationshipStep[] = [
  'father', 'mother', 'husband', 'wife',
  'older_brother', 'younger_brother', 'older_sister', 'younger_sister',
  'son', 'daughter',
];

/**
 * Returns the valid next steps for the current chain.
 * A step is valid if:
 * 1. Adding it produces a key (or prefix of a key) in the resolution map, OR
 * 2. The current chain resolves to a kinship ID that has a continuation for this step
 */
export function getValidNextSteps(
  chain: RelationshipStep[],
  userGender: UserGender
): RelationshipStep[] {
  const prefix = chain.length > 0 ? chain.join('.') + '.' : '';

  // Get the current kinship ID if the chain resolves
  const currentKinshipId = chain.length > 0 ? resolveToId(chain, userGender) : null;

  return ALL_STEPS.filter((step) => {
    const candidateKey = prefix + step;

    // Check 1: Direct match in resolution map
    if (RESOLUTION_MAP[candidateKey] || RESOLUTION_MAP[`${candidateKey}:${userGender}`]) {
      return true;
    }

    // Check 2: Prefix of any existing resolution map key
    const candidatePrefix = candidateKey + '.';
    const isPrefix = Object.keys(RESOLUTION_MAP).some(
      (key) => key.startsWith(candidatePrefix)
    );
    if (isPrefix) return true;

    // Check 3: Continuation from current resolved kinship ID
    if (currentKinshipId) {
      const continuations = CONTINUATION_MAP[currentKinshipId];
      if (continuations && continuations[step]) {
        return true;
      }
    }

    // Check 4: Even if the current chain doesn't resolve (intermediate state),
    // check if adding this step would create a chain that resolves via continuation
    if (chain.length > 0 && !currentKinshipId) {
      // Try resolving the full candidate chain
      const candidateChain = [...chain, step] as RelationshipStep[];
      const candidateResult = resolveToId(candidateChain, userGender);
      if (candidateResult) return true;
    }

    return false;
  });
}

/**
 * Filters out steps that don't make logical sense.
 */
export function getContextualNextSteps(
  chain: RelationshipStep[],
  userGender: UserGender
): RelationshipStep[] {
  const validSteps = getValidNextSteps(chain, userGender);

  return validSteps;
}
