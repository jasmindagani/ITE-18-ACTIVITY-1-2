<script setup lang="ts">
useHead({ title: 'About | Student Information Website' })

// Live demo of the AppButton props
const label = ref('Click me')
const color = ref('moss')
const colors = ['forest', 'moss', 'olive', 'lime', 'sage', 'mint']
</script>

<template>
  <div>
    <section class="page-banner">
      <div class="container">
        <p class="hand">study notes</p>
        <h1>About this project</h1>
        <p class="sub">Five small components, written once and reused across every page.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="hand">the components</span>
          <h2>What we built</h2>
        </div>
        <div class="grid">
          <InfoCard :tilt="-1.5" title="AppHeader" description="The navigation bar. Written once and shown on Home, Students and About." />
          <InfoCard :tilt="1" title="AppFooter" description="The footer with the same message on every page." />
          <InfoCard :tilt="-1" title="StudentCard" description="A flip-able polaroid. Name, ID, course, year level, email and more arrive as props." />
          <InfoCard :tilt="1.5" title="InfoCard" description="A notebook page that displays a title and a description, like this one." />
          <InfoCard :tilt="-1.2" title="AppButton" description="A reusable button. Its label and color change with the props you give it." />
        </div>
      </div>
    </section>

    <section class="section lab-wrap">
      <div class="container">
        <div class="section-head">
          <span class="hand">try it yourself</span>
          <h2>Button lab</h2>
        </div>
        <div class="lab">
          <div class="controls">
            <label>
              <span class="hand">label prop</span>
              <input v-model="label" type="text" maxlength="24">
            </label>
            <div>
              <span class="hand">color prop</span>
              <div class="swatches" role="group" aria-label="Choose a button color">
                <button
                  v-for="c in colors"
                  :key="c"
                  type="button"
                  class="swatch"
                  :class="{ on: color === c }"
                  :style="{ background: toneOf(c).bg }"
                  :aria-label="c"
                  :aria-pressed="color === c"
                  @click="color = c"
                />
              </div>
            </div>
          </div>
          <div class="preview">
            <AppButton :label="label || 'Button'" :color="color" />
            <code>&lt;AppButton label="{{ label }}" color="{{ color }}" /&gt;</code>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.lab-wrap { background: rgba(230, 239, 201, .55); }
.lab { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; background: var(--cream); border: 3px dashed var(--olive); border-radius: 22px; padding: 2rem; }
.controls { display: flex; flex-direction: column; gap: 1.4rem; }
.hand { font-size: 1.5rem; line-height: 1; color: var(--moss); display: block; }
input {
  width: 100%; margin-top: .3rem; padding: .5rem 1rem; border: 2px solid var(--forest); border-radius: 999px;
  background: #fff; font: 600 1rem var(--sans); color: var(--ink);
}
.swatches { display: flex; gap: .6rem; flex-wrap: wrap; margin-top: .5rem; }
.swatch { width: 38px; height: 38px; border-radius: 50%; border: 3px solid var(--forest); cursor: pointer; transition: transform .2s; }
.swatch:hover { transform: scale(1.2) rotate(-8deg); }
.swatch.on { box-shadow: 0 0 0 4px var(--cream), 0 0 0 7px var(--forest); }
.preview { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.2rem; background: var(--mint); border-radius: 16px; padding: 1.5rem; }
code { font-size: .85rem; background: var(--cream); padding: .3rem .7rem; border-radius: 8px; word-break: break-all; text-align: center; }
@media (max-width: 760px) { .lab { grid-template-columns: 1fr; } }
</style>
