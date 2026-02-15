import { DialectTerm } from '@/lib/types';

/**
 * Hokkien (闽南话) kinship terms.
 * Romanization uses Pe̍h-ōe-jī (POJ) system.
 */
export const HOKKIEN_TERMS: Record<string, DialectTerm> = {
  // Direct family
  father: { characters: '阿爸', romanization: 'a-pah', alternates: ['老爸', '爸'] },
  mother: { characters: '阿母', romanization: 'a-bú', alternates: ['老母', '阿媽'] },
  husband: { characters: '翁', romanization: 'ang', alternates: ['翁婿', '老公'] },
  wife: { characters: '某', romanization: 'bó͘', alternates: ['牽手', '太太'] },
  older_brother: { characters: '阿兄', romanization: 'a-hiaⁿ' },
  younger_brother: { characters: '小弟', romanization: 'sió-tī' },
  older_sister: { characters: '阿姊', romanization: 'a-chí' },
  younger_sister: { characters: '小妹', romanization: 'sió-moāi' },
  son: { characters: '後生', romanization: 'hāu-seⁿ', alternates: ['囝'] },
  daughter: { characters: '查某囝', romanization: 'cha-bó͘-kiáⁿ' },

  // Paternal grandparents
  paternal_grandfather: { characters: '阿公', romanization: 'a-kong' },
  paternal_grandmother: { characters: '阿嬤', romanization: 'a-má' },

  // Paternal uncles & aunts
  fathers_older_brother: { characters: '阿伯', romanization: 'a-peh', alternates: ['伯父'] },
  fathers_younger_brother: { characters: '阿叔', romanization: 'a-chek' },
  fathers_older_brothers_wife: { characters: '阿姆', romanization: 'a-ḿ', alternates: ['伯母'] },
  fathers_younger_brothers_wife: { characters: '阿嬸', romanization: 'a-chím' },
  paternal_aunt: { characters: '阿姑', romanization: 'a-ko͘' },
  paternal_aunts_husband: { characters: '姑丈', romanization: 'ko͘-tiūⁿ' },

  // Paternal cousins
  paternal_uncle_older_son: { characters: '堂兄', romanization: 'tông-hiaⁿ' },
  paternal_uncle_older_daughter: { characters: '堂姊', romanization: 'tông-chí' },
  paternal_uncle_younger_son: { characters: '堂弟', romanization: 'tông-tī' },
  paternal_uncle_younger_daughter: { characters: '堂妹', romanization: 'tông-moāi' },
  paternal_aunts_son: { characters: '表兄', romanization: 'piáu-hiaⁿ', alternates: ['表弟'] },
  paternal_aunts_daughter: { characters: '表姊', romanization: 'piáu-chí', alternates: ['表妹'] },

  // Maternal grandparents
  maternal_grandfather: { characters: '外公', romanization: 'goā-kong' },
  maternal_grandmother: { characters: '外嬤', romanization: 'goā-má' },

  // Maternal uncles & aunts
  maternal_uncle: { characters: '阿舅', romanization: 'a-kū' },
  maternal_uncles_wife: { characters: '舅妗', romanization: 'kū-kīm', alternates: ['阿妗'] },
  maternal_aunt: { characters: '阿姨', romanization: 'a-î' },
  maternal_aunts_husband: { characters: '姨丈', romanization: 'î-tiūⁿ' },

  // Maternal cousins
  maternal_uncles_son: { characters: '表兄', romanization: 'piáu-hiaⁿ', alternates: ['表弟'] },
  maternal_uncles_daughter: { characters: '表姊', romanization: 'piáu-chí', alternates: ['表妹'] },
  maternal_aunts_son: { characters: '表兄', romanization: 'piáu-hiaⁿ', alternates: ['表弟'] },
  maternal_aunts_daughter: { characters: '表姊', romanization: 'piáu-chí', alternates: ['表妹'] },

  // Siblings' spouses
  older_brothers_wife: { characters: '阿嫂', romanization: 'a-só' },
  younger_brothers_wife: { characters: '弟婦', romanization: 'tē-hū' },
  older_sisters_husband: { characters: '姊夫', romanization: 'chí-hu' },
  younger_sisters_husband: { characters: '妹夫', romanization: 'moāi-hu' },

  // Siblings' children
  brothers_son: { characters: '姪仔', romanization: 'ti̍t-á' },
  brothers_daughter: { characters: '姪女', romanization: 'ti̍t-lú' },
  sisters_son: { characters: '外甥', romanization: 'goē-seng' },
  sisters_daughter: { characters: '外甥女', romanization: 'goē-seng-lú' },

  // Children's spouses
  sons_wife: { characters: '新婦', romanization: 'sin-pū', alternates: ['媳婦'] },
  daughters_husband: { characters: '囝婿', romanization: 'kiáⁿ-sài' },

  // Grandchildren
  sons_son: { characters: '孫仔', romanization: 'sun-á' },
  sons_daughter: { characters: '孫女', romanization: 'sun-lú' },
  daughters_son: { characters: '外孫', romanization: 'goē-sun' },
  daughters_daughter: { characters: '外孫女', romanization: 'goē-sun-lú' },

  // Husband's family
  husbands_father: { characters: '大官', romanization: 'ta-koaⁿ', alternates: ['公公'] },
  husbands_mother: { characters: '大家', romanization: 'ta-ke', alternates: ['婆婆'] },
  husbands_older_brother: { characters: '大伯', romanization: 'toā-peh' },
  husbands_younger_brother: { characters: '小叔', romanization: 'sió-chek' },
  husbands_older_sister: { characters: '大姑', romanization: 'toā-ko͘' },
  husbands_younger_sister: { characters: '小姑', romanization: 'sió-ko͘' },
  husbands_older_brothers_wife: { characters: '妯娌', romanization: 'tiú-lí' },
  husbands_younger_brothers_wife: { characters: '妯娌', romanization: 'tiú-lí' },
  husbands_sisters_husband: { characters: '連襟', romanization: 'liân-khim' },

  // Wife's family
  wifes_father: { characters: '丈人', romanization: 'tiūⁿ-lâng', alternates: ['岳父'] },
  wifes_mother: { characters: '丈姆', romanization: 'tiūⁿ-ḿ', alternates: ['岳母'] },
  wifes_brother: { characters: '舅仔', romanization: 'kū-á', alternates: ['大舅', '小舅'] },
  wifes_older_sister: { characters: '大姨', romanization: 'toā-î' },
  wifes_younger_sister: { characters: '小姨', romanization: 'sió-î' },
  wifes_brothers_wife: { characters: '舅嫂', romanization: 'kū-só' },
  wifes_sisters_husband: { characters: '連襟', romanization: 'liân-khim' },

  // Great-grandparents
  paternal_great_grandfather: { characters: '阿祖', romanization: 'a-chó͘', notes: 'Paternal great-grandfather' },
  paternal_great_grandmother: { characters: '阿祖媽', romanization: 'a-chó͘-má' },
  maternal_great_grandfather: { characters: '外祖公', romanization: 'goā-chó͘-kong' },
  maternal_great_grandmother: { characters: '外祖媽', romanization: 'goā-chó͘-má' },
  maternal_great_grandfather_m: { characters: '外祖公', romanization: 'goā-chó͘-kong' },
  maternal_great_grandmother_m: { characters: '外祖媽', romanization: 'goā-chó͘-má' },
  paternal_great_grandfather_m: { characters: '阿祖', romanization: 'a-chó͘' },
  paternal_great_grandmother_m: { characters: '阿祖媽', romanization: 'a-chó͘-má' },

  // Great-grandchildren
  great_grandson_p: { characters: '曾孫', romanization: 'cheng-sun' },
  great_granddaughter_p: { characters: '曾孫女', romanization: 'cheng-sun-lú' },
  great_grandson_m: { characters: '外曾孫', romanization: 'goē-cheng-sun' },
  great_granddaughter_m: { characters: '外曾孫女', romanization: 'goē-cheng-sun-lú' },

  // In-law parents
  sons_wifes_father: { characters: '親家公', romanization: 'chhin-ke-kong' },
  sons_wifes_mother: { characters: '親家母', romanization: 'chhin-ke-bó' },
  daughters_husbands_father: { characters: '親家公', romanization: 'chhin-ke-kong' },
  daughters_husbands_mother: { characters: '親家母', romanization: 'chhin-ke-bó' },

  // === CONTINUATION TERMS ===

  // Tang cousins' spouses
  tang_older_brothers_wife: { characters: '堂嫂', romanization: 'tông-só' },
  tang_younger_brothers_wife: { characters: '堂弟婦', romanization: 'tông-tē-hū' },
  tang_older_sisters_husband: { characters: '堂姊夫', romanization: 'tông-chí-hu' },
  tang_younger_sisters_husband: { characters: '堂妹夫', romanization: 'tông-moāi-hu' },

  tang_nephew: { characters: '堂姪', romanization: 'tông-ti̍t' },
  tang_niece: { characters: '堂姪女', romanization: 'tông-ti̍t-lú' },
  tang_nephews_wife: { characters: '堂姪婦', romanization: 'tông-ti̍t-hū' },
  tang_nieces_husband: { characters: '堂姪婿', romanization: 'tông-ti̍t-sài' },

  biao_brothers_wife: { characters: '表嫂', romanization: 'piáu-só' },
  biao_sisters_husband: { characters: '表姊夫', romanization: 'piáu-chí-hu' },

  biao_nephew: { characters: '表姪', romanization: 'piáu-ti̍t' },
  biao_niece: { characters: '表姪女', romanization: 'piáu-ti̍t-lú' },
  biao_nephews_wife: { characters: '表姪婦', romanization: 'piáu-ti̍t-hū' },
  biao_nieces_husband: { characters: '表姪婿', romanization: 'piáu-ti̍t-sài' },

  // Nephews/nieces' spouses
  nephews_wife: { characters: '姪婦', romanization: 'ti̍t-hū' },
  nieces_husband: { characters: '姪婿', romanization: 'ti̍t-sài' },
  sisters_sons_wife: { characters: '外甥婦', romanization: 'goē-seng-hū' },
  sisters_daughters_husband: { characters: '外甥婿', romanization: 'goē-seng-sài' },

  // Grand-nephews/nieces
  grandnephew: { characters: '姪孫', romanization: 'ti̍t-sun' },
  grandniece: { characters: '姪孫女', romanization: 'ti̍t-sun-lú' },
  sisters_grandchild_son: { characters: '外甥孫', romanization: 'goē-seng-sun' },
  sisters_grandchild_daughter: { characters: '外甥孫女', romanization: 'goē-seng-sun-lú' },
  grandnephews_wife: { characters: '姪孫婦', romanization: 'ti̍t-sun-hū' },

  // Grandchildren's spouses
  grandsons_wife: { characters: '孫婦', romanization: 'sun-hū' },
  granddaughters_husband: { characters: '孫婿', romanization: 'sun-sài' },

  // Grandparents' siblings
  grand_paternal_uncle_older: { characters: '伯公', romanization: 'peh-kong' },
  grand_paternal_uncle_younger: { characters: '叔公', romanization: 'chek-kong' },
  grand_paternal_aunt: { characters: '姑婆', romanization: 'ko͘-pô' },
  grand_paternal_uncles_wife: { characters: '伯婆', romanization: 'peh-pô' },
  grand_paternal_aunts_husband: { characters: '姑公', romanization: 'ko͘-kong' },
  grand_maternal_uncle_p: { characters: '舅公', romanization: 'kū-kong' },
  grand_maternal_aunt_p: { characters: '姨婆', romanization: 'î-pô' },
  grand_paternal_uncle_m: { characters: '舅公', romanization: 'kū-kong' },
  grand_paternal_aunt_m: { characters: '姑婆', romanization: 'ko͘-pô' },
  grand_maternal_uncle_m: { characters: '舅公', romanization: 'kū-kong' },
  grand_maternal_aunt_m: { characters: '姨婆', romanization: 'î-pô' },

  // Husband's extended family
  husbands_nephew: { characters: '姪仔', romanization: 'ti̍t-á', notes: "Husband's nephew" },
  husbands_niece: { characters: '姪女', romanization: 'ti̍t-lú', notes: "Husband's niece" },
  husbands_grandfather: { characters: '阿公', romanization: 'a-kong', notes: "Husband's grandfather" },
  husbands_grandmother: { characters: '阿嬤', romanization: 'a-má', notes: "Husband's grandmother" },
  husbands_paternal_uncle_older: { characters: '伯公', romanization: 'peh-kong', notes: "Husband's father's older brother" },
  husbands_paternal_uncle_younger: { characters: '叔公', romanization: 'chek-kong', notes: "Husband's father's younger brother" },
  husbands_paternal_aunt: { characters: '姑奶', romanization: 'ko͘-nái', notes: "Husband's paternal aunt" },
  husbands_maternal_uncle: { characters: '舅公', romanization: 'kū-kong', notes: "Husband's maternal uncle" },
  husbands_maternal_aunt: { characters: '姨奶', romanization: 'î-nái', notes: "Husband's maternal aunt" },

  // Wife's extended family
  wifes_nephew: { characters: '內姪', romanization: 'lāi-ti̍t', notes: "Wife's nephew" },
  wifes_niece: { characters: '內姪女', romanization: 'lāi-ti̍t-lú', notes: "Wife's niece" },
  wifes_grandfather: { characters: '丈祖', romanization: 'tiūⁿ-chó͘', notes: "Wife's grandfather" },
  wifes_grandmother: { characters: '丈祖媽', romanization: 'tiūⁿ-chó͘-má', notes: "Wife's grandmother" },
  wifes_paternal_uncle_older: { characters: '丈伯', romanization: 'tiūⁿ-peh', notes: "Wife's father's older brother" },
  wifes_paternal_uncle_younger: { characters: '丈叔', romanization: 'tiūⁿ-chek', notes: "Wife's father's younger brother" },
  wifes_paternal_aunt: { characters: '丈姑', romanization: 'tiūⁿ-ko͘', notes: "Wife's paternal aunt" },
  wifes_maternal_uncle: { characters: '丈舅', romanization: 'tiūⁿ-kū', notes: "Wife's maternal uncle" },
  wifes_maternal_aunt: { characters: '丈姨', romanization: 'tiūⁿ-î', notes: "Wife's maternal aunt" },

  // Children's in-law siblings
  sons_wifes_brother: { characters: '親家舅', romanization: 'chhin-ke-kū' },
  sons_wifes_sister: { characters: '親家姨', romanization: 'chhin-ke-î' },
  daughters_husbands_brother: { characters: '親家舅', romanization: 'chhin-ke-kū' },
  daughters_husbands_sister: { characters: '親家姨', romanization: 'chhin-ke-î' },

  // Grand-uncles/aunts' children
  grand_uncles_son: { characters: '從堂叔', romanization: 'chiông-tông-chek', notes: "Grandfather's brother's son" },
  grand_uncles_daughter: { characters: '從堂姑', romanization: 'chiông-tông-ko͘', notes: "Grandfather's brother's daughter" },
  grand_aunts_son: { characters: '姑表叔', romanization: 'ko͘-piáu-chek' },
  grand_aunts_daughter: { characters: '姑表姑', romanization: 'ko͘-piáu-ko͘' },
  grand_uncles_son_cross: { characters: '表叔', romanization: 'piáu-chek', notes: "Grandparent's sibling's son (cross)" },
  grand_uncles_daughter_cross: { characters: '表姑', romanization: 'piáu-ko͘', notes: "Grandparent's sibling's daughter (cross)" },
  grand_aunts_son_cross: { characters: '表叔', romanization: 'piáu-chek' },
  grand_aunts_daughter_cross: { characters: '表姑', romanization: 'piáu-ko͘' },
  grand_uncles_sons_wife: { characters: '從堂嬸', romanization: 'chiông-tông-chím' },
  grand_uncles_daughters_husband: { characters: '從堂姑丈', romanization: 'chiông-tông-ko͘-tiūⁿ' },
  grand_aunts_sons_wife: { characters: '姑表嬸', romanization: 'ko͘-piáu-chím' },
  grand_aunts_daughters_husband: { characters: '姑表姑丈', romanization: 'ko͘-piáu-ko͘-tiūⁿ' },

  // Grand-uncles/aunts' spouses (other lines)
  grand_maternal_uncles_wife_p: { characters: '舅婆', romanization: 'kū-pô', notes: "Paternal grandmother's brother's wife" },
  grand_maternal_aunts_husband_p: { characters: '姨公', romanization: 'î-kong' },
  grand_paternal_uncles_wife_m: { characters: '伯婆', romanization: 'peh-pô', alternates: ['叔婆'] },
  grand_paternal_aunts_husband_m: { characters: '姑公', romanization: 'ko͘-kong' },
  grand_maternal_uncles_wife_m: { characters: '舅婆', romanization: 'kū-pô' },
  grand_maternal_aunts_husband_m: { characters: '姨公', romanization: 'î-kong' },

  // Second cousins (從堂/從表)
  cong_tang_brother: { characters: '從堂兄', romanization: 'chiông-tông-hiaⁿ', alternates: ['從堂弟'] },
  cong_tang_sister: { characters: '從堂姊', romanization: 'chiông-tông-chí', alternates: ['從堂妹'] },
  cong_tang_brothers_wife: { characters: '從堂嫂', romanization: 'chiông-tông-só' },
  cong_tang_sisters_husband: { characters: '從堂姊夫', romanization: 'chiông-tông-chí-hu' },
  cong_tang_nephew: { characters: '從堂姪', romanization: 'chiông-tông-ti̍t' },
  cong_tang_niece: { characters: '從堂姪女', romanization: 'chiông-tông-ti̍t-lú' },
  cong_biao_brother: { characters: '從表兄', romanization: 'chiông-piáu-hiaⁿ', alternates: ['從表弟'] },
  cong_biao_sister: { characters: '從表姊', romanization: 'chiông-piáu-chí', alternates: ['從表妹'] },
  cong_biao_brothers_wife: { characters: '從表嫂', romanization: 'chiông-piáu-só' },
  cong_biao_sisters_husband: { characters: '從表姊夫', romanization: 'chiông-piáu-chí-hu' },
  cong_biao_nephew: { characters: '從表姪', romanization: 'chiông-piáu-ti̍t' },
  cong_biao_niece: { characters: '從表姪女', romanization: 'chiông-piáu-ti̍t-lú' },

  // Tang/biao grand-nephews/nieces
  tang_grandnephew: { characters: '堂姪孫', romanization: 'tông-ti̍t-sun' },
  tang_grandniece: { characters: '堂姪孫女', romanization: 'tông-ti̍t-sun-lú' },
  biao_grandnephew: { characters: '表姪孫', romanization: 'piáu-ti̍t-sun' },
  biao_grandniece: { characters: '表姪孫女', romanization: 'piáu-ti̍t-sun-lú' },
  grandnieces_husband: { characters: '姪孫婿', romanization: 'ti̍t-sun-sài' },

  // Great-grandchildren's spouses
  great_grandsons_wife: { characters: '曾孫婦', romanization: 'cheng-sun-hū' },
  great_granddaughters_husband: { characters: '曾孫婿', romanization: 'cheng-sun-sài' },

  // Great-great-grandparents (高祖)
  gao_grandfather_p: { characters: '高祖父', romanization: 'ko-chó͘-hū' },
  gao_grandmother_p: { characters: '高祖母', romanization: 'ko-chó͘-bó' },
  gao_grandfather_m: { characters: '外高祖父', romanization: 'goā-ko-chó͘-hū' },
  gao_grandmother_m: { characters: '外高祖母', romanization: 'goā-ko-chó͘-bó' },

  // Great-great-grandchildren (玄孫)
  xuan_grandson: { characters: '玄孫', romanization: 'hiân-sun' },
  xuan_granddaughter: { characters: '玄孫女', romanization: 'hiân-sun-lú' },

  // Great-grand-uncles/aunts
  great_grand_uncle: { characters: '曾伯叔祖', romanization: 'cheng-peh-chek-chó͘', notes: "Great-grandfather's brother" },
  great_grand_uncles_wife: { characters: '曾伯叔祖母', romanization: 'cheng-peh-chek-chó͘-bó' },
  great_grand_aunt: { characters: '曾姑祖', romanization: 'cheng-ko͘-chó͘' },
  great_grand_aunts_husband: { characters: '曾姑祖丈', romanization: 'cheng-ko͘-chó͘-tiūⁿ' },

  // Siblings-in-law extended families
  older_brothers_wifes_father: { characters: '嫂的父親', romanization: 'só ê hū-chhin', notes: 'No standard kinship term' },
  older_brothers_wifes_mother: { characters: '嫂的母親', romanization: 'só ê bó-chhin', notes: 'No standard kinship term' },
  older_brothers_wifes_brother: { characters: '嫂的兄弟', romanization: 'só ê hiaⁿ-tī', notes: "Brother-in-law's sibling" },
  older_brothers_wifes_sister: { characters: '嫂的姊妹', romanization: 'só ê chí-moāi', notes: "Brother-in-law's sibling" },
  younger_brothers_wifes_father: { characters: '弟婦的父親', romanization: 'tē-hū ê hū-chhin', notes: 'No standard kinship term' },
  younger_brothers_wifes_mother: { characters: '弟婦的母親', romanization: 'tē-hū ê bó-chhin', notes: 'No standard kinship term' },
  younger_brothers_wifes_brother: { characters: '弟婦的兄弟', romanization: 'tē-hū ê hiaⁿ-tī', notes: 'No standard kinship term' },
  younger_brothers_wifes_sister: { characters: '弟婦的姊妹', romanization: 'tē-hū ê chí-moāi', notes: 'No standard kinship term' },
  older_sisters_husbands_father: { characters: '姊夫的父親', romanization: 'chí-hu ê hū-chhin', notes: 'No standard kinship term' },
  older_sisters_husbands_mother: { characters: '姊夫的母親', romanization: 'chí-hu ê bó-chhin', notes: 'No standard kinship term' },
  older_sisters_husbands_brother: { characters: '姊夫的兄弟', romanization: 'chí-hu ê hiaⁿ-tī', notes: 'No standard kinship term' },
  older_sisters_husbands_sister: { characters: '姊夫的姊妹', romanization: 'chí-hu ê chí-moāi', notes: 'No standard kinship term' },
  younger_sisters_husbands_father: { characters: '妹夫的父親', romanization: 'moāi-hu ê hū-chhin', notes: 'No standard kinship term' },
  younger_sisters_husbands_mother: { characters: '妹夫的母親', romanization: 'moāi-hu ê bó-chhin', notes: 'No standard kinship term' },
  younger_sisters_husbands_brother: { characters: '妹夫的兄弟', romanization: 'moāi-hu ê hiaⁿ-tī', notes: 'No standard kinship term' },
  younger_sisters_husbands_sister: { characters: '妹夫的姊妹', romanization: 'moāi-hu ê chí-moāi', notes: 'No standard kinship term' },

  // Uncle/aunt in-law parents
  fathers_older_brothers_wifes_father: { characters: '伯母的父親', romanization: 'peh-bó ê hū-chhin', notes: 'No standard kinship term' },
  fathers_older_brothers_wifes_mother: { characters: '伯母的母親', romanization: 'peh-bó ê bó-chhin', notes: 'No standard kinship term' },
  fathers_younger_brothers_wifes_father: { characters: '嬸母的父親', romanization: 'chím-bó ê hū-chhin', notes: 'No standard kinship term' },
  fathers_younger_brothers_wifes_mother: { characters: '嬸母的母親', romanization: 'chím-bó ê bó-chhin', notes: 'No standard kinship term' },
  paternal_aunts_husbands_father: { characters: '姑丈的父親', romanization: 'ko͘-tiūⁿ ê hū-chhin', notes: 'No standard kinship term' },
  paternal_aunts_husbands_mother: { characters: '姑丈的母親', romanization: 'ko͘-tiūⁿ ê bó-chhin', notes: 'No standard kinship term' },

  // Spouse's extended in-law spouses
  husbands_paternal_uncles_wife: { characters: '伯婆', romanization: 'peh-pô', alternates: ['叔婆'], notes: "Husband's father's brother's wife" },
  husbands_paternal_aunts_husband: { characters: '姑公', romanization: 'ko͘-kong', notes: "Husband's paternal aunt's husband" },
  husbands_maternal_uncles_wife: { characters: '舅婆', romanization: 'kū-pô', notes: "Husband's maternal uncle's wife" },
  husbands_maternal_aunts_husband: { characters: '姨公', romanization: 'î-kong', notes: "Husband's maternal aunt's husband" },
  wifes_paternal_uncles_wife: { characters: '岳伯母', romanization: 'ga̍k-peh-bó', notes: "Wife's father's brother's wife" },
  wifes_paternal_aunts_husband: { characters: '岳姑丈', romanization: 'ga̍k-ko͘-tiūⁿ', notes: "Wife's paternal aunt's husband" },
  wifes_maternal_uncles_wife: { characters: '岳舅母', romanization: 'ga̍k-kū-bó', notes: "Wife's maternal uncle's wife" },
  wifes_maternal_aunts_husband: { characters: '岳姨丈', romanization: 'ga̍k-î-tiūⁿ', notes: "Wife's maternal aunt's husband" },
};
