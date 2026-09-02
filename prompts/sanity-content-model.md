# Implementation Prompt: Sanity Content Model, Studio, and Server-Side Read Data Layer

## Goal
Implement the core Sanity content model schema types (`course`, `module`, `lesson`, `instructor`, `category`) and Studio configuration for Verbatim, along with a server-side read client and data fetching layer for Next.js.

## Skills Read
- `AGENTS.md` (Rules & project specifications)
- `sanity-best-practices` (`.agents/skills/sanity-best-practices/SKILL.md`)
- `sanity-best-practices/references/schema.md`
- `sanity-best-practices/references/nextjs.md`
- `content-modeling-best-practices` (`.agents/skills/content-modeling-best-practices/SKILL.md`)

## Code Inspected
- `sanity.config.ts`: Sanity Studio configuration mounted at `/studio`.
- `sanity.cli.ts`: Sanity CLI configuration.
- `sanity/env.ts`: Sanity environment variable assertion helper.
- `sanity/lib/client.ts`: Basic Sanity client instance.
- `sanity/lib/live.ts`: Sanity live fetching configuration.
- `sanity/schemaTypes/index.ts`: Exported schema array (currently empty).
- `sanity/structure.ts`: Studio desk structure definition.
- `.env.local`: Contains `NEXT_PUBLIC_SANITY_DATASET` ("production") and `NEXT_PUBLIC_SANITY_PROJECT_ID` ("hy1g11la").

## Decisions and Assumptions
- Schema design follows strict Sanity syntax (`defineType`, `defineField`, `defineArrayMember`) and imports icons from `@sanity/icons/*`.
- `course`: Top-level document containing title, slug, summary, coverImage, level ('beginner' | 'intermediate' | 'advanced'), price, popular (boolean), studentCount (number), learningOutcomes (array of icon/title/description objects), instructor (reference to `instructor`), category (reference to `category`), and modules (array of embedded `module` objects).
- `module`: Embedded object type (not a top-level document) containing title, summary, and lessons (array of references to `lesson`).
- `lesson`: Top-level document containing title, slug, videoUrl, poster (image), duration (number of seconds), freePreview (boolean), studentCount (number), notes (Portable Text rich text array), keyPoints (array of strings), proTip (text), and resources (array of type/title/description/url objects).
- `instructor`: Top-level document containing name, slug, photo (image), expertise, and bio (Portable Text rich text array).
- `category`: Top-level document containing title, slug, and description.
- Server-side read client will utilize `SANITY_API_READ_TOKEN` for reading private datasets safely on the server. The token will never be exposed with a `NEXT_PUBLIC_` prefix.
- A query and data fetching helper module (`sanity/lib/queries.ts` or `sanity/lib/fetch.ts`) will provide type-safe GROQ queries for retrieving courses, course details with expanded module/lesson hierarchy, lessons (with reverse course lookup), instructors, and categories.
- A canonical `.env.example` file will be created and committed.

## Expected Files to Touch
- `sanity/schemaTypes/category.ts` (NEW)
- `sanity/schemaTypes/instructor.ts` (NEW)
- `sanity/schemaTypes/lesson.ts` (NEW)
- `sanity/schemaTypes/module.ts` (NEW)
- `sanity/schemaTypes/course.ts` (NEW)
- `sanity/schemaTypes/index.ts` (MODIFY)
- `sanity/structure.ts` (MODIFY)
- `sanity/lib/client.ts` (MODIFY)
- `sanity/lib/queries.ts` (NEW)
- `sanity/lib/fetch.ts` (NEW)
- `.env.example` (NEW)

## Requirements
1. **Sanity Schemas**:
   - Define `category` document schema with title, slug, and description.
   - Define `instructor` document schema with name, slug, photo, expertise, and bio (Portable Text).
   - Define `lesson` document schema with title, slug, videoUrl, poster, duration (seconds), freePreview, studentCount, notes (Portable Text), keyPoints, proTip, and resources.
   - Define `module` object schema with title, summary, and array of references to `lesson`.
   - Define `course` document schema with title, slug, summary, coverImage, level, price, popular, studentCount, learningOutcomes, instructor reference, category reference, and modules array.
   - Register all 5 schema types in `sanity/schemaTypes/index.ts`.
2. **Studio & Structure**:
   - Update `sanity/structure.ts` to organize desk navigation cleanly.
3. **Data Layer & Read Client**:
   - Update `sanity/lib/client.ts` to support server-side token initialization with `process.env.SANITY_API_READ_TOKEN`.
   - Implement GROQ queries in `sanity/lib/queries.ts`:
     - `getCoursesQuery`: Fetches course cards with instructor and category details.
     - `getCourseBySlugQuery`: Fetches complete course hierarchy (course -> instructor, category, modules -> lessons).
     - `getLessonsQuery`: Fetches list of lessons.
     - `getLessonBySlugQuery`: Fetches lesson details and performs reverse reference lookup to resolve parent course.
     - `getInstructorsQuery` & `getInstructorBySlugQuery`: Fetches instructor profile and taught courses.
     - `getCategoriesQuery`: Fetches list of categories.
   - Implement server-side fetch helpers in `sanity/lib/fetch.ts`.
4. **Environment Configuration**:
   - Create `.env.example` documenting all required Sanity environment variables (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`, `SANITY_API_READ_TOKEN`).

## Security Considerations
- `SANITY_API_READ_TOKEN` must remain strictly server-side and never be assigned to `NEXT_PUBLIC_*`.
- All Sanity data fetching from the private dataset must take place in Next.js Server Components, Server Actions, or Route Handlers.
- Slugs and document input fields must be validated to prevent injection or malformed GROQ queries.

## Acceptance Criteria
- All 5 Sanity schema types (`course`, `module`, `lesson`, `instructor`, `category`) are defined using strict `defineType`/`defineField`/`defineArrayMember` syntax and registered in `sanity/schemaTypes/index.ts`.
- Sanity Studio builds cleanly without schema errors or warnings.
- Server-side read client in `sanity/lib/client.ts` and fetch functions in `sanity/lib/fetch.ts` query Sanity dataset securely.
- GROQ queries correctly fetch and expand relational data (courses -> modules -> lessons, course -> instructor, lesson -> parent course).
- TypeScript compilation (`npx tsc --noEmit`) and ESLint (`npm run lint`) pass with zero errors.
- `.env.example` is present and documents required environment variables.

## Checks to Run
1. `npx tsc --noEmit`
2. `npm run lint`
3. `npm run build`

## Manual Test Steps
1. Navigate to `/studio` in browser (or via `npm run dev`) and verify Sanity Studio renders all document types (`Course`, `Lesson`, `Instructor`, `Category`).
2. Verify creating a new draft document of each type works as expected in Sanity Studio.
3. Test server-side fetch functions by invoking `getCourses()`, `getCourseBySlug()`, `getLessonBySlug()` in a test page/component to confirm GROQ expansion.
