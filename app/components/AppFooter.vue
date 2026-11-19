<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="strip gingham" aria-hidden="true" />
    <div class="container body">
      <p class="note hand">made with <span class="heart" aria-hidden="true">💚</span> and reusable components</p>
      <p class="line">&copy; {{ year }} Jasmin Rhea P. Dagani &nbsp;|&nbsp; Activity 2 – Build Your Own Reusable Components</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer { background: var(--forest); color: var(--sage); text-align: center; }
.strip { height: 14px; }
.body { display: flex; align-items: center; justify-content: center; gap: .4rem 1.6rem; flex-wrap: wrap; padding: .6rem 0 .7rem; }
.note { font-size: 1.6rem; line-height: 1.1; color: var(--cream); }
.heart { display: inline-block; transition: transform .3s; }
.note:hover .heart { transform: scale(1.5) rotate(-12deg); }
.line { font-size: .85rem; }
</style>
