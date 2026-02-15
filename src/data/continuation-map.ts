import { RelationshipStep } from '@/lib/types';

/**
 * Continuation map: given a resolved kinship term ID and a next relationship step,
 * what new kinship term ID does that produce?
 *
 * This enables arbitrary-depth chaining like:
 *   father → older_brother → son → wife
 *   = "father.older_brother.son" resolves to "paternal_uncle_older_son"
 *   then continuation: paternal_uncle_older_son + wife → "tang_older_brothers_wife"
 *
 * Both husband and wife options are available for all person entries to support
 * same-sex couples. They map to the same spouse term.
 */
export const CONTINUATION_MAP: Partial<
  Record<string, Partial<Record<RelationshipStep, string>>>
> = {
  // ===================================================================
  // DIRECT FAMILY — parents, siblings (enable upward/lateral navigation)
  // ===================================================================
  father: {
    father: 'paternal_grandfather',
    mother: 'paternal_grandmother',
    older_brother: 'fathers_older_brother',
    younger_brother: 'fathers_younger_brother',
    older_sister: 'paternal_aunt',
    younger_sister: 'paternal_aunt',
    wife: 'mother',
    husband: 'mother', // same-sex: father's spouse = mother
  },
  mother: {
    father: 'maternal_grandfather',
    mother: 'maternal_grandmother',
    older_brother: 'maternal_uncle',
    younger_brother: 'maternal_uncle',
    older_sister: 'maternal_aunt',
    younger_sister: 'maternal_aunt',
    husband: 'father',
    wife: 'father', // same-sex: mother's spouse = father
  },

  // ===================================================================
  // PATERNAL UNCLES & AUNTS — their families
  // ===================================================================
  fathers_older_brother: {
    wife: 'fathers_older_brothers_wife',
    husband: 'fathers_older_brothers_wife',
    son: 'paternal_uncle_older_son',
    daughter: 'paternal_uncle_older_daughter',
    father: 'paternal_grandfather',
    mother: 'paternal_grandmother',
  },
  fathers_younger_brother: {
    wife: 'fathers_younger_brothers_wife',
    husband: 'fathers_younger_brothers_wife',
    son: 'paternal_uncle_younger_son',
    daughter: 'paternal_uncle_younger_daughter',
    father: 'paternal_grandfather',
    mother: 'paternal_grandmother',
  },
  paternal_aunt: {
    husband: 'paternal_aunts_husband',
    wife: 'paternal_aunts_husband',
    son: 'paternal_aunts_son',
    daughter: 'paternal_aunts_daughter',
    father: 'paternal_grandfather',
    mother: 'paternal_grandmother',
  },
  // Uncles/aunts' spouses — their parents (navigating to grandparents-in-law)
  fathers_older_brothers_wife: {
    father: 'fathers_older_brothers_wifes_father',
    mother: 'fathers_older_brothers_wifes_mother',
  },
  fathers_younger_brothers_wife: {
    father: 'fathers_younger_brothers_wifes_father',
    mother: 'fathers_younger_brothers_wifes_mother',
  },
  paternal_aunts_husband: {
    father: 'paternal_aunts_husbands_father',
    mother: 'paternal_aunts_husbands_mother',
  },

  // ===================================================================
  // MATERNAL UNCLES & AUNTS — their families
  // ===================================================================
  maternal_uncle: {
    wife: 'maternal_uncles_wife',
    husband: 'maternal_uncles_wife',
    son: 'maternal_uncles_son',
    daughter: 'maternal_uncles_daughter',
    father: 'maternal_grandfather',
    mother: 'maternal_grandmother',
  },
  maternal_aunt: {
    husband: 'maternal_aunts_husband',
    wife: 'maternal_aunts_husband',
    son: 'maternal_aunts_son',
    daughter: 'maternal_aunts_daughter',
    father: 'maternal_grandfather',
    mother: 'maternal_grandmother',
  },

  // ===================================================================
  // PATERNAL COUSINS (堂) — spouses and children
  // ===================================================================
  paternal_uncle_older_son: {
    wife: 'tang_older_brothers_wife',
    husband: 'tang_older_brothers_wife',
    son: 'tang_nephew',
    daughter: 'tang_niece',
    father: 'fathers_older_brother',
    mother: 'fathers_older_brothers_wife',
    older_brother: 'paternal_uncle_older_son',
    younger_brother: 'paternal_uncle_older_son',
    older_sister: 'paternal_uncle_older_daughter',
    younger_sister: 'paternal_uncle_older_daughter',
  },
  paternal_uncle_younger_son: {
    wife: 'tang_younger_brothers_wife',
    husband: 'tang_younger_brothers_wife',
    son: 'tang_nephew',
    daughter: 'tang_niece',
    father: 'fathers_younger_brother',
    mother: 'fathers_younger_brothers_wife',
    older_brother: 'paternal_uncle_younger_son',
    younger_brother: 'paternal_uncle_younger_son',
    older_sister: 'paternal_uncle_younger_daughter',
    younger_sister: 'paternal_uncle_younger_daughter',
  },
  paternal_uncle_older_daughter: {
    husband: 'tang_older_sisters_husband',
    wife: 'tang_older_sisters_husband',
    son: 'tang_nephew',
    daughter: 'tang_niece',
    father: 'fathers_older_brother',
    mother: 'fathers_older_brothers_wife',
    older_brother: 'paternal_uncle_older_son',
    younger_brother: 'paternal_uncle_older_son',
    older_sister: 'paternal_uncle_older_daughter',
    younger_sister: 'paternal_uncle_older_daughter',
  },
  paternal_uncle_younger_daughter: {
    husband: 'tang_younger_sisters_husband',
    wife: 'tang_younger_sisters_husband',
    son: 'tang_nephew',
    daughter: 'tang_niece',
    father: 'fathers_younger_brother',
    mother: 'fathers_younger_brothers_wife',
    older_brother: 'paternal_uncle_younger_son',
    younger_brother: 'paternal_uncle_younger_son',
    older_sister: 'paternal_uncle_younger_daughter',
    younger_sister: 'paternal_uncle_younger_daughter',
  },

  // ===================================================================
  // CROSS COUSINS (表) from paternal aunt
  // ===================================================================
  paternal_aunts_son: {
    wife: 'biao_brothers_wife',
    husband: 'biao_brothers_wife',
    son: 'biao_nephew',
    daughter: 'biao_niece',
    father: 'paternal_aunts_husband',
    mother: 'paternal_aunt',
    older_brother: 'paternal_aunts_son',
    younger_brother: 'paternal_aunts_son',
    older_sister: 'paternal_aunts_daughter',
    younger_sister: 'paternal_aunts_daughter',
  },
  paternal_aunts_daughter: {
    husband: 'biao_sisters_husband',
    wife: 'biao_sisters_husband',
    son: 'biao_nephew',
    daughter: 'biao_niece',
    father: 'paternal_aunts_husband',
    mother: 'paternal_aunt',
    older_brother: 'paternal_aunts_son',
    younger_brother: 'paternal_aunts_son',
    older_sister: 'paternal_aunts_daughter',
    younger_sister: 'paternal_aunts_daughter',
  },

  // ===================================================================
  // CROSS COUSINS (表) from maternal uncle
  // ===================================================================
  maternal_uncles_son: {
    wife: 'biao_brothers_wife',
    husband: 'biao_brothers_wife',
    son: 'biao_nephew',
    daughter: 'biao_niece',
    father: 'maternal_uncle',
    mother: 'maternal_uncles_wife',
    older_brother: 'maternal_uncles_son',
    younger_brother: 'maternal_uncles_son',
    older_sister: 'maternal_uncles_daughter',
    younger_sister: 'maternal_uncles_daughter',
  },
  maternal_uncles_daughter: {
    husband: 'biao_sisters_husband',
    wife: 'biao_sisters_husband',
    son: 'biao_nephew',
    daughter: 'biao_niece',
    father: 'maternal_uncle',
    mother: 'maternal_uncles_wife',
    older_brother: 'maternal_uncles_son',
    younger_brother: 'maternal_uncles_son',
    older_sister: 'maternal_uncles_daughter',
    younger_sister: 'maternal_uncles_daughter',
  },

  // ===================================================================
  // CROSS COUSINS (表) from maternal aunt
  // ===================================================================
  maternal_aunts_son: {
    wife: 'biao_brothers_wife',
    husband: 'biao_brothers_wife',
    son: 'biao_nephew',
    daughter: 'biao_niece',
    father: 'maternal_aunts_husband',
    mother: 'maternal_aunt',
    older_brother: 'maternal_aunts_son',
    younger_brother: 'maternal_aunts_son',
    older_sister: 'maternal_aunts_daughter',
    younger_sister: 'maternal_aunts_daughter',
  },
  maternal_aunts_daughter: {
    husband: 'biao_sisters_husband',
    wife: 'biao_sisters_husband',
    son: 'biao_nephew',
    daughter: 'biao_niece',
    father: 'maternal_aunts_husband',
    mother: 'maternal_aunt',
    older_brother: 'maternal_aunts_son',
    younger_brother: 'maternal_aunts_son',
    older_sister: 'maternal_aunts_daughter',
    younger_sister: 'maternal_aunts_daughter',
  },

  // ===================================================================
  // SIBLINGS — their families
  // ===================================================================
  older_brother: {
    wife: 'older_brothers_wife',
    husband: 'older_brothers_wife',
    son: 'brothers_son',
    daughter: 'brothers_daughter',
    father: 'father',
    mother: 'mother',
  },
  younger_brother: {
    wife: 'younger_brothers_wife',
    husband: 'younger_brothers_wife',
    son: 'brothers_son',
    daughter: 'brothers_daughter',
    father: 'father',
    mother: 'mother',
  },
  older_sister: {
    husband: 'older_sisters_husband',
    wife: 'older_sisters_husband',
    son: 'sisters_son',
    daughter: 'sisters_daughter',
    father: 'father',
    mother: 'mother',
  },
  younger_sister: {
    husband: 'younger_sisters_husband',
    wife: 'younger_sisters_husband',
    son: 'sisters_son',
    daughter: 'sisters_daughter',
    father: 'father',
    mother: 'mother',
  },

  // Siblings' spouses — their families
  older_brothers_wife: {
    father: 'older_brothers_wifes_father',
    mother: 'older_brothers_wifes_mother',
    older_brother: 'older_brothers_wifes_brother',
    younger_brother: 'older_brothers_wifes_brother',
    older_sister: 'older_brothers_wifes_sister',
    younger_sister: 'older_brothers_wifes_sister',
  },
  younger_brothers_wife: {
    father: 'younger_brothers_wifes_father',
    mother: 'younger_brothers_wifes_mother',
    older_brother: 'younger_brothers_wifes_brother',
    younger_brother: 'younger_brothers_wifes_brother',
    older_sister: 'younger_brothers_wifes_sister',
    younger_sister: 'younger_brothers_wifes_sister',
  },
  older_sisters_husband: {
    father: 'older_sisters_husbands_father',
    mother: 'older_sisters_husbands_mother',
    older_brother: 'older_sisters_husbands_brother',
    younger_brother: 'older_sisters_husbands_brother',
    older_sister: 'older_sisters_husbands_sister',
    younger_sister: 'older_sisters_husbands_sister',
  },
  younger_sisters_husband: {
    father: 'younger_sisters_husbands_father',
    mother: 'younger_sisters_husbands_mother',
    older_brother: 'younger_sisters_husbands_brother',
    younger_brother: 'younger_sisters_husbands_brother',
    older_sister: 'younger_sisters_husbands_sister',
    younger_sister: 'younger_sisters_husbands_sister',
  },

  // ===================================================================
  // NEPHEWS & NIECES — spouses and children
  // ===================================================================
  brothers_son: {
    wife: 'nephews_wife',
    husband: 'nephews_wife',
    son: 'grandnephew',
    daughter: 'grandniece',
    older_brother: 'brothers_son',
    younger_brother: 'brothers_son',
    older_sister: 'brothers_daughter',
    younger_sister: 'brothers_daughter',
  },
  brothers_daughter: {
    husband: 'nieces_husband',
    wife: 'nieces_husband',
    son: 'grandnephew',
    daughter: 'grandniece',
    older_brother: 'brothers_son',
    younger_brother: 'brothers_son',
    older_sister: 'brothers_daughter',
    younger_sister: 'brothers_daughter',
  },
  sisters_son: {
    wife: 'sisters_sons_wife',
    husband: 'sisters_sons_wife',
    son: 'sisters_grandchild_son',
    daughter: 'sisters_grandchild_daughter',
    older_brother: 'sisters_son',
    younger_brother: 'sisters_son',
    older_sister: 'sisters_daughter',
    younger_sister: 'sisters_daughter',
  },
  sisters_daughter: {
    husband: 'sisters_daughters_husband',
    wife: 'sisters_daughters_husband',
    son: 'sisters_grandchild_son',
    daughter: 'sisters_grandchild_daughter',
    older_brother: 'sisters_son',
    younger_brother: 'sisters_son',
    older_sister: 'sisters_daughter',
    younger_sister: 'sisters_daughter',
  },

  // ===================================================================
  // CHILDREN — their families
  // ===================================================================
  son: {
    wife: 'sons_wife',
    husband: 'sons_wife',
    son: 'sons_son',
    daughter: 'sons_daughter',
    older_brother: 'son',
    younger_brother: 'son',
    older_sister: 'daughter',
    younger_sister: 'daughter',
  },
  daughter: {
    husband: 'daughters_husband',
    wife: 'daughters_husband',
    son: 'daughters_son',
    daughter: 'daughters_daughter',
    older_brother: 'son',
    younger_brother: 'son',
    older_sister: 'daughter',
    younger_sister: 'daughter',
  },

  // ===================================================================
  // GRANDCHILDREN — spouses and children
  // ===================================================================
  sons_son: {
    wife: 'grandsons_wife',
    husband: 'grandsons_wife',
    son: 'great_grandson_p',
    daughter: 'great_granddaughter_p',
    older_brother: 'sons_son',
    younger_brother: 'sons_son',
    older_sister: 'sons_daughter',
    younger_sister: 'sons_daughter',
  },
  sons_daughter: {
    husband: 'granddaughters_husband',
    wife: 'granddaughters_husband',
    son: 'great_grandson_p',
    daughter: 'great_granddaughter_p',
    older_brother: 'sons_son',
    younger_brother: 'sons_son',
    older_sister: 'sons_daughter',
    younger_sister: 'sons_daughter',
  },
  daughters_son: {
    wife: 'grandsons_wife',
    husband: 'grandsons_wife',
    son: 'great_grandson_m',
    daughter: 'great_granddaughter_m',
    older_brother: 'daughters_son',
    younger_brother: 'daughters_son',
    older_sister: 'daughters_daughter',
    younger_sister: 'daughters_daughter',
  },
  daughters_daughter: {
    husband: 'granddaughters_husband',
    wife: 'granddaughters_husband',
    son: 'great_grandson_m',
    daughter: 'great_granddaughter_m',
    older_brother: 'daughters_son',
    younger_brother: 'daughters_son',
    older_sister: 'daughters_daughter',
    younger_sister: 'daughters_daughter',
  },

  // ===================================================================
  // GRANDPARENTS — siblings and parents
  // ===================================================================
  paternal_grandfather: {
    older_brother: 'grand_paternal_uncle_older',
    younger_brother: 'grand_paternal_uncle_younger',
    older_sister: 'grand_paternal_aunt',
    younger_sister: 'grand_paternal_aunt',
    father: 'paternal_great_grandfather',
    mother: 'paternal_great_grandmother',
    wife: 'paternal_grandmother',
    husband: 'paternal_grandmother',
  },
  paternal_grandmother: {
    older_brother: 'grand_maternal_uncle_p',
    younger_brother: 'grand_maternal_uncle_p',
    older_sister: 'grand_maternal_aunt_p',
    younger_sister: 'grand_maternal_aunt_p',
    husband: 'paternal_grandfather',
    wife: 'paternal_grandfather',
  },
  maternal_grandfather: {
    older_brother: 'grand_paternal_uncle_m',
    younger_brother: 'grand_paternal_uncle_m',
    older_sister: 'grand_paternal_aunt_m',
    younger_sister: 'grand_paternal_aunt_m',
    father: 'maternal_great_grandfather',
    mother: 'maternal_great_grandmother',
    wife: 'maternal_grandmother',
    husband: 'maternal_grandmother',
  },
  maternal_grandmother: {
    older_brother: 'grand_maternal_uncle_m',
    younger_brother: 'grand_maternal_uncle_m',
    older_sister: 'grand_maternal_aunt_m',
    younger_sister: 'grand_maternal_aunt_m',
    husband: 'maternal_grandfather',
    wife: 'maternal_grandfather',
  },

  // ===================================================================
  // GRAND-UNCLES/AUNTS — their spouses, children, and siblings
  // ===================================================================
  grand_paternal_uncle_older: {
    wife: 'grand_paternal_uncles_wife',
    husband: 'grand_paternal_uncles_wife',
    son: 'grand_uncles_son',
    daughter: 'grand_uncles_daughter',
    older_brother: 'grand_paternal_uncle_older',
    younger_brother: 'grand_paternal_uncle_younger',
    older_sister: 'grand_paternal_aunt',
    younger_sister: 'grand_paternal_aunt',
  },
  grand_paternal_uncle_younger: {
    wife: 'grand_paternal_uncles_wife',
    husband: 'grand_paternal_uncles_wife',
    son: 'grand_uncles_son',
    daughter: 'grand_uncles_daughter',
    older_brother: 'grand_paternal_uncle_older',
    younger_brother: 'grand_paternal_uncle_younger',
    older_sister: 'grand_paternal_aunt',
    younger_sister: 'grand_paternal_aunt',
  },
  grand_paternal_aunt: {
    husband: 'grand_paternal_aunts_husband',
    wife: 'grand_paternal_aunts_husband',
    son: 'grand_aunts_son',
    daughter: 'grand_aunts_daughter',
    older_brother: 'grand_paternal_uncle_older',
    younger_brother: 'grand_paternal_uncle_younger',
    older_sister: 'grand_paternal_aunt',
    younger_sister: 'grand_paternal_aunt',
  },
  grand_paternal_uncles_wife: {
    son: 'grand_uncles_son',
    daughter: 'grand_uncles_daughter',
  },
  grand_paternal_aunts_husband: {
    son: 'grand_aunts_son',
    daughter: 'grand_aunts_daughter',
  },

  // Grand-uncles/aunts from other lines
  grand_maternal_uncle_p: {
    wife: 'grand_maternal_uncles_wife_p',
    husband: 'grand_maternal_uncles_wife_p',
    son: 'grand_uncles_son_cross',
    daughter: 'grand_uncles_daughter_cross',
  },
  grand_maternal_aunt_p: {
    husband: 'grand_maternal_aunts_husband_p',
    wife: 'grand_maternal_aunts_husband_p',
    son: 'grand_aunts_son_cross',
    daughter: 'grand_aunts_daughter_cross',
  },
  grand_paternal_uncle_m: {
    wife: 'grand_paternal_uncles_wife_m',
    husband: 'grand_paternal_uncles_wife_m',
    son: 'grand_uncles_son_cross',
    daughter: 'grand_uncles_daughter_cross',
  },
  grand_paternal_aunt_m: {
    husband: 'grand_paternal_aunts_husband_m',
    wife: 'grand_paternal_aunts_husband_m',
    son: 'grand_aunts_son_cross',
    daughter: 'grand_aunts_daughter_cross',
  },
  grand_maternal_uncle_m: {
    wife: 'grand_maternal_uncles_wife_m',
    husband: 'grand_maternal_uncles_wife_m',
    son: 'grand_uncles_son_cross',
    daughter: 'grand_uncles_daughter_cross',
  },
  grand_maternal_aunt_m: {
    husband: 'grand_maternal_aunts_husband_m',
    wife: 'grand_maternal_aunts_husband_m',
    son: 'grand_aunts_son_cross',
    daughter: 'grand_aunts_daughter_cross',
  },

  // Grand-uncles/aunts' children → these are your parent's generation (从堂)
  grand_uncles_son: {
    wife: 'grand_uncles_sons_wife',
    husband: 'grand_uncles_sons_wife',
    son: 'cong_tang_brother',
    daughter: 'cong_tang_sister',
  },
  grand_uncles_daughter: {
    husband: 'grand_uncles_daughters_husband',
    wife: 'grand_uncles_daughters_husband',
    son: 'cong_tang_brother',
    daughter: 'cong_tang_sister',
  },
  grand_aunts_son: {
    wife: 'grand_aunts_sons_wife',
    husband: 'grand_aunts_sons_wife',
    son: 'cong_biao_brother',
    daughter: 'cong_biao_sister',
  },
  grand_aunts_daughter: {
    husband: 'grand_aunts_daughters_husband',
    wife: 'grand_aunts_daughters_husband',
    son: 'cong_biao_brother',
    daughter: 'cong_biao_sister',
  },
  grand_uncles_son_cross: {
    wife: 'grand_uncles_sons_wife',
    husband: 'grand_uncles_sons_wife',
    son: 'cong_biao_brother',
    daughter: 'cong_biao_sister',
  },
  grand_uncles_daughter_cross: {
    husband: 'grand_uncles_daughters_husband',
    wife: 'grand_uncles_daughters_husband',
    son: 'cong_biao_brother',
    daughter: 'cong_biao_sister',
  },
  grand_aunts_son_cross: {
    wife: 'grand_aunts_sons_wife',
    husband: 'grand_aunts_sons_wife',
    son: 'cong_biao_brother',
    daughter: 'cong_biao_sister',
  },
  grand_aunts_daughter_cross: {
    husband: 'grand_aunts_daughters_husband',
    wife: 'grand_aunts_daughters_husband',
    son: 'cong_biao_brother',
    daughter: 'cong_biao_sister',
  },

  // Second cousins (从堂/从表) — their families
  cong_tang_brother: {
    wife: 'cong_tang_brothers_wife',
    husband: 'cong_tang_brothers_wife',
    son: 'cong_tang_nephew',
    daughter: 'cong_tang_niece',
  },
  cong_tang_sister: {
    husband: 'cong_tang_sisters_husband',
    wife: 'cong_tang_sisters_husband',
    son: 'cong_tang_nephew',
    daughter: 'cong_tang_niece',
  },
  cong_biao_brother: {
    wife: 'cong_biao_brothers_wife',
    husband: 'cong_biao_brothers_wife',
    son: 'cong_biao_nephew',
    daughter: 'cong_biao_niece',
  },
  cong_biao_sister: {
    husband: 'cong_biao_sisters_husband',
    wife: 'cong_biao_sisters_husband',
    son: 'cong_biao_nephew',
    daughter: 'cong_biao_niece',
  },

  // ===================================================================
  // IN-LAWS — husband's siblings' families
  // ===================================================================
  husbands_older_brother: {
    wife: 'husbands_older_brothers_wife',
    husband: 'husbands_older_brothers_wife',
    son: 'husbands_nephew',
    daughter: 'husbands_niece',
  },
  husbands_younger_brother: {
    wife: 'husbands_younger_brothers_wife',
    husband: 'husbands_younger_brothers_wife',
    son: 'husbands_nephew',
    daughter: 'husbands_niece',
  },
  husbands_older_sister: {
    husband: 'husbands_sisters_husband',
    wife: 'husbands_sisters_husband',
    son: 'husbands_nephew',
    daughter: 'husbands_niece',
  },
  husbands_younger_sister: {
    husband: 'husbands_sisters_husband',
    wife: 'husbands_sisters_husband',
    son: 'husbands_nephew',
    daughter: 'husbands_niece',
  },

  // Wife's siblings' families
  wifes_brother: {
    wife: 'wifes_brothers_wife',
    husband: 'wifes_brothers_wife',
    son: 'wifes_nephew',
    daughter: 'wifes_niece',
  },
  wifes_older_sister: {
    husband: 'wifes_sisters_husband',
    wife: 'wifes_sisters_husband',
    son: 'wifes_nephew',
    daughter: 'wifes_niece',
  },
  wifes_younger_sister: {
    husband: 'wifes_sisters_husband',
    wife: 'wifes_sisters_husband',
    son: 'wifes_nephew',
    daughter: 'wifes_niece',
  },

  // ===================================================================
  // SPOUSE'S PARENTS — their siblings and parents
  // ===================================================================
  husbands_father: {
    older_brother: 'husbands_paternal_uncle_older',
    younger_brother: 'husbands_paternal_uncle_younger',
    older_sister: 'husbands_paternal_aunt',
    younger_sister: 'husbands_paternal_aunt',
    father: 'husbands_grandfather',
    mother: 'husbands_grandmother',
  },
  husbands_mother: {
    older_brother: 'husbands_maternal_uncle',
    younger_brother: 'husbands_maternal_uncle',
    older_sister: 'husbands_maternal_aunt',
    younger_sister: 'husbands_maternal_aunt',
  },
  wifes_father: {
    older_brother: 'wifes_paternal_uncle_older',
    younger_brother: 'wifes_paternal_uncle_younger',
    older_sister: 'wifes_paternal_aunt',
    younger_sister: 'wifes_paternal_aunt',
    father: 'wifes_grandfather',
    mother: 'wifes_grandmother',
  },
  wifes_mother: {
    older_brother: 'wifes_maternal_uncle',
    younger_brother: 'wifes_maternal_uncle',
    older_sister: 'wifes_maternal_aunt',
    younger_sister: 'wifes_maternal_aunt',
  },

  // Spouse's uncles/aunts — their children
  husbands_paternal_uncle_older: {
    son: 'husbands_nephew',
    daughter: 'husbands_niece',
    wife: 'husbands_paternal_uncles_wife',
    husband: 'husbands_paternal_uncles_wife',
  },
  husbands_paternal_uncle_younger: {
    son: 'husbands_nephew',
    daughter: 'husbands_niece',
    wife: 'husbands_paternal_uncles_wife',
    husband: 'husbands_paternal_uncles_wife',
  },
  husbands_paternal_aunt: {
    son: 'husbands_nephew',
    daughter: 'husbands_niece',
    husband: 'husbands_paternal_aunts_husband',
    wife: 'husbands_paternal_aunts_husband',
  },
  husbands_maternal_uncle: {
    son: 'husbands_nephew',
    daughter: 'husbands_niece',
    wife: 'husbands_maternal_uncles_wife',
    husband: 'husbands_maternal_uncles_wife',
  },
  husbands_maternal_aunt: {
    son: 'husbands_nephew',
    daughter: 'husbands_niece',
    husband: 'husbands_maternal_aunts_husband',
    wife: 'husbands_maternal_aunts_husband',
  },
  wifes_paternal_uncle_older: {
    son: 'wifes_nephew',
    daughter: 'wifes_niece',
    wife: 'wifes_paternal_uncles_wife',
    husband: 'wifes_paternal_uncles_wife',
  },
  wifes_paternal_uncle_younger: {
    son: 'wifes_nephew',
    daughter: 'wifes_niece',
    wife: 'wifes_paternal_uncles_wife',
    husband: 'wifes_paternal_uncles_wife',
  },
  wifes_paternal_aunt: {
    son: 'wifes_nephew',
    daughter: 'wifes_niece',
    husband: 'wifes_paternal_aunts_husband',
    wife: 'wifes_paternal_aunts_husband',
  },
  wifes_maternal_uncle: {
    son: 'wifes_nephew',
    daughter: 'wifes_niece',
    wife: 'wifes_maternal_uncles_wife',
    husband: 'wifes_maternal_uncles_wife',
  },
  wifes_maternal_aunt: {
    son: 'wifes_nephew',
    daughter: 'wifes_niece',
    husband: 'wifes_maternal_aunts_husband',
    wife: 'wifes_maternal_aunts_husband',
  },

  // ===================================================================
  // CHILDREN'S SPOUSES — their parents and siblings
  // ===================================================================
  sons_wife: {
    father: 'sons_wifes_father',
    mother: 'sons_wifes_mother',
    older_brother: 'sons_wifes_brother',
    younger_brother: 'sons_wifes_brother',
    older_sister: 'sons_wifes_sister',
    younger_sister: 'sons_wifes_sister',
  },
  daughters_husband: {
    father: 'daughters_husbands_father',
    mother: 'daughters_husbands_mother',
    older_brother: 'daughters_husbands_brother',
    younger_brother: 'daughters_husbands_brother',
    older_sister: 'daughters_husbands_sister',
    younger_sister: 'daughters_husbands_sister',
  },

  // ===================================================================
  // TANG COUSINS' CHILDREN — continue further
  // ===================================================================
  tang_nephew: {
    wife: 'tang_nephews_wife',
    husband: 'tang_nephews_wife',
    son: 'tang_grandnephew',
    daughter: 'tang_grandniece',
  },
  tang_niece: {
    husband: 'tang_nieces_husband',
    wife: 'tang_nieces_husband',
    son: 'tang_grandnephew',
    daughter: 'tang_grandniece',
  },
  biao_nephew: {
    wife: 'biao_nephews_wife',
    husband: 'biao_nephews_wife',
    son: 'biao_grandnephew',
    daughter: 'biao_grandniece',
  },
  biao_niece: {
    husband: 'biao_nieces_husband',
    wife: 'biao_nieces_husband',
    son: 'biao_grandnephew',
    daughter: 'biao_grandniece',
  },

  // ===================================================================
  // NEPHEWS' FAMILIES — continue further
  // ===================================================================
  nephews_wife: {
    son: 'grandnephew',
    daughter: 'grandniece',
  },
  nieces_husband: {
    son: 'grandnephew',
    daughter: 'grandniece',
  },
  grandnephew: {
    wife: 'grandnephews_wife',
    husband: 'grandnephews_wife',
  },
  grandniece: {
    husband: 'grandnieces_husband',
    wife: 'grandnieces_husband',
  },
  sisters_sons_wife: {
    son: 'sisters_grandchild_son',
    daughter: 'sisters_grandchild_daughter',
  },
  sisters_daughters_husband: {
    son: 'sisters_grandchild_son',
    daughter: 'sisters_grandchild_daughter',
  },

  // ===================================================================
  // GRANDCHILDREN'S SPOUSES — continue further
  // ===================================================================
  grandsons_wife: {
    son: 'great_grandson_p',
    daughter: 'great_granddaughter_p',
  },
  granddaughters_husband: {
    son: 'great_grandson_p',
    daughter: 'great_granddaughter_p',
  },

  // ===================================================================
  // GREAT-GRANDCHILDREN — continue further
  // ===================================================================
  great_grandson_p: {
    wife: 'great_grandsons_wife',
    husband: 'great_grandsons_wife',
    son: 'xuan_grandson',
    daughter: 'xuan_granddaughter',
  },
  great_granddaughter_p: {
    husband: 'great_granddaughters_husband',
    wife: 'great_granddaughters_husband',
    son: 'xuan_grandson',
    daughter: 'xuan_granddaughter',
  },
  great_grandson_m: {
    wife: 'great_grandsons_wife',
    husband: 'great_grandsons_wife',
    son: 'xuan_grandson',
    daughter: 'xuan_granddaughter',
  },
  great_granddaughter_m: {
    husband: 'great_granddaughters_husband',
    wife: 'great_granddaughters_husband',
    son: 'xuan_grandson',
    daughter: 'xuan_granddaughter',
  },

  // ===================================================================
  // GREAT-GRANDPARENTS — continue upward
  // ===================================================================
  paternal_great_grandfather: {
    father: 'gao_grandfather_p',
    mother: 'gao_grandmother_p',
    older_brother: 'great_grand_uncle',
    younger_brother: 'great_grand_uncle',
    older_sister: 'great_grand_aunt',
    younger_sister: 'great_grand_aunt',
    wife: 'paternal_great_grandmother',
    husband: 'paternal_great_grandmother',
  },
  paternal_great_grandmother: {
    husband: 'paternal_great_grandfather',
    wife: 'paternal_great_grandfather',
  },
  maternal_great_grandfather: {
    father: 'gao_grandfather_m',
    mother: 'gao_grandmother_m',
    wife: 'maternal_great_grandmother',
    husband: 'maternal_great_grandmother',
  },
  maternal_great_grandmother: {
    husband: 'maternal_great_grandfather',
    wife: 'maternal_great_grandfather',
  },

  // Great-grand-uncles/aunts
  great_grand_uncle: {
    wife: 'great_grand_uncles_wife',
    husband: 'great_grand_uncles_wife',
    son: 'grand_paternal_uncle_older', // their children are your grandparent's generation
    daughter: 'grand_paternal_aunt',
  },
  great_grand_aunt: {
    husband: 'great_grand_aunts_husband',
    wife: 'great_grand_aunts_husband',
    son: 'grand_uncles_son',
    daughter: 'grand_uncles_daughter',
  },
};
