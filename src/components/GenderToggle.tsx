'use client';

import { UserGender } from '@/lib/types';

interface GenderToggleProps {
  gender: UserGender;
  onChange: (gender: UserGender) => void;
}

export default function GenderToggle({ gender, onChange }: GenderToggleProps) {
  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-stone-900/60 border border-stone-700/50 backdrop-blur-sm">
      <button
        onClick={() => onChange('male')}
        className={`
          relative px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ease-out
          ${gender === 'male'
            ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 shadow-lg shadow-amber-500/20'
            : 'text-stone-400 hover:text-stone-200'
          }
        `}
        aria-pressed={gender === 'male'}
      >
        <span className="relative z-10 flex items-center gap-1.5">
          <span className="text-base">&#x2642;</span>
          Male
        </span>
      </button>
      <button
        onClick={() => onChange('female')}
        className={`
          relative px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ease-out
          ${gender === 'female'
            ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 shadow-lg shadow-amber-500/20'
            : 'text-stone-400 hover:text-stone-200'
          }
        `}
        aria-pressed={gender === 'female'}
      >
        <span className="relative z-10 flex items-center gap-1.5">
          <span className="text-base">&#x2640;</span>
          Female
        </span>
      </button>
    </div>
  );
}
