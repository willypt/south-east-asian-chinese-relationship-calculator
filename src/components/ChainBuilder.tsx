'use client';

import { RelationshipStep, STEP_LABELS } from '@/lib/types';

interface ChainBuilderProps {
  chain: RelationshipStep[];
  onRemoveFrom: (index: number) => void;
  hasResult: boolean;
}

export default function ChainBuilder({ chain, onRemoveFrom, hasResult }: ChainBuilderProps) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-2 min-h-[3.5rem] px-4 py-3 rounded-2xl bg-stone-900/40 border border-stone-700/30 backdrop-blur-sm">
        <span className="text-stone-500 text-sm font-medium tracking-wider uppercase shrink-0">
          My
        </span>

        {chain.map((step, index) => {
          const isLast = index === chain.length - 1;
          const label = isLast && hasResult ? STEP_LABELS[step].replace(/'s$/, '') : STEP_LABELS[step];

          return (
            <button
              key={`${step}-${index}`}
              onClick={() => onRemoveFrom(index)}
              className={`
                group relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
                ${isLast && hasResult
                  ? 'bg-red-900/40 text-red-300 border border-red-700/40 hover:bg-red-900/60'
                  : 'bg-amber-900/30 text-amber-300 border border-amber-700/30 hover:bg-amber-900/50'
                }
              `}
              title="Click to remove this step and everything after it"
            >
              <span>{label}</span>
              <span className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                &#x2715;
              </span>
            </button>
          );
        })}

        {chain.length === 0 && (
          <span className="text-stone-600 text-sm italic">
            Select a relationship below...
          </span>
        )}

        {chain.length > 0 && !hasResult && (
          <span className="inline-flex items-center gap-1 text-stone-600 text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500/60 animate-pulse" />
            ...
          </span>
        )}
      </div>
    </div>
  );
}
