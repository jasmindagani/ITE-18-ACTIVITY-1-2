# Student Information Website – Activity 2

Build Your Own Reusable Components (Nuxt 4 + Vue 3)
Design: green scrapbook / notebook theme (gingham, polaroids, notebook pages) with hover effects. The Home page fits on one screen (one slide).

## Run the project
```bash
npm install
npm run dev
```
Open http://localhost:3000 (internet needed once for the Google Fonts; fallbacks are included).

## Components (`app/components/`)
| Component | Purpose |
|-----------|---------|
| `AppHeader.vue` | Website navigation |
| `AppFooter.vue` | Website footer |
| `StudentCard.vue` | Displays student information (props), polaroid that flips on hover |
| `InfoCard.vue` | Displays a title and description (notebook page) |
| `AppButton.vue` | Reusable button (`label`, `color` props) |

## Requirements checklist
- Props passed to `StudentCard` – `app/pages/students.vue`
- 6 student cards (minimum 3) – data in `app/composables/useStudents.ts`
- Same header and footer on every page – `app/app.vue` (Home, Students, About)
- Button customized with `label` and `color` props – `AppButton.vue` (try it on the About page "Button lab")

## Hover effects
Nav links tilt, buttons lift, student cards flip to show a motto/hobby/skills, notebook cards straighten and rise, polaroids and stars on the home hero react.

## Customize
- Edit students in `app/composables/useStudents.ts`.
- To show a real photo, put an image in `public/` and pass `photo="/juan.jpg"` to `StudentCard`.
