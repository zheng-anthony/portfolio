# Project guidance

## Purpose and audience

This is Anthony Zheng's single-page software engineering portfolio. It is intended to help hiring managers quickly understand his experience, projects, and technical skills, with a focus on backend systems, databases, and cloud infrastructure.

Keep the page readable, easy to scan, responsive, and straightforward to navigate. The current section order is Hero, About (including Education), Experience, Projects, Skills, and Contact. Keep the sticky header navigation in the same order as the sections.

## Stack and structure

- Use React, TypeScript, Vite, and Tailwind CSS.
- Use TypeScript for application code and define types for portfolio data and component props.
- Keep reusable UI in `src/components`, editable portfolio content in `src/data/portfolio.ts`, and shared data types in `src/types/portfolio.ts`.
- Prefer Tailwind utilities for styling. Tailwind's stylesheet entry is provided by `vite.config.js`; avoid adding separate CSS files unless explicitly requested or necessary.
- Keep content and presentation separate where practical. Reuse components for repeated elements such as skill cards.

## Design direction

- Aim for a clean, modern, sleek interface with a dark palette, strong contrast, and a clear visual hierarchy.
- Use shell and terminal details as accents, such as paths, short commands, a file-inspired profile panel, and skill directories. They should support the content without making the page hard to read or navigate.
- Keep navigation labels concise. Use commands where they have a clear relationship to the displayed content; avoid repeating terminal prompts or adding decorative command text everywhere.
- The Skills section uses evenly sized, responsive directory cards with skill names and icons. Keep all skills visible without requiring interaction.
- Respect reduced motion preferences, provide visible keyboard focus, and preserve accessible navigation. Keep animations deliberate and avoid making content inaccessible while it is off screen.

## Content

- Treat `src/data/portfolio.ts` as the source of truth for profile details, experience, projects, and skills.
- Do not invent personal details, dates, employers, project descriptions, links, or qualifications. Use clearly marked placeholders until the information is supplied.
- Experience entries form a timeline. Experience and project descriptions are intentionally omitted for now unless requested.
- Use plain, concise, user-facing language. Avoid filler and unnecessary visual decoration.

## Checks

- Run `npm run build` for the TypeScript check and production build, and `npm run lint` after code changes when applicable.
