# Implementation Prompt: Verbatim Design System

## 1. Goal
Implement the complete, production-ready **Verbatim Design System** according to `design/verbatim-designsystem.png`, adhering to the greenish-teal/sage palette, **Instrument Serif** as the display/serif font, **Inter** as the clean body font, exact Tailwind v4 token configurations, and reusable React UI components with an interactive Design System preview page.

---

## 2. Skills Read & Referenced
- `AGENTS.md` (Design guidelines, tech stack boundaries, UI replication rules)
- `modern-web-guidance` (Modern CSS tokens, semantic HTML, accessibility, focus rings)

---

## 3. Code & Assets Inspected
- `design/verbatim-designsystem.png`: Full design spec with 14 sections (Colors, Typography, Type Scale, Spacing, Radius & Shadows, Icons, Buttons, Inputs, Badges/Tags, Status/Indicators, Progress Bar, Cards, Navigation, Principles).
- `package.json`: Next.js 16.3.4, React 19.2.8, Tailwind CSS v4 (`@tailwindcss/postcss`, `tailwindcss`).
- `app/globals.css`: Tailwind v4 stylesheet setup.
- `app/layout.tsx`: Root layout with font imports.

---

## 4. Decisions & Assumptions

1. **Color Palette (Greenish-Blue / Teal-Sage Hues)**:
   - The design spec image visually shows a soothing sage/teal primary palette (with erroneous placeholder hex labels like `#F97316` in the mock image). Per user instruction ("stick to the greenish-blue hues given... change hex codes wherever necessary"), we extract and map the exact greenish-teal hues:
     - `primary-500`: `#3D8268` (Deep Sage / Forest Teal - Primary action)
     - `primary-400`: `#5A9E84` (Medium Sage Teal - Hover & accents)
     - `primary-300`: `#87BBA5` (Soft Teal)
     - `primary-200`: `#BEDCCF` (Pale Mint / Border tint)
     - `primary-100`: `#EEF6F2` (Very light mint tint - Badges / Active states)
     - `primary-50`: `#F6FAF8` (Ultra light tint)
   - **Neutrals**:
     - `neutral-900`: `#0F172A` (Dark slate text)
     - `neutral-700`: `#334155` (Secondary text)
     - `neutral-500`: `#64748B` (Muted / metadata text)
     - `neutral-300`: `#CBD5E1` (Borders / dividers)
     - `neutral-200`: `#E2E8F0` (Default input/card borders)
     - `neutral-100`: `#F1F5F9` (Subtle container backgrounds)
     - `neutral-50`: `#F8FAFC` (Page background)
     - `white`: `#FFFFFF`

2. **Typography**:
   - **Display / Heading**: `Instrument_Serif` from `next/font/google` (Display 1: 48px/56px, Display 2: 36px/44px).
   - **Body / Sans**: `Inter` from `next/font/google` (Heading 1: 28px/36px, Heading 2: 22px/30px, Heading 3: 18px/26px, Body Large: 16px/24px, Body: 14px/20px, Small: 12px/16px).
   - Configure CSS variables `--font-instrument-serif` and `--font-inter` and expose them via Tailwind theme.

3. **Icons & Helper Utilities**:
   - Install `lucide-react` for clean, consistent 24x24 outline and filled icons matching the design specs (2px stroke width, rounded caps).
   - Add `clsx` and `tailwind-merge` with a standard `cn()` utility for class composition.

4. **Component Architecture (`components/ui/`, `components/cards/`, `components/nav/`)**:
   - `Button`: Primary (solid teal), Secondary (teal outline), Tertiary (neutral outline with external icon), Text (link button with play icon), with default/hover/disabled/loading states.
   - `Input` & `SearchInput`: 44px height, 12px radius, search icon + `⌘K` keyboard shortcut badge.
   - `Select`: Custom-styled select dropdown matching 44px height and 12px radius.
   - `Badge`: `VIDEO`, `LESSON`, `POPULAR` pill variants with rounded geometry.
   - `StatusIndicator`: `In Progress`, `Completed`, `Now Playing`, `Locked`.
   - `ProgressBar`: Track (`neutral-200`) and fill (`primary-500`) with percentage label.
   - `CourseCard`: Course icon, title, description, level/duration/modules metadata footer.
   - `LessonVideoCard`: Video badge, lesson title, description, timestamp + "Watch from XX:XX" action.
   - `LessonCard`: Lesson badge, lesson title, description, module tag + "View lesson ↗" action.
   - `ResourceCard`: Document icon, title, description, file format / size + external link.
   - `Navbar`: Verbatim logo (geometric teal V icon + Instrument Serif wordmark), navigation links ("Courses", "My Learning").
   - `Breadcrumbs`: Path navigation with chevron separators.
   - `Pagination`: Previous/Next controls with active page indicator.

5. **Design System Showcase (`app/page.tsx`)**:
   - Create a complete showcase page reproducing the exact 14 sections from `verbatim-designsystem.png` to preview the design system live in the browser.

---

## 5. Files to Touch / Create
- `package.json`: Add `lucide-react`, `clsx`, `tailwind-merge`.
- `app/layout.tsx`: Import and configure `Instrument_Serif` and `Inter` font variables.
- `app/globals.css`: Define Tailwind v4 `@theme` tokens (colors, fonts, radius, shadows, typography scale).
- `lib/utils.ts`: `cn` class helper.
- `components/ui/button.tsx`: Button component with variants and sizes.
- `components/ui/input.tsx`: Input and Search input component.
- `components/ui/select.tsx`: Select dropdown component.
- `components/ui/badge.tsx`: Badge tags.
- `components/ui/status-indicator.tsx`: Status indicator badges.
- `components/ui/progress-bar.tsx`: Progress bar component.
- `components/ui/logo.tsx`: Verbatim logo icon and wordmark.
- `components/cards/course-card.tsx`: Course card component.
- `components/cards/lesson-video-card.tsx`: Lesson video card component.
- `components/cards/lesson-card.tsx`: Standard lesson card component.
- `components/cards/resource-card.tsx`: Resource card component.
- `components/nav/navbar.tsx`: Header navigation component.
- `components/nav/breadcrumbs.tsx`: Breadcrumb trail component.
- `components/nav/pagination.tsx`: Pagination component.
- `app/page.tsx`: Interactive Design System showcase page displaying all 14 sections.

---

## 6. Requirements & Design Specifications
- **Radius**: xs (4px), sm (8px), md (12px), lg (16px), xl (24px), full (9999px).
- **Shadows**:
  - `sm`: `0 1px 2px 0 rgba(15, 23, 42, 0.05)`
  - `md`: `0 4px 12px -2px rgba(15, 23, 42, 0.08)`
  - `lg`: `0 12px 24px -4px rgba(15, 23, 42, 0.10)`
  - `xl`: `0 20px 40px -8px rgba(15, 23, 42, 0.12)`
- **Interactive States**: Hover transitions, focus-visible outline/rings (`primary-400`), disabled opacity and pointer-events.
- **Accessibility**: Semantic elements, `aria-*` labels on icons and buttons, high-contrast text on teal buttons.

---

## 7. Security Considerations
- Purely presentation and UI layer; no client-side secret tokens or unsafe HTML injection.

---

## 8. Acceptance Criteria
1. `Instrument Serif` is active for display headers, and `Inter` is active for body/UI text.
2. The color palette accurately represents the teal/sage green shades with proper semantic names (`primary-500`, `primary-400`, `neutral-*`).
3. All components from the 14 design system sections are implemented as reusable React components with TypeScript types.
4. The showcase page cleanly renders all sections matching `design/verbatim-designsystem.png`.
5. Type check (`npm run build` or `npx tsc --noEmit`) and lint pass without errors.

---

## 9. Checks to Run
- `npm run build`
- `npm run lint`

---

## 10. Manual Test Steps
1. Run `npm run dev` and navigate to `http://localhost:3000`.
2. Inspect the **Colors** section to verify teal/sage swatches and neutral shades.
3. Check the **Typography** section to verify `Instrument Serif` (Display 1 & 2) and `Inter` (Headings and Body sizes).
4. Verify interactive states on **Buttons** (Primary, Secondary, Tertiary, Text) on hover/disabled.
5. Test **Inputs** (`Search Input` with `⌘K` badge and `Select` dropdown).
6. Verify **Cards** (Course Card, Lesson Video Card with timestamp, Lesson Card, Resource Card).
7. Verify **Navigation, Breadcrumbs, Status Indicators, and Progress Bar**.
