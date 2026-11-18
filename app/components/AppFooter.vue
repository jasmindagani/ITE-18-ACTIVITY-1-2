<script setup>
const year = new Date().getFullYear()
// EDIT: your name in the footer
const owner = 'Jasmin Rhea P. Dagani'
</script>

<template>
  <footer class="mt-4 border-t border-blush-deep/60 pt-3 text-center text-[11px] text-plum">
    <p>
      Made with <span class="inline-block animate-pulse text-rosy">♥</span> by
      <span class="font-semibold text-gradient">{{ owner }}</span>
      · © {{ year }} · Built with Nuxt.js &amp; Tailwind CSS
    </p>
  </footer>
</template>
