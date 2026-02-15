/**
 * Maps dot-separated relationship chains to kinship term IDs.
 * Some entries are gender-dependent (keyed with :male or :female suffix on the chain).
 * The resolver checks gender-specific keys first, then falls back to the generic key.
 */
export const RESOLUTION_MAP: Record<string, string> = {
  // === SELF references (direct relationships) ===
  'father': 'father',
  'mother': 'mother',
  'husband': 'husband',
  'wife': 'wife',
  'older_brother': 'older_brother',
  'younger_brother': 'younger_brother',
  'older_sister': 'older_sister',
  'younger_sister': 'younger_sister',
  'son': 'son',
  'daughter': 'daughter',

  // === PATERNAL SIDE ===
  // Father's parents
  'father.father': 'paternal_grandfather',
  'father.mother': 'paternal_grandmother',

  // Father's brothers
  'father.older_brother': 'fathers_older_brother',
  'father.younger_brother': 'fathers_younger_brother',
  'father.older_brother.wife': 'fathers_older_brothers_wife',
  'father.younger_brother.wife': 'fathers_younger_brothers_wife',

  // Father's sisters
  'father.older_sister': 'paternal_aunt',
  'father.younger_sister': 'paternal_aunt',
  'father.older_sister.husband': 'paternal_aunts_husband',
  'father.younger_sister.husband': 'paternal_aunts_husband',

  // Father's brothers' children (paternal cousins)
  'father.older_brother.son': 'paternal_uncle_older_son',
  'father.older_brother.daughter': 'paternal_uncle_older_daughter',
  'father.younger_brother.son': 'paternal_uncle_younger_son',
  'father.younger_brother.daughter': 'paternal_uncle_younger_daughter',

  // Father's sisters' children
  'father.older_sister.son': 'paternal_aunts_son',
  'father.older_sister.daughter': 'paternal_aunts_daughter',
  'father.younger_sister.son': 'paternal_aunts_son',
  'father.younger_sister.daughter': 'paternal_aunts_daughter',

  // === MATERNAL SIDE ===
  // Mother's parents
  'mother.father': 'maternal_grandfather',
  'mother.mother': 'maternal_grandmother',

  // Mother's brothers
  'mother.older_brother': 'maternal_uncle',
  'mother.younger_brother': 'maternal_uncle',
  'mother.older_brother.wife': 'maternal_uncles_wife',
  'mother.younger_brother.wife': 'maternal_uncles_wife',

  // Mother's sisters
  'mother.older_sister': 'maternal_aunt',
  'mother.younger_sister': 'maternal_aunt',
  'mother.older_sister.husband': 'maternal_aunts_husband',
  'mother.younger_sister.husband': 'maternal_aunts_husband',

  // Mother's brothers' children
  'mother.older_brother.son': 'maternal_uncles_son',
  'mother.older_brother.daughter': 'maternal_uncles_daughter',
  'mother.younger_brother.son': 'maternal_uncles_son',
  'mother.younger_brother.daughter': 'maternal_uncles_daughter',

  // Mother's sisters' children
  'mother.older_sister.son': 'maternal_aunts_son',
  'mother.older_sister.daughter': 'maternal_aunts_daughter',
  'mother.younger_sister.son': 'maternal_aunts_son',
  'mother.younger_sister.daughter': 'maternal_aunts_daughter',

  // === SIBLINGS' SPOUSES ===
  'older_brother.wife': 'older_brothers_wife',
  'younger_brother.wife': 'younger_brothers_wife',
  'older_sister.husband': 'older_sisters_husband',
  'younger_sister.husband': 'younger_sisters_husband',

  // === SIBLINGS' CHILDREN ===
  'older_brother.son': 'brothers_son',
  'older_brother.daughter': 'brothers_daughter',
  'younger_brother.son': 'brothers_son',
  'younger_brother.daughter': 'brothers_daughter',
  'older_sister.son': 'sisters_son',
  'older_sister.daughter': 'sisters_daughter',
  'younger_sister.son': 'sisters_son',
  'younger_sister.daughter': 'sisters_daughter',

  // === CHILDREN'S SPOUSES ===
  'son.wife': 'sons_wife',
  'daughter.husband': 'daughters_husband',

  // === GRANDCHILDREN ===
  'son.son': 'sons_son',
  'son.daughter': 'sons_daughter',
  'daughter.son': 'daughters_son',
  'daughter.daughter': 'daughters_daughter',

  // === SPOUSE'S FAMILY (gender-dependent) ===
  // Husband's family (user is female)
  'husband.father': 'husbands_father',
  'husband.mother': 'husbands_mother',
  'husband.older_brother': 'husbands_older_brother',
  'husband.younger_brother': 'husbands_younger_brother',
  'husband.older_sister': 'husbands_older_sister',
  'husband.younger_sister': 'husbands_younger_sister',
  'husband.older_brother.wife': 'husbands_older_brothers_wife',
  'husband.younger_brother.wife': 'husbands_younger_brothers_wife',
  'husband.older_sister.husband': 'husbands_sisters_husband',
  'husband.younger_sister.husband': 'husbands_sisters_husband',

  // Wife's family (user is male)
  'wife.father': 'wifes_father',
  'wife.mother': 'wifes_mother',
  'wife.older_brother': 'wifes_brother',
  'wife.younger_brother': 'wifes_brother',
  'wife.older_sister': 'wifes_older_sister',
  'wife.younger_sister': 'wifes_younger_sister',
  'wife.older_brother.wife': 'wifes_brothers_wife',
  'wife.younger_brother.wife': 'wifes_brothers_wife',
  'wife.older_sister.husband': 'wifes_sisters_husband',
  'wife.younger_sister.husband': 'wifes_sisters_husband',

  // === GREAT-GRANDPARENTS ===
  'father.father.father': 'paternal_great_grandfather',
  'father.father.mother': 'paternal_great_grandmother',
  'mother.father.father': 'maternal_great_grandfather',
  'mother.father.mother': 'maternal_great_grandmother',
  'mother.mother.father': 'maternal_great_grandfather_m',
  'mother.mother.mother': 'maternal_great_grandmother_m',
  'father.mother.father': 'paternal_great_grandfather_m',
  'father.mother.mother': 'paternal_great_grandmother_m',

  // === GREAT-GRANDCHILDREN ===
  'son.son.son': 'great_grandson_p',
  'son.son.daughter': 'great_granddaughter_p',
  'son.daughter.son': 'great_grandson_p',
  'son.daughter.daughter': 'great_granddaughter_p',
  'daughter.son.son': 'great_grandson_m',
  'daughter.son.daughter': 'great_granddaughter_m',
  'daughter.daughter.son': 'great_grandson_m',
  'daughter.daughter.daughter': 'great_granddaughter_m',

  // === CHILDREN'S SPOUSES' PARENTS ===
  'son.wife.father': 'sons_wifes_father',
  'son.wife.mother': 'sons_wifes_mother',
  'daughter.husband.father': 'daughters_husbands_father',
  'daughter.husband.mother': 'daughters_husbands_mother',
};
