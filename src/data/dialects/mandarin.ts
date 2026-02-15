import { DialectTerm } from '@/lib/types';

export const MANDARIN_TERMS: Record<string, DialectTerm> = {
  // Direct family
  father: { characters: '爸爸', romanization: 'bàba', alternates: ['父亲'] },
  mother: { characters: '妈妈', romanization: 'māma', alternates: ['母亲'] },
  husband: { characters: '丈夫', romanization: 'zhàngfu', alternates: ['老公', '先生'] },
  wife: { characters: '妻子', romanization: 'qīzi', alternates: ['老婆', '太太'] },
  older_brother: { characters: '哥哥', romanization: 'gēge' },
  younger_brother: { characters: '弟弟', romanization: 'dìdi' },
  older_sister: { characters: '姐姐', romanization: 'jiějie' },
  younger_sister: { characters: '妹妹', romanization: 'mèimei' },
  son: { characters: '儿子', romanization: 'érzi' },
  daughter: { characters: '女儿', romanization: 'nǚ\'ér' },

  // Paternal grandparents
  paternal_grandfather: { characters: '爷爷', romanization: 'yéye', alternates: ['祖父'] },
  paternal_grandmother: { characters: '奶奶', romanization: 'nǎinai', alternates: ['祖母'] },

  // Paternal uncles & aunts
  fathers_older_brother: { characters: '伯伯', romanization: 'bóbo', alternates: ['伯父', '大伯'] },
  fathers_younger_brother: { characters: '叔叔', romanization: 'shūshu', alternates: ['叔父'] },
  fathers_older_brothers_wife: { characters: '伯母', romanization: 'bómǔ', alternates: ['伯娘'] },
  fathers_younger_brothers_wife: { characters: '婶婶', romanization: 'shěnshen', alternates: ['婶母', '婶娘'] },
  paternal_aunt: { characters: '姑姑', romanization: 'gūgu', alternates: ['姑妈', '姑母'] },
  paternal_aunts_husband: { characters: '姑丈', romanization: 'gūzhàng', alternates: ['姑父'] },

  // Paternal cousins (from uncle)
  paternal_uncle_older_son: { characters: '堂哥', romanization: 'tánggē', notes: 'Older male paternal cousin (from uncle)' },
  paternal_uncle_older_daughter: { characters: '堂姐', romanization: 'tángjiě', notes: 'Older female paternal cousin (from uncle)' },
  paternal_uncle_younger_son: { characters: '堂弟', romanization: 'tángdì', notes: 'Younger male paternal cousin (from uncle)' },
  paternal_uncle_younger_daughter: { characters: '堂妹', romanization: 'tángmèi', notes: 'Younger female paternal cousin (from uncle)' },

  // Paternal cousins (from aunt)
  paternal_aunts_son: { characters: '表哥', romanization: 'biǎogē', notes: 'Male cousin from paternal aunt (use 表弟 if younger)', alternates: ['表弟'] },
  paternal_aunts_daughter: { characters: '表姐', romanization: 'biǎojiě', notes: 'Female cousin from paternal aunt (use 表妹 if younger)', alternates: ['表妹'] },

  // Maternal grandparents
  maternal_grandfather: { characters: '外公', romanization: 'wàigōng', alternates: ['姥爷', '外祖父'] },
  maternal_grandmother: { characters: '外婆', romanization: 'wàipó', alternates: ['姥姥', '外祖母'] },

  // Maternal uncles & aunts
  maternal_uncle: { characters: '舅舅', romanization: 'jiùjiu', alternates: ['舅父'] },
  maternal_uncles_wife: { characters: '舅妈', romanization: 'jiùmā', alternates: ['舅母'] },
  maternal_aunt: { characters: '阿姨', romanization: 'āyí', alternates: ['姨妈', '姨母'] },
  maternal_aunts_husband: { characters: '姨丈', romanization: 'yízhàng', alternates: ['姨父'] },

  // Maternal cousins
  maternal_uncles_son: { characters: '表哥', romanization: 'biǎogē', notes: 'Male cousin from maternal uncle (use 表弟 if younger)', alternates: ['表弟'] },
  maternal_uncles_daughter: { characters: '表姐', romanization: 'biǎojiě', notes: 'Female cousin from maternal uncle (use 表妹 if younger)', alternates: ['表妹'] },
  maternal_aunts_son: { characters: '表哥', romanization: 'biǎogē', notes: 'Male cousin from maternal aunt (use 表弟 if younger)', alternates: ['表弟'] },
  maternal_aunts_daughter: { characters: '表姐', romanization: 'biǎojiě', notes: 'Female cousin from maternal aunt (use 表妹 if younger)', alternates: ['表妹'] },

  // Siblings' spouses
  older_brothers_wife: { characters: '嫂嫂', romanization: 'sǎosao', alternates: ['嫂子', '大嫂'] },
  younger_brothers_wife: { characters: '弟妹', romanization: 'dìmèi', alternates: ['弟媳'] },
  older_sisters_husband: { characters: '姐夫', romanization: 'jiěfu' },
  younger_sisters_husband: { characters: '妹夫', romanization: 'mèifu' },

  // Siblings' children
  brothers_son: { characters: '侄子', romanization: 'zhízi' },
  brothers_daughter: { characters: '侄女', romanization: 'zhínǚ' },
  sisters_son: { characters: '外甥', romanization: 'wàishēng' },
  sisters_daughter: { characters: '外甥女', romanization: 'wàishēngnǚ' },

  // Children's spouses
  sons_wife: { characters: '儿媳妇', romanization: 'érxífù', alternates: ['媳妇'] },
  daughters_husband: { characters: '女婿', romanization: 'nǚxù' },

  // Grandchildren
  sons_son: { characters: '孙子', romanization: 'sūnzi' },
  sons_daughter: { characters: '孙女', romanization: 'sūnnǚ' },
  daughters_son: { characters: '外孙', romanization: 'wàisūn' },
  daughters_daughter: { characters: '外孙女', romanization: 'wàisūnnǚ' },

  // Husband's family
  husbands_father: { characters: '公公', romanization: 'gōnggong', alternates: ['家翁'] },
  husbands_mother: { characters: '婆婆', romanization: 'pópo', alternates: ['家婆'] },
  husbands_older_brother: { characters: '大伯子', romanization: 'dàbǎizi', alternates: ['伯子'] },
  husbands_younger_brother: { characters: '小叔子', romanization: 'xiǎoshūzi' },
  husbands_older_sister: { characters: '大姑子', romanization: 'dàgūzi' },
  husbands_younger_sister: { characters: '小姑子', romanization: 'xiǎogūzi' },
  husbands_older_brothers_wife: { characters: '妯娌', romanization: 'zhóuli', notes: 'Generic term for wives of brothers' },
  husbands_younger_brothers_wife: { characters: '妯娌', romanization: 'zhóuli' },
  husbands_sisters_husband: { characters: '连襟', romanization: 'liánjīn' },

  // Wife's family
  wifes_father: { characters: '岳父', romanization: 'yuèfù', alternates: ['丈人', '老丈人'] },
  wifes_mother: { characters: '岳母', romanization: 'yuèmǔ', alternates: ['丈母娘'] },
  wifes_brother: { characters: '舅子', romanization: 'jiùzi', alternates: ['内兄', '内弟', '大舅子', '小舅子'] },
  wifes_older_sister: { characters: '大姨子', romanization: 'dàyízi' },
  wifes_younger_sister: { characters: '小姨子', romanization: 'xiǎoyízi' },
  wifes_brothers_wife: { characters: '舅嫂', romanization: 'jiùsǎo' },
  wifes_sisters_husband: { characters: '连襟', romanization: 'liánjīn', notes: 'Same term as husband\'s sister\'s husband' },

  // Great-grandparents
  paternal_great_grandfather: { characters: '曾祖父', romanization: 'zēngzǔfù', alternates: ['太爷爷'] },
  paternal_great_grandmother: { characters: '曾祖母', romanization: 'zēngzǔmǔ', alternates: ['太奶奶'] },
  maternal_great_grandfather: { characters: '外曾祖父', romanization: 'wàizēngzǔfù' },
  maternal_great_grandmother: { characters: '外曾祖母', romanization: 'wàizēngzǔmǔ' },
  maternal_great_grandfather_m: { characters: '外曾祖父', romanization: 'wàizēngzǔfù' },
  maternal_great_grandmother_m: { characters: '外曾祖母', romanization: 'wàizēngzǔmǔ' },
  paternal_great_grandfather_m: { characters: '曾外祖父', romanization: 'zēngwàizǔfù' },
  paternal_great_grandmother_m: { characters: '曾外祖母', romanization: 'zēngwàizǔmǔ' },

  // Great-grandchildren
  great_grandson_p: { characters: '曾孙', romanization: 'zēngsūn' },
  great_granddaughter_p: { characters: '曾孙女', romanization: 'zēngsūnnǚ' },
  great_grandson_m: { characters: '外曾孙', romanization: 'wàizēngsūn' },
  great_granddaughter_m: { characters: '外曾孙女', romanization: 'wàizēngsūnnǚ' },

  // In-law parents
  sons_wifes_father: { characters: '亲家公', romanization: 'qìngjiāgōng' },
  sons_wifes_mother: { characters: '亲家母', romanization: 'qìngjiāmǔ' },
  daughters_husbands_father: { characters: '亲家公', romanization: 'qìngjiāgōng' },
  daughters_husbands_mother: { characters: '亲家母', romanization: 'qìngjiāmǔ' },

  // === CONTINUATION TERMS ===

  // Tang cousins' spouses
  tang_older_brothers_wife: { characters: '堂嫂', romanization: 'tángsǎo' },
  tang_younger_brothers_wife: { characters: '堂弟媳', romanization: 'tángdìxí' },
  tang_older_sisters_husband: { characters: '堂姐夫', romanization: 'tángjiěfū' },
  tang_younger_sisters_husband: { characters: '堂妹夫', romanization: 'tángmèifū' },

  // Tang cousins' children
  tang_nephew: { characters: '堂侄', romanization: 'tángzhí', alternates: ['堂侄子'] },
  tang_niece: { characters: '堂侄女', romanization: 'tángzhínǚ' },
  tang_nephews_wife: { characters: '堂侄媳', romanization: 'tángzhíxí' },
  tang_nieces_husband: { characters: '堂侄女婿', romanization: 'tángzhínǚxù' },

  // Biao cousins' spouses
  biao_brothers_wife: { characters: '表嫂', romanization: 'biǎosǎo', alternates: ['表弟媳'] },
  biao_sisters_husband: { characters: '表姐夫', romanization: 'biǎojiěfū', alternates: ['表妹夫'] },

  // Biao cousins' children
  biao_nephew: { characters: '表侄', romanization: 'biǎozhí', alternates: ['表侄子'] },
  biao_niece: { characters: '表侄女', romanization: 'biǎozhínǚ' },
  biao_nephews_wife: { characters: '表侄媳', romanization: 'biǎozhíxí' },
  biao_nieces_husband: { characters: '表侄女婿', romanization: 'biǎozhínǚxù' },

  // Nephews/nieces' spouses
  nephews_wife: { characters: '侄媳妇', romanization: 'zhíxífù' },
  nieces_husband: { characters: '侄女婿', romanization: 'zhínǚxù' },
  sisters_sons_wife: { characters: '外甥媳妇', romanization: 'wàishēngxífù' },
  sisters_daughters_husband: { characters: '外甥女婿', romanization: 'wàishēngnǚxù' },

  // Grand-nephews/nieces
  grandnephew: { characters: '侄孙', romanization: 'zhísūn' },
  grandniece: { characters: '侄孙女', romanization: 'zhísūnnǚ' },
  sisters_grandchild_son: { characters: '外甥孙', romanization: 'wàishēngsūn' },
  sisters_grandchild_daughter: { characters: '外甥孙女', romanization: 'wàishēngsūnnǚ' },
  grandnephews_wife: { characters: '侄孙媳妇', romanization: 'zhísūnxífù' },

  // Grandchildren's spouses
  grandsons_wife: { characters: '孙媳妇', romanization: 'sūnxífù' },
  granddaughters_husband: { characters: '孙女婿', romanization: 'sūnnǚxù' },

  // Grandparents' siblings
  grand_paternal_uncle_older: { characters: '伯公', romanization: 'bógōng', alternates: ['伯祖父'] },
  grand_paternal_uncle_younger: { characters: '叔公', romanization: 'shūgōng', alternates: ['叔祖父'] },
  grand_paternal_aunt: { characters: '姑婆', romanization: 'gūpó', alternates: ['姑祖母'] },
  grand_paternal_uncles_wife: { characters: '伯婆', romanization: 'bópó', alternates: ['叔婆'] },
  grand_paternal_aunts_husband: { characters: '姑公', romanization: 'gūgōng' },
  grand_maternal_uncle_p: { characters: '舅公', romanization: 'jiùgōng', notes: "Paternal grandmother's brother" },
  grand_maternal_aunt_p: { characters: '姨婆', romanization: 'yípó', notes: "Paternal grandmother's sister" },
  grand_paternal_uncle_m: { characters: '舅公', romanization: 'jiùgōng', notes: "Maternal grandfather's brother" },
  grand_paternal_aunt_m: { characters: '姑婆', romanization: 'gūpó', notes: "Maternal grandfather's sister" },
  grand_maternal_uncle_m: { characters: '舅公', romanization: 'jiùgōng', notes: "Maternal grandmother's brother" },
  grand_maternal_aunt_m: { characters: '姨婆', romanization: 'yípó', notes: "Maternal grandmother's sister" },

  // Husband's extended family
  husbands_nephew: { characters: '侄子', romanization: 'zhízi', notes: "Husband's nephew" },
  husbands_niece: { characters: '侄女', romanization: 'zhínǚ', notes: "Husband's niece" },
  husbands_grandfather: { characters: '爷爷', romanization: 'yéye', notes: "Husband's grandfather" },
  husbands_grandmother: { characters: '奶奶', romanization: 'nǎinai', notes: "Husband's grandmother" },
  husbands_paternal_uncle_older: { characters: '伯公', romanization: 'bógōng', notes: "Husband's father's older brother" },
  husbands_paternal_uncle_younger: { characters: '叔公', romanization: 'shūgōng', notes: "Husband's father's younger brother" },
  husbands_paternal_aunt: { characters: '姑奶', romanization: 'gūnǎi', notes: "Husband's paternal aunt" },
  husbands_maternal_uncle: { characters: '舅爷', romanization: 'jiùyé', notes: "Husband's maternal uncle" },
  husbands_maternal_aunt: { characters: '姨奶', romanization: 'yínǎi', notes: "Husband's maternal aunt" },

  // Wife's extended family
  wifes_nephew: { characters: '内侄', romanization: 'nèizhí', notes: "Wife's nephew" },
  wifes_niece: { characters: '内侄女', romanization: 'nèizhínǚ', notes: "Wife's niece" },
  wifes_grandfather: { characters: '岳祖父', romanization: 'yuèzǔfù', notes: "Wife's grandfather" },
  wifes_grandmother: { characters: '岳祖母', romanization: 'yuèzǔmǔ', notes: "Wife's grandmother" },
  wifes_paternal_uncle_older: { characters: '岳伯', romanization: 'yuèbó', notes: "Wife's father's older brother" },
  wifes_paternal_uncle_younger: { characters: '岳叔', romanization: 'yuèshū', notes: "Wife's father's younger brother" },
  wifes_paternal_aunt: { characters: '岳姑', romanization: 'yuègū', notes: "Wife's paternal aunt" },
  wifes_maternal_uncle: { characters: '岳舅', romanization: 'yuèjiù', notes: "Wife's maternal uncle" },
  wifes_maternal_aunt: { characters: '岳姨', romanization: 'yuèyí', notes: "Wife's maternal aunt" },

  // Children's in-law siblings
  sons_wifes_brother: { characters: '亲家舅', romanization: 'qìngjiājiù', notes: "Son's wife's brother" },
  sons_wifes_sister: { characters: '亲家姨', romanization: 'qìngjiāyí', notes: "Son's wife's sister" },
  daughters_husbands_brother: { characters: '亲家舅', romanization: 'qìngjiājiù', notes: "Daughter's husband's brother" },
  daughters_husbands_sister: { characters: '亲家姨', romanization: 'qìngjiāyí', notes: "Daughter's husband's sister" },

  // Grand-uncles/aunts' children
  grand_uncles_son: { characters: '从堂叔', romanization: 'cóngtáng shū', notes: "Grandfather's brother's son" },
  grand_uncles_daughter: { characters: '从堂姑', romanization: 'cóngtáng gū', notes: "Grandfather's brother's daughter" },
  grand_aunts_son: { characters: '姑表叔', romanization: 'gūbiǎo shū' },
  grand_aunts_daughter: { characters: '姑表姑', romanization: 'gūbiǎo gū' },
  grand_uncles_son_cross: { characters: '表叔', romanization: 'biǎo shū', notes: "Grandparent's sibling's son (cross)" },
  grand_uncles_daughter_cross: { characters: '表姑', romanization: 'biǎo gū', notes: "Grandparent's sibling's daughter (cross)" },
  grand_aunts_son_cross: { characters: '表叔', romanization: 'biǎo shū' },
  grand_aunts_daughter_cross: { characters: '表姑', romanization: 'biǎo gū' },
  grand_uncles_sons_wife: { characters: '从堂婶', romanization: 'cóngtáng shěn' },
  grand_uncles_daughters_husband: { characters: '从堂姑丈', romanization: 'cóngtáng gūzhàng' },
  grand_aunts_sons_wife: { characters: '姑表婶', romanization: 'gūbiǎo shěn' },
  grand_aunts_daughters_husband: { characters: '姑表姑丈', romanization: 'gūbiǎo gūzhàng' },

  // Grand-uncles/aunts' spouses (other lines)
  grand_maternal_uncles_wife_p: { characters: '舅婆', romanization: 'jiù pó', notes: "Paternal grandmother's brother's wife" },
  grand_maternal_aunts_husband_p: { characters: '姨公', romanization: 'yí gōng' },
  grand_paternal_uncles_wife_m: { characters: '伯婆', romanization: 'bó pó', alternates: ['叔婆'] },
  grand_paternal_aunts_husband_m: { characters: '姑公', romanization: 'gū gōng' },
  grand_maternal_uncles_wife_m: { characters: '舅婆', romanization: 'jiù pó' },
  grand_maternal_aunts_husband_m: { characters: '姨公', romanization: 'yí gōng' },

  // Second cousins (从堂/从表)
  cong_tang_brother: { characters: '从堂兄', romanization: 'cóngtáng xiōng', alternates: ['从堂弟'] },
  cong_tang_sister: { characters: '从堂姐', romanization: 'cóngtáng jiě', alternates: ['从堂妹'] },
  cong_tang_brothers_wife: { characters: '从堂嫂', romanization: 'cóngtáng sǎo' },
  cong_tang_sisters_husband: { characters: '从堂姐夫', romanization: 'cóngtáng jiěfū' },
  cong_tang_nephew: { characters: '从堂侄', romanization: 'cóngtáng zhí' },
  cong_tang_niece: { characters: '从堂侄女', romanization: 'cóngtáng zhínǚ' },
  cong_biao_brother: { characters: '从表兄', romanization: 'cóngbiǎo xiōng', alternates: ['从表弟'] },
  cong_biao_sister: { characters: '从表姐', romanization: 'cóngbiǎo jiě', alternates: ['从表妹'] },
  cong_biao_brothers_wife: { characters: '从表嫂', romanization: 'cóngbiǎo sǎo' },
  cong_biao_sisters_husband: { characters: '从表姐夫', romanization: 'cóngbiǎo jiěfū' },
  cong_biao_nephew: { characters: '从表侄', romanization: 'cóngbiǎo zhí' },
  cong_biao_niece: { characters: '从表侄女', romanization: 'cóngbiǎo zhínǚ' },

  // Tang/biao grand-nephews/nieces
  tang_grandnephew: { characters: '堂侄孙', romanization: 'táng zhísūn' },
  tang_grandniece: { characters: '堂侄孙女', romanization: 'táng zhísūnnǚ' },
  biao_grandnephew: { characters: '表侄孙', romanization: 'biǎo zhísūn' },
  biao_grandniece: { characters: '表侄孙女', romanization: 'biǎo zhísūnnǚ' },
  grandnieces_husband: { characters: '侄孙女婿', romanization: 'zhísūnnǚxù' },

  // Great-grandchildren's spouses
  great_grandsons_wife: { characters: '曾孙媳妇', romanization: 'zēngsūn xífù' },
  great_granddaughters_husband: { characters: '曾孙女婿', romanization: 'zēngsūnnǚxù' },

  // Great-great-grandparents (高祖)
  gao_grandfather_p: { characters: '高祖父', romanization: 'gāozǔfù' },
  gao_grandmother_p: { characters: '高祖母', romanization: 'gāozǔmǔ' },
  gao_grandfather_m: { characters: '外高祖父', romanization: 'wàigāozǔfù' },
  gao_grandmother_m: { characters: '外高祖母', romanization: 'wàigāozǔmǔ' },

  // Great-great-grandchildren (玄孙)
  xuan_grandson: { characters: '玄孙', romanization: 'xuánsūn' },
  xuan_granddaughter: { characters: '玄孙女', romanization: 'xuánsūnnǚ' },

  // Great-grand-uncles/aunts
  great_grand_uncle: { characters: '曾伯叔祖', romanization: 'zēng bó shū zǔ', notes: "Great-grandfather's brother" },
  great_grand_uncles_wife: { characters: '曾伯叔祖母', romanization: 'zēng bó shū zǔmǔ' },
  great_grand_aunt: { characters: '曾姑祖', romanization: 'zēng gū zǔ' },
  great_grand_aunts_husband: { characters: '曾姑祖丈', romanization: 'zēng gū zǔzhàng' },

  // Siblings-in-law extended families
  older_brothers_wifes_father: { characters: '嫂子的父亲', romanization: 'sǎozi de fùqīn', notes: 'No standard kinship term' },
  older_brothers_wifes_mother: { characters: '嫂子的母亲', romanization: 'sǎozi de mǔqīn', notes: 'No standard kinship term' },
  older_brothers_wifes_brother: { characters: '嫂子的兄弟', romanization: 'sǎozi de xiōngdì', notes: "Brother-in-law's sibling" },
  older_brothers_wifes_sister: { characters: '嫂子的姐妹', romanization: 'sǎozi de jiěmèi', notes: "Brother-in-law's sibling" },
  younger_brothers_wifes_father: { characters: '弟媳的父亲', romanization: 'dìxí de fùqīn', notes: 'No standard kinship term' },
  younger_brothers_wifes_mother: { characters: '弟媳的母亲', romanization: 'dìxí de mǔqīn', notes: 'No standard kinship term' },
  younger_brothers_wifes_brother: { characters: '弟媳的兄弟', romanization: 'dìxí de xiōngdì', notes: 'No standard kinship term' },
  younger_brothers_wifes_sister: { characters: '弟媳的姐妹', romanization: 'dìxí de jiěmèi', notes: 'No standard kinship term' },
  older_sisters_husbands_father: { characters: '姐夫的父亲', romanization: 'jiěfu de fùqīn', notes: 'No standard kinship term' },
  older_sisters_husbands_mother: { characters: '姐夫的母亲', romanization: 'jiěfu de mǔqīn', notes: 'No standard kinship term' },
  older_sisters_husbands_brother: { characters: '姐夫的兄弟', romanization: 'jiěfu de xiōngdì', notes: 'No standard kinship term' },
  older_sisters_husbands_sister: { characters: '姐夫的姐妹', romanization: 'jiěfu de jiěmèi', notes: 'No standard kinship term' },
  younger_sisters_husbands_father: { characters: '妹夫的父亲', romanization: 'mèifu de fùqīn', notes: 'No standard kinship term' },
  younger_sisters_husbands_mother: { characters: '妹夫的母亲', romanization: 'mèifu de mǔqīn', notes: 'No standard kinship term' },
  younger_sisters_husbands_brother: { characters: '妹夫的兄弟', romanization: 'mèifu de xiōngdì', notes: 'No standard kinship term' },
  younger_sisters_husbands_sister: { characters: '妹夫的姐妹', romanization: 'mèifu de jiěmèi', notes: 'No standard kinship term' },

  // Uncle/aunt in-law parents
  fathers_older_brothers_wifes_father: { characters: '伯母的父亲', romanization: 'bómǔ de fùqīn', notes: 'No standard kinship term' },
  fathers_older_brothers_wifes_mother: { characters: '伯母的母亲', romanization: 'bómǔ de mǔqīn', notes: 'No standard kinship term' },
  fathers_younger_brothers_wifes_father: { characters: '婶母的父亲', romanization: 'shěnmǔ de fùqīn', notes: 'No standard kinship term' },
  fathers_younger_brothers_wifes_mother: { characters: '婶母的母亲', romanization: 'shěnmǔ de mǔqīn', notes: 'No standard kinship term' },
  paternal_aunts_husbands_father: { characters: '姑丈的父亲', romanization: 'gūzhàng de fùqīn', notes: 'No standard kinship term' },
  paternal_aunts_husbands_mother: { characters: '姑丈的母亲', romanization: 'gūzhàng de mǔqīn', notes: 'No standard kinship term' },

  // Spouse's extended in-law spouses
  husbands_paternal_uncles_wife: { characters: '伯婆', romanization: 'bó pó', alternates: ['叔婆'], notes: "Husband's father's brother's wife" },
  husbands_paternal_aunts_husband: { characters: '姑公', romanization: 'gū gōng', notes: "Husband's paternal aunt's husband" },
  husbands_maternal_uncles_wife: { characters: '舅婆', romanization: 'jiù pó', notes: "Husband's maternal uncle's wife" },
  husbands_maternal_aunts_husband: { characters: '姨公', romanization: 'yí gōng', notes: "Husband's maternal aunt's husband" },
  wifes_paternal_uncles_wife: { characters: '岳伯母', romanization: 'yuè bómǔ', notes: "Wife's father's brother's wife" },
  wifes_paternal_aunts_husband: { characters: '岳姑丈', romanization: 'yuè gūzhàng', notes: "Wife's paternal aunt's husband" },
  wifes_maternal_uncles_wife: { characters: '岳舅母', romanization: 'yuè jiùmǔ', notes: "Wife's maternal uncle's wife" },
  wifes_maternal_aunts_husband: { characters: '岳姨丈', romanization: 'yuè yízhàng', notes: "Wife's maternal aunt's husband" },
};
