<script setup>
// Reusable avatar. Files inside /public are served from the root URL,
// so "/avatar.svg" means public/avatar.svg.
// Use <ProfileAvatar small /> for a simple small version.
defineProps({
  src: { type: String, default: '/profile 3.jpg' },
  alt: { type: String, default: 'Profile picture' },
  size: { type: String, default: 'h-44 w-44 sm:h-52 sm:w-52' },
  small: { type: Boolean, default: false },
})
</script>

<template>
  <!-- Small version (sidebar, profile card) -->
  <img
    v-if="small"
    :src="src"
    :alt="alt"
    :class="[size, 'shrink-0 rounded-full border-4 border-white object-cover shadow-md transition duration-300 hover:scale-110 hover:rotate-6']"
  />

  <!-- Big version (homepage) -->
  <div v-else class="group relative animate-float">
    <!-- Soft glow behind the picture -->
    <div class="absolute -inset-4 rounded-full bg-linear-to-tr from-rosy via-mauve to-sage opacity-50 blur-2xl transition duration-500 group-hover:opacity-90"></div>

    <!-- Spinning gradient ring -->
    <div class="animate-spin-slow absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,#e6b7cb,#c4587b,#8f6b8c,#86bdb3,#e6b7cb)]"></div>

    <!-- The picture -->
    <img
      :src="src"
      :alt="alt"
      :class="[size, 'relative rounded-full border-[6px] border-cream object-cover shadow-2xl transition duration-500 group-hover:scale-105 group-hover:rotate-3']"
    />

    <!-- Twinkling sparkles -->
    <span class="animate-twinkle absolute -right-2 top-4 text-2xl">✨</span>
    <span class="animate-twinkle absolute -left-3 bottom-8 text-xl [animation-delay:-1.2s]">💖</span>
  </div>
</template>
