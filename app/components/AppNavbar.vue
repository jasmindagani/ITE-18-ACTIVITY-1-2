<script setup>
const siteName = 'Jasmin Rhea P. Dagani'

// Navigation links (NuxtLink = Nuxt's built-in link, no page reload)
const links = [
  { label: 'Home', to: '/' },
  { label: 'Profile', to: '/profile' },
]
</script>

<template>
  <header class="sticky top-4 z-20 px-4">
    <nav
      class="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/70 bg-white/60 px-6 py-3 shadow-lg shadow-pink-200/50 backdrop-blur-xl transition duration-300 hover:shadow-xl hover:shadow-pink-300/50"
    >
      <NuxtLink
        to="/"
        class="font-display text-xl font-bold text-gradient transition duration-300 hover:scale-105"
      >
        ✿ {{ siteName }}
      </NuxtLink>

      <ul class="flex items-center gap-1 sm:gap-2">
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to" class="nav-link">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
