import { UserGender } from '@/lib/types';

/**
 * Reverse relationship map: given a kinship term ID,
 * returns what that person calls the user.
 *
 * The reverse depends on the user's gender:
 * - If user is male, father calls them "son"
 * - If user is female, father calls them "daughter"
 *
 * Format: { [kinshipTermId]: { male: reverseTermId, female: reverseTermId } }
 * When both genders map to the same term, a string shorthand is used.
 */
type ReverseEntry = string | { male: string; female: string };

const REVERSE_MAP_RAW: Record<string, ReverseEntry> = {
  // === Direct family ===
  father: { male: 'son', female: 'daughter' },
  mother: { male: 'son', female: 'daughter' },
  husband: 'wife',
  wife: 'husband',
  older_brother: { male: 'younger_brother', female: 'younger_sister' },
  younger_brother: { male: 'older_brother', female: 'older_sister' },
  older_sister: { male: 'younger_brother', female: 'younger_sister' },
  younger_sister: { male: 'older_brother', female: 'older_sister' },
  son: 'father', // son calls user father/mother — but we use the role, which is parent
  daughter: 'father', // same — child calls parent father (resolved via user gender context)

  // === Paternal grandparents ===
  paternal_grandfather: { male: 'sons_son', female: 'sons_daughter' },
  paternal_grandmother: { male: 'sons_son', female: 'sons_daughter' },

  // === Paternal uncles & aunts ===
  fathers_older_brother: { male: 'brothers_son', female: 'brothers_daughter' },
  fathers_younger_brother: { male: 'brothers_son', female: 'brothers_daughter' },
  fathers_older_brothers_wife: { male: 'brothers_son', female: 'brothers_daughter' },
  fathers_younger_brothers_wife: { male: 'brothers_son', female: 'brothers_daughter' },
  paternal_aunt: { male: 'brothers_son', female: 'brothers_daughter' },
  paternal_aunts_husband: { male: 'brothers_son', female: 'brothers_daughter' },

  // === Paternal cousins ===
  paternal_uncle_older_son: { male: 'paternal_uncle_older_son', female: 'paternal_uncle_older_daughter' },
  paternal_uncle_older_daughter: { male: 'paternal_uncle_older_son', female: 'paternal_uncle_older_daughter' },
  paternal_uncle_younger_son: { male: 'paternal_uncle_younger_son', female: 'paternal_uncle_younger_daughter' },
  paternal_uncle_younger_daughter: { male: 'paternal_uncle_younger_son', female: 'paternal_uncle_younger_daughter' },
  paternal_aunts_son: { male: 'paternal_aunts_son', female: 'paternal_aunts_daughter' },
  paternal_aunts_daughter: { male: 'paternal_aunts_son', female: 'paternal_aunts_daughter' },

  // === Maternal grandparents ===
  maternal_grandfather: { male: 'daughters_son', female: 'daughters_daughter' },
  maternal_grandmother: { male: 'daughters_son', female: 'daughters_daughter' },

  // === Maternal uncles & aunts ===
  maternal_uncle: { male: 'sisters_son', female: 'sisters_daughter' },
  maternal_uncles_wife: { male: 'sisters_son', female: 'sisters_daughter' },
  maternal_aunt: { male: 'sisters_son', female: 'sisters_daughter' },
  maternal_aunts_husband: { male: 'sisters_son', female: 'sisters_daughter' },

  // === Maternal cousins ===
  maternal_uncles_son: { male: 'maternal_uncles_son', female: 'maternal_uncles_daughter' },
  maternal_uncles_daughter: { male: 'maternal_uncles_son', female: 'maternal_uncles_daughter' },
  maternal_aunts_son: { male: 'maternal_aunts_son', female: 'maternal_aunts_daughter' },
  maternal_aunts_daughter: { male: 'maternal_aunts_son', female: 'maternal_aunts_daughter' },

  // === Siblings' spouses ===
  older_brothers_wife: { male: 'husbands_younger_brother', female: 'husbands_younger_sister' },
  younger_brothers_wife: { male: 'husbands_older_brother', female: 'husbands_older_sister' },
  older_sisters_husband: { male: 'wifes_brother', female: 'wifes_younger_sister' },
  younger_sisters_husband: { male: 'wifes_brother', female: 'wifes_older_sister' },

  // === Siblings' children ===
  brothers_son: { male: 'fathers_older_brother', female: 'paternal_aunt' },
  brothers_daughter: { male: 'fathers_older_brother', female: 'paternal_aunt' },
  sisters_son: { male: 'maternal_uncle', female: 'maternal_aunt' },
  sisters_daughter: { male: 'maternal_uncle', female: 'maternal_aunt' },

  // === Children's spouses ===
  sons_wife: { male: 'husbands_father', female: 'husbands_mother' },
  daughters_husband: { male: 'wifes_father', female: 'wifes_mother' },

  // === Grandchildren ===
  sons_son: 'paternal_grandfather',
  sons_daughter: 'paternal_grandfather',
  daughters_son: 'maternal_grandfather',
  daughters_daughter: 'maternal_grandfather',

  // === Husband's family ===
  husbands_father: 'sons_wife',
  husbands_mother: 'sons_wife',
  husbands_older_brother: { male: 'younger_brothers_wife', female: 'younger_brothers_wife' },
  husbands_younger_brother: { male: 'older_brothers_wife', female: 'older_brothers_wife' },
  husbands_older_sister: 'younger_brothers_wife',
  husbands_younger_sister: 'younger_brothers_wife',
  husbands_older_brothers_wife: 'husbands_younger_brothers_wife',
  husbands_younger_brothers_wife: 'husbands_older_brothers_wife',
  husbands_sisters_husband: 'husbands_older_brothers_wife',

  // === Wife's family ===
  wifes_father: 'daughters_husband',
  wifes_mother: 'daughters_husband',
  wifes_brother: 'wifes_sisters_husband',
  wifes_older_sister: 'wifes_sisters_husband',
  wifes_younger_sister: 'wifes_sisters_husband',
  wifes_brothers_wife: 'wifes_sisters_husband',
  wifes_sisters_husband: 'wifes_brother',

  // === Great-grandparents ===
  paternal_great_grandfather: { male: 'great_grandson_p', female: 'great_granddaughter_p' },
  paternal_great_grandmother: { male: 'great_grandson_p', female: 'great_granddaughter_p' },
  maternal_great_grandfather: { male: 'great_grandson_m', female: 'great_granddaughter_m' },
  maternal_great_grandmother: { male: 'great_grandson_m', female: 'great_granddaughter_m' },
  paternal_great_grandfather_m: { male: 'great_grandson_p', female: 'great_granddaughter_p' },
  paternal_great_grandmother_m: { male: 'great_grandson_p', female: 'great_granddaughter_p' },

  // === Great-grandchildren ===
  great_grandson_p: 'paternal_great_grandfather',
  great_granddaughter_p: 'paternal_great_grandfather',
  great_grandson_m: 'maternal_great_grandfather',
  great_granddaughter_m: 'maternal_great_grandfather',

  // === In-law parents ===
  sons_wifes_father: 'sons_wifes_father', // 亲家 — symmetric
  sons_wifes_mother: 'sons_wifes_mother',
  daughters_husbands_father: 'daughters_husbands_father',
  daughters_husbands_mother: 'daughters_husbands_mother',

  // === Tang cousins' spouses ===
  tang_older_brothers_wife: { male: 'paternal_uncle_older_son', female: 'paternal_uncle_older_daughter' },
  tang_younger_brothers_wife: { male: 'paternal_uncle_younger_son', female: 'paternal_uncle_younger_daughter' },
  tang_older_sisters_husband: { male: 'paternal_uncle_older_son', female: 'paternal_uncle_older_daughter' },
  tang_younger_sisters_husband: { male: 'paternal_uncle_younger_son', female: 'paternal_uncle_younger_daughter' },

  // === Tang cousins' children ===
  tang_nephew: { male: 'paternal_uncle_older_son', female: 'paternal_uncle_older_daughter' },
  tang_niece: { male: 'paternal_uncle_older_son', female: 'paternal_uncle_older_daughter' },
  tang_nephews_wife: { male: 'paternal_uncle_older_son', female: 'paternal_uncle_older_daughter' },
  tang_nieces_husband: { male: 'paternal_uncle_older_son', female: 'paternal_uncle_older_daughter' },

  // === Biao cousins' spouses ===
  biao_brothers_wife: { male: 'paternal_aunts_son', female: 'paternal_aunts_daughter' },
  biao_sisters_husband: { male: 'paternal_aunts_son', female: 'paternal_aunts_daughter' },

  // === Biao cousins' children ===
  biao_nephew: { male: 'paternal_aunts_son', female: 'paternal_aunts_daughter' },
  biao_niece: { male: 'paternal_aunts_son', female: 'paternal_aunts_daughter' },
  biao_nephews_wife: { male: 'paternal_aunts_son', female: 'paternal_aunts_daughter' },
  biao_nieces_husband: { male: 'paternal_aunts_son', female: 'paternal_aunts_daughter' },

  // === Nephews/nieces' spouses ===
  nephews_wife: { male: 'fathers_older_brother', female: 'paternal_aunt' },
  nieces_husband: { male: 'fathers_older_brother', female: 'paternal_aunt' },
  sisters_sons_wife: { male: 'maternal_uncle', female: 'maternal_aunt' },
  sisters_daughters_husband: { male: 'maternal_uncle', female: 'maternal_aunt' },

  // === Grand-nephews/nieces ===
  grandnephew: { male: 'paternal_grandfather', female: 'paternal_grandmother' },
  grandniece: { male: 'paternal_grandfather', female: 'paternal_grandmother' },
  sisters_grandchild_son: { male: 'maternal_grandfather', female: 'maternal_grandmother' },
  sisters_grandchild_daughter: { male: 'maternal_grandfather', female: 'maternal_grandmother' },
  grandnephews_wife: { male: 'paternal_grandfather', female: 'paternal_grandmother' },

  // === Grandchildren's spouses ===
  grandsons_wife: 'paternal_grandfather',
  granddaughters_husband: 'paternal_grandfather',

  // === Grandparents' siblings ===
  grand_paternal_uncle_older: { male: 'sons_son', female: 'sons_daughter' },
  grand_paternal_uncle_younger: { male: 'sons_son', female: 'sons_daughter' },
  grand_paternal_aunt: { male: 'sons_son', female: 'sons_daughter' },
  grand_paternal_uncles_wife: { male: 'sons_son', female: 'sons_daughter' },
  grand_paternal_aunts_husband: { male: 'sons_son', female: 'sons_daughter' },
  grand_maternal_uncle_p: { male: 'daughters_son', female: 'daughters_daughter' },
  grand_maternal_aunt_p: { male: 'daughters_son', female: 'daughters_daughter' },
  grand_paternal_uncle_m: { male: 'sons_son', female: 'sons_daughter' },
  grand_paternal_aunt_m: { male: 'sons_son', female: 'sons_daughter' },
  grand_maternal_uncle_m: { male: 'daughters_son', female: 'daughters_daughter' },
  grand_maternal_aunt_m: { male: 'daughters_son', female: 'daughters_daughter' },

  // === Husband's extended family ===
  husbands_nephew: 'husbands_older_brothers_wife',
  husbands_niece: 'husbands_older_brothers_wife',
  husbands_grandfather: 'grandsons_wife',
  husbands_grandmother: 'grandsons_wife',
  husbands_paternal_uncle_older: 'sons_wife',
  husbands_paternal_uncle_younger: 'sons_wife',
  husbands_paternal_aunt: 'sons_wife',
  husbands_maternal_uncle: 'sons_wife',
  husbands_maternal_aunt: 'sons_wife',

  // === Wife's extended family ===
  wifes_nephew: 'wifes_sisters_husband',
  wifes_niece: 'wifes_sisters_husband',
  wifes_grandfather: 'granddaughters_husband',
  wifes_grandmother: 'granddaughters_husband',
  wifes_paternal_uncle_older: 'daughters_husband',
  wifes_paternal_uncle_younger: 'daughters_husband',
  wifes_paternal_aunt: 'daughters_husband',
  wifes_maternal_uncle: 'daughters_husband',
  wifes_maternal_aunt: 'daughters_husband',

  // === Grand-uncles/aunts' children ===
  grand_uncles_son: { male: 'brothers_son', female: 'brothers_daughter' },
  grand_uncles_daughter: { male: 'brothers_son', female: 'brothers_daughter' },
  grand_aunts_son: { male: 'sisters_son', female: 'sisters_daughter' },
  grand_aunts_daughter: { male: 'sisters_son', female: 'sisters_daughter' },
  grand_uncles_son_cross: { male: 'sisters_son', female: 'sisters_daughter' },
  grand_uncles_daughter_cross: { male: 'sisters_son', female: 'sisters_daughter' },
  grand_aunts_son_cross: { male: 'sisters_son', female: 'sisters_daughter' },
  grand_aunts_daughter_cross: { male: 'sisters_son', female: 'sisters_daughter' },
  grand_uncles_sons_wife: { male: 'brothers_son', female: 'brothers_daughter' },
  grand_uncles_daughters_husband: { male: 'brothers_son', female: 'brothers_daughter' },
  grand_aunts_sons_wife: { male: 'sisters_son', female: 'sisters_daughter' },
  grand_aunts_daughters_husband: { male: 'sisters_son', female: 'sisters_daughter' },

  // === Second cousins ===
  cong_tang_brother: { male: 'cong_tang_brother', female: 'cong_tang_sister' },
  cong_tang_sister: { male: 'cong_tang_brother', female: 'cong_tang_sister' },
  cong_tang_brothers_wife: { male: 'cong_tang_brother', female: 'cong_tang_sister' },
  cong_tang_sisters_husband: { male: 'cong_tang_brother', female: 'cong_tang_sister' },
  cong_tang_nephew: { male: 'grand_uncles_son', female: 'grand_uncles_daughter' },
  cong_tang_niece: { male: 'grand_uncles_son', female: 'grand_uncles_daughter' },
  cong_biao_brother: { male: 'cong_biao_brother', female: 'cong_biao_sister' },
  cong_biao_sister: { male: 'cong_biao_brother', female: 'cong_biao_sister' },
  cong_biao_brothers_wife: { male: 'cong_biao_brother', female: 'cong_biao_sister' },
  cong_biao_sisters_husband: { male: 'cong_biao_brother', female: 'cong_biao_sister' },
  cong_biao_nephew: { male: 'grand_aunts_son', female: 'grand_aunts_daughter' },
  cong_biao_niece: { male: 'grand_aunts_son', female: 'grand_aunts_daughter' },

  // === Tang/biao grand-nephews/nieces ===
  tang_grandnephew: { male: 'paternal_grandfather', female: 'paternal_grandmother' },
  tang_grandniece: { male: 'paternal_grandfather', female: 'paternal_grandmother' },
  biao_grandnephew: { male: 'maternal_grandfather', female: 'maternal_grandmother' },
  biao_grandniece: { male: 'maternal_grandfather', female: 'maternal_grandmother' },
  grandnieces_husband: { male: 'paternal_grandfather', female: 'paternal_grandmother' },

  // === Great-grandchildren's spouses ===
  great_grandsons_wife: 'paternal_great_grandfather',
  great_granddaughters_husband: 'paternal_great_grandfather',

  // === Great-great-grandparents ===
  gao_grandfather_p: { male: 'xuan_grandson', female: 'xuan_granddaughter' },
  gao_grandmother_p: { male: 'xuan_grandson', female: 'xuan_granddaughter' },
  gao_grandfather_m: { male: 'xuan_grandson', female: 'xuan_granddaughter' },
  gao_grandmother_m: { male: 'xuan_grandson', female: 'xuan_granddaughter' },

  // === Great-great-grandchildren ===
  xuan_grandson: 'gao_grandfather_p',
  xuan_granddaughter: 'gao_grandfather_p',

  // === Great-grand-uncles/aunts ===
  great_grand_uncle: { male: 'great_grandson_p', female: 'great_granddaughter_p' },
  great_grand_uncles_wife: { male: 'great_grandson_p', female: 'great_granddaughter_p' },
  great_grand_aunt: { male: 'great_grandson_p', female: 'great_granddaughter_p' },
  great_grand_aunts_husband: { male: 'great_grandson_p', female: 'great_granddaughter_p' },

  // === Spouse's extended in-law spouses ===
  husbands_paternal_uncles_wife: 'sons_wife',
  husbands_paternal_aunts_husband: 'sons_wife',
  husbands_maternal_uncles_wife: 'sons_wife',
  husbands_maternal_aunts_husband: 'sons_wife',
  wifes_paternal_uncles_wife: 'daughters_husband',
  wifes_paternal_aunts_husband: 'daughters_husband',
  wifes_maternal_uncles_wife: 'daughters_husband',
  wifes_maternal_aunts_husband: 'daughters_husband',

  // === Grand-uncles/aunts' spouses (other lines) ===
  grand_maternal_uncles_wife_p: { male: 'daughters_son', female: 'daughters_daughter' },
  grand_maternal_aunts_husband_p: { male: 'daughters_son', female: 'daughters_daughter' },
  grand_paternal_uncles_wife_m: { male: 'sons_son', female: 'sons_daughter' },
  grand_paternal_aunts_husband_m: { male: 'sons_son', female: 'sons_daughter' },
  grand_maternal_uncles_wife_m: { male: 'daughters_son', female: 'daughters_daughter' },
  grand_maternal_aunts_husband_m: { male: 'daughters_son', female: 'daughters_daughter' },
};

/**
 * Look up the reverse kinship term: what does this person call the user?
 */
export function getReverseTermId(
  kinshipTermId: string,
  userGender: UserGender
): string | null {
  const entry = REVERSE_MAP_RAW[kinshipTermId];
  if (!entry) return null;

  if (typeof entry === 'string') return entry;
  return entry[userGender];
}
