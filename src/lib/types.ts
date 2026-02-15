export type RelationshipStep =
  | 'father'
  | 'mother'
  | 'husband'
  | 'wife'
  | 'older_brother'
  | 'younger_brother'
  | 'older_sister'
  | 'younger_sister'
  | 'son'
  | 'daughter';

export type UserGender = 'male' | 'female';

export type DialectId = 'mandarin' | 'hokkien' | 'cantonese' | 'teochew';

export interface DialectTerm {
  characters: string;
  romanization: string;
  alternates?: string[];
  notes?: string;
}

export interface KinshipEntry {
  id: string;
  label: string; // English description, e.g. "Father's older brother"
  terms: Partial<Record<DialectId, DialectTerm>>;
}

export interface ResolutionResult {
  kinshipId: string;
  label: string;
  terms: Partial<Record<DialectId, DialectTerm>>;
}

export interface CalculatorState {
  userGender: UserGender;
  chain: RelationshipStep[];
  result: ResolutionResult | null;
}

export interface DialectMeta {
  id: DialectId;
  name: string;
  chineseName: string;
}

export const DIALECT_META: Record<DialectId, DialectMeta> = {
  mandarin: { id: 'mandarin', name: 'Mandarin', chineseName: '普通话' },
  hokkien: { id: 'hokkien', name: 'Hokkien', chineseName: '闽南话' },
  cantonese: { id: 'cantonese', name: 'Cantonese', chineseName: '广东话' },
  teochew: { id: 'teochew', name: 'Teochew', chineseName: '潮州话' },
};

export const STEP_LABELS: Record<RelationshipStep, string> = {
  father: "Father's",
  mother: "Mother's",
  husband: "Husband's",
  wife: "Wife's",
  older_brother: "Older Brother's",
  younger_brother: "Younger Brother's",
  older_sister: "Older Sister's",
  younger_sister: "Younger Sister's",
  son: "Son's",
  daughter: "Daughter's",
};

export const STEP_DISPLAY: Record<RelationshipStep, string> = {
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
};
