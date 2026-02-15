import { DialectId, DialectTerm } from '@/lib/types';
import { MANDARIN_TERMS } from './mandarin';
import { HOKKIEN_TERMS } from './hokkien';
import { CANTONESE_TERMS } from './cantonese';
import { TEOCHEW_TERMS } from './teochew';

export const ALL_DIALECT_TERMS: Record<DialectId, Record<string, DialectTerm>> = {
  mandarin: MANDARIN_TERMS,
  hokkien: HOKKIEN_TERMS,
  cantonese: CANTONESE_TERMS,
  teochew: TEOCHEW_TERMS,
};

export { MANDARIN_TERMS, HOKKIEN_TERMS, CANTONESE_TERMS, TEOCHEW_TERMS };
