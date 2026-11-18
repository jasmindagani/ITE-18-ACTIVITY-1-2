<script setup>
const personal = [
  { label: 'Full Name', value: 'Jasmin Rhea P. Dagani' },
  { label: 'Age', value: '21 years old' },
  { label: 'Address', value: 'San Vicente, Butuan City' },
  { label: 'Email', value: 'jasminrheadagani10@gmail.com' },
  { label: 'Contact', value: '09515549947' },
]

const education = [
  { level: 'College', school: 'Caraga State University', detail: 'Bachelor of Science and Information Technology (Currently Studying)' },
  { level: 'Senior High School', school: 'Agusan National High School', detail: 'ABM Strand (2022 – 2024)' },
  { level: 'Junior High School', school: 'San Vicente National High School', detail: '2018 – 2022' },
  { level: 'Elementary', school: 'Mandacpan Elementary School', detail: '2012 – 2018' },
]

// Skill levels shown as circular rings (value = 0 to 100)
const skillLevels = [
  { label: 'Vue.js', value: 75, color: '#e6b7cb' },
  { label: 'Nuxt.js', value: 70, color: '#86bdb3' },
  { label: 'Tailwind CSS', value: 85, color: '#eab04d' },
  { label: 'JavaScript', value: 80, color: '#f08aa9' },
]

const skills = ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Git & GitHub']
const interests = ['Web Development', 'UI/UX Design', 'Technology', 'Problem Solving']

const hobbies = [
  { icon: '📺', name: 'Watching Kdrama' },
  { icon: '🎵', name: 'Listening to Music' },
  { icon: '📚', name: 'Reading' },
  { icon: '🏓', name: 'Playing Table Tennis' },
]
// ====================================

useHead({ title: 'Profile | ' + personal[0].value })
</script>

<template>
  <div>
    <!-- Page title + back button (top right, saves space) -->
    <header class="animate-fade-up mb-4 flex flex-wrap items-center justify-between gap-3">
      <div>
        <h1 class="font-display text-3xl font-extrabold uppercase tracking-wide text-plum-deep sm:text-4xl">
          My <span class="text-gradient">Profile</span>
        </h1>
        <div class="mt-2 h-1.5 w-24 rounded-full bg-linear-to-r from-rosy via-plum to-sage"></div>
      </div>

      <NuxtLink
        to="/"
        class="group inline-flex items-center gap-2 rounded-full border-2 border-plum/40 px-5 py-2 text-sm font-semibold text-plum transition duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-linear-to-r hover:from-rosy hover:to-plum hover:text-white hover:shadow-xl hover:shadow-plum/40"
      >
        <span class="transition duration-300 group-hover:-translate-x-1.5">←</span>
        Back to Home
      </NuxtLink>
    </header>

    <div class="grid gap-4 lg:grid-cols-12">
      <!-- Personal information -->
      <InfoCard id="personal" title="Personal Information" icon="🙋" class="scroll-mt-4 lg:col-span-4">
        <div class="mb-3 flex items-center gap-3 rounded-2xl bg-cream/70 p-2">
          <ProfileAvatar small size="h-12 w-12" />
          <div class="min-w-0">
            <p class="truncate font-display text-base font-bold">{{ personal[0].value }}</p>
            <p class="text-[11px] font-medium uppercase tracking-widest text-rosy">Student</p>
          </div>
        </div>
        <ul class="space-y-1.5">
          <li
            v-for="item in personal"
            :key="item.label"
            class="flex justify-between gap-3 rounded-full bg-cream/60 px-4 py-1.5 text-xs transition duration-300 hover:translate-x-1.5 hover:bg-plum hover:text-cream hover:shadow-md hover:shadow-plum/30"
          >
            <span class="font-semibold opacity-70">{{ item.label }}</span>
            <span class="truncate text-right font-medium">{{ item.value }}</span>
          </li>
        </ul>
      </InfoCard>

      <!-- Educational background -->
      <InfoCard id="education" title="Educational Background" icon="🎓" class="scroll-mt-4 lg:col-span-5">
        <ul class="space-y-2">
          <li
            v-for="edu in education"
            :key="edu.level"
            class="group/item flex items-center gap-3 rounded-full bg-cream/70 p-1.5 pr-5 transition duration-300 hover:translate-x-1.5 hover:bg-plum hover:text-cream hover:shadow-lg hover:shadow-plum/30"
          >
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-linear-to-br from-blush-deep to-mauve text-lg transition duration-300 group-hover/item:rotate-12 group-hover/item:scale-110">
              🏫
            </span>
            <div class="min-w-0">
              <p class="text-[10px] font-bold uppercase tracking-wider text-rosy transition group-hover/item:text-blush">{{ edu.level }}</p>
              <p class="truncate text-xs font-semibold">{{ edu.school }}</p>
              <p class="truncate text-[11px] opacity-70">{{ edu.detail }}</p>
            </div>
          </li>
        </ul>
      </InfoCard>

      <!-- Skill rings -->
      <div class="animate-fade-up rounded-3xl border-2 border-blush-deep/70 p-3 transition duration-300 hover:border-plum/50 lg:col-span-3">
        <p class="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-plum">Skill Levels</p>
        <div class="grid grid-cols-2 gap-3">
          <SkillRing
            v-for="skill in skillLevels"
            :key="skill.label"
            :label="skill.label"
            :value="skill.value"
            :color="skill.color"
          />
        </div>
      </div>

      <!-- Skills and interests -->
      <InfoCard id="skills" title="Skills and Interests" icon="💡" class="scroll-mt-4 lg:col-span-7">
        <h3 class="mb-2 text-[11px] font-semibold uppercase tracking-widest text-rosy">Skills</h3>
        <div class="mb-4 flex flex-wrap gap-2">
          <SkillBadge v-for="skill in skills" :key="skill">{{ skill }}</SkillBadge>
        </div>
        <h3 class="mb-2 text-[11px] font-semibold uppercase tracking-widest text-rosy">Interests</h3>
        <div class="flex flex-wrap gap-2">
          <SkillBadge v-for="interest in interests" :key="interest">{{ interest }}</SkillBadge>
        </div>
      </InfoCard>

      <!-- Hobbies -->
      <InfoCard id="hobbies" title="Hobbies" icon="🎨" class="scroll-mt-4 lg:col-span-5">
        <ul class="grid grid-cols-2 gap-3">
          <li
            v-for="hobby in hobbies"
            :key="hobby.name"
            class="group/hobby shine flex cursor-default items-center gap-3 rounded-2xl bg-linear-to-br from-cream to-blush-deep/60 p-3 text-xs font-medium transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-linear-to-br hover:from-rosy hover:to-plum hover:text-white hover:shadow-xl hover:shadow-plum/40"
          >
            <span class="text-2xl transition duration-300 group-hover/hobby:scale-125 group-hover/hobby:-rotate-12">{{ hobby.icon }}</span>
            {{ hobby.name }}
          </li>
        </ul>
      </InfoCard>
    </div>
  </div>
</template>