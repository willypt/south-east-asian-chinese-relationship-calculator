/**
 * Master list of kinship term IDs with English labels.
 * Each ID corresponds to entries in the dialect files.
 */
export const KINSHIP_LABELS: Record<string, string> = {
  // Direct family
  father: 'Father',
  mother: 'Mother',
  husband: 'Husband',
  wife: 'Wife',
  older_brother: 'Older Brother',
  younger_brother: 'Younger Brother',
  older_sister: 'Older Sister',
  younger_sister: 'Younger Sister',
  son: 'Son',
  daughter: 'Daughter',

  // Paternal grandparents
  paternal_grandfather: "Father's Father (Paternal Grandfather)",
  paternal_grandmother: "Father's Mother (Paternal Grandmother)",

  // Paternal uncles & aunts
  fathers_older_brother: "Father's Older Brother",
  fathers_younger_brother: "Father's Younger Brother",
  fathers_older_brothers_wife: "Father's Older Brother's Wife",
  fathers_younger_brothers_wife: "Father's Younger Brother's Wife",
  paternal_aunt: "Father's Sister (Paternal Aunt)",
  paternal_aunts_husband: "Father's Sister's Husband",

  // Paternal cousins
  paternal_uncle_older_son: "Father's Older Brother's Son",
  paternal_uncle_older_daughter: "Father's Older Brother's Daughter",
  paternal_uncle_younger_son: "Father's Younger Brother's Son",
  paternal_uncle_younger_daughter: "Father's Younger Brother's Daughter",
  paternal_aunts_son: "Father's Sister's Son",
  paternal_aunts_daughter: "Father's Sister's Daughter",

  // Maternal grandparents
  maternal_grandfather: "Mother's Father (Maternal Grandfather)",
  maternal_grandmother: "Mother's Mother (Maternal Grandmother)",

  // Maternal uncles & aunts
  maternal_uncle: "Mother's Brother (Maternal Uncle)",
  maternal_uncles_wife: "Mother's Brother's Wife",
  maternal_aunt: "Mother's Sister (Maternal Aunt)",
  maternal_aunts_husband: "Mother's Sister's Husband",

  // Maternal cousins
  maternal_uncles_son: "Mother's Brother's Son",
  maternal_uncles_daughter: "Mother's Brother's Daughter",
  maternal_aunts_son: "Mother's Sister's Son",
  maternal_aunts_daughter: "Mother's Sister's Daughter",

  // Siblings' spouses
  older_brothers_wife: "Older Brother's Wife",
  younger_brothers_wife: "Younger Brother's Wife",
  older_sisters_husband: "Older Sister's Husband",
  younger_sisters_husband: "Younger Sister's Husband",

  // Siblings' children
  brothers_son: "Brother's Son (Nephew)",
  brothers_daughter: "Brother's Daughter (Niece)",
  sisters_son: "Sister's Son (Nephew)",
  sisters_daughter: "Sister's Daughter (Niece)",

  // Children's spouses
  sons_wife: "Son's Wife (Daughter-in-law)",
  daughters_husband: "Daughter's Husband (Son-in-law)",

  // Grandchildren
  sons_son: "Son's Son (Paternal Grandson)",
  sons_daughter: "Son's Daughter (Paternal Granddaughter)",
  daughters_son: "Daughter's Son (Maternal Grandson)",
  daughters_daughter: "Daughter's Daughter (Maternal Granddaughter)",

  // Husband's family
  husbands_father: "Husband's Father (Father-in-law)",
  husbands_mother: "Husband's Mother (Mother-in-law)",
  husbands_older_brother: "Husband's Older Brother",
  husbands_younger_brother: "Husband's Younger Brother",
  husbands_older_sister: "Husband's Older Sister",
  husbands_younger_sister: "Husband's Younger Sister",
  husbands_older_brothers_wife: "Husband's Older Brother's Wife",
  husbands_younger_brothers_wife: "Husband's Younger Brother's Wife",
  husbands_sisters_husband: "Husband's Sister's Husband",

  // Wife's family
  wifes_father: "Wife's Father (Father-in-law)",
  wifes_mother: "Wife's Mother (Mother-in-law)",
  wifes_brother: "Wife's Brother",
  wifes_older_sister: "Wife's Older Sister",
  wifes_younger_sister: "Wife's Younger Sister",
  wifes_brothers_wife: "Wife's Brother's Wife",
  wifes_sisters_husband: "Wife's Sister's Husband",

  // Great-grandparents
  paternal_great_grandfather: "Father's Father's Father",
  paternal_great_grandmother: "Father's Father's Mother",
  maternal_great_grandfather: "Mother's Father's Father",
  maternal_great_grandmother: "Mother's Father's Mother",
  maternal_great_grandfather_m: "Mother's Mother's Father",
  maternal_great_grandmother_m: "Mother's Mother's Mother",
  paternal_great_grandfather_m: "Father's Mother's Father",
  paternal_great_grandmother_m: "Father's Mother's Mother",

  // Great-grandchildren
  great_grandson_p: "Great-grandson (paternal line)",
  great_granddaughter_p: "Great-granddaughter (paternal line)",
  great_grandson_m: "Great-grandson (maternal line)",
  great_granddaughter_m: "Great-granddaughter (maternal line)",

  // In-law parents
  sons_wifes_father: "Son's Wife's Father",
  sons_wifes_mother: "Son's Wife's Mother",
  daughters_husbands_father: "Daughter's Husband's Father",
  daughters_husbands_mother: "Daughter's Husband's Mother",

  // === CONTINUATION TERMS (reached via deep chains) ===

  // Tang (堂) cousins' spouses
  tang_older_brothers_wife: "Paternal Older Cousin's Wife (堂嫂)",
  tang_younger_brothers_wife: "Paternal Younger Cousin's Wife (堂弟媳)",
  tang_older_sisters_husband: "Paternal Older Cousin's Husband (堂姐夫)",
  tang_younger_sisters_husband: "Paternal Younger Cousin's Husband (堂妹夫)",

  // Tang cousins' children
  tang_nephew: "Paternal Cousin's Son (堂侄)",
  tang_niece: "Paternal Cousin's Daughter (堂侄女)",

  // Tang cousins' grandchildren spouses
  tang_nephews_wife: "Paternal Cousin's Son's Wife (堂侄媳)",
  tang_nieces_husband: "Paternal Cousin's Daughter's Husband (堂侄女婿)",

  // Biao (表) cousins' spouses
  biao_brothers_wife: "Cross-Cousin's Wife (表嫂)",
  biao_sisters_husband: "Cross-Cousin's Husband (表姐夫)",

  // Biao cousins' children
  biao_nephew: "Cross-Cousin's Son (表侄)",
  biao_niece: "Cross-Cousin's Daughter (表侄女)",

  // Biao cousins' grandchildren spouses
  biao_nephews_wife: "Cross-Cousin's Son's Wife (表侄媳)",
  biao_nieces_husband: "Cross-Cousin's Daughter's Husband (表侄女婿)",

  // Nephews/nieces' spouses
  nephews_wife: "Nephew's Wife (侄媳妇)",
  nieces_husband: "Niece's Husband (侄女婿)",
  sisters_sons_wife: "Sister's Son's Wife (外甥媳妇)",
  sisters_daughters_husband: "Sister's Daughter's Husband (外甥女婿)",

  // Grand-nephews/nieces
  grandnephew: "Brother's Grandson (侄孙)",
  grandniece: "Brother's Granddaughter (侄孙女)",
  sisters_grandchild_son: "Sister's Grandson (外甥孙)",
  sisters_grandchild_daughter: "Sister's Granddaughter (外甥孙女)",
  grandnephews_wife: "Grand-Nephew's Wife (侄孙媳妇)",

  // Grandchildren's spouses
  grandsons_wife: "Grandson's Wife (孙媳妇)",
  granddaughters_husband: "Granddaughter's Husband (孙女婿)",

  // Grandparents' siblings
  grand_paternal_uncle_older: "Grandfather's Older Brother (伯公)",
  grand_paternal_uncle_younger: "Grandfather's Younger Brother (叔公)",
  grand_paternal_aunt: "Grandfather's Sister (姑婆)",
  grand_paternal_uncles_wife: "Grandfather's Brother's Wife",
  grand_paternal_aunts_husband: "Grandfather's Sister's Husband",
  grand_maternal_uncle_p: "Paternal Grandmother's Brother",
  grand_maternal_aunt_p: "Paternal Grandmother's Sister",
  grand_paternal_uncle_m: "Maternal Grandfather's Brother",
  grand_paternal_aunt_m: "Maternal Grandfather's Sister",
  grand_maternal_uncle_m: "Maternal Grandmother's Brother",
  grand_maternal_aunt_m: "Maternal Grandmother's Sister",

  // Husband's extended family
  husbands_nephew: "Husband's Nephew",
  husbands_niece: "Husband's Niece",
  husbands_grandfather: "Husband's Grandfather",
  husbands_grandmother: "Husband's Grandmother",
  husbands_paternal_uncle_older: "Husband's Father's Older Brother",
  husbands_paternal_uncle_younger: "Husband's Father's Younger Brother",
  husbands_paternal_aunt: "Husband's Paternal Aunt",
  husbands_maternal_uncle: "Husband's Maternal Uncle",
  husbands_maternal_aunt: "Husband's Maternal Aunt",

  // Wife's extended family
  wifes_nephew: "Wife's Nephew",
  wifes_niece: "Wife's Niece",
  wifes_grandfather: "Wife's Grandfather",
  wifes_grandmother: "Wife's Grandmother",
  wifes_paternal_uncle_older: "Wife's Father's Older Brother",
  wifes_paternal_uncle_younger: "Wife's Father's Younger Brother",
  wifes_paternal_aunt: "Wife's Paternal Aunt",
  wifes_maternal_uncle: "Wife's Maternal Uncle",
  wifes_maternal_aunt: "Wife's Maternal Aunt",

  // Children's in-law siblings
  sons_wifes_brother: "Son's Wife's Brother",
  sons_wifes_sister: "Son's Wife's Sister",
  daughters_husbands_brother: "Daughter's Husband's Brother",
  daughters_husbands_sister: "Daughter's Husband's Sister",

  // === DEEP CHAIN TERMS (reached via extended continuation) ===

  // Grand-uncles/aunts' children (your parents' generation — 从堂/远堂)
  grand_uncles_son: "Grandfather's Brother's Son (从堂叔/伯)",
  grand_uncles_daughter: "Grandfather's Brother's Daughter (从堂姑)",
  grand_aunts_son: "Grandfather's Sister's Son",
  grand_aunts_daughter: "Grandfather's Sister's Daughter",
  grand_uncles_son_cross: "Grandparent's Sibling's Son (cross-line)",
  grand_uncles_daughter_cross: "Grandparent's Sibling's Daughter (cross-line)",
  grand_aunts_son_cross: "Grandparent's Sister's Son (cross-line)",
  grand_aunts_daughter_cross: "Grandparent's Sister's Daughter (cross-line)",
  grand_uncles_sons_wife: "Grandfather's Brother's Son's Wife",
  grand_uncles_daughters_husband: "Grandfather's Brother's Daughter's Husband",
  grand_aunts_sons_wife: "Grandfather's Sister's Son's Wife",
  grand_aunts_daughters_husband: "Grandfather's Sister's Daughter's Husband",

  // Grand-uncles/aunts' spouses (other lines)
  grand_maternal_uncles_wife_p: "Paternal Grandmother's Brother's Wife",
  grand_maternal_aunts_husband_p: "Paternal Grandmother's Sister's Husband",
  grand_paternal_uncles_wife_m: "Maternal Grandfather's Brother's Wife",
  grand_paternal_aunts_husband_m: "Maternal Grandfather's Sister's Husband",
  grand_maternal_uncles_wife_m: "Maternal Grandmother's Brother's Wife",
  grand_maternal_aunts_husband_m: "Maternal Grandmother's Sister's Husband",

  // Second cousins (从堂/从表 — through great-grandparents)
  cong_tang_brother: "Second Paternal Cousin (从堂兄弟)",
  cong_tang_sister: "Second Paternal Cousin, Female (从堂姐妹)",
  cong_tang_brothers_wife: "Second Paternal Cousin's Wife",
  cong_tang_sisters_husband: "Second Paternal Cousin's Husband",
  cong_tang_nephew: "Second Paternal Cousin's Child",
  cong_tang_niece: "Second Paternal Cousin's Daughter",
  cong_biao_brother: "Second Cross-Cousin (从表兄弟)",
  cong_biao_sister: "Second Cross-Cousin, Female (从表姐妹)",
  cong_biao_brothers_wife: "Second Cross-Cousin's Wife",
  cong_biao_sisters_husband: "Second Cross-Cousin's Husband",
  cong_biao_nephew: "Second Cross-Cousin's Son",
  cong_biao_niece: "Second Cross-Cousin's Daughter",

  // Tang/biao grand-nephews/nieces
  tang_grandnephew: "Paternal Cousin's Grandson (堂侄孙)",
  tang_grandniece: "Paternal Cousin's Granddaughter (堂侄孙女)",
  biao_grandnephew: "Cross-Cousin's Grandson (表侄孙)",
  biao_grandniece: "Cross-Cousin's Granddaughter (表侄孙女)",
  grandnieces_husband: "Grand-Niece's Husband",

  // Great-grandchildren's spouses
  great_grandsons_wife: "Great-Grandson's Wife (曾孙媳妇)",
  great_granddaughters_husband: "Great-Granddaughter's Husband (曾孙女婿)",

  // Great-great-grandparents (高祖)
  gao_grandfather_p: "Paternal Great-Great-Grandfather (高祖父)",
  gao_grandmother_p: "Paternal Great-Great-Grandmother (高祖母)",
  gao_grandfather_m: "Maternal Great-Great-Grandfather (外高祖父)",
  gao_grandmother_m: "Maternal Great-Great-Grandmother (外高祖母)",

  // Great-great-grandchildren (玄孙)
  xuan_grandson: "Great-Great-Grandson (玄孙)",
  xuan_granddaughter: "Great-Great-Granddaughter (玄孙女)",

  // Great-grand-uncles/aunts
  great_grand_uncle: "Great-Grandfather's Brother (曾伯/叔祖)",
  great_grand_uncles_wife: "Great-Grandfather's Brother's Wife",
  great_grand_aunt: "Great-Grandfather's Sister (曾姑祖)",
  great_grand_aunts_husband: "Great-Grandfather's Sister's Husband",

  // Siblings-in-law extended families
  older_brothers_wifes_father: "Older Brother's Wife's Father",
  older_brothers_wifes_mother: "Older Brother's Wife's Mother",
  older_brothers_wifes_brother: "Older Brother's Wife's Brother",
  older_brothers_wifes_sister: "Older Brother's Wife's Sister",
  younger_brothers_wifes_father: "Younger Brother's Wife's Father",
  younger_brothers_wifes_mother: "Younger Brother's Wife's Mother",
  younger_brothers_wifes_brother: "Younger Brother's Wife's Brother",
  younger_brothers_wifes_sister: "Younger Brother's Wife's Sister",
  older_sisters_husbands_father: "Older Sister's Husband's Father",
  older_sisters_husbands_mother: "Older Sister's Husband's Mother",
  older_sisters_husbands_brother: "Older Sister's Husband's Brother",
  older_sisters_husbands_sister: "Older Sister's Husband's Sister",
  younger_sisters_husbands_father: "Younger Sister's Husband's Father",
  younger_sisters_husbands_mother: "Younger Sister's Husband's Mother",
  younger_sisters_husbands_brother: "Younger Sister's Husband's Brother",
  younger_sisters_husbands_sister: "Younger Sister's Husband's Sister",

  // Uncle/aunt in-law parents
  fathers_older_brothers_wifes_father: "Father's Older Brother's Wife's Father",
  fathers_older_brothers_wifes_mother: "Father's Older Brother's Wife's Mother",
  fathers_younger_brothers_wifes_father: "Father's Younger Brother's Wife's Father",
  fathers_younger_brothers_wifes_mother: "Father's Younger Brother's Wife's Mother",
  paternal_aunts_husbands_father: "Paternal Aunt's Husband's Father",
  paternal_aunts_husbands_mother: "Paternal Aunt's Husband's Mother",

  // Spouse's extended in-law spouses
  husbands_paternal_uncles_wife: "Husband's Father's Brother's Wife",
  husbands_paternal_aunts_husband: "Husband's Paternal Aunt's Husband",
  husbands_maternal_uncles_wife: "Husband's Maternal Uncle's Wife",
  husbands_maternal_aunts_husband: "Husband's Maternal Aunt's Husband",
  wifes_paternal_uncles_wife: "Wife's Father's Brother's Wife",
  wifes_paternal_aunts_husband: "Wife's Paternal Aunt's Husband",
  wifes_maternal_uncles_wife: "Wife's Maternal Uncle's Wife",
  wifes_maternal_aunts_husband: "Wife's Maternal Aunt's Husband",
};
