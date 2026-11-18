<script setup>
// EDIT: your name and short title shown in the sidebar
const siteName = 'Jasmin Rhea P. Dagani'
const role = 'IT Student'

// Navigation links (NuxtLink = Nuxt's built-in link, no page reload).
// "icon" is the SVG path of a small outline icon.
const links = [
  {
    label: 'Home',
    to: '/',
    icon: 'M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
  },
  {
    label: 'Profile',
    to: '/profile',
    icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
  },
]
</script>

<template>
  <aside class="flex flex-col gap-6 bg-cream-deep p-5 lg:w-64 lg:shrink-0 lg:gap-8 lg:p-7">
    <!-- Brand -->
    <NuxtLink
      to="/"
      class="font-display text-2xl font-bold text-plum-deep transition duration-300 hover:scale-105 hover:text-rosy"
    >
      My<span class="text-rosy">Profile</span> ✿
    </NuxtLink>

    <!-- Mini profile card (desktop only) -->
    <div class="shine group hidden items-center gap-3 rounded-2xl bg-white/50 p-3 transition duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-lg hover:shadow-plum/20 lg:flex">
      <ProfileAvatar small size="h-14 w-14" />
      <div class="min-w-0">
        <p class="truncate text-sm font-semibold">{{ siteName }}</p>
        <p class="truncate text-xs text-plum">{{ role }}</p>
      </div>
    </div>

    <!-- Navigation menu -->
    <nav>
      <ul class="flex gap-2 lg:flex-col">
        <li v-for="link in links" :key="link.to" class="flex-1 lg:flex-none">
          <NuxtLink :to="link.to" class="nav-link">
            <svg class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6">
              <path stroke-linecap="round" stroke-linejoin="round" :d="link.icon" />
            </svg>
            <span>{{ link.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- Decorative sparkle card at the bottom (desktop only) -->
    <div class="mt-auto hidden rounded-2xl bg-linear-to-br from-plum to-plum-deep p-4 text-center text-cream shadow-lg shadow-plum/30 transition duration-300 hover:scale-105 hover:rotate-1 lg:block">
      <p class="animate-twinkle text-2xl">✨</p>
      <p class="mt-1 text-xs leading-relaxed text-cream/80">Thanks for stopping by!</p>
    </div>
  </aside>
</template>
