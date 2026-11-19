<script setup lang="ts">
useHead({ title: 'Home | Student Information Website' })
</script>

<template>
  <!-- The whole home page fits in one screen (one "slide") -->
  <section class="slide">
    <div class="checker corner" aria-hidden="true" />

    <div class="wrap">
      <div class="panel">
        <div class="text">
          <p class="hand kicker">student information board</p>
          <h1>Meet the Class</h1>
          <p class="intro">
            Hi! Welcome to our class scrapbook. Everyone's here with their course,
            year level, and a little fun fact. Flip a card to see who loves coding
            and who just loves coffee, then say hi by email. Promise, no spam.
          </p>
          <div class="actions">
            <AppButton label="Meet the students" to="/students" color="moss" />
            <AppButton label="How it's built" to="/about" color="lime" />
          </div>
        </div>

        <div class="deco" aria-hidden="true">
          <span class="tape t1" />
          <span class="star s1" />
          <span class="star s2" />
          <span class="note hand">hello,<br>classmates!</span>
        </div>
      </div>

      <div class="notes">
        <InfoCard compact :tilt="-1" title="Student profiles" description="Everyone's name, course, and ID in one place. No more asking who's that again?" />
        <InfoCard compact :tilt="1" title="Get to know them" description="Flip a card to see their motto, hobby, and skills." />
        <InfoCard compact :tilt="-1" title="Say hello" description="One click opens an email. Don't be shy, we don't bite. Promise." />
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide {
  --chrome: 130px; /* header + footer */
  position: relative; display: flex; align-items: center; overflow: hidden;
  min-height: calc(100vh - var(--chrome)); padding: 1.6rem 0 1.4rem;
  background: var(--olive);
}
.corner { position: absolute; left: 0; top: 0; width: 170px; height: 120px; border-radius: 0 0 90px 0; }
.wrap { position: relative; width: min(1320px, 96%); margin-inline: auto; display: flex; flex-direction: column; gap: 1.8rem; }

/* the expanded Meet the Class box */
.panel {
  position: relative; display: grid; grid-template-columns: 1.5fr 1fr; align-items: center; gap: 2rem;
  min-height: 360px; padding: 2.6rem 3rem; border-radius: 28px; background: var(--cream);
  box-shadow: 0 10px 24px rgba(0, 0, 0, .2);
}
.kicker { font-size: 2rem; line-height: 1; color: var(--moss); }
h1 { font-family: var(--serif); font-size: clamp(3rem, 6vw, 5.2rem); line-height: 1.02; color: var(--forest); margin: .3rem 0 1rem; }
.intro { max-width: 52ch; font-size: 1.1rem; margin-bottom: 1.6rem; }
.actions { display: flex; gap: .9rem; flex-wrap: wrap; }

/* decorative right side (no student info) */
.deco {
  position: relative; align-self: stretch; min-height: 240px; border-radius: 22px; overflow: hidden;
  background-color: var(--sage);
  background-image:
    linear-gradient(90deg, rgba(95, 125, 46, .35) 50%, transparent 50%),
    linear-gradient(rgba(95, 125, 46, .35) 50%, transparent 50%);
  background-size: 40px 40px;
  display: grid; place-items: center;
}
.note { position: relative; z-index: 2; padding: 1rem 1.8rem; background: var(--cream); border-radius: 10px; font-size: 2.6rem; line-height: 1; text-align: center; color: var(--moss); transform: rotate(-4deg); box-shadow: 0 6px 14px rgba(59, 82, 32, .25); transition: transform .35s; }
.deco:hover .note { transform: rotate(0) scale(1.08); }
.t1 { top: 18px; left: 50%; margin-left: -46px; transform: rotate(-4deg); z-index: 3; }
.star { position: absolute; transition: transform .6s; }
.s1 { width: 72px; height: 72px; right: 22px; bottom: 20px; background: var(--moss); transform: rotate(12deg); }
.s2 { width: 42px; height: 42px; left: 24px; bottom: 36px; background: var(--forest); }
.deco:hover .s1 { transform: rotate(160deg) scale(1.2); }
.deco:hover .s2 { transform: rotate(-130deg) scale(1.3); }

.notes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.4rem; }

/* smaller screens: fall back to a normal scrolling page */
@media (max-width: 1100px) {
  .slide { min-height: 0; padding: 2rem 0; }
  .panel { grid-template-columns: 1fr; padding: 2rem 1.6rem; }
  .deco { min-height: 180px; }
  .notes { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
}
</style>
