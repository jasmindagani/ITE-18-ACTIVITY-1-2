<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Students', to: '/students' },
  { label: 'About', to: '/about' }
]
</script>

<template>
  <header class="app-header">
    <div class="container bar">
      <NuxtLink to="/" class="brand">
        <span class="logo" aria-hidden="true">SI</span>
        <span class="brand-name">Student Info</span>
      </NuxtLink>
      <nav aria-label="Main navigation">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="nav-link">
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header { position: sticky; top: 0; z-index: 20; background: var(--forest); color: var(--cream); }
/* scalloped bottom edge */
.app-header::after {
  content: '';
  position: absolute; left: 0; right: 0; top: 100%; height: 14px;
  background: radial-gradient(circle at 50% 0, var(--forest) 9px, transparent 10px) 0 0 / 26px 14px repeat-x;
  pointer-events: none;
}
.bar { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; padding: .7rem 0; }
.brand { display: flex; align-items: center; gap: .7rem; color: var(--cream); text-decoration: none; }
.logo {
  width: 42px; height: 42px; display: grid; place-items: center; border-radius: 50%;
  background: var(--sage); color: var(--forest); font-family: var(--serif); font-weight: 700;
  transition: transform .35s;
}
.brand:hover .logo { transform: rotate(360deg) scale(1.1); }
.brand-name { font-family: var(--serif); font-size: 1.3rem; font-weight: 700; }
nav { display: flex; gap: .4rem; flex-wrap: wrap; }
.nav-link {
  font-family: var(--hand); font-size: 1.5rem; line-height: 1;
  padding: .35rem .95rem; border-radius: 999px; color: var(--sage); text-decoration: none;
  transition: transform .2s, background .2s, color .2s;
}
.nav-link:hover { background: var(--lime); color: var(--forest); transform: rotate(-4deg) translateY(-2px); }
.nav-link.router-link-exact-active { background: var(--cream); color: var(--forest); }
</style>
