<script setup>
// Circular progress ring (like a skill level meter)
const props = defineProps({
  label: { type: String, required: true },
  value: { type: Number, default: 0 }, // 0 - 100
  color: { type: String, default: '#c4587b' },
})

const radius = 42
const circumference = 2 * Math.PI * radius

// The ring "fills up" after the page loads
const shown = ref(false)
onMounted(() => setTimeout(() => (shown.value = true), 200))

const offset = computed(() => circumference * (1 - (shown.value ? props.value : 0) / 100))
</script>

<template>
  <div
    class="group shine rounded-2xl bg-plum p-3 text-center text-cream shadow-lg shadow-plum/30 transition duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-2xl hover:shadow-plum/50"
  >
    <p class="mb-1 text-xs font-semibold tracking-wide">{{ label }}</p>

    <div class="relative mx-auto h-20 w-20">
      <svg viewBox="0 0 100 100" class="h-full w-full -rotate-90">
        <circle cx="50" cy="50" :r="radius" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="9" />
        <circle
          cx="50"
          cy="50"
          :r="radius"
          fill="none"
          :stroke="color"
          stroke-width="9"
          stroke-linecap="round"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="offset"
          class="transition-all duration-[1400ms] ease-out group-hover:[stroke-width:12]"
        />
      </svg>
      <span class="absolute inset-0 grid place-items-center text-base font-bold transition duration-300 group-hover:scale-110">
        {{ value }}%
      </span>
    </div>
  </div>
</template>