import { describe, it, expect } from 'vitest';
import { RESOLUTION_MAP } from '@/data/resolution-map';
import { KINSHIP_LABELS } from '@/data/terms';
import { ALL_DIALECT_TERMS } from '@/data/dialects';
import { DialectId } from '@/lib/types';

const ALL_KINSHIP_IDS = [...new Set(Object.values(RESOLUTION_MAP))];
const DIALECTS: DialectId[] = ['mandarin', 'hokkien', 'cantonese', 'teochew'];

describe('data completeness', () => {
  it('every resolution map value has a label in KINSHIP_LABELS', () => {
    const missing: string[] = [];
    for (const id of ALL_KINSHIP_IDS) {
      if (!KINSHIP_LABELS[id]) {
        missing.push(id);
      }
    }
    expect(missing).toEqual([]);
  });

  for (const dialect of DIALECTS) {
    it(`every kinship ID has a ${dialect} term`, () => {
      const missing: string[] = [];
      for (const id of ALL_KINSHIP_IDS) {
        if (!ALL_DIALECT_TERMS[dialect][id]) {
          missing.push(id);
        }
      }
      expect(missing).toEqual([]);
    });
  }

  it('all dialect terms have non-empty characters and romanization', () => {
    const issues: string[] = [];
    for (const dialect of DIALECTS) {
      for (const [id, term] of Object.entries(ALL_DIALECT_TERMS[dialect])) {
        if (!term.characters || term.characters.trim() === '') {
          issues.push(`${dialect}:${id} missing characters`);
        }
        if (!term.romanization || term.romanization.trim() === '') {
          issues.push(`${dialect}:${id} missing romanization`);
        }
      }
    }
    expect(issues).toEqual([]);
  });

  it('resolution map has at least 80 entries', () => {
    expect(Object.keys(RESOLUTION_MAP).length).toBeGreaterThanOrEqual(80);
  });

  it('there are at least 60 unique kinship term IDs', () => {
    expect(ALL_KINSHIP_IDS.length).toBeGreaterThanOrEqual(60);
  });
});
