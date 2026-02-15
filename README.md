# South East Asian Chinese Relationship Calculator

A mobile-first web app that helps you figure out what to call your relatives in Chinese. The Chinese kinship system has 200+ unique terms based on paternal/maternal side, relative age, gender, and marriage — far more complex than English's generic "uncle/aunt/cousin". This calculator lets you build a relationship chain (e.g., Father → Older Brother → Wife) and instantly see the correct title in multiple Chinese dialects common in Southeast Asia.

## Features

- **Sentence builder UI** — Build relationships naturally: "My [Father's] [Older Brother's] [Wife]"
- **4 Chinese dialects** — Mandarin (普通话), Hokkien (闽南话), Cantonese (广东话), Teochew (潮州话)
- **200+ kinship terms** with Chinese characters and romanization (Pinyin, POJ, Jyutping, Peng'im)
- **Deep chaining** — Navigate arbitrarily deep: great-grandparents, second cousins, grand-uncles' children, and beyond
- **Reverse lookup** — See what they call you too ("You call them 伯伯, they call you 侄子")
- **Inclusive** — Both husband and wife options available for all relationships
- **Offline-ready** — PWA support for use at family gatherings without internet
- **Dark mode** — Easy on the eyes with a warm, Chinese New Year-inspired aesthetic

## Tech Stack

- **Next.js 14** with static export
- **TypeScript** for type-safe kinship resolution
- **Tailwind CSS** for mobile-first styling
- **Vitest** for testing (75 tests)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to use the calculator.

## How It Works

The resolution engine uses a two-layer approach:

1. **Resolution Map** — Direct lookup for common chains (e.g., `father.older_brother` → `fathers_older_brother`)
2. **Continuation Map** — Iterative step-through for deep chains (e.g., once you reach `paternal_grandfather`, continue with `older_brother` → `grand_paternal_uncle_older`)

This enables arbitrary-depth navigation through the family tree without needing to enumerate every possible path.

## Dialects

| Dialect | Chinese | Romanization | Region |
|---------|---------|-------------|--------|
| Mandarin | 普通话 | Pinyin | China, Taiwan, Singapore |
| Hokkien | 闽南话 | POJ | Malaysia, Singapore, Philippines |
| Cantonese | 广东话 | Jyutping | Hong Kong, Malaysia, Vietnam |
| Teochew | 潮州话 | Peng'im | Thailand, Malaysia, Cambodia |

## Acknowledgements

- Inspired by [mumuy/relationship](https://github.com/mumuy/relationship), a comprehensive Chinese kinship term library with 2000+ entries and a generative template system
- Built with [Claude Code](https://claude.ai/claude-code)

## Author

**Willy PT** — [LinkedIn](https://www.linkedin.com/in/willypt) | [GitHub](https://github.com/willypt)

## License

[The Unlicense](LICENSE) — released into the public domain.
