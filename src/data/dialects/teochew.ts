import { DialectTerm } from '@/lib/types';

/**
 * Teochew (潮州话) kinship terms.
 * Romanization uses Peng'im system.
 */
export const TEOCHEW_TERMS: Record<string, DialectTerm> = {
  // Direct family
  father: { characters: '阿爸', romanization: 'a1 bah4', alternates: ['爸'] },
  mother: { characters: '阿媽', romanization: 'a1 ma2', alternates: ['阿姆', '姆'] },
  husband: { characters: '翁', romanization: 'ang1', alternates: ['老公', '翁婿'] },
  wife: { characters: '某', romanization: 'bhou2', alternates: ['老婆'] },
  older_brother: { characters: '阿兄', romanization: 'a1 hian1' },
  younger_brother: { characters: '小弟', romanization: 'sio2 di6' },
  older_sister: { characters: '阿姐', romanization: 'a1 zê2' },
  younger_sister: { characters: '小妹', romanization: 'sio2 muê7' },
  son: { characters: '仔', romanization: 'gian2', alternates: ['囝'] },
  daughter: { characters: '走仔', romanization: 'zao2 gian2', alternates: ['查某囝'] },

  // Paternal grandparents
  paternal_grandfather: { characters: '阿公', romanization: 'a1 gong1' },
  paternal_grandmother: { characters: '阿嬤', romanization: 'a1 ma2' },

  // Paternal uncles & aunts
  fathers_older_brother: { characters: '阿伯', romanization: 'a1 beh4' },
  fathers_younger_brother: { characters: '阿叔', romanization: 'a1 zêg4' },
  fathers_older_brothers_wife: { characters: '阿姆', romanization: 'a1 m2', alternates: ['伯母'] },
  fathers_younger_brothers_wife: { characters: '阿嬸', romanization: 'a1 sim2' },
  paternal_aunt: { characters: '阿姑', romanization: 'a1 gou1' },
  paternal_aunts_husband: { characters: '姑丈', romanization: 'gou1 dion6' },

  // Paternal cousins
  paternal_uncle_older_son: { characters: '堂兄', romanization: 'tong5 hian1' },
  paternal_uncle_older_daughter: { characters: '堂姐', romanization: 'tong5 zê2' },
  paternal_uncle_younger_son: { characters: '堂弟', romanization: 'tong5 di6' },
  paternal_uncle_younger_daughter: { characters: '堂妹', romanization: 'tong5 muê7' },
  paternal_aunts_son: { characters: '表兄', romanization: 'bio2 hian1', alternates: ['表弟'] },
  paternal_aunts_daughter: { characters: '表姐', romanization: 'bio2 zê2', alternates: ['表妹'] },

  // Maternal grandparents
  maternal_grandfather: { characters: '外公', romanization: 'ghua7 gong1' },
  maternal_grandmother: { characters: '外嬤', romanization: 'ghua7 ma2' },

  // Maternal uncles & aunts
  maternal_uncle: { characters: '阿舅', romanization: 'a1 gu6' },
  maternal_uncles_wife: { characters: '舅妗', romanization: 'gu6 gim6', alternates: ['阿妗'] },
  maternal_aunt: { characters: '阿姨', romanization: 'a1 i5' },
  maternal_aunts_husband: { characters: '姨丈', romanization: 'i5 dion6' },

  // Maternal cousins
  maternal_uncles_son: { characters: '表兄', romanization: 'bio2 hian1', alternates: ['表弟'] },
  maternal_uncles_daughter: { characters: '表姐', romanization: 'bio2 zê2', alternates: ['表妹'] },
  maternal_aunts_son: { characters: '表兄', romanization: 'bio2 hian1', alternates: ['表弟'] },
  maternal_aunts_daughter: { characters: '表姐', romanization: 'bio2 zê2', alternates: ['表妹'] },

  // Siblings' spouses
  older_brothers_wife: { characters: '阿嫂', romanization: 'a1 so2' },
  younger_brothers_wife: { characters: '弟婦', romanization: 'di6 hu7' },
  older_sisters_husband: { characters: '姐夫', romanization: 'zê2 hu1' },
  younger_sisters_husband: { characters: '妹夫', romanization: 'muê7 hu1' },

  // Siblings' children
  brothers_son: { characters: '姪仔', romanization: 'dig8 gian2' },
  brothers_daughter: { characters: '姪女', romanization: 'dig8 neng2' },
  sisters_son: { characters: '外甥', romanization: 'ghua7 sêng1' },
  sisters_daughter: { characters: '外甥女', romanization: 'ghua7 sêng1 neng2' },

  // Children's spouses
  sons_wife: { characters: '新婦', romanization: 'sin1 bu6', alternates: ['媳婦'] },
  daughters_husband: { characters: '囝婿', romanization: 'gian2 sai3' },

  // Grandchildren
  sons_son: { characters: '孫仔', romanization: 'sung1 gian2' },
  sons_daughter: { characters: '孫女', romanization: 'sung1 neng2' },
  daughters_son: { characters: '外孫', romanization: 'ghua7 sung1' },
  daughters_daughter: { characters: '外孫女', romanization: 'ghua7 sung1 neng2' },

  // Husband's family
  husbands_father: { characters: '大官', romanization: 'da6 guang1', alternates: ['公公'] },
  husbands_mother: { characters: '大家', romanization: 'da6 gê1', alternates: ['婆婆'] },
  husbands_older_brother: { characters: '大伯', romanization: 'dua7 beh4' },
  husbands_younger_brother: { characters: '小叔', romanization: 'sio2 zêg4' },
  husbands_older_sister: { characters: '大姑', romanization: 'dua7 gou1' },
  husbands_younger_sister: { characters: '小姑', romanization: 'sio2 gou1' },
  husbands_older_brothers_wife: { characters: '妯娌', romanization: 'diug4 li2' },
  husbands_younger_brothers_wife: { characters: '妯娌', romanization: 'diug4 li2' },
  husbands_sisters_husband: { characters: '連襟', romanization: 'liang5 kim1' },

  // Wife's family
  wifes_father: { characters: '丈人', romanization: 'dion6 nang5', alternates: ['岳父'] },
  wifes_mother: { characters: '丈姆', romanization: 'dion6 m2', alternates: ['岳母'] },
  wifes_brother: { characters: '舅仔', romanization: 'gu6 gian2', alternates: ['大舅', '小舅'] },
  wifes_older_sister: { characters: '大姨', romanization: 'dua7 i5' },
  wifes_younger_sister: { characters: '小姨', romanization: 'sio2 i5' },
  wifes_brothers_wife: { characters: '舅嫂', romanization: 'gu6 so2' },
  wifes_sisters_husband: { characters: '連襟', romanization: 'liang5 kim1' },

  // Great-grandparents
  paternal_great_grandfather: { characters: '阿祖', romanization: 'a1 zou2' },
  paternal_great_grandmother: { characters: '阿祖媽', romanization: 'a1 zou2 ma2' },
  maternal_great_grandfather: { characters: '外祖公', romanization: 'ghua7 zou2 gong1' },
  maternal_great_grandmother: { characters: '外祖媽', romanization: 'ghua7 zou2 ma2' },
  maternal_great_grandfather_m: { characters: '外祖公', romanization: 'ghua7 zou2 gong1' },
  maternal_great_grandmother_m: { characters: '外祖媽', romanization: 'ghua7 zou2 ma2' },
  paternal_great_grandfather_m: { characters: '阿祖', romanization: 'a1 zou2' },
  paternal_great_grandmother_m: { characters: '阿祖媽', romanization: 'a1 zou2 ma2' },

  // Great-grandchildren
  great_grandson_p: { characters: '曾孫', romanization: 'zêng1 sung1' },
  great_granddaughter_p: { characters: '曾孫女', romanization: 'zêng1 sung1 neng2' },
  great_grandson_m: { characters: '外曾孫', romanization: 'ghua7 zêng1 sung1' },
  great_granddaughter_m: { characters: '外曾孫女', romanization: 'ghua7 zêng1 sung1 neng2' },

  // In-law parents
  sons_wifes_father: { characters: '親家公', romanization: 'cêng1 gê1 gong1' },
  sons_wifes_mother: { characters: '親家母', romanization: 'cêng1 gê1 bho2' },
  daughters_husbands_father: { characters: '親家公', romanization: 'cêng1 gê1 gong1' },
  daughters_husbands_mother: { characters: '親家母', romanization: 'cêng1 gê1 bho2' },

  // === CONTINUATION TERMS ===

  // Tang cousins' spouses
  tang_older_brothers_wife: { characters: '堂嫂', romanization: 'tong5 so2' },
  tang_younger_brothers_wife: { characters: '堂弟婦', romanization: 'tong5 di6 hu7' },
  tang_older_sisters_husband: { characters: '堂姐夫', romanization: 'tong5 zê2 hu1' },
  tang_younger_sisters_husband: { characters: '堂妹夫', romanization: 'tong5 muê7 hu1' },

  tang_nephew: { characters: '堂姪', romanization: 'tong5 dig8' },
  tang_niece: { characters: '堂姪女', romanization: 'tong5 dig8 neng2' },
  tang_nephews_wife: { characters: '堂姪婦', romanization: 'tong5 dig8 hu7' },
  tang_nieces_husband: { characters: '堂姪婿', romanization: 'tong5 dig8 sai3' },

  biao_brothers_wife: { characters: '表嫂', romanization: 'bio2 so2' },
  biao_sisters_husband: { characters: '表姐夫', romanization: 'bio2 zê2 hu1' },

  biao_nephew: { characters: '表姪', romanization: 'bio2 dig8' },
  biao_niece: { characters: '表姪女', romanization: 'bio2 dig8 neng2' },
  biao_nephews_wife: { characters: '表姪婦', romanization: 'bio2 dig8 hu7' },
  biao_nieces_husband: { characters: '表姪婿', romanization: 'bio2 dig8 sai3' },

  // Nephews/nieces' spouses
  nephews_wife: { characters: '姪婦', romanization: 'dig8 hu7' },
  nieces_husband: { characters: '姪婿', romanization: 'dig8 sai3' },
  sisters_sons_wife: { characters: '外甥婦', romanization: 'ghua7 sêng1 hu7' },
  sisters_daughters_husband: { characters: '外甥婿', romanization: 'ghua7 sêng1 sai3' },

  // Grand-nephews/nieces
  grandnephew: { characters: '姪孫', romanization: 'dig8 sung1' },
  grandniece: { characters: '姪孫女', romanization: 'dig8 sung1 neng2' },
  sisters_grandchild_son: { characters: '外甥孫', romanization: 'ghua7 sêng1 sung1' },
  sisters_grandchild_daughter: { characters: '外甥孫女', romanization: 'ghua7 sêng1 sung1 neng2' },
  grandnephews_wife: { characters: '姪孫婦', romanization: 'dig8 sung1 hu7' },

  // Grandchildren's spouses
  grandsons_wife: { characters: '孫婦', romanization: 'sung1 hu7' },
  granddaughters_husband: { characters: '孫婿', romanization: 'sung1 sai3' },

  // Grandparents' siblings
  grand_paternal_uncle_older: { characters: '伯公', romanization: 'beh4 gong1' },
  grand_paternal_uncle_younger: { characters: '叔公', romanization: 'zêg4 gong1' },
  grand_paternal_aunt: { characters: '姑婆', romanization: 'gou1 po5' },
  grand_paternal_uncles_wife: { characters: '伯婆', romanization: 'beh4 po5' },
  grand_paternal_aunts_husband: { characters: '姑公', romanization: 'gou1 gong1' },
  grand_maternal_uncle_p: { characters: '舅公', romanization: 'gu6 gong1' },
  grand_maternal_aunt_p: { characters: '姨婆', romanization: 'i5 po5' },
  grand_paternal_uncle_m: { characters: '舅公', romanization: 'gu6 gong1' },
  grand_paternal_aunt_m: { characters: '姑婆', romanization: 'gou1 po5' },
  grand_maternal_uncle_m: { characters: '舅公', romanization: 'gu6 gong1' },
  grand_maternal_aunt_m: { characters: '姨婆', romanization: 'i5 po5' },

  // Husband's extended family
  husbands_nephew: { characters: '姪仔', romanization: 'dig8 gian2', notes: "Husband's nephew" },
  husbands_niece: { characters: '姪女', romanization: 'dig8 neng2', notes: "Husband's niece" },
  husbands_grandfather: { characters: '阿公', romanization: 'a1 gong1', notes: "Husband's grandfather" },
  husbands_grandmother: { characters: '阿嬤', romanization: 'a1 ma2', notes: "Husband's grandmother" },
  husbands_paternal_uncle_older: { characters: '伯公', romanization: 'beh4 gong1', notes: "Husband's father's older brother" },
  husbands_paternal_uncle_younger: { characters: '叔公', romanization: 'zêg4 gong1', notes: "Husband's father's younger brother" },
  husbands_paternal_aunt: { characters: '姑奶', romanization: 'gou1 nai2', notes: "Husband's paternal aunt" },
  husbands_maternal_uncle: { characters: '舅公', romanization: 'gu6 gong1', notes: "Husband's maternal uncle" },
  husbands_maternal_aunt: { characters: '姨奶', romanization: 'i5 nai2', notes: "Husband's maternal aunt" },

  // Wife's extended family
  wifes_nephew: { characters: '內姪', romanization: 'lai6 dig8', notes: "Wife's nephew" },
  wifes_niece: { characters: '內姪女', romanization: 'lai6 dig8 neng2', notes: "Wife's niece" },
  wifes_grandfather: { characters: '丈祖', romanization: 'dion6 zou2', notes: "Wife's grandfather" },
  wifes_grandmother: { characters: '丈祖媽', romanization: 'dion6 zou2 ma2', notes: "Wife's grandmother" },
  wifes_paternal_uncle_older: { characters: '丈伯', romanization: 'dion6 beh4', notes: "Wife's father's older brother" },
  wifes_paternal_uncle_younger: { characters: '丈叔', romanization: 'dion6 zêg4', notes: "Wife's father's younger brother" },
  wifes_paternal_aunt: { characters: '丈姑', romanization: 'dion6 gou1', notes: "Wife's paternal aunt" },
  wifes_maternal_uncle: { characters: '丈舅', romanization: 'dion6 gu6', notes: "Wife's maternal uncle" },
  wifes_maternal_aunt: { characters: '丈姨', romanization: 'dion6 i5', notes: "Wife's maternal aunt" },

  // Children's in-law siblings
  sons_wifes_brother: { characters: '親家舅', romanization: 'cêng1 gê1 gu6' },
  sons_wifes_sister: { characters: '親家姨', romanization: 'cêng1 gê1 i5' },
  daughters_husbands_brother: { characters: '親家舅', romanization: 'cêng1 gê1 gu6' },
  daughters_husbands_sister: { characters: '親家姨', romanization: 'cêng1 gê1 i5' },

  // Grand-uncles/aunts' children
  grand_uncles_son: { characters: '從堂叔', romanization: 'cong5 tong5 zêg4', notes: "Grandfather's brother's son" },
  grand_uncles_daughter: { characters: '從堂姑', romanization: 'cong5 tong5 gou1', notes: "Grandfather's brother's daughter" },
  grand_aunts_son: { characters: '姑表叔', romanization: 'gou1 bio2 zêg4' },
  grand_aunts_daughter: { characters: '姑表姑', romanization: 'gou1 bio2 gou1' },
  grand_uncles_son_cross: { characters: '表叔', romanization: 'bio2 zêg4', notes: "Grandparent's sibling's son (cross)" },
  grand_uncles_daughter_cross: { characters: '表姑', romanization: 'bio2 gou1', notes: "Grandparent's sibling's daughter (cross)" },
  grand_aunts_son_cross: { characters: '表叔', romanization: 'bio2 zêg4' },
  grand_aunts_daughter_cross: { characters: '表姑', romanization: 'bio2 gou1' },
  grand_uncles_sons_wife: { characters: '從堂嬸', romanization: 'cong5 tong5 sim2' },
  grand_uncles_daughters_husband: { characters: '從堂姑丈', romanization: 'cong5 tong5 gou1 dion6' },
  grand_aunts_sons_wife: { characters: '姑表嬸', romanization: 'gou1 bio2 sim2' },
  grand_aunts_daughters_husband: { characters: '姑表姑丈', romanization: 'gou1 bio2 gou1 dion6' },

  // Grand-uncles/aunts' spouses (other lines)
  grand_maternal_uncles_wife_p: { characters: '舅婆', romanization: 'gu6 po5', notes: "Paternal grandmother's brother's wife" },
  grand_maternal_aunts_husband_p: { characters: '姨公', romanization: 'i5 gong1' },
  grand_paternal_uncles_wife_m: { characters: '伯婆', romanization: 'beh4 po5', alternates: ['叔婆'] },
  grand_paternal_aunts_husband_m: { characters: '姑公', romanization: 'gou1 gong1' },
  grand_maternal_uncles_wife_m: { characters: '舅婆', romanization: 'gu6 po5' },
  grand_maternal_aunts_husband_m: { characters: '姨公', romanization: 'i5 gong1' },

  // Second cousins (從堂/從表)
  cong_tang_brother: { characters: '從堂兄', romanization: 'cong5 tong5 hian1', alternates: ['從堂弟'] },
  cong_tang_sister: { characters: '從堂姐', romanization: 'cong5 tong5 zê2', alternates: ['從堂妹'] },
  cong_tang_brothers_wife: { characters: '從堂嫂', romanization: 'cong5 tong5 so2' },
  cong_tang_sisters_husband: { characters: '從堂姐夫', romanization: 'cong5 tong5 zê2 hu1' },
  cong_tang_nephew: { characters: '從堂姪', romanization: 'cong5 tong5 dig8' },
  cong_tang_niece: { characters: '從堂姪女', romanization: 'cong5 tong5 dig8 neng2' },
  cong_biao_brother: { characters: '從表兄', romanization: 'cong5 bio2 hian1', alternates: ['從表弟'] },
  cong_biao_sister: { characters: '從表姐', romanization: 'cong5 bio2 zê2', alternates: ['從表妹'] },
  cong_biao_brothers_wife: { characters: '從表嫂', romanization: 'cong5 bio2 so2' },
  cong_biao_sisters_husband: { characters: '從表姐夫', romanization: 'cong5 bio2 zê2 hu1' },
  cong_biao_nephew: { characters: '從表姪', romanization: 'cong5 bio2 dig8' },
  cong_biao_niece: { characters: '從表姪女', romanization: 'cong5 bio2 dig8 neng2' },

  // Tang/biao grand-nephews/nieces
  tang_grandnephew: { characters: '堂姪孫', romanization: 'tong5 dig8 sung1' },
  tang_grandniece: { characters: '堂姪孫女', romanization: 'tong5 dig8 sung1 neng2' },
  biao_grandnephew: { characters: '表姪孫', romanization: 'bio2 dig8 sung1' },
  biao_grandniece: { characters: '表姪孫女', romanization: 'bio2 dig8 sung1 neng2' },
  grandnieces_husband: { characters: '姪孫婿', romanization: 'dig8 sung1 sai3' },

  // Great-grandchildren's spouses
  great_grandsons_wife: { characters: '曾孫婦', romanization: 'zêng1 sung1 hu7' },
  great_granddaughters_husband: { characters: '曾孫婿', romanization: 'zêng1 sung1 sai3' },

  // Great-great-grandparents (高祖)
  gao_grandfather_p: { characters: '高祖父', romanization: 'go1 zou2 hu7' },
  gao_grandmother_p: { characters: '高祖母', romanization: 'go1 zou2 bho2' },
  gao_grandfather_m: { characters: '外高祖父', romanization: 'ghua7 go1 zou2 hu7' },
  gao_grandmother_m: { characters: '外高祖母', romanization: 'ghua7 go1 zou2 bho2' },

  // Great-great-grandchildren (玄孫)
  xuan_grandson: { characters: '玄孫', romanization: 'hiang5 sung1' },
  xuan_granddaughter: { characters: '玄孫女', romanization: 'hiang5 sung1 neng2' },

  // Great-grand-uncles/aunts
  great_grand_uncle: { characters: '曾伯叔祖', romanization: 'zêng1 beh4 zêg4 zou2', notes: "Great-grandfather's brother" },
  great_grand_uncles_wife: { characters: '曾伯叔祖母', romanization: 'zêng1 beh4 zêg4 zou2 bho2' },
  great_grand_aunt: { characters: '曾姑祖', romanization: 'zêng1 gou1 zou2' },
  great_grand_aunts_husband: { characters: '曾姑祖丈', romanization: 'zêng1 gou1 zou2 dion6' },

  // Siblings-in-law extended families
  older_brothers_wifes_father: { characters: '嫂的父親', romanization: 'so2 gai5 hu7 cêng1', notes: 'No standard kinship term' },
  older_brothers_wifes_mother: { characters: '嫂的母親', romanization: 'so2 gai5 bho2 cêng1', notes: 'No standard kinship term' },
  older_brothers_wifes_brother: { characters: '嫂的兄弟', romanization: 'so2 gai5 hian1 di6', notes: "Brother-in-law's sibling" },
  older_brothers_wifes_sister: { characters: '嫂的姐妹', romanization: 'so2 gai5 zê2 muê7', notes: "Brother-in-law's sibling" },
  younger_brothers_wifes_father: { characters: '弟婦的父親', romanization: 'di6 hu7 gai5 hu7 cêng1', notes: 'No standard kinship term' },
  younger_brothers_wifes_mother: { characters: '弟婦的母親', romanization: 'di6 hu7 gai5 bho2 cêng1', notes: 'No standard kinship term' },
  younger_brothers_wifes_brother: { characters: '弟婦的兄弟', romanization: 'di6 hu7 gai5 hian1 di6', notes: 'No standard kinship term' },
  younger_brothers_wifes_sister: { characters: '弟婦的姐妹', romanization: 'di6 hu7 gai5 zê2 muê7', notes: 'No standard kinship term' },
  older_sisters_husbands_father: { characters: '姐夫的父親', romanization: 'zê2 hu1 gai5 hu7 cêng1', notes: 'No standard kinship term' },
  older_sisters_husbands_mother: { characters: '姐夫的母親', romanization: 'zê2 hu1 gai5 bho2 cêng1', notes: 'No standard kinship term' },
  older_sisters_husbands_brother: { characters: '姐夫的兄弟', romanization: 'zê2 hu1 gai5 hian1 di6', notes: 'No standard kinship term' },
  older_sisters_husbands_sister: { characters: '姐夫的姐妹', romanization: 'zê2 hu1 gai5 zê2 muê7', notes: 'No standard kinship term' },
  younger_sisters_husbands_father: { characters: '妹夫的父親', romanization: 'muê7 hu1 gai5 hu7 cêng1', notes: 'No standard kinship term' },
  younger_sisters_husbands_mother: { characters: '妹夫的母親', romanization: 'muê7 hu1 gai5 bho2 cêng1', notes: 'No standard kinship term' },
  younger_sisters_husbands_brother: { characters: '妹夫的兄弟', romanization: 'muê7 hu1 gai5 hian1 di6', notes: 'No standard kinship term' },
  younger_sisters_husbands_sister: { characters: '妹夫的姐妹', romanization: 'muê7 hu1 gai5 zê2 muê7', notes: 'No standard kinship term' },

  // Uncle/aunt in-law parents
  fathers_older_brothers_wifes_father: { characters: '伯母的父親', romanization: 'beh4 bho2 gai5 hu7 cêng1', notes: 'No standard kinship term' },
  fathers_older_brothers_wifes_mother: { characters: '伯母的母親', romanization: 'beh4 bho2 gai5 bho2 cêng1', notes: 'No standard kinship term' },
  fathers_younger_brothers_wifes_father: { characters: '嬸母的父親', romanization: 'sim2 bho2 gai5 hu7 cêng1', notes: 'No standard kinship term' },
  fathers_younger_brothers_wifes_mother: { characters: '嬸母的母親', romanization: 'sim2 bho2 gai5 bho2 cêng1', notes: 'No standard kinship term' },
  paternal_aunts_husbands_father: { characters: '姑丈的父親', romanization: 'gou1 dion6 gai5 hu7 cêng1', notes: 'No standard kinship term' },
  paternal_aunts_husbands_mother: { characters: '姑丈的母親', romanization: 'gou1 dion6 gai5 bho2 cêng1', notes: 'No standard kinship term' },

  // Spouse's extended in-law spouses
  husbands_paternal_uncles_wife: { characters: '伯婆', romanization: 'beh4 po5', alternates: ['叔婆'], notes: "Husband's father's brother's wife" },
  husbands_paternal_aunts_husband: { characters: '姑公', romanization: 'gou1 gong1', notes: "Husband's paternal aunt's husband" },
  husbands_maternal_uncles_wife: { characters: '舅婆', romanization: 'gu6 po5', notes: "Husband's maternal uncle's wife" },
  husbands_maternal_aunts_husband: { characters: '姨公', romanization: 'i5 gong1', notes: "Husband's maternal aunt's husband" },
  wifes_paternal_uncles_wife: { characters: '岳伯母', romanization: 'ghaoh8 beh4 bho2', notes: "Wife's father's brother's wife" },
  wifes_paternal_aunts_husband: { characters: '岳姑丈', romanization: 'ghaoh8 gou1 dion6', notes: "Wife's paternal aunt's husband" },
  wifes_maternal_uncles_wife: { characters: '岳舅母', romanization: 'ghaoh8 gu6 bho2', notes: "Wife's maternal uncle's wife" },
  wifes_maternal_aunts_husband: { characters: '岳姨丈', romanization: 'ghaoh8 i5 dion6', notes: "Wife's maternal aunt's husband" },
};
