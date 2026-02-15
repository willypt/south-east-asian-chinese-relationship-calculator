'use client';

import { useState } from 'react';
import { ResolutionResult, DialectId, DIALECT_META } from '@/lib/types';

interface ResultPanelProps {
  result: ResolutionResult | null;
  reverseResult: ResolutionResult | null;
  visibleDialects: DialectId[];
}

function DialectCards({
  result,
  visibleDialects,
}: {
  result: ResolutionResult;
  visibleDialects: DialectId[];
}) {
  const availableDialects = visibleDialects.filter((d) => result.terms[d]);

  return (
    <div className="grid gap-2">
      {availableDialects.map((dialectId, i) => {
        const meta = DIALECT_META[dialectId];
        const term = result.terms[dialectId]!;

        return (
          <div
            key={dialectId}
            className="
              relative overflow-hidden rounded-xl p-4
              bg-gradient-to-br from-red-950/60 to-stone-900/60
              border border-red-900/30
            "
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {/* Dialect label */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] tracking-widest uppercase text-stone-500 font-medium">
                {meta.name}
              </span>
              <span className="text-[10px] text-stone-600">
                {meta.chineseName}
              </span>
            </div>

            {/* Main characters */}
            <div className="flex items-baseline gap-3">
              <span
                className="text-3xl font-serif text-red-200 leading-tight"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                {term.characters}
              </span>
              <span className="text-sm text-amber-400/80 italic font-light">
                {term.romanization}
              </span>
            </div>

            {/* Alternates */}
            {term.alternates && term.alternates.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {term.alternates.map((alt) => (
                  <span
                    key={alt}
                    className="text-xs px-2 py-0.5 rounded-md bg-stone-800/60 text-stone-400 border border-stone-700/30"
                  >
                    {alt}
                  </span>
                ))}
              </div>
            )}

            {/* Notes */}
            {term.notes && (
              <p className="mt-2 text-[11px] text-stone-500 italic">
                {term.notes}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ResultPanel({
  result,
  reverseResult,
  visibleDialects,
}: ResultPanelProps) {
  const [showReverse, setShowReverse] = useState(false);

  if (!result) return null;

  const activeResult = showReverse && reverseResult ? reverseResult : result;

  return (
    <div className="w-full space-y-3 animate-in">
      {/* Tab toggle */}
      {reverseResult && (
        <div className="flex rounded-lg bg-stone-900/60 border border-stone-800/60 p-0.5">
          <button
            onClick={() => setShowReverse(false)}
            className={`
              flex-1 text-xs py-2 px-3 rounded-md transition-all duration-200 font-medium
              ${!showReverse
                ? 'bg-red-900/50 text-red-200 shadow-sm border border-red-800/30'
                : 'text-stone-500 hover:text-stone-400'
              }
            `}
          >
            You call them
          </button>
          <button
            onClick={() => setShowReverse(true)}
            className={`
              flex-1 text-xs py-2 px-3 rounded-md transition-all duration-200 font-medium
              ${showReverse
                ? 'bg-amber-900/40 text-amber-200 shadow-sm border border-amber-800/30'
                : 'text-stone-500 hover:text-stone-400'
              }
            `}
          >
            They call you
          </button>
        </div>
      )}

      {/* English label */}
      <div className="text-center">
        <p className="text-stone-500 text-xs tracking-widest uppercase mb-1">
          {showReverse && reverseResult ? 'They call you' : 'You call them'}
        </p>
        <p className="text-stone-300 text-sm font-medium">
          {activeResult.label}
        </p>
      </div>

      {/* Dialect cards */}
      <DialectCards
        key={showReverse ? 'reverse' : 'forward'}
        result={activeResult}
        visibleDialects={visibleDialects}
      />
    </div>
  );
}
