'use client';

import { useState, useCallback, useEffect } from 'react';
import { DialectId } from '@/lib/types';

const ALL_DIALECTS: DialectId[] = ['mandarin', 'hokkien', 'cantonese', 'teochew'];

export function useDialectPrefs() {
  const [visibleDialects, setVisibleDialects] = useState<DialectId[]>(ALL_DIALECTS);

  useEffect(() => {
    const saved = localStorage.getItem('visibleDialects');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as DialectId[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setVisibleDialects(parsed.filter((d) => ALL_DIALECTS.includes(d)));
        }
      } catch {
        // ignore
      }
    }
  }, []);

  const toggleDialect = useCallback((dialect: DialectId) => {
    setVisibleDialects((prev) => {
      const next = prev.includes(dialect)
        ? prev.filter((d) => d !== dialect)
        : [...prev, dialect];
      // Don't allow all to be hidden
      if (next.length === 0) return prev;
      localStorage.setItem('visibleDialects', JSON.stringify(next));
      return next;
    });
  }, []);

  return { visibleDialects, toggleDialect, allDialects: ALL_DIALECTS };
}
