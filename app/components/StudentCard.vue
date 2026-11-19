<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string
  nickname?: string
  studentId: string
  course: string
  yearLevel: string
  email: string
  motto?: string
  hobby?: string
  skills?: string[]
  color?: string
  photo?: string
  tilt?: number
}>(), {
  nickname: '',
  motto: 'Learning something new every day.',
  hobby: 'Studying',
  skills: () => [],
  color: 'moss',
  photo: '',
  tilt: 0
})

const flipped = ref(false)
const tone = computed(() => toneOf(props.color))
const initials = computed(() =>
  props.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
)
const nick = computed(() => props.nickname || props.name.split(' ')[0])

// Touch screens have no hover, so a tap flips the card instead.
const onClick = () => {
  if (window.matchMedia('(hover: none)').matches) flipped.value = !flipped.value
}
</script>

<template>
  <div class="scene" :style="{ '--tilt': `${tilt}deg`, '--tile': tone.bg, '--tile-fg': tone.fg }">
    <article
      class="student"
      :class="{ flipped }"
      tabindex="0"
      :aria-label="`${name}, ${course}, ${yearLevel}`"
      @click="onClick"
      @keydown.enter.prevent="flipped = !flipped"
      @keydown.space.prevent="flipped = !flipped"
    >
      <div class="inner">
        <!-- FRONT: polaroid -->
        <div class="face front">
          <span class="tape" aria-hidden="true" />
          <div class="photo">
            <img v-if="photo" :src="photo" :alt="`Photo of ${name}`">
            <span v-else class="initials" aria-hidden="true">{{ initials }}</span>
            <span class="badge">{{ yearLevel }}</span>
          </div>
          <h3>{{ name }}</h3>
          <p class="nick hand">“{{ nick }}”</p>
          <p class="course">{{ course }}</p>
          <p class="id">ID: {{ studentId }}</p>
          <p class="hint hand">hover to flip ↻</p>
        </div>

        <!-- BACK: notebook page -->
        <div class="face back">
          <h4 class="hand">About {{ nick }}</h4>
          <p class="motto">“{{ motto }}”</p>
          <p class="row"><strong>Loves:</strong> {{ hobby }}</p>
          <ul v-if="skills.length" class="skills">
            <li v-for="skill in skills" :key="skill">{{ skill }}</li>
          </ul>
          <p class="mail">{{ email }}</p>
          <AppButton label="Send email" :color="color" :href="`mailto:${email}`" @click.stop />
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
.scene { height: var(--card-h, 430px); perspective: 1100px; transform: rotate(var(--tilt)); transition: transform .35s; }
.scene:hover, .scene:focus-within { transform: rotate(0) translateY(-8px); }

.student { position: relative; width: 100%; height: 100%; cursor: pointer; outline-offset: 6px; }
.inner { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform .65s cubic-bezier(.3, 1.2, .5, 1); }
.student:focus-within .inner, .student.flipped .inner { transform: rotateY(180deg); }
@media (hover: hover) {
  .student:hover .inner { transform: rotateY(180deg); }
  .student:hover .back { visibility: visible; transition-delay: 0s; }
}

.face {
  position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden;
  border-radius: 6px; box-shadow: 0 8px 18px rgba(59, 82, 32, .25);
}

/* front */
.front { background: var(--cream); padding: 14px 14px 0; text-align: center; }
.front .tape { top: -12px; left: 50%; margin-left: -46px; transform: rotate(-3deg); z-index: 2; }
.photo {
  position: relative; height: var(--photo-h, 200px); display: grid; place-items: center; overflow: hidden;
  background-color: var(--tile);
  background-image:
    linear-gradient(90deg, rgba(255, 255, 255, .2) 50%, transparent 50%),
    linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%);
  background-size: 36px 36px;
}
.photo img { width: 100%; height: 100%; object-fit: cover; }
.initials { font-family: var(--serif); font-size: 4.2rem; font-weight: 700; color: var(--tile-fg); text-shadow: 2px 2px 0 rgba(0, 0, 0, .12); }
.badge {
  position: absolute; right: 8px; bottom: 8px; padding: .1rem .7rem; border-radius: 999px;
  background: var(--cream); color: var(--forest); font: 700 .8rem var(--sans); transform: rotate(-3deg);
}
.front h3 { margin-top: .7rem; font-family: var(--serif); font-size: 1.25rem; line-height: 1.2; color: var(--forest); }
.nick { font-size: 1.6rem; line-height: 1; color: var(--moss); }
.course { font-size: .92rem; }
.id { display: inline-block; margin-top: .3rem; padding: .05rem .8rem; border-radius: 999px; background: var(--mint); font-size: .82rem; font-weight: 700; }
.hint { position: absolute; left: 0; right: 0; bottom: 6px; font-size: 1.15rem; color: var(--olive); }

/* back */
.back {
  transform: rotateY(180deg); visibility: hidden; transition: visibility 0s .3s;
  display: flex; flex-direction: column; gap: .5rem; padding: 1.2rem 1.3rem; text-align: left;
  background: repeating-linear-gradient(transparent 0 27px, rgba(122, 154, 63, .3) 27px 28px), var(--cream);
  border-left: 8px solid var(--tile);
}
.student:focus-within .back, .student.flipped .back { visibility: visible; transition-delay: 0s; }
.back h4 { font-size: 2rem; line-height: 1; color: var(--moss); }
.motto { font-family: var(--serif); font-style: italic; color: var(--forest); }
.row { font-size: .95rem; }
.skills { list-style: none; display: flex; flex-wrap: wrap; gap: .4rem; }
.skills li { padding: .1rem .7rem; border-radius: 999px; background: var(--sage); font-size: .82rem; font-weight: 700; transition: transform .2s; }
.skills li:hover { transform: rotate(-5deg) scale(1.1); background: var(--lime); }
.mail { margin-top: auto; font-size: .85rem; word-break: break-all; color: var(--moss); }
.back :deep(.btn) { align-self: flex-start; }
</style>
