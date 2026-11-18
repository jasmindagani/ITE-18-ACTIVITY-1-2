<script setup>
const name = 'Jasmin Rhea P. Dagani'
const role = 'BS Information Technology Student'
const intro =
  'Hi! You can call me JAJA! I love learning new things, exploring different technologies, and creating websites. Im still learning and discovering new things along the way, and Im excited to try more projects like this one.'
const welcome = 'Feel free to look around and get to know me a little better!'

// Shortcuts to each section of the profile page
const sections = [
  { label: 'Personal Information', icon: '👧', to: '/profile#personal' },
  { label: 'Educational Background', icon: '🎓', to: '/profile#education' },
  { label: 'Skills and Interests', icon: '💡', to: '/profile#skills' },
  { label: 'Hobbies', icon: '🫀', to: '/profile#hobbies' },
]

useHead({ title: `Home | ${name}` })
</script>

<template>
  <div>
    <!-- Greeting -->
    <header class="animate-fade-up mb-5">
      <h1 class="font-display text-3xl font-extrabold uppercase tracking-wide text-plum-deep sm:text-4xl">
        Hello, <span class="text-gradient">there!</span>
        <span class="animate-wave inline-block origin-[70%_70%]">👋</span>
      </h1>
      <div class="mt-2 h-1.5 w-24 rounded-full bg-linear-to-r from-rosy via-plum to-sage"></div>
    </header>

    <div class="grid gap-4 lg:grid-cols-12">
      <!-- Hero card: avatar, name, short introduction -->
      <section
        class="animate-fade-up shine group flex flex-col items-center gap-6 rounded-3xl bg-blush/80 p-6 text-center shadow-lg shadow-blush-deep/50 transition duration-300 hover:-translate-y-1.5 hover:bg-blush hover:shadow-2xl hover:shadow-plum/30 sm:flex-row sm:text-left lg:col-span-8 lg:gap-10 lg:px-8"
      >
        <ProfileAvatar class="shrink-0" size="h-36 w-36 lg:h-44 lg:w-44" />

        <div class="min-w-0 flex-1">
          <p class="text-xs font-semibold uppercase tracking-widest text-rosy">{{ role }}</p>
          <h2 class="mt-1 font-display text-2xl font-extrabold leading-tight text-plum-deep sm:text-3xl">
            I'm <span class="text-gradient">{{ name }}</span>
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-plum-deep/75">{{ intro }}</p>

          <NuxtLink
            to="/profile"
            class="group/btn mt-5 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-linear-to-r from-rosy to-plum px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-plum/40 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-rosy/50"
          >
            View My Profile
            <span class="transition duration-300 group-hover/btn:translate-x-1.5">→</span>
          </NuxtLink>
        </div>
      </section>

      <!-- Welcome message card -->
      <section
        class="animate-fade-up shine group relative flex flex-col justify-center rounded-3xl bg-plum p-6 text-cream shadow-lg shadow-plum/30 transition duration-300 hover:-translate-y-1.5 hover:rotate-1 hover:shadow-2xl hover:shadow-plum/50 lg:col-span-4"
      >
        <span class="absolute right-4 top-1 font-display text-6xl leading-none text-cream/15 transition duration-500 group-hover:scale-125 group-hover:text-cream/30">“</span>
        <p class="text-xs font-semibold uppercase tracking-widest text-cream/70">Welcome</p>
        <p class="mt-2 font-display text-lg font-semibold leading-snug">{{ welcome }}</p>
        <span class="animate-twinkle mt-3 inline-block text-xl">🌸</span>
      </section>

      <!-- Explore card: shortcuts to the profile sections -->
      <div class="lg:col-span-12">
        <InfoCard title="Explore My Profile" icon="🧭">
          <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <li v-for="item in sections" :key="item.label">
              <NuxtLink
                :to="item.to"
                class="group/pill shine flex items-center gap-3 rounded-full bg-cream/80 p-2 pr-4 text-sm font-medium transition duration-300 hover:translate-x-1.5 hover:bg-plum hover:text-cream hover:shadow-lg hover:shadow-plum/30"
              >
                <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blush text-lg transition duration-300 group-hover/pill:rotate-12 group-hover/pill:scale-110">
                  {{ item.icon }}
                </span>
                <span class="flex-1">{{ item.label }}</span>
                <span class="transition duration-300 group-hover/pill:translate-x-1">→</span>
              </NuxtLink>
            </li>
          </ul>
        </InfoCard>
      </div>
    </div>
  </div>
</template>