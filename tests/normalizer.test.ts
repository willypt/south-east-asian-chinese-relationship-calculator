import { describe, it, expect } from 'vitest';
import { normalizeChain } from '@/lib/normalizer';

describe('normalizer', () => {
  it('returns chain unchanged when no reductions apply', () => {
    expect(normalizeChain(['father', 'older_brother'])).toEqual(['father', 'older_brother']);
  });

  it('cancels husband→wife pair', () => {
    expect(normalizeChain(['husband', 'wife'])).toEqual([]);
  });

  it('cancels wife→husband pair', () => {
    expect(normalizeChain(['wife', 'husband'])).toEqual([]);
  });

  it('cancels inverse pair in middle of chain', () => {
    expect(normalizeChain(['father', 'wife', 'husband', 'older_brother'])).toEqual([
      'father',
      'older_brother',
    ]);
  });

  it('handles cascading reductions', () => {
    // This tests that after one reduction, we check again
    expect(normalizeChain(['husband', 'wife'])).toEqual([]);
  });

  it('preserves single step chains', () => {
    expect(normalizeChain(['father'])).toEqual(['father']);
  });

  it('preserves empty chains', () => {
    expect(normalizeChain([])).toEqual([]);
  });
});
