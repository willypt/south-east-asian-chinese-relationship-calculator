import { DialectTerm } from '@/lib/types';

/**
 * Cantonese (广东话) kinship terms.
 * Romanization uses Jyutping system.
 */
export const CANTONESE_TERMS: Record<string, DialectTerm> = {
  // Direct family
  father: { characters: '爸爸', romanization: 'baa4 baa1', alternates: ['老豆', '老竇'] },
  mother: { characters: '媽媽', romanization: 'maa4 maa1', alternates: ['老母', '阿媽'] },
  husband: { characters: '老公', romanization: 'lou5 gung1', alternates: ['丈夫'] },
  wife: { characters: '老婆', romanization: 'lou5 po4', alternates: ['太太'] },
  older_brother: { characters: '哥哥', romanization: 'go4 go1', alternates: ['大佬'] },
  younger_brother: { characters: '細佬', romanization: 'sai3 lou2', alternates: ['弟弟'] },
  older_sister: { characters: '家姐', romanization: 'gaa1 ze2' },
  younger_sister: { characters: '妹妹', romanization: 'mui6 mui2', alternates: ['細妹'] },
  son: { characters: '仔', romanization: 'zai2', alternates: ['兒子'] },
  daughter: { characters: '女', romanization: 'neoi5', alternates: ['女兒'] },

  // Paternal grandparents
  paternal_grandfather: { characters: '爺爺', romanization: 'je4 je2', alternates: ['阿爺'] },
  paternal_grandmother: { characters: '嫲嫲', romanization: 'maa4 maa4', alternates: ['阿嫲'] },

  // Paternal uncles & aunts
  fathers_older_brother: { characters: '伯父', romanization: 'baak3 fu6', alternates: ['阿伯'] },
  fathers_younger_brother: { characters: '叔叔', romanization: 'suk1 suk1', alternates: ['阿叔'] },
  fathers_older_brothers_wife: { characters: '伯娘', romanization: 'baak3 noeng4' },
  fathers_younger_brothers_wife: { characters: '嬸嬸', romanization: 'sam2 sam2', alternates: ['阿嬸'] },
  paternal_aunt: { characters: '姑媽', romanization: 'gu1 maa1', alternates: ['姑姐'] },
  paternal_aunts_husband: { characters: '姑丈', romanization: 'gu1 zoeng6' },

  // Paternal cousins
  paternal_uncle_older_son: { characters: '堂家姐', romanization: 'tong4 go1', notes: '堂哥 for older male' },
  paternal_uncle_older_daughter: { characters: '堂家姐', romanization: 'tong4 gaa1 ze2' },
  paternal_uncle_younger_son: { characters: '堂細佬', romanization: 'tong4 sai3 lou2' },
  paternal_uncle_younger_daughter: { characters: '堂妹', romanization: 'tong4 mui2' },
  paternal_aunts_son: { characters: '表哥', romanization: 'biu2 go1', alternates: ['表弟'] },
  paternal_aunts_daughter: { characters: '表姐', romanization: 'biu2 ze2', alternates: ['表妹'] },

  // Maternal grandparents
  maternal_grandfather: { characters: '外公', romanization: 'ngoi6 gung1', alternates: ['公公', '阿公'] },
  maternal_grandmother: { characters: '外婆', romanization: 'ngoi6 po4', alternates: ['婆婆', '阿婆'] },

  // Maternal uncles & aunts
  maternal_uncle: { characters: '舅父', romanization: 'kau5 fu6', alternates: ['阿舅'] },
  maternal_uncles_wife: { characters: '舅母', romanization: 'kau5 mou5', alternates: ['妗母'] },
  maternal_aunt: { characters: '姨媽', romanization: 'ji4 maa1', alternates: ['阿姨'] },
  maternal_aunts_husband: { characters: '姨丈', romanization: 'ji4 zoeng6' },

  // Maternal cousins
  maternal_uncles_son: { characters: '表哥', romanization: 'biu2 go1', alternates: ['表弟'] },
  maternal_uncles_daughter: { characters: '表姐', romanization: 'biu2 ze2', alternates: ['表妹'] },
  maternal_aunts_son: { characters: '表哥', romanization: 'biu2 go1', alternates: ['表弟'] },
  maternal_aunts_daughter: { characters: '表姐', romanization: 'biu2 ze2', alternates: ['表妹'] },

  // Siblings' spouses
  older_brothers_wife: { characters: '大嫂', romanization: 'daai6 sou2', alternates: ['阿嫂'] },
  younger_brothers_wife: { characters: '弟婦', romanization: 'dai6 fu5' },
  older_sisters_husband: { characters: '姐夫', romanization: 'ze2 fu1' },
  younger_sisters_husband: { characters: '妹夫', romanization: 'mui6 fu1' },

  // Siblings' children
  brothers_son: { characters: '姪仔', romanization: 'zat6 zai2' },
  brothers_daughter: { characters: '姪女', romanization: 'zat6 neoi5' },
  sisters_son: { characters: '外甥', romanization: 'ngoi6 saang1' },
  sisters_daughter: { characters: '外甥女', romanization: 'ngoi6 saang1 neoi5' },

  // Children's spouses
  sons_wife: { characters: '新抱', romanization: 'san1 pou5', alternates: ['媳婦'] },
  daughters_husband: { characters: '女婿', romanization: 'neoi5 sai3' },

  // Grandchildren
  sons_son: { characters: '孫仔', romanization: 'syun1 zai2' },
  sons_daughter: { characters: '孫女', romanization: 'syun1 neoi5' },
  daughters_son: { characters: '外孫', romanization: 'ngoi6 syun1' },
  daughters_daughter: { characters: '外孫女', romanization: 'ngoi6 syun1 neoi5' },

  // Husband's family
  husbands_father: { characters: '老爺', romanization: 'lou5 je4', alternates: ['家翁'] },
  husbands_mother: { characters: '奶奶', romanization: 'naai5 naai5', alternates: ['家姑'] },
  husbands_older_brother: { characters: '大伯', romanization: 'daai6 baak3' },
  husbands_younger_brother: { characters: '叔仔', romanization: 'suk1 zai2' },
  husbands_older_sister: { characters: '姑奶', romanization: 'gu1 naai5' },
  husbands_younger_sister: { characters: '姑仔', romanization: 'gu1 zai2' },
  husbands_older_brothers_wife: { characters: '妯娌', romanization: 'zau6 lei5' },
  husbands_younger_brothers_wife: { characters: '妯娌', romanization: 'zau6 lei5' },
  husbands_sisters_husband: { characters: '連襟', romanization: 'lin4 kam1' },

  // Wife's family
  wifes_father: { characters: '外父', romanization: 'ngoi6 fu6', alternates: ['岳父'] },
  wifes_mother: { characters: '外母', romanization: 'ngoi6 mou5', alternates: ['岳母'] },
  wifes_brother: { characters: '舅仔', romanization: 'kau5 zai2', alternates: ['大舅', '細舅'] },
  wifes_older_sister: { characters: '大姨', romanization: 'daai6 ji4' },
  wifes_younger_sister: { characters: '細姨', romanization: 'sai3 ji4' },
  wifes_brothers_wife: { characters: '舅嫂', romanization: 'kau5 sou2' },
  wifes_sisters_husband: { characters: '連襟', romanization: 'lin4 kam1' },

  // Great-grandparents
  paternal_great_grandfather: { characters: '太公', romanization: 'taai3 gung1' },
  paternal_great_grandmother: { characters: '太婆', romanization: 'taai3 po4' },
  maternal_great_grandfather: { characters: '外太公', romanization: 'ngoi6 taai3 gung1' },
  maternal_great_grandmother: { characters: '外太婆', romanization: 'ngoi6 taai3 po4' },
  maternal_great_grandfather_m: { characters: '外太公', romanization: 'ngoi6 taai3 gung1' },
  maternal_great_grandmother_m: { characters: '外太婆', romanization: 'ngoi6 taai3 po4' },
  paternal_great_grandfather_m: { characters: '太公', romanization: 'taai3 gung1' },
  paternal_great_grandmother_m: { characters: '太婆', romanization: 'taai3 po4' },

  // Great-grandchildren
  great_grandson_p: { characters: '曾孫', romanization: 'cang4 syun1' },
  great_granddaughter_p: { characters: '曾孫女', romanization: 'cang4 syun1 neoi5' },
  great_grandson_m: { characters: '外曾孫', romanization: 'ngoi6 cang4 syun1' },
  great_granddaughter_m: { characters: '外曾孫女', romanization: 'ngoi6 cang4 syun1 neoi5' },

  // In-law parents
  sons_wifes_father: { characters: '親家公', romanization: 'can1 gaa1 gung1' },
  sons_wifes_mother: { characters: '親家母', romanization: 'can1 gaa1 mou5' },
  daughters_husbands_father: { characters: '親家公', romanization: 'can1 gaa1 gung1' },
  daughters_husbands_mother: { characters: '親家母', romanization: 'can1 gaa1 mou5' },

  // === CONTINUATION TERMS ===

  // Tang cousins' spouses
  tang_older_brothers_wife: { characters: '堂嫂', romanization: 'tong4 sou2' },
  tang_younger_brothers_wife: { characters: '堂弟婦', romanization: 'tong4 dai6 fu5' },
  tang_older_sisters_husband: { characters: '堂姐夫', romanization: 'tong4 ze2 fu1' },
  tang_younger_sisters_husband: { characters: '堂妹夫', romanization: 'tong4 mui6 fu1' },

  tang_nephew: { characters: '堂姪', romanization: 'tong4 zat6' },
  tang_niece: { characters: '堂姪女', romanization: 'tong4 zat6 neoi5' },
  tang_nephews_wife: { characters: '堂姪婦', romanization: 'tong4 zat6 fu5' },
  tang_nieces_husband: { characters: '堂姪婿', romanization: 'tong4 zat6 sai3' },

  biao_brothers_wife: { characters: '表嫂', romanization: 'biu2 sou2' },
  biao_sisters_husband: { characters: '表姐夫', romanization: 'biu2 ze2 fu1' },

  biao_nephew: { characters: '表姪', romanization: 'biu2 zat6' },
  biao_niece: { characters: '表姪女', romanization: 'biu2 zat6 neoi5' },
  biao_nephews_wife: { characters: '表姪婦', romanization: 'biu2 zat6 fu5' },
  biao_nieces_husband: { characters: '表姪婿', romanization: 'biu2 zat6 sai3' },

  // Nephews/nieces' spouses
  nephews_wife: { characters: '姪新抱', romanization: 'zat6 san1 pou5' },
  nieces_husband: { characters: '姪女婿', romanization: 'zat6 neoi5 sai3' },
  sisters_sons_wife: { characters: '外甥新抱', romanization: 'ngoi6 saang1 san1 pou5' },
  sisters_daughters_husband: { characters: '外甥女婿', romanization: 'ngoi6 saang1 neoi5 sai3' },

  // Grand-nephews/nieces
  grandnephew: { characters: '姪孫', romanization: 'zat6 syun1' },
  grandniece: { characters: '姪孫女', romanization: 'zat6 syun1 neoi5' },
  sisters_grandchild_son: { characters: '外甥孫', romanization: 'ngoi6 saang1 syun1' },
  sisters_grandchild_daughter: { characters: '外甥孫女', romanization: 'ngoi6 saang1 syun1 neoi5' },
  grandnephews_wife: { characters: '姪孫新抱', romanization: 'zat6 syun1 san1 pou5' },

  // Grandchildren's spouses
  grandsons_wife: { characters: '孫新抱', romanization: 'syun1 san1 pou5' },
  granddaughters_husband: { characters: '孫女婿', romanization: 'syun1 neoi5 sai3' },

  // Grandparents' siblings
  grand_paternal_uncle_older: { characters: '伯公', romanization: 'baak3 gung1' },
  grand_paternal_uncle_younger: { characters: '叔公', romanization: 'suk1 gung1' },
  grand_paternal_aunt: { characters: '姑婆', romanization: 'gu1 po4' },
  grand_paternal_uncles_wife: { characters: '伯婆', romanization: 'baak3 po4' },
  grand_paternal_aunts_husband: { characters: '姑公', romanization: 'gu1 gung1' },
  grand_maternal_uncle_p: { characters: '舅公', romanization: 'kau5 gung1' },
  grand_maternal_aunt_p: { characters: '姨婆', romanization: 'ji4 po4' },
  grand_paternal_uncle_m: { characters: '舅公', romanization: 'kau5 gung1' },
  grand_paternal_aunt_m: { characters: '姑婆', romanization: 'gu1 po4' },
  grand_maternal_uncle_m: { characters: '舅公', romanization: 'kau5 gung1' },
  grand_maternal_aunt_m: { characters: '姨婆', romanization: 'ji4 po4' },

  // Husband's extended family
  husbands_nephew: { characters: '姪仔', romanization: 'zat6 zai2', notes: "Husband's nephew" },
  husbands_niece: { characters: '姪女', romanization: 'zat6 neoi5', notes: "Husband's niece" },
  husbands_grandfather: { characters: '爺爺', romanization: 'je4 je2', notes: "Husband's grandfather" },
  husbands_grandmother: { characters: '嫲嫲', romanization: 'maa4 maa4', notes: "Husband's grandmother" },
  husbands_paternal_uncle_older: { characters: '伯公', romanization: 'baak3 gung1', notes: "Husband's father's older brother" },
  husbands_paternal_uncle_younger: { characters: '叔公', romanization: 'suk1 gung1', notes: "Husband's father's younger brother" },
  husbands_paternal_aunt: { characters: '姑奶', romanization: 'gu1 naai5', notes: "Husband's paternal aunt" },
  husbands_maternal_uncle: { characters: '舅公', romanization: 'kau5 gung1', notes: "Husband's maternal uncle" },
  husbands_maternal_aunt: { characters: '姨奶', romanization: 'ji4 naai5', notes: "Husband's maternal aunt" },

  // Wife's extended family
  wifes_nephew: { characters: '內姪', romanization: 'noi6 zat6', notes: "Wife's nephew" },
  wifes_niece: { characters: '內姪女', romanization: 'noi6 zat6 neoi5', notes: "Wife's niece" },
  wifes_grandfather: { characters: '外祖父', romanization: 'ngoi6 zou2 fu6', notes: "Wife's grandfather" },
  wifes_grandmother: { characters: '外祖母', romanization: 'ngoi6 zou2 mou5', notes: "Wife's grandmother" },
  wifes_paternal_uncle_older: { characters: '外伯', romanization: 'ngoi6 baak3', notes: "Wife's father's older brother" },
  wifes_paternal_uncle_younger: { characters: '外叔', romanization: 'ngoi6 suk1', notes: "Wife's father's younger brother" },
  wifes_paternal_aunt: { characters: '外姑', romanization: 'ngoi6 gu1', notes: "Wife's paternal aunt" },
  wifes_maternal_uncle: { characters: '外舅', romanization: 'ngoi6 kau5', notes: "Wife's maternal uncle" },
  wifes_maternal_aunt: { characters: '外姨', romanization: 'ngoi6 ji4', notes: "Wife's maternal aunt" },

  // Children's in-law siblings
  sons_wifes_brother: { characters: '親家舅', romanization: 'can1 gaa1 kau5' },
  sons_wifes_sister: { characters: '親家姨', romanization: 'can1 gaa1 ji4' },
  daughters_husbands_brother: { characters: '親家舅', romanization: 'can1 gaa1 kau5' },
  daughters_husbands_sister: { characters: '親家姨', romanization: 'can1 gaa1 ji4' },

  // Grand-uncles/aunts' children
  grand_uncles_son: { characters: '從堂叔', romanization: 'cung4 tong4 suk1', notes: "Grandfather's brother's son" },
  grand_uncles_daughter: { characters: '從堂姑', romanization: 'cung4 tong4 gu1', notes: "Grandfather's brother's daughter" },
  grand_aunts_son: { characters: '姑表叔', romanization: 'gu1 biu2 suk1' },
  grand_aunts_daughter: { characters: '姑表姑', romanization: 'gu1 biu2 gu1' },
  grand_uncles_son_cross: { characters: '表叔', romanization: 'biu2 suk1', notes: "Grandparent's sibling's son (cross)" },
  grand_uncles_daughter_cross: { characters: '表姑', romanization: 'biu2 gu1', notes: "Grandparent's sibling's daughter (cross)" },
  grand_aunts_son_cross: { characters: '表叔', romanization: 'biu2 suk1' },
  grand_aunts_daughter_cross: { characters: '表姑', romanization: 'biu2 gu1' },
  grand_uncles_sons_wife: { characters: '從堂嬸', romanization: 'cung4 tong4 sam2' },
  grand_uncles_daughters_husband: { characters: '從堂姑丈', romanization: 'cung4 tong4 gu1 zoeng6' },
  grand_aunts_sons_wife: { characters: '姑表嬸', romanization: 'gu1 biu2 sam2' },
  grand_aunts_daughters_husband: { characters: '姑表姑丈', romanization: 'gu1 biu2 gu1 zoeng6' },

  // Grand-uncles/aunts' spouses (other lines)
  grand_maternal_uncles_wife_p: { characters: '舅婆', romanization: 'kau5 po4', notes: "Paternal grandmother's brother's wife" },
  grand_maternal_aunts_husband_p: { characters: '姨公', romanization: 'ji4 gung1' },
  grand_paternal_uncles_wife_m: { characters: '伯婆', romanization: 'baak3 po4', alternates: ['叔婆'] },
  grand_paternal_aunts_husband_m: { characters: '姑公', romanization: 'gu1 gung1' },
  grand_maternal_uncles_wife_m: { characters: '舅婆', romanization: 'kau5 po4' },
  grand_maternal_aunts_husband_m: { characters: '姨公', romanization: 'ji4 gung1' },

  // Second cousins (從堂/從表)
  cong_tang_brother: { characters: '從堂兄', romanization: 'cung4 tong4 hing1', alternates: ['從堂弟'] },
  cong_tang_sister: { characters: '從堂姐', romanization: 'cung4 tong4 ze2', alternates: ['從堂妹'] },
  cong_tang_brothers_wife: { characters: '從堂嫂', romanization: 'cung4 tong4 sou2' },
  cong_tang_sisters_husband: { characters: '從堂姐夫', romanization: 'cung4 tong4 ze2 fu1' },
  cong_tang_nephew: { characters: '從堂姪', romanization: 'cung4 tong4 zat6' },
  cong_tang_niece: { characters: '從堂姪女', romanization: 'cung4 tong4 zat6 neoi5' },
  cong_biao_brother: { characters: '從表兄', romanization: 'cung4 biu2 hing1', alternates: ['從表弟'] },
  cong_biao_sister: { characters: '從表姐', romanization: 'cung4 biu2 ze2', alternates: ['從表妹'] },
  cong_biao_brothers_wife: { characters: '從表嫂', romanization: 'cung4 biu2 sou2' },
  cong_biao_sisters_husband: { characters: '從表姐夫', romanization: 'cung4 biu2 ze2 fu1' },
  cong_biao_nephew: { characters: '從表姪', romanization: 'cung4 biu2 zat6' },
  cong_biao_niece: { characters: '從表姪女', romanization: 'cung4 biu2 zat6 neoi5' },

  // Tang/biao grand-nephews/nieces
  tang_grandnephew: { characters: '堂姪孫', romanization: 'tong4 zat6 syun1' },
  tang_grandniece: { characters: '堂姪孫女', romanization: 'tong4 zat6 syun1 neoi5' },
  biao_grandnephew: { characters: '表姪孫', romanization: 'biu2 zat6 syun1' },
  biao_grandniece: { characters: '表姪孫女', romanization: 'biu2 zat6 syun1 neoi5' },
  grandnieces_husband: { characters: '姪孫女婿', romanization: 'zat6 syun1 neoi5 sai3' },

  // Great-grandchildren's spouses
  great_grandsons_wife: { characters: '曾孫新抱', romanization: 'cang4 syun1 san1 pou5' },
  great_granddaughters_husband: { characters: '曾孫女婿', romanization: 'cang4 syun1 neoi5 sai3' },

  // Great-great-grandparents (高祖)
  gao_grandfather_p: { characters: '高祖父', romanization: 'gou1 zou2 fu6' },
  gao_grandmother_p: { characters: '高祖母', romanization: 'gou1 zou2 mou5' },
  gao_grandfather_m: { characters: '外高祖父', romanization: 'ngoi6 gou1 zou2 fu6' },
  gao_grandmother_m: { characters: '外高祖母', romanization: 'ngoi6 gou1 zou2 mou5' },

  // Great-great-grandchildren (玄孫)
  xuan_grandson: { characters: '玄孫', romanization: 'jyun4 syun1' },
  xuan_granddaughter: { characters: '玄孫女', romanization: 'jyun4 syun1 neoi5' },

  // Great-grand-uncles/aunts
  great_grand_uncle: { characters: '曾伯叔祖', romanization: 'cang4 baak3 suk1 zou2', notes: "Great-grandfather's brother" },
  great_grand_uncles_wife: { characters: '曾伯叔祖母', romanization: 'cang4 baak3 suk1 zou2 mou5' },
  great_grand_aunt: { characters: '曾姑祖', romanization: 'cang4 gu1 zou2' },
  great_grand_aunts_husband: { characters: '曾姑祖丈', romanization: 'cang4 gu1 zou2 zoeng6' },

  // Siblings-in-law extended families
  older_brothers_wifes_father: { characters: '嫂嘅父親', romanization: 'sou2 ge3 fu6 can1', notes: 'No standard kinship term' },
  older_brothers_wifes_mother: { characters: '嫂嘅母親', romanization: 'sou2 ge3 mou5 can1', notes: 'No standard kinship term' },
  older_brothers_wifes_brother: { characters: '嫂嘅兄弟', romanization: 'sou2 ge3 hing1 dai6', notes: "Brother-in-law's sibling" },
  older_brothers_wifes_sister: { characters: '嫂嘅姐妹', romanization: 'sou2 ge3 ze2 mui6', notes: "Brother-in-law's sibling" },
  younger_brothers_wifes_father: { characters: '弟婦嘅父親', romanization: 'dai6 fu5 ge3 fu6 can1', notes: 'No standard kinship term' },
  younger_brothers_wifes_mother: { characters: '弟婦嘅母親', romanization: 'dai6 fu5 ge3 mou5 can1', notes: 'No standard kinship term' },
  younger_brothers_wifes_brother: { characters: '弟婦嘅兄弟', romanization: 'dai6 fu5 ge3 hing1 dai6', notes: 'No standard kinship term' },
  younger_brothers_wifes_sister: { characters: '弟婦嘅姐妹', romanization: 'dai6 fu5 ge3 ze2 mui6', notes: 'No standard kinship term' },
  older_sisters_husbands_father: { characters: '姐夫嘅父親', romanization: 'ze2 fu1 ge3 fu6 can1', notes: 'No standard kinship term' },
  older_sisters_husbands_mother: { characters: '姐夫嘅母親', romanization: 'ze2 fu1 ge3 mou5 can1', notes: 'No standard kinship term' },
  older_sisters_husbands_brother: { characters: '姐夫嘅兄弟', romanization: 'ze2 fu1 ge3 hing1 dai6', notes: 'No standard kinship term' },
  older_sisters_husbands_sister: { characters: '姐夫嘅姐妹', romanization: 'ze2 fu1 ge3 ze2 mui6', notes: 'No standard kinship term' },
  younger_sisters_husbands_father: { characters: '妹夫嘅父親', romanization: 'mui6 fu1 ge3 fu6 can1', notes: 'No standard kinship term' },
  younger_sisters_husbands_mother: { characters: '妹夫嘅母親', romanization: 'mui6 fu1 ge3 mou5 can1', notes: 'No standard kinship term' },
  younger_sisters_husbands_brother: { characters: '妹夫嘅兄弟', romanization: 'mui6 fu1 ge3 hing1 dai6', notes: 'No standard kinship term' },
  younger_sisters_husbands_sister: { characters: '妹夫嘅姐妹', romanization: 'mui6 fu1 ge3 ze2 mui6', notes: 'No standard kinship term' },

  // Uncle/aunt in-law parents
  fathers_older_brothers_wifes_father: { characters: '伯娘嘅父親', romanization: 'baak3 noeng4 ge3 fu6 can1', notes: 'No standard kinship term' },
  fathers_older_brothers_wifes_mother: { characters: '伯娘嘅母親', romanization: 'baak3 noeng4 ge3 mou5 can1', notes: 'No standard kinship term' },
  fathers_younger_brothers_wifes_father: { characters: '嬸母嘅父親', romanization: 'sam2 mou5 ge3 fu6 can1', notes: 'No standard kinship term' },
  fathers_younger_brothers_wifes_mother: { characters: '嬸母嘅母親', romanization: 'sam2 mou5 ge3 mou5 can1', notes: 'No standard kinship term' },
  paternal_aunts_husbands_father: { characters: '姑丈嘅父親', romanization: 'gu1 zoeng6 ge3 fu6 can1', notes: 'No standard kinship term' },
  paternal_aunts_husbands_mother: { characters: '姑丈嘅母親', romanization: 'gu1 zoeng6 ge3 mou5 can1', notes: 'No standard kinship term' },

  // Spouse's extended in-law spouses
  husbands_paternal_uncles_wife: { characters: '伯婆', romanization: 'baak3 po4', alternates: ['叔婆'], notes: "Husband's father's brother's wife" },
  husbands_paternal_aunts_husband: { characters: '姑公', romanization: 'gu1 gung1', notes: "Husband's paternal aunt's husband" },
  husbands_maternal_uncles_wife: { characters: '舅婆', romanization: 'kau5 po4', notes: "Husband's maternal uncle's wife" },
  husbands_maternal_aunts_husband: { characters: '姨公', romanization: 'ji4 gung1', notes: "Husband's maternal aunt's husband" },
  wifes_paternal_uncles_wife: { characters: '岳伯母', romanization: 'ngok6 baak3 mou5', notes: "Wife's father's brother's wife" },
  wifes_paternal_aunts_husband: { characters: '岳姑丈', romanization: 'ngok6 gu1 zoeng6', notes: "Wife's paternal aunt's husband" },
  wifes_maternal_uncles_wife: { characters: '岳舅母', romanization: 'ngok6 kau5 mou5', notes: "Wife's maternal uncle's wife" },
  wifes_maternal_aunts_husband: { characters: '岳姨丈', romanization: 'ngok6 ji4 zoeng6', notes: "Wife's maternal aunt's husband" },
};
