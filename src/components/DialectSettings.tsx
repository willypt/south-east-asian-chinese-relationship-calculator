'use client';

import { DialectId, DIALECT_META } from '@/lib/types';

interface DialectSettingsProps {
  visibleDialects: DialectId[];
  allDialects: DialectId[];
  onToggle: (dialect: DialectId) => void;
}

export default function DialectSettings({
  visibleDialects,
  allDialects,
  onToggle,
}: DialectSettingsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {allDialects.map((dialect) => {
        const meta = DIALECT_META[dialect];
        const active = visibleDialects.includes(dialect);

        return (
          <button
            key={dialect}
            onClick={() => onToggle(dialect)}
            className={`
              px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200
              ${active
                ? 'bg-red-900/40 text-red-300 border border-red-700/40'
                : 'bg-stone-800/40 text-stone-500 border border-stone-700/30 hover:text-stone-400'
              }
            `}
          >
            {meta.chineseName} {meta.name}
          </button>
        );
      })}
    </div>
  );
}
