<instructions>
this file will be automatically added to your context.
It serves multiple purposes:
  1. Storing frequntly used tools so you can use them without searching each time
  2. Recording the user"s code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase struture and organization
  4. Re membering tricky quirks from this codebase

 When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to thids CODER.md file so you can remember it for next time.
 keep entries sorted in  DESC order (newest firt) so recent knowledge stays in prompt context if the file is truncated.

</instructions>

<coder>

## 2026-04-14
- Project root for tooling is `src/`; `package.json`, `vite.config.ts`, Tailwind and tsconfig files live there.
- `src/sections/*` now follows the screenshot scaffold with section folders, `components/`, and `index.tsx` entry files.
- TypeScript alias `@/*` resolves from the `src/` folder via `tsconfig.app.json` and Vite alias config.

# File Content Goes Here

</coder>