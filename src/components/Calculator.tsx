'use client';

import { useCalculator } from '@/hooks/useCalculator';
import { useDialectPrefs } from '@/hooks/useDialectPrefs';
import GenderToggle from './GenderToggle';
import ChainBuilder from './ChainBuilder';
import ButtonGrid from './ButtonGrid';
import ResultPanel from './ResultPanel';
import DialectSettings from './DialectSettings';

export default function Calculator() {
  const {
    userGender,
    setUserGender,
    chain,
    result,
    reverseResult,
    validNextSteps,
    addStep,
    removeFromIndex,
    reset,
  } = useCalculator();

  const { visibleDialects, toggleDialect, allDialects } = useDialectPrefs();

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-6">
      {/* Header */}
      <header className="text-center space-y-3 relative">
        <a
          href="https://github.com/willypt/south-east-asian-chinese-relationship-calculator"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-0 top-0 text-stone-600 hover:text-stone-300 transition-colors"
          aria-label="View on GitHub"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <h1
          className="text-3xl font-bold text-red-300 tracking-tight"
          style={{ fontFamily: "'Noto Serif SC', serif" }}
        >
          亲属称谓
        </h1>
        <p className="text-xs tracking-[0.2em] uppercase text-stone-500 font-medium">
          Chinese Family Title Calculator
        </p>
      </header>

      {/* Gender + Reset */}
      <div className="flex items-center justify-between">
        <GenderToggle gender={userGender} onChange={setUserGender} />
        {chain.length > 0 && (
          <button
            onClick={reset}
            className="text-xs text-stone-500 hover:text-stone-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-stone-800/40"
          >
            Reset
          </button>
        )}
      </div>

      {/* Chain builder */}
      <ChainBuilder
        chain={chain}
        onRemoveFrom={removeFromIndex}
        hasResult={result !== null}
      />

      {/* Result panel */}
      <ResultPanel result={result} reverseResult={reverseResult} visibleDialects={visibleDialects} />

      {/* Separator when we have results */}
      {result && validNextSteps.length > 0 && (
        <div className="flex items-center gap-3 text-stone-600">
          <div className="flex-1 h-px bg-stone-800" />
          <span className="text-[10px] tracking-widest uppercase">Continue chain</span>
          <div className="flex-1 h-px bg-stone-800" />
        </div>
      )}

      {/* Button grid */}
      <ButtonGrid steps={validNextSteps} onSelect={addStep} />

      {/* Dialect settings */}
      <div className="pt-4 border-t border-stone-800/60">
        <p className="text-[10px] tracking-widest uppercase text-stone-600 mb-3 font-medium">
          Visible Dialects
        </p>
        <DialectSettings
          visibleDialects={visibleDialects}
          allDialects={allDialects}
          onToggle={toggleDialect}
        />
      </div>

      {/* Footer */}
      <footer className="pt-6 pb-2 border-t border-stone-800/60 text-center">
        <p className="text-[11px] text-stone-500 leading-relaxed">
          This calculator saved{' '}
          <a
            href="https://www.linkedin.com/in/willypt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400/80 hover:text-red-300 transition-colors underline underline-offset-2"
          >
            Willy PT
          </a>
          . Hope it does for you too.
          <br />
          Made with &hearts; and{' '}
          <a
            href="https://claude.ai/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400/80 hover:text-red-300 transition-colors underline underline-offset-2"
          >
            Claude Code
          </a>
        </p>
      </footer>
    </div>
  );
}
