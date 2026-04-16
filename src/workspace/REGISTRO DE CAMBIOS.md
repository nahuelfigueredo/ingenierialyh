<instructions>

### 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry — be concise but informative  
- **Include file paths** of key files modified or discovered  
- **Note patterns/conventions** found in the codebase  
- **Sort entries by date** in DESCENDING order (most recent first)  
- If this file gets corrupted, messy, or unsorted → re-create it  
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY  
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, or clean old entries  

</instructions>

<changelog>

## 2026-04-14 (latest)
- Switched the fourth projects carousel card to `src/assets/10.jpg` and replaced its copy with the Plaza Huincul furnace radiation tube replacement project details provided by the user.
- Switched the third projects carousel card to `src/assets/12.png` and replaced its copy with the La Plata / YPF piping, structures, and equipment contract details provided by the user.
- Switched the second projects carousel card to `src/assets/06.jpg` and replaced its copy with the YPF CILP / Coke A to Topping C project details provided by the user.
- Replaced the first projects card copy with the Plaza Huincul / YPF vapor line repair content and enabled multiline project descriptions in `src/sections/ProjectsSection/components/ProjectCard.tsx`.
- Switched the first projects carousel card to the local welding image in `src/assets/WhatsApp-Image-2023-09-14-at-09.21.48-2.jpeg` and added `imageSrc` support in `src/sections/ProjectsSection/components/ProjectCard.tsx`.
- Reduced the projects title size in `src/sections/ProjectsSection/components/ProjectsHeader.tsx` so `Grandes obras que marcan la diferencia` reads more contained.
- Replaced the empty projects header in `src/sections/ProjectsSection/components/ProjectsHeader.tsx` with the subtitle and title block shown above the carousel in the new reference.
- Added top margin to `src/sections/CapabilitiesSection/index.tsx` so the photo block sits a bit separated from the header/hero above it.
- Made the capabilities card narrower again and positioned it so roughly half extends outside the photo, while adding bottom space in `src/sections/CapabilitiesSection/index.tsx` so the outside portion stays fully visible.
- Expanded the capabilities overlay card and pushed it further below the image in `src/sections/CapabilitiesSection/components/CapabilitiesContent.tsx` to better match the provided reference photo.
- Lowered the capabilities card below the image edge in `src/sections/CapabilitiesSection/components/CapabilitiesContent.tsx` so it now sits partially outside the photo.
- Lowered the capabilities overlay card again in `src/sections/CapabilitiesSection/components/CapabilitiesContent.tsx` to place it deeper inside the image.
- Moved the capabilities overlay card lower and reduced its overall size in `src/sections/CapabilitiesSection/components/CapabilitiesContent.tsx` to better match the reference proportions.
- Reduced the size of the white overlay card in `src/sections/CapabilitiesSection/components/CapabilitiesContent.tsx` so more of the background image remains visible around it.
- Resized and repositioned the white overlay card in `src/sections/CapabilitiesSection/components/CapabilitiesContent.tsx` so it sits clearly inside the image, and restored the lower CTA like the reference.
- Replaced the background of `src/sections/CapabilitiesSection/components/CapabilitiesContent.tsx` with the local user-provided image from `src/assets/WhatsApp Image 2026-03-25 at 12.27.51 AM.jpeg`.
- Refined `src/sections/CapabilitiesSection` so the industrial background runs full width and the white overlay card is narrower and lower, exposing more of the image like the reference.
- Rebuilt `src/sections/CapabilitiesSection` into a full-width industrial image block with a white overlay card to match the new visual reference below the hero.
- Removed the remaining `Ejecutamos montaje...` content block from `src/sections/CapabilitiesSection/components/CapabilitiesContent.tsx` to eliminate the white rectangle under the hero.
- Matched the hero `Conoce lo que hacemos` CTA more closely to the reference and removed the `Soluciones de montaje industrial...` heading from `src/sections/CapabilitiesSection/components/CapabilitiesContent.tsx`.
- Updated the hero CTA in `src/sections/HeroSection/components/HeroButton.tsx` to stay transparent over the video and turn into a white rectangle only on hover.
- Restyled the hero `Ver proyecto` CTA in `src/sections/HeroSection/components/HeroButton.tsx` into a boxed Techint-like button and made its colors react to scroll.
- Lowered the hero video focal point again in `src/sections/HeroSection/components/HeroBackground.tsx` so more of the plant remains visible in the header.
- Added direct `documentElement` and `body` scrollTop assignments in `src/App.tsx` to reinforce section jumps triggered from the mobile menu.
- Delayed App-level menu scrolling until after the overlay close transition and now compute target positions from `getBoundingClientRect().top + scrollY`.
- Converted overlay navigation in `src/components/MobileMenu.tsx` from anchors to buttons so menu section changes rely only on React/App navigation logic.
- Changed menu-triggered section jumps in `src/App.tsx` to immediate offset scrolling for more reliable navigation from the overlay.
- Moved menu scrolling responsibility to `src/App.tsx`, leaving `src/components/MobileMenu.tsx` as a pure navigation trigger so section jumps run only after the overlay closes.
- Switched mobile menu scrolling in `src/components/MobileMenu.tsx` from `scrollIntoView` to `window.scrollTo` with section offsets for more reliable anchor navigation.
- Updated `src/components/MobileMenu.tsx` so menu clicks unlock body scroll immediately, close the overlay, and then scroll to the requested section programmatically.
- Simplified menu navigation by switching `src/components/MobileMenu.tsx` back to native hash links and enabled global smooth scrolling in `src/tailwind.css`.
- Reworked `src/components/MobileMenu.tsx` to queue menu navigation until after the overlay closes, fixing cases where every click snapped back to the header.
- Fixed `src/components/MobileMenu.tsx` so menu links close the overlay first and then scroll, including reliable return-to-top behavior for hero/header items.
- Wired the mobile menu in `src/components/MobileMenu.tsx` to real landing section ids and added missing ids to hero, careers, innovation, sustainability, news, and footer sections.
- Connected `Conoce lo que hacemos` to `#capabilities-section` and `Conoce nuestras capacidades` to `#projects-section` with smooth scrolling.
- Replaced the capabilities section copy in `src/sections/CapabilitiesSection/components/CapabilitiesContent.tsx` with industrial montage messaging aligned to the hero.
- Tightened the hero text block in `src/sections/HeroSection/components/HeroContent.tsx` so the `Ver proyecto` button sits clearly below the paragraph.
- Changed `src/sections/Header/index.tsx` from fixed to absolute so the logo and menu scroll away with the page.
- Lowered the hero video focal point again and added horizontal padding in `src/sections/Header/components/HeaderNav.tsx` so the menu sits farther from the right edge.
- Simplified `src/sections/HeroSection/components/HeroBackground.tsx` to use only `src/assets/header.mp4` and removed the missing secondary video import.
- Adjusted the hero video framing in `src/sections/HeroSection/components/HeroBackground.tsx` to show more plant and less sky.
- Updated the hero header copy with the new industrial montage title and subtitle provided by the user.
- Switched the hero header background to the two local videos in `src/assets` and rotate between them automatically.
- Switched header and mobile menu branding to the user-provided PNG asset `src/assets/Logo-original-2-blanco-1.png`.
- Replaced the reconstructed logo asset with the original SVG provided by the user.
- Restored a single shared LYH logo asset and reconnected it in header and mobile menu, based on the latest reference image.
- Removed the added graphic logo asset and replaced it with simple text branding in header and mobile menu.
- Refined the shared LYH logo proportions and increased header/menu logo frames so the mark no longer appears cramped.
- Added `vite/client` types in `src/tsconfig.app.json` so the single SVG logo asset resolves cleanly in the editor.
- Removed the intermediate `BrandLogo` component so header and mobile menu now consume the single shared asset file directly.
- Replaced the inline brand mark with a single shared asset file `src/assets/brand-logo-lyh.svg` used by both header and mobile menu.
- Added a reusable `BrandLogo` and wired it into the header and mobile menu so Ingeniería LYH branding appears in both places.
- Replaced the temporary recovery UI in `src/App.tsx` with the real section-based page composition.
- Silenced the TypeScript 6 `baseUrl` deprecation diagnostic in `src/tsconfig.app.json`.
- Replaced the last failing alias import in `src/sections/SustainabilitySection/index.tsx` with a relative import.
- Fixed `cookieBanner.tsx` duplicate export and corrected `tsconfig.app.json` path/include settings for TypeScript alias resolution.
- Fixed current workspace diagnostics: restored `@/*` alias resolution, repaired `NewsCarousel` / `NewsHeader`, rebuilt `ProfessionalSection`, and added VS Code Tailwind lint settings.
- Removed the stray typo file `src/.gitgnore`; the intended ignore file is `src/.gitignore`.
- Added `src/App.tsx`, `src/sections/ProjectsSection/components/ProjectsHeader.tsx`, `src/sections/SustainabilitySection/*`, `.gitignore`, and workspace alias docs `CHANGELOG.md` / `DATABASE.md`.
- Added more section scaffolding from the second screenshot: `HeroSection`, `InnovationSection`, `NewsSection`, `ProfessionalSection`, `ProjectsSection`.
- Added the section folder/file scaffold from the screenshot: `CapabilitiesSection`, `Footer`, `Header`, `HeroSection`.
- Replaced the extensionless `src/sections/CapabilitiesSection` file with the correct folder structure and `index.tsx` entry.
- Created `src/sections/CapabilitiesSection/components/CapabilitiesContent.tsx` after materializing the folder on disk.
- Repaired broken workspace config so TypeScript can resolve React/node types again.
- Restored `src/components/MobileMenu.tsx`; converted `src/sections/CapabilitiesSection` into a re-export compatibility shim.
- Fixed `src/tsconfig.json`, `src/tsconfig.app.json`, `src/tsconfig.node.json`, `src/tailwind.config.js`, `src/vite.config.ts`, `src/package.json`
- Added missing app entrypoint `src/index.tsx` and corrected `src/index.html` to load it.
- Corrected Tailwind `content` globs for the actual project root and excluded `node_modules` from the scan.

## 2026-04-14
- Renamed all "Techint" / "Techint E&C" references to "Ingeniería LYH"
- Files updated: `src/sections/Footer/index.tsx`, `src/sections/NewsSection/components/NewsCarousel.tsx`, `src/com´pnents/MobileMenu.tsx
- Note: HeaderLogo uses an SVG base64 (the Techint wordmark graphic) — user may want a custom logo

## 2026-04-14
- Added full interactivity to Techint website clone (interactive carousels, menu, search, cookies.)
- Created `src/components/MobileMenu.tsx` — full-screen animated nav overlay
- Updated all Header components to accept/pass `onMenuOpen` prop chain
- Updated `LanguageSelector` with real dropdown, `SearchForm` with expand/collapse toggle
- Upgraded `ProjectsCarousel` and `NewsCarousel` with drag, touch, arrows, dots, progress bar
- Fixed Hero video (proper React attrs), HeroButton/ScrollLink with smooth scroll to `#projects-section`
- `CookieBanner` now dismissible via `onAccept` prop managed in `App.tsx`

</changelog>