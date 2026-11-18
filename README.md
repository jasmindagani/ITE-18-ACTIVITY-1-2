# My First Nuxt Application (Frontend)

A two-page personal profile website built with Nuxt.js and Tailwind CSS
(dashboard-style design in mauve, plum and cream).

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Folder structure

```
my-nuxt-profile/
├── app/
│   ├── assets/css/main.css      # Tailwind import + colors/animations
│   ├── components/              # AppSidebar, AppFooter, ProfileAvatar, InfoCard, SkillBadge, SkillRing
│   ├── layouts/default.vue      # Dashboard panel: sidebar + content
│   ├── pages/index.vue          # Homepage
│   ├── pages/profile.vue        # Profile page
│   └── app.vue                  # App root
├── public/avatar.svg            # Profile picture / avatar
├── nuxt.config.ts
└── package.json
```

## Customize

- Name, intro, welcome message: `app/pages/index.vue`
- Personal info, education, skills, hobbies: `app/pages/profile.vue`
- Skill ring percentages: `skillLevels` in `app/pages/profile.vue`
- Name in sidebar / footer: `app/components/AppSidebar.vue`, `AppFooter.vue`
- Colors: the `@theme` block in `app/assets/css/main.css`
- Profile picture: put `profile.jpg` in `public/` and set the `src` default in `app/components/ProfileAvatar.vue` to `/profile.jpg`
