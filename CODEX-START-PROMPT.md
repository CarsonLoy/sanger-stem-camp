# Initial Codex Prompt

Read every existing repository file before making changes, especially `PROJECT-BRIEF.md`, `AGENTS.md`, `docs/CONTENT-INVENTORY.md`, and `docs/RESOURCES-AND-BUDGET.md`.

Build the foundation of a static Astro website called **Sanger STEM Camp Playbook**.

The site is a literal, chronological how-to guide for running a free three-day STEM camp for grades 3–6. It is not primarily a promotional landing page. An organizer should be able to keep a day page open and follow it from preparation through cleanup.

Requirements:

- Astro with TypeScript
- Markdown or MDX for long-form content
- GitHub Pages deployment
- No backend or accounts
- Mobile-first responsive layout
- Accessible semantic HTML
- Print-friendly day and activity pages
- Reusable checklist, timeline, supply-table, pro-tip, warning, troubleshooting, download, and photo components
- Clear labels for:
  - Buy for this camp
  - Check your inventory
  - Specialized equipment
  - Source locally or collect
  - Optional upgrade
- Support both incremental and from-scratch budget views
- Use TODO markers rather than fabricated content
- Do not use lorem ipsum
- Keep required steps on the main page; do not scatter them across many subpages

Create the initial pages and navigation:

1. Home
2. Start Here
3. Resources & Budget
4. Before the Camp
5. Day 1
6. Day 2
7. Day 3
8. After the Camp
9. Downloads
10. About Our Camp

Use `docs/days/day-1.md` as the first substantial content page. Day 2 may remain incomplete and visibly marked as a draft. Day 3 should remain a structured placeholder.

Begin by writing a concise implementation plan. Then implement the site foundation, content schemas, reusable components, GitHub Pages workflow, README instructions, and the Day 1 page.

At the end:

1. Run the production build.
2. Report files changed.
3. List assumptions.
4. List unresolved TODOs.
5. Explain how to add or edit a day without changing layout code.
