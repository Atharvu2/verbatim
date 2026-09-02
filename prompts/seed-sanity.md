# Implementation Prompt: Seed Sanity Dataset from seed.ndjson and videos.json

## Goal
Seed the Sanity dataset using `seed.ndjson` and `videos.json` via the Sanity CLI (`npx sanity datasets import`), without modifying either source file. Verify the imported `course` documents in Sanity afterward.

## Skills Read
- `AGENTS.md` (Workflow, project rules, decision records)
- `sanity-migration` (`.agents/skills/sanity-migration/SKILL.md`)
- `sanity-best-practices` (`.agents/skills/sanity-best-practices/SKILL.md`)

## Code Inspected
- `seed.ndjson`: 141 newline-delimited JSON documents covering 6 categories, 5 instructors, 120 lessons, and 10 courses.
- `videos.json`: 120 video metadata entries mapping lesson identifiers to YouTube IDs, titles, channels, durations, and queries.
- `sanity/schemaTypes/`: Schema definitions for `course`, `module`, `lesson`, `instructor`, `category`.
- `sanity.cli.ts` & `sanity.config.ts`: Sanity CLI configured for project `hy1g11la` and dataset `production`.

## Decisions and Assumptions
- Neither `seed.ndjson` nor `videos.json` will be modified in any way.
- A `video` schema type will be defined in `sanity/schemaTypes/video.ts` and registered in `sanity/schemaTypes/index.ts` to accommodate video metadata documents.
- `seed.ndjson` will be imported directly using `npx sanity datasets import seed.ndjson production --replace`.
- `videos.json` entries will be formatted into video document NDJSON in a temporary scratch location (`/home/ayati/.gemini/antigravity/brain/ff2be537-ff32-4fe0-ac26-f40139423de9/scratch/video_seed.ndjson`) and imported via `npx sanity datasets import ... --replace`.
- Imported `course` documents (count, titles, slugs, module counts, and lesson counts) will be verified using `npx sanity documents query` and the server-side fetch API.

## Expected Files to Touch
- `sanity/schemaTypes/video.ts` (NEW - schema definition for video documents)
- `sanity/schemaTypes/index.ts` (MODIFY - register video schema)
- `prompts/seed-sanity.md` (NEW - this prompt)
- Scratch file: `<appDataDir>/scratch/video_seed.ndjson` (NEW - temporary uncommitted scratch artifact)
- `seed.ndjson` and `videos.json` WILL NOT BE MODIFIED.

## Requirements
1. Define `video` schema in `sanity/schemaTypes/video.ts` (`_type: 'video'`) with `id`, `url`, `title`, `channel`, `duration`, `query`, `chapters`, and `chunks`.
2. Register `video` in `sanity/schemaTypes/index.ts`.
3. Import `seed.ndjson` into the `production` dataset using `npx sanity datasets import seed.ndjson production --replace`.
4. Generate temporary NDJSON for `videos.json` in the scratch directory without touching `videos.json`, and import it into `production` using `npx sanity datasets import`.
5. Run GROQ query verification to confirm all 10 `course` documents, 120 `lesson` documents, 5 `instructor` documents, and 6 `category` documents exist and are correctly structured.
6. Verify `git status` to ensure `seed.ndjson` and `videos.json` are unmodified.

## Security Considerations
- Sanity CLI import uses local authenticated CLI session or `SANITY_API_READ_TOKEN`/write token. No secret tokens are hardcoded or committed.
- Production dataset replaces existing documents cleanly with `--replace`.

## Acceptance Criteria
- All 141 documents from `seed.ndjson` and 120 video documents from `videos.json` are successfully imported into Sanity.
- `npx sanity documents query '*[_type == "course"]'` returns 10 course documents with title, slug, modules, and lessons populated.
- Neither `seed.ndjson` nor `videos.json` has any file modifications.
- `npx tsc --noEmit` and `npm run lint` pass cleanly.

## Checks to Run
1. `npx sanity datasets import seed.ndjson production --replace`
2. Import video NDJSON from scratch path.
3. `npx sanity documents query '*[_type == "course"]{_id, title, "slug": slug.current, "moduleCount": count(modules), "lessonCount": count(modules[].lessons[])}'`
4. `npx tsc --noEmit`
5. `npm run lint`
6. `git status`

## Manual Test Steps
1. Run GROQ query to list imported courses and count their modules and lessons.
2. Open `/studio` in browser to visually confirm Course, Lesson, Instructor, Category, and Video documents.
3. Run `git status` to confirm `seed.ndjson` and `videos.json` are unchanged.
