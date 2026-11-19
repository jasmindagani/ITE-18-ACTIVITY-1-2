<script setup lang="ts">
// Reusable button customized through props: label and color.
// color: forest | moss | olive | lime | sage | mint, or any CSS color.
// If "to" is given it renders a router link, if "href" an <a>, otherwise a <button>.
const props = withDefaults(defineProps<{
  label: string
  color?: string
  to?: string
  href?: string
}>(), {
  color: 'moss'
})

const NuxtLink = resolveComponent('NuxtLink')
const tag = computed(() => (props.to ? NuxtLink : props.href ? 'a' : 'button'))
const attrs = computed(() => (props.to ? { to: props.to } : props.href ? { href: props.href } : { type: 'button' }))
const tone = computed(() => toneOf(props.color))
</script>

<template>
  <component :is="tag" v-bind="attrs" class="btn" :style="{ '--bg': tone.bg, '--fg': tone.fg }">
    <span>{{ label }}</span>
  </component>
</template>

<style scoped>
.btn {
  display: inline-block;
  padding: .5rem 1.4rem;
  border: 2px solid var(--forest);
  border-radius: 999px;
  background: var(--bg);
  color: var(--fg);
  font: 700 1rem var(--sans);
  text-decoration: none;
  cursor: pointer;
  box-shadow: 3px 3px 0 var(--forest);
  transition: transform .18s, box-shadow .18s;
}
.btn:hover { transform: translate(-2px, -3px) rotate(-2deg); box-shadow: 6px 7px 0 var(--forest); }
.btn:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--forest); }
</style>
