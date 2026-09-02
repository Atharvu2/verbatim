# Implementation Prompt: Verbatim Home Page Implementation

## 1. Goal
Implement the **Verbatim Home Page** according to `design/verbatim-home.png`, applying the Verbatim Design System tokens:
- Change all occurrences of the word "Vertex" to **"Verbatim"**.
- Change all orange accents (eyebrow tag, CTA button, link arrows, bottom visual gradient) to the **primary teal/sage palette** (`primary-500`, `primary-400`, `primary-100`).
- Use **Instrument Serif** for main display headings (`Search your learning in plain English.`, `All Courses`, course titles) and **Inter** for UI elements, descriptions, and body text.
- Move the design system showcase to `/design-system` so it remains accessible for reference.

---

## 2. Skills Read & Referenced
- `AGENTS.md` (What you are building, UI work exact replication rules, Next.js App Router conventions)
- `modern-web-guidance` (Semantic layout, responsive design, focus rings, accessibility)

---

## 3. Code & Assets Inspected
- `design/verbatim-home.png`: Home page design reference with header, hero section, plain-language search input, "All Courses" section with 3 course cards, weekly courses callout, and bottom geometric gradient waveform.
- `app/globals.css`: Design system tokens (colors, font variables, shadows, radii).
- `app/layout.tsx`: Instrument Serif and Inter font configuration.
- `components/ui/logo.tsx`: Verbatim logo icon and wordmark.
- `components/nav/navbar.tsx`: Header navigation component.
- `components/cards/course-card.tsx`: Course card component.

---

## 4. Decisions & Visual Specifications

1. **Header & Navigation**:
   - Verbatim Logo (`Logo` component with teal geometric V and Instrument Serif wordmark).
   - Nav links: "Courses", "My Learning".
   - Right controls: Notifications bell with unread badge + user avatar profile image.

2. **Hero Section**:
   - **Eyebrow Tag**: `INTELLIGENT LEARNING` badge (`bg-primary-100 text-primary-700 border border-primary-200/60 font-semibold tracking-widest text-[11px] px-3.5 py-1 rounded-full`).
   - **Main Display Title**: `Search your learning in plain English.` in **Instrument Serif** (`text-5xl sm:text-6xl lg:text-7xl font-serif text-neutral-900 tracking-tight leading-[1.1] text-center`).
   - **Subtitle**: `Verbatim understands what you want to learn and finds the exact lessons across all your courses.` (`text-base sm:text-lg text-neutral-600 text-center max-w-xl mx-auto leading-relaxed`).
   - **CTA Button**: `Explore Courses →` (`Button` variant `primary`, `h-12 px-6 rounded-[12px] bg-primary-500 hover:bg-primary-600 text-white font-medium text-base shadow-sm`).
   - **Central Search Bar**:
     - Large rounded search container (`h-14 sm:h-16 px-5 rounded-[16px] bg-white border border-neutral-200/80 shadow-md focus-within:border-primary-400 focus-within:ring-4 focus-within:ring-primary-400/10`).
     - Search icon (`Search` 20px text-neutral-400).
     - Input field with placeholder: `"Ask anything about your learning..."`.
     - Shortcut chip on the right: `⌘ K` (`bg-neutral-100 border border-neutral-200 text-neutral-500 rounded-[8px] px-2.5 py-1 text-xs font-medium`).

3. **"All Courses" Catalog Preview Section**:
   - Section Header: `All Courses` in **Instrument Serif** (`text-3xl font-serif text-neutral-900`) on left, and `View all courses →` (`text-sm font-medium text-primary-600 hover:text-primary-700 inline-flex items-center gap-1.5`) on right.
   - **Course Cards Grid (3 Columns)**:
     1. **Next.js for Production**: Next.js icon (`N`), title `Next.js for Production`, summary `Build scalable, high-performance web applications with Next.js.`, footer metadata `Intermediate • 18h 24m • 12 modules`.
     2. **Docker Essentials**: Docker whale illustration/icon in blue/teal, title `Docker Essentials`, summary `Containerize applications and streamline your development workflow.`, footer metadata `Beginner • 10h 12m • 8 modules`.
     3. **TypeScript Deep Dive**: TS badge icon (`TS`), title `TypeScript Deep Dive`, summary `Go beyond the basics and write safer, more expressive code.`, footer metadata `Intermediate • 14h 36m • 10 modules`.

4. **Callout Divider**:
   - Subtle horizontal divider with star icon (`Star` in `text-primary-500`) and message: `New courses and lessons added every week.` (`text-xs sm:text-sm font-medium text-neutral-600`).

5. **Bottom Teal Geometric Waveform**:
   - Responsive abstract stepped equalizer / waveform visual in teal/sage gradients (`from-primary-500/20 to-primary-100/40`) at the bottom of the page.

6. **Routing & Preserving Design System Showcase**:
   - Move existing design system showcase to `app/design-system/page.tsx`.
   - Implement the new home page at `app/page.tsx`.

---

## 5. Files to Touch / Create
- `app/design-system/page.tsx`: Relocated design system showcase page.
- `components/home/hero-section.tsx`: Hero banner, eyebrow tag, search bar, and CTA.
- `components/home/featured-courses.tsx`: Course cards grid with custom brand icons (Next.js, Docker, TypeScript).
- `components/home/bottom-graphic.tsx`: Teal geometric gradient bars matching design.
- `app/page.tsx`: Complete home page composing header, hero, courses, callout, and bottom graphic.

---

## 6. Acceptance Criteria
1. Exact visual fidelity matching `design/verbatim-home.png` with all "Vertex" text replaced with "Verbatim" and oranges transformed into the teal/sage palette.
2. Main title and section headers use **Instrument Serif** with crisp, balanced typography; body and UI elements use **Inter**.
3. Big search bar features search icon, proper placeholder, and `⌘K` badge.
4. The 3 course cards display clean icons, titles, descriptions, and metadata footers.
5. Design System showcase remains accessible at `/design-system`.
6. `npm run lint` and `npm run build` pass with 0 errors.

---

## 7. Checks to Run
- `npm run lint`
- `npm run build`

---

## 8. Manual Test Steps
1. Run `npm run dev` and navigate to `http://localhost:3000`.
2. Verify the Header: Logo with "Verbatim", navigation links, notification bell, user avatar.
3. Verify the Hero Section: `INTELLIGENT LEARNING` badge, large Instrument Serif heading, subtitle, `Explore Courses →` teal button, and the search input with `⌘ K` badge.
4. Verify the Courses Section: `All Courses` heading, `View all courses →` link, and the 3 course cards (Next.js, Docker, TypeScript).
5. Verify the bottom callout and teal geometric gradient waveform.
6. Visit `http://localhost:3000/design-system` to confirm the design system showcase is intact.
