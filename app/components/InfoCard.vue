<script setup lang="ts">
// Displays a title and a description as a notebook page.
withDefaults(defineProps<{
  title: string
  description: string
  tilt?: number
  compact?: boolean
}>(), {
  tilt: 0,
  compact: false
})
</script>

<template>
  <article class="info-card" :class="{ compact }" :style="{ '--tilt': `${tilt}deg` }">
    <span class="tape" aria-hidden="true" />
    <div class="rings" aria-hidden="true" />
    <div class="page">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <slot />
    </div>
  </article>
</template>

<style scoped>
.info-card {
  position: relative; display: flex; background: var(--cream); border-radius: 6px;
  box-shadow: 0 6px 14px rgba(59, 82, 32, .18); transform: rotate(var(--tilt));
  transition: transform .3s, box-shadow .3s;
}
.info-card:hover { transform: rotate(0) translateY(-8px) scale(1.02); box-shadow: 0 16px 26px rgba(59, 82, 32, .28); }
.tape { top: -12px; right: 24px; transform: rotate(5deg); }
.rings {
  flex: 0 0 34px; border-right: 2px solid var(--sage);
  background: radial-gradient(circle at 50% 50%, var(--mint) 5px, var(--forest) 6px 8px, transparent 9px) 0 0 / 34px 30px repeat-y;
}
.page {
  flex: 1; padding: 1.1rem 1.3rem 1.4rem;
  background: repeating-linear-gradient(transparent 0 31px, rgba(122, 154, 63, .28) 31px 32px);
}
h3 { font-family: var(--hand); font-size: 2rem; line-height: 1.1; color: var(--moss); margin-bottom: .3rem; transition: letter-spacing .3s; }
.info-card:hover h3 { letter-spacing: .04em; }
p { line-height: 32px; }

/* compact variant (used for the one-screen home page) */
.compact .rings { flex-basis: 28px; background-size: 28px 24px; }
.compact .page { padding: .5rem 1rem .8rem; background: repeating-linear-gradient(transparent 0 23px, rgba(122, 154, 63, .28) 23px 24px); }
.compact h3 { font-size: 1.6rem; margin-bottom: 0; }
.compact p { font-size: .92rem; line-height: 24px; }
</style>
