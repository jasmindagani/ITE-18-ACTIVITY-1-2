<template>
  <div class="relative isolate min-h-screen overflow-hidden bg-linear-to-b from-mauve-light via-mauve-light to-mauve p-3 sm:p-5">
    <!-- Soft floating blobs -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="animate-blob absolute -left-20 top-10 h-96 w-96 rounded-full bg-white/30 blur-3xl"></div>
      <div class="animate-blob absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-rosy/20 blur-3xl [animation-delay:-6s]"></div>
      <div class="animate-blob absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-plum/25 blur-3xl [animation-delay:-11s]"></div>
    </div>

    <!-- Wide landscape dashboard: fits one screen on desktop -->
    <div class="mx-auto flex w-full max-w-[1400px] flex-col overflow-hidden rounded-[2rem] bg-cream text-plum-deep shadow-2xl shadow-plum/30 lg:h-[calc(100vh-2.5rem)] lg:min-h-[640px] lg:flex-row">
      <AppSidebar />

      <div class="flex min-w-0 flex-1 flex-col p-5 sm:p-6 lg:overflow-y-auto">
        <main class="flex-1">
          <slot />
        </main>
        <AppFooter />
      </div>
    </div>
  </div>
</template>