# CCI Interest-Based Department Selection & Career Guidance System

Haramaya University, College of Computing and Informatics. Guidance-first: interest and willingness to learn, never "you need strong skills already".

## What exists now

A fresh project: one blank placeholder home page, a default color theme, no content, no pages, no accounts. Everything below is new work.

## Phased plan

### Phase 1 — Design system + shell
Professional education/tech look: deep academic blue with a warm accent, clear typography, generous spacing, subtle motion only. Responsive header (Home, Departments, Assessment, Compare, Careers, About, Login/Sign up + mobile menu) and footer with Haramaya/CCI context.

### Phase 2 — Home page
Hero ("Discover the CCI Department That Matches Your Interests and Career Goals"), three actions (Explore Departments, Take Assessment, Compare Departments), benefits, how it works, five department preview cards, student guidance note.

### Phase 3 — Department content + list page
Full profiles for IT, Software Engineering, Computer Science, Information Systems, Information Science, each with overview, focus, study areas, subjects, technologies, skills you can develop, projects, careers, "who may enjoy this field", "what you can learn", note about current skills, related departments. Content lives in a separate content file so Afaan Oromoo can be added later. `/departments` with search, filter and a compare shortcut.

### Phase 4 — Department details
`/departments/it`, `/software-engineering`, `/computer-science`, `/information-systems`, `/information-science` with all sections, plus "Compare With Other Departments" and "Take Interest Assessment" buttons.

### Phase 5–7 — Assessment, scoring, results
`/assessment`: about 20 interest questions (activities, problem solving, creativity, programming, networking, data, business, information organisation, communication, curiosity, systems thinking, research, willingness to learn, career interest) with progress indicator, one question at a time, back/next.
Transparent scoring: each option adds points to one or more departments; results are percentages of interest alignment.
`/results`: interest profile with bars, ranked alignment (not a verdict), explanation of matched interests, career areas, next steps, and the guidance disclaimer. Actions: View Department, Compare, Retake.

### Phase 8 — Comparison
`/compare`: pick two or more departments, side-by-side table of focus, study areas, technologies, skills, careers. No "best" ranking.

### Phase 9 — Careers
`/careers`: career areas grouped by department, filterable, with the note that real opportunities depend on skills, projects, experience and the job market.

### Phase 10 — About
Haramaya/CCI context, purpose, problem addressed, how the system works, why interest-based guidance, educational purpose, clear statement that this is not an official admissions system.

### Phase 11 — Accounts + database (Lovable Cloud)
Email/password sign-up and sign-in at `/login` and `/signup` (full name, email, password, optional student ID, preferred language). Backend tables for profiles, roles, departments, questions, saved departments, assessment results and comparison history, each protected so students only see their own data.

### Phase 12 — Student dashboard
`/dashboard`: welcome, assessment status, past results, saved departments, career interests, compare history, profile editing.

### Phase 13 — Admin dashboard
`/admin`, admin-only: manage departments, questions and careers, and view basic assessment statistics.

### Phase 14 — Documentation
A project document in the app repo covering title, background, problem statement, objectives, scope, users, requirements, architecture, use cases, database design, UI design, assessment algorithm, testing plan and limitations — describing only what is actually built.

## Notes on how it will be built

- This workspace is a React + Vite project using TanStack Start and TanStack Router (file-based routes under `src/routes`), not React Router; the page list and URLs are exactly as requested. Backend logic runs as server functions rather than a separate Express server, and the database/auth is Lovable Cloud (Postgres + auth) instead of Firebase — no external accounts, no keys in the code.
- Folder shape: `src/components/`, `src/routes/` for pages, `src/data/` for department, question and career content, `src/lib/` for scoring and data access.
- Secrets stay in environment variables; passwords are never stored by the app; admin routes are checked on the server with a separate roles table.

## Delivery

Each phase ships working and testable. I will build Phases 1–4 first so you can see and test real pages, then continue through the assessment, then accounts and dashboards.
