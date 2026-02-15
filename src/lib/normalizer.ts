import { RelationshipStep } from './types';
import { REDUCTION_RULES } from '@/data/reduction-rules';

/**
 * Normalizes a relationship chain by applying reduction rules.
 * E.g., cancels inverse pairs like husband→wife.
 */
export function normalizeChain(chain: RelationshipStep[]): RelationshipStep[] {
  let result = [...chain];
  let changed = true;

  while (changed) {
    changed = false;
    for (const rule of REDUCTION_RULES) {
      const patLen = rule.pattern.length;
      for (let i = 0; i <= result.length - patLen; i++) {
        const slice = result.slice(i, i + patLen);
        if (slice.every((s, j) => s === rule.pattern[j])) {
          result = [
            ...result.slice(0, i),
            ...rule.replacement,
            ...result.slice(i + patLen),
          ];
          changed = true;
          break;
        }
      }
      if (changed) break;
    }
  }

  return result;
}
