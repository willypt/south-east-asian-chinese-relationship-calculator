'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { RelationshipStep, UserGender, ResolutionResult } from '@/lib/types';
import { resolve, resolveReverse } from '@/lib/resolver';
import { getContextualNextSteps } from '@/lib/validator';

export function useCalculator() {
  const [userGender, setUserGender] = useState<UserGender>('male');
  const [chain, setChain] = useState<RelationshipStep[]>([]);

  // Persist gender to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('userGender');
    if (saved === 'male' || saved === 'female') {
      setUserGender(saved);
    }
  }, []);

  const handleSetGender = useCallback((gender: UserGender) => {
    setUserGender(gender);
    localStorage.setItem('userGender', gender);
    setChain([]);
  }, []);

  const result: ResolutionResult | null = useMemo(
    () => resolve(chain, userGender),
    [chain, userGender]
  );

  const reverseResult: ResolutionResult | null = useMemo(
    () => resolveReverse(chain, userGender),
    [chain, userGender]
  );

  const validNextSteps = useMemo(
    () => getContextualNextSteps(chain, userGender),
    [chain, userGender]
  );

  const addStep = useCallback((step: RelationshipStep) => {
    setChain((prev) => [...prev, step]);
  }, []);

  const removeFromIndex = useCallback((index: number) => {
    setChain((prev) => prev.slice(0, index));
  }, []);

  const reset = useCallback(() => {
    setChain([]);
  }, []);

  return {
    userGender,
    setUserGender: handleSetGender,
    chain,
    result,
    reverseResult,
    validNextSteps,
    addStep,
    removeFromIndex,
    reset,
  };
}
