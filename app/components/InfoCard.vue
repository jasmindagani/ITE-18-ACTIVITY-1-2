<script setup>
// Reusable card with an icon and a title. Content goes in the <slot />.
// tone="light" = soft pink card, tone="dark" = deep plum card
defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: '✨' },
  tone: { type: String, default: 'light' },
})
</script>

<template>
  <section
    :class="[
      'animate-fade-up group shine rounded-3xl p-5 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl',
      tone === 'dark'
        ? 'bg-plum text-cream shadow-lg shadow-plum/30 hover:shadow-plum/50'
        : 'bg-blush/80 text-plum-deep shadow-lg shadow-blush-deep/50 hover:bg-blush hover:shadow-plum/30',
    ]"
  >
    <h2 class="mb-3.5 flex items-center gap-3 text-base font-semibold">
      <span
        class="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-rosy to-plum text-base text-white shadow-md shadow-plum/30 transition duration-300 group-hover:rotate-12 group-hover:scale-110"
      >
        {{ icon }}
      </span>
      {{ title }}
    </h2>

    <slot />
  </section>
</template>