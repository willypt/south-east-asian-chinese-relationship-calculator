import { describe, it, expect } from 'vitest';
import { resolve, resolveToId } from '@/lib/resolver';
import { RelationshipStep } from '@/lib/types';

describe('resolver', () => {
  describe('direct relationships', () => {
    it('resolves father', () => {
      expect(resolveToId(['father'])).toBe('father');
    });

    it('resolves mother', () => {
      expect(resolveToId(['mother'])).toBe('mother');
    });

    it('resolves older_brother', () => {
      expect(resolveToId(['older_brother'])).toBe('older_brother');
    });

    it('resolves son', () => {
      expect(resolveToId(['son'])).toBe('son');
    });

    it('resolves daughter', () => {
      expect(resolveToId(['daughter'])).toBe('daughter');
    });
  });

  describe('paternal side', () => {
    it('resolves paternal grandfather', () => {
      expect(resolveToId(['father', 'father'])).toBe('paternal_grandfather');
    });

    it('resolves paternal grandmother', () => {
      expect(resolveToId(['father', 'mother'])).toBe('paternal_grandmother');
    });

    it("resolves father's older brother (伯伯)", () => {
      expect(resolveToId(['father', 'older_brother'])).toBe('fathers_older_brother');
    });

    it("resolves father's younger brother (叔叔)", () => {
      expect(resolveToId(['father', 'younger_brother'])).toBe('fathers_younger_brother');
    });

    it("resolves father's older brother's wife (伯母)", () => {
      expect(resolveToId(['father', 'older_brother', 'wife'])).toBe('fathers_older_brothers_wife');
    });

    it("resolves father's younger brother's wife (婶婶)", () => {
      expect(resolveToId(['father', 'younger_brother', 'wife'])).toBe('fathers_younger_brothers_wife');
    });

    it("resolves paternal aunt (姑姑)", () => {
      expect(resolveToId(['father', 'older_sister'])).toBe('paternal_aunt');
      expect(resolveToId(['father', 'younger_sister'])).toBe('paternal_aunt');
    });

    it("resolves paternal aunt's husband (姑丈)", () => {
      expect(resolveToId(['father', 'older_sister', 'husband'])).toBe('paternal_aunts_husband');
    });

    it('resolves paternal cousins (堂哥/堂弟)', () => {
      expect(resolveToId(['father', 'older_brother', 'son'])).toBe('paternal_uncle_older_son');
      expect(resolveToId(['father', 'younger_brother', 'son'])).toBe('paternal_uncle_younger_son');
    });
  });

  describe('maternal side', () => {
    it('resolves maternal grandfather', () => {
      expect(resolveToId(['mother', 'father'])).toBe('maternal_grandfather');
    });

    it('resolves maternal grandmother', () => {
      expect(resolveToId(['mother', 'mother'])).toBe('maternal_grandmother');
    });

    it("resolves maternal uncle (舅舅)", () => {
      expect(resolveToId(['mother', 'older_brother'])).toBe('maternal_uncle');
      expect(resolveToId(['mother', 'younger_brother'])).toBe('maternal_uncle');
    });

    it("resolves maternal uncle's wife (舅妈)", () => {
      expect(resolveToId(['mother', 'older_brother', 'wife'])).toBe('maternal_uncles_wife');
    });

    it("resolves maternal aunt (阿姨)", () => {
      expect(resolveToId(['mother', 'older_sister'])).toBe('maternal_aunt');
    });

    it("resolves maternal aunt's husband (姨丈)", () => {
      expect(resolveToId(['mother', 'older_sister', 'husband'])).toBe('maternal_aunts_husband');
    });
  });

  describe("siblings' families", () => {
    it("resolves older brother's wife (嫂嫂)", () => {
      expect(resolveToId(['older_brother', 'wife'])).toBe('older_brothers_wife');
    });

    it("resolves younger brother's wife (弟妹)", () => {
      expect(resolveToId(['younger_brother', 'wife'])).toBe('younger_brothers_wife');
    });

    it("resolves brother's son (侄子)", () => {
      expect(resolveToId(['older_brother', 'son'])).toBe('brothers_son');
      expect(resolveToId(['younger_brother', 'son'])).toBe('brothers_son');
    });

    it("resolves sister's daughter (外甥女)", () => {
      expect(resolveToId(['older_sister', 'daughter'])).toBe('sisters_daughter');
    });
  });

  describe('spouse families (gender-dependent)', () => {
    it("resolves husband's father (公公) for female user", () => {
      expect(resolveToId(['husband', 'father'], 'female')).toBe('husbands_father');
    });

    it("resolves wife's father (岳父) for male user", () => {
      expect(resolveToId(['wife', 'father'], 'male')).toBe('wifes_father');
    });

    it("resolves husband's mother (婆婆)", () => {
      expect(resolveToId(['husband', 'mother'], 'female')).toBe('husbands_mother');
    });

    it("resolves wife's mother (岳母)", () => {
      expect(resolveToId(['wife', 'mother'], 'male')).toBe('wifes_mother');
    });
  });

  describe('children and grandchildren', () => {
    it("resolves son's wife (儿媳妇)", () => {
      expect(resolveToId(['son', 'wife'])).toBe('sons_wife');
    });

    it("resolves daughter's husband (女婿)", () => {
      expect(resolveToId(['daughter', 'husband'])).toBe('daughters_husband');
    });

    it("resolves son's son (孙子)", () => {
      expect(resolveToId(['son', 'son'])).toBe('sons_son');
    });

    it("resolves daughter's daughter (外孙女)", () => {
      expect(resolveToId(['daughter', 'daughter'])).toBe('daughters_daughter');
    });
  });

  describe('dialect terms in results', () => {
    it('returns Mandarin terms for father', () => {
      const result = resolve(['father'], 'male');
      expect(result?.terms.mandarin?.characters).toBe('爸爸');
      expect(result?.terms.mandarin?.romanization).toBe('bàba');
    });

    it("returns all 4 dialects for father's older brother", () => {
      const result = resolve(['father', 'older_brother'], 'male');
      expect(result?.terms.mandarin?.characters).toBe('伯伯');
      expect(result?.terms.hokkien?.characters).toBe('阿伯');
      expect(result?.terms.cantonese?.characters).toBe('伯父');
      expect(result?.terms.teochew?.characters).toBe('阿伯');
    });

    it("returns correct romanization for maternal uncle's wife", () => {
      const result = resolve(['mother', 'older_brother', 'wife'], 'male');
      expect(result?.terms.mandarin?.characters).toBe('舅妈');
      expect(result?.terms.hokkien?.romanization).toBe('kū-kīm');
    });
  });

  describe('continuation chains (4+ steps)', () => {
    it("resolves father's older brother's son's wife (堂嫂)", () => {
      expect(resolveToId(['father', 'older_brother', 'son', 'wife'])).toBe('tang_older_brothers_wife');
    });

    it("resolves father's younger brother's daughter's husband (堂妹夫)", () => {
      expect(resolveToId(['father', 'younger_brother', 'daughter', 'husband'])).toBe('tang_younger_sisters_husband');
    });

    it("resolves father's older brother's son's son (堂侄)", () => {
      expect(resolveToId(['father', 'older_brother', 'son', 'son'])).toBe('tang_nephew');
    });

    it("resolves mother's brother's son's wife (表嫂)", () => {
      expect(resolveToId(['mother', 'older_brother', 'son', 'wife'])).toBe('biao_brothers_wife');
    });

    it("resolves mother's sister's daughter's husband (表姐夫)", () => {
      expect(resolveToId(['mother', 'older_sister', 'daughter', 'husband'])).toBe('biao_sisters_husband');
    });

    it("resolves father's sister's son's son (表侄)", () => {
      expect(resolveToId(['father', 'older_sister', 'son', 'son'])).toBe('biao_nephew');
    });

    it("resolves older brother's son's wife (侄媳妇)", () => {
      expect(resolveToId(['older_brother', 'son', 'wife'])).toBe('nephews_wife');
    });

    it("resolves older brother's daughter's husband (侄女婿)", () => {
      expect(resolveToId(['older_brother', 'daughter', 'husband'])).toBe('nieces_husband');
    });

    it("resolves older sister's son's wife (外甥媳妇)", () => {
      expect(resolveToId(['older_sister', 'son', 'wife'])).toBe('sisters_sons_wife');
    });

    it("resolves older brother's son's son (侄孙)", () => {
      expect(resolveToId(['older_brother', 'son', 'son'])).toBe('grandnephew');
    });

    it("resolves son's son's wife (孙媳妇)", () => {
      expect(resolveToId(['son', 'son', 'wife'])).toBe('grandsons_wife');
    });

    it("resolves daughter's daughter's husband (孙女婿)", () => {
      expect(resolveToId(['daughter', 'daughter', 'husband'])).toBe('granddaughters_husband');
    });

    it("resolves grandfather's older brother (伯公)", () => {
      expect(resolveToId(['father', 'father', 'older_brother'])).toBe('grand_paternal_uncle_older');
    });

    it("resolves grandfather's younger brother (叔公)", () => {
      expect(resolveToId(['father', 'father', 'younger_brother'])).toBe('grand_paternal_uncle_younger');
    });

    it("resolves grandfather's sister (姑婆)", () => {
      expect(resolveToId(['father', 'father', 'older_sister'])).toBe('grand_paternal_aunt');
    });

    it("resolves husband's father's older brother (4+ steps)", () => {
      expect(resolveToId(['husband', 'father', 'older_brother'], 'female')).toBe('husbands_paternal_uncle_older');
    });

    it("resolves wife's father's younger brother", () => {
      expect(resolveToId(['wife', 'father', 'younger_brother'], 'male')).toBe('wifes_paternal_uncle_younger');
    });

    it("resolves 5-step chain: father's older brother's son's son's wife (堂侄媳)", () => {
      expect(resolveToId(['father', 'older_brother', 'son', 'son', 'wife'])).toBe('tang_nephews_wife');
    });

    it("resolves son's wife's father (亲家公)", () => {
      expect(resolveToId(['son', 'wife', 'father'])).toBe('sons_wifes_father');
    });

    it("resolves son's wife's brother (亲家舅)", () => {
      expect(resolveToId(['son', 'wife', 'older_brother'])).toBe('sons_wifes_brother');
    });
  });

  describe('continuation with dialect terms', () => {
    it("returns all 4 dialects for 堂嫂 (4-step chain)", () => {
      const result = resolve(['father', 'older_brother', 'son', 'wife'], 'male');
      expect(result).not.toBeNull();
      expect(result?.terms.mandarin?.characters).toBe('堂嫂');
      expect(result?.terms.hokkien?.characters).toBe('堂嫂');
      expect(result?.terms.cantonese?.characters).toBe('堂嫂');
      expect(result?.terms.teochew?.characters).toBe('堂嫂');
    });

    it("returns all 4 dialects for 伯公 (grandfather's brother)", () => {
      const result = resolve(['father', 'father', 'older_brother'], 'male');
      expect(result).not.toBeNull();
      expect(result?.terms.mandarin?.characters).toBe('伯公');
      expect(result?.terms.hokkien?.characters).toBe('伯公');
      expect(result?.terms.cantonese?.characters).toBe('伯公');
      expect(result?.terms.teochew?.characters).toBe('伯公');
    });
  });

  describe('edge cases', () => {
    it('returns null for empty chain', () => {
      expect(resolve([], 'male')).toBeNull();
    });

    it('returns null for invalid chain', () => {
      expect(resolveToId(['father', 'father', 'father', 'father', 'father'])).toBeNull();
    });

    it('returns null for chain that partially resolves but has no continuation', () => {
      // husband → wife cancels out, resulting in empty chain
      expect(resolveToId(['husband', 'wife'], 'female')).toBeNull();
    });
  });
});
