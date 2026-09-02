# Implementation Prompt: Clerk Authentication Setup

## Goal
Set up Clerk authentication for the Verbatim Next.js 16 app using the Clerk CLI and link it to Clerk application `app_3ImffrJtbCoFy4bmPHEErw64yWi`. Add visible sign-in, sign-up, and signed-in user controls to the existing navbar without changing the broader page design.

## Preliminary Setup Checklist
Here's what I'll do to get the project set up with Clerk:

1. Install or update the Clerk CLI.
2. Sign in to Clerk with `clerk auth login` if needed.
3. Initialize Clerk in this existing app with `clerk init --app app_3ImffrJtbCoFy4bmPHEErw64yWi`.
4. Verify the Next.js proxy matcher includes Clerk's auto-proxy path.
5. Start the app with Clerk installed.

## Skills and Docs Read
- `AGENTS.md`
- `clerk` skill: `.agents/skills/clerk/SKILL.md`
- `clerk-setup` skill: `.agents/skills/clerk-setup/SKILL.md`
- `clerk-cli` skill: `.agents/skills/clerk-cli/SKILL.md`
- `clerk-nextjs-patterns` skill: `.agents/skills/clerk-nextjs-patterns/SKILL.md`
- `clerk-nextjs-patterns/references/middleware-strategies.md`
- Next.js bundled docs:
  - `node_modules/next/dist/docs/01-app/02-guides/authentication.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/16-proxy.md`
  - `node_modules/next/dist/docs/01-app/02-guides/environment-variables.md`

## Code Inspected
- `package.json`: root app uses Next.js `16.3.4`, React `19.2.8`, npm via `package-lock.json`, and does not yet include `@clerk/nextjs`.
- `app/layout.tsx`: root layout loads fonts and currently renders `{children}` directly inside `<body>`.
- `components/nav/navbar.tsx`: navbar has public links, a notifications button, and a hardcoded profile image placeholder.
- `app/page.tsx`: home page is a client component that renders the navbar and landing content.
- `next.config.ts`: image domains configured for Unsplash and Sanity CDN.
- `app/globals.css`: Tailwind v4 theme tokens include the existing primary teal and neutral palette.
- Current auth search found no existing Clerk/auth implementation.

## Decisions and Assumptions
- Treat this as an existing Next.js App Router project, not an empty scaffold.
- Use npm because `package-lock.json` is present.
- Use `@clerk/nextjs`, not `@clerk/clerk-react`.
- Keep the app public-first: browseable pages remain public, and this task only adds auth state and controls.
- Create `proxy.ts` at the repo root because Next.js 16 renamed middleware to Proxy.
- Put `<ClerkProvider>` inside `<body>`, preserving the current font and body classes.
- Use Clerk modal buttons in the navbar instead of adding separate sign-in/sign-up routes, unless the CLI scaffolds otherwise.
- Do not print or inspect `.env*` values. Let the Clerk CLI write environment variables.

## Expected Files to Touch
- `package.json`
- `package-lock.json`
- `app/layout.tsx`
- `components/nav/navbar.tsx`
- `proxy.ts`
- `.env.local` written by Clerk CLI, not committed or printed

## Requirements
- Check CLI availability with `command -v clerk && clerk --version`.
- If available, run `clerk update --yes`.
- If unavailable, install the CLI with npm or use an npm runner if global install is not appropriate.
- Run `clerk auth login` before initializing the existing project with the provided app id.
- Run `clerk init --app app_3ImffrJtbCoFy4bmPHEErw64yWi`.
- Ensure `proxy.ts` uses `clerkMiddleware()` and includes these matcher entries:
  - the standard static-asset exclusion matcher
  - `/(api|trpc)(.*)`
  - `/__clerk/:path*`
- Add `<ClerkProvider>` from `@clerk/nextjs` inside `app/layout.tsx`'s `<body>`.
- In `components/nav/navbar.tsx`, render:
  - notification button plus `SignInButton` and `SignUpButton` when signed out
  - notification button plus `UserButton` when signed in
- Reuse existing Tailwind tokens and navbar spacing.

## Security Considerations
- Never expose `CLERK_SECRET_KEY` to client code.
- Only `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` may be browser-visible.
- Do not read or print existing env files.
- Future server-side auth checks must use `await auth()` from `@clerk/nextjs/server`.
- Keep per-user writes and protected data behind server routes in future tasks.

## Acceptance Criteria
- `@clerk/nextjs` is installed.
- The project is linked to Clerk app `app_3ImffrJtbCoFy4bmPHEErw64yWi`.
- Clerk environment variables are available locally through the CLI-generated env file.
- Root layout wraps children with `<ClerkProvider>` inside `<body>`.
- `proxy.ts` exists and includes Clerk's auto-proxy matcher.
- Signed-out users see Sign In and Sign Up controls in the navbar.
- Signed-in users see Clerk's `UserButton` in the navbar.
- Existing public routes remain accessible.
- Checks complete or any blocker is reported with exact output.

## Checks to Run
1. `clerk doctor --json`
2. `npm run lint`
3. `npm run build`
4. `npm run dev`

## Manual Test Steps
1. Open `http://localhost:3000`.
2. Confirm the navbar shows Sign In and Sign Up while signed out.
3. Open the sign-in and sign-up modals.
4. Sign up as the first test user.
5. Confirm a profile control appears in the navbar after signup.
6. Open the user menu and confirm sign out is available.
