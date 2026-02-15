import { RelationshipStep } from '@/lib/types';

/**
 * Inverse pairs that cancel each other out.
 * E.g., "father.son" when user is male = self (though we handle this contextually).
 */
export const INVERSE_PAIRS: [RelationshipStep, RelationshipStep][] = [
  ['husband', 'wife'],
  ['wife', 'husband'],
];

/**
 * Reduction rules that simplify a chain.
 * These are applied iteratively until no more reductions are possible.
 *
 * Each rule: [pattern to match (end of chain), replacement]
 */
export interface ReductionRule {
  pattern: RelationshipStep[];
  replacement: RelationshipStep[];
  genderCondition?: 'male' | 'female'; // only apply if user is this gender
}

export const REDUCTION_RULES: ReductionRule[] = [
  // Spouse inverse cancellation
  { pattern: ['husband', 'wife'], replacement: [] },
  { pattern: ['wife', 'husband'], replacement: [] },

  // Parent-child cancellation (simplified — in reality depends on gender/birth order)
  // father.son → self (if male) or brother
  // These are tricky and context-dependent, so we keep them simple:
  // We don't auto-reduce parent→child since it could be "my father's son" = brother (not self)
  // Instead, these are handled by the resolution map directly.
];
