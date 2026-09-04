# Verbatim

> **Agent-Native Learning Workspace powered by WebMCP**
> *The web, designed for both humans and agents.*

---

## Problem

Traditional learning platforms force humans to manually search, filter, guess prerequisites, sequence modules, and navigate fragmented course catalogs.

When AI agents try to assist users on normal websites, they are forced to act like artificial humans: inferring complex DOM layouts, taking screenshots, and executing fragile mouse clicks. This is brittle, slow, and prone to error.

## Solution

**Verbatim** is built as an **agent-native learning environment**. Instead of forcing an AI agent to browse visually, Verbatim exposes its real application capabilities directly to agents via **WebMCP** (document.modelContext.registerTool(...)).

A human and an AI agent collaborate seamlessly:
- The human states their natural language goal (e.g., *\"Teach me Next.js server components in 25 minutes\"*).
- The agent discovers Verbatim's structured tools, searches the real 120-lesson corpus, inspects relevant lessons, and compiles an adaptive learning plan.
- When the human interrupts (*\"Actually, I only have 10 minutes\"*), the agent reads the learner's state and adaptively re-plans.
- The agent opens the selected lesson directly in the human's visible workspace and updates learner progress when completed.

---

## Why WebMCP Matters

> *“Traditional browser agents must infer website structure visually and interact through clicks. Verbatim exposes learning actions as structured capabilities, allowing agents to search, inspect, plan, and manipulate the actual learning workspace directly.”*

WebMCP turns the website into an **agent-operable workspace**, where human interactions and agent tool calls operate on the exact same reactive application state.

---

## Architecture

`	ext
                 HUMAN
                   │
                   ▼
          ┌─────────────────┐
          │ Verbatim UI     │
          │                 │
          │ Courses         │
          │ Lessons         │
          │ Progress (13/120│
          │ Agent Activity  │
          └────────┬────────┘
                   │
                   │ Shared Reactive State (LearningStore)
                   ▼
          ┌─────────────────┐
          │ WebMCP Layer    │
          │ (document.      │
          │  modelContext)  │
          └────────┬────────┘
                   │
       ┌───────────┼────────────┐
       ▼           ▼            ▼
    Search      Inspect       State
       │           │            │
       └───────────┼────────────┘
                   ▼
                 Plan
                   │
                   ▼
               Open Lesson (Live Workspace Mutation)
                   │
                   ▼
            Update Progress (13/120 → 14/120)
`

---

## Available WebMCP Tools

All 6 tools are registered imperatively via document.modelContext.registerTool(...):

| Tool | Purpose | Key Inputs | Key Outputs |
|---|---|---|---|
| search_learning | Search 120-lesson corpus across 10 courses | query, course?, 	opic?, limit? | Ranked lessons, summaries, duration, relevance |
| inspect_lesson | Deep-inspect learning objectives and notes | lessonId | Objectives, notes, key points, videoUrl, proTips |
| get_learning_state | Read current learner progress and plans | none | Current lesson, completed IDs, active plan, goal |
| create_learning_plan | Generate time-budgeted sequenced plan | 	opic, 	imeBudget, preferences? | Sequenced lessons, durations, pedagogical rationale |
| open_lesson | Direct manipulation of the visible workspace | lessonId | Navigates & displays lesson video/notes modal |
| update_learning_progress | Mutate learner progress | lessonId, status | Updates progress counter (e.g. 13/120 → 14/120) |

---

## The Primary 60-Second Demo Scenario

1. **Goal**: User states: *“Teach me Next.js server components. I have 25 minutes.”*
   - Agent invokes search_learning and finds relevant lessons.
   - Agent invokes inspect_lesson on lesson.nextjs-app-router-in-depth-server-components.
   - Agent calls create_learning_plan (25 mins) -> 3-lesson plan appears in the UI.
2. **Collaboration & Constraint Change**: User says: *“Actually, I only have 10 minutes.”*
   - Agent calls get_learning_state and regenerates create_learning_plan (10 mins).
   - Plan dynamically updates to a 2-lesson prioritized track.
3. **Action**: User says: *“Open the most important lesson.”*
   - Agent calls open_lesson(...).
   - The visible Verbatim workspace instantly brings up the lesson video, notes, and key points.
4. **Progress**: User says: *“I finished the lesson. Mark it complete.”*
   - Agent calls update_learning_progress(lessonId, 'completed').
   - The learner progress counter visibly increments from **13 / 120** to **14 / 120**.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, Instrument Serif & Inter fonts
- **WebMCP**: Imperative registration on document.modelContext
- **Corpus**: 120 self-contained, typed lessons across 10 courses derived from Sanity seed data
- **UI Components**: Lucide React icons, Clerk authentication controls

---

## Getting Started

`ash
# Clone and switch to the atharv branch
git checkout atharv

# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
http://localhost:3000
`

---

## Agent Discoverability (llms.txt)

Verbatim serves machine-readable agent documentation at /llms.txt, describing capabilities, tool parameters, and constraints for automated agent discovery.
