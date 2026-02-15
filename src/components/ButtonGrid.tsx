'use client';

import { RelationshipStep, STEP_DISPLAY } from '@/lib/types';

interface ButtonGridProps {
  steps: RelationshipStep[];
  onSelect: (step: RelationshipStep) => void;
}

const STEP_ICONS: Record<RelationshipStep, string> = {
  father: '👨',
  mother: '👩',
  husband: '🤵',
  wife: '👰',
  older_brother: '👦',
  younger_brother: '👦',
  older_sister: '👧',
  younger_sister: '👧',
  son: '👶',
  daughter: '👶',
};

const STEP_CATEGORIES: Record<string, RelationshipStep[]> = {
  Parents: ['father', 'mother'],
  Spouse: ['husband', 'wife'],
  Siblings: ['older_brother', 'younger_brother', 'older_sister', 'younger_sister'],
  Children: ['son', 'daughter'],
};

export default function ButtonGrid({ steps, onSelect }: ButtonGridProps) {
  if (steps.length === 0) {
    return (
      <div className="text-center py-8 text-stone-500 text-sm">
        No more steps available for this chain.
      </div>
    );
  }

  // Group available steps by category
  const groupedSteps = Object.entries(STEP_CATEGORIES)
    .map(([category, categorySteps]) => ({
      category,
      available: categorySteps.filter((s) => steps.includes(s)),
    }))
    .filter(({ available }) => available.length > 0);

  return (
    <div className="space-y-4">
      {groupedSteps.map(({ category, available }) => (
        <div key={category}>
          <div className="text-xs font-medium tracking-widest uppercase text-stone-600 mb-2 px-1">
            {category}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {available.map((step) => (
              <button
                key={step}
                onClick={() => onSelect(step)}
                className="
                  group relative flex items-center gap-3 px-4 py-3.5 rounded-xl
                  bg-stone-800/60 border border-stone-700/40
                  hover:bg-red-950/40 hover:border-red-800/40
                  active:scale-[0.97]
                  transition-all duration-200 ease-out
                  text-left min-h-[3rem]
                "
              >
                <span className="text-lg opacity-70 group-hover:opacity-100 transition-opacity">
                  {STEP_ICONS[step]}
                </span>
                <span className="text-sm font-medium text-stone-200 group-hover:text-red-200 transition-colors">
                  {STEP_DISPLAY[step]}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
