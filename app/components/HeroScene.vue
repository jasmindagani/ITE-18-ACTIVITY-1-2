<!--
  HeroScene: a decorative mountain + forest illustration (inspired by the reference).
  It is drawn with plain SVG shapes, so no images or libraries are needed.
  Hover over it to make the trees sway and the floating stones bob.
-->
<template>
  <div class="scene">
    <svg viewBox="0 0 600 340" class="svg" role="img" aria-label="Mountains and forest illustration">
      <defs>
        <!-- Gradients for the rocks and trees -->
        <linearGradient id="rock" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#eef0ea" />
          <stop offset="1" stop-color="#8f9c92" />
        </linearGradient>
        <linearGradient id="tree" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#5a9a66" />
          <stop offset="1" stop-color="#1f4d37" />
        </linearGradient>
      </defs>

      <!-- Cream panel at the back, like the card in the reference -->
      <rect x="170" y="20" width="270" height="150" rx="14" fill="#f5f2e8" />
      <rect x="192" y="44" width="90" height="8" rx="4" fill="#1f3a2f" opacity="0.8" />
      <rect x="192" y="62" width="60" height="6" rx="3" fill="#1f3a2f" opacity="0.35" />
      <rect x="340" y="92" width="70" height="10" rx="5" fill="#1f3a2f" opacity="0.85" />

      <!-- Mountains -->
      <polygon points="60,260 130,90 175,150 215,110 270,260" fill="url(#rock)" />
      <polygon points="20,260 70,170 110,260" fill="url(#rock)" opacity="0.7" />

      <!-- Green ribbon swooshing across the scene -->
      <path d="M150 190 Q260 120 360 190 T560 170" fill="none" stroke="#2f9e6b" stroke-width="8" stroke-linecap="round" opacity="0.8" />

      <!-- Tall cream bars on the right -->
      <rect x="470" y="110" width="26" height="150" rx="4" fill="#ecebe1" />
      <rect x="505" y="150" width="22" height="110" rx="4" fill="#dcdcd0" />

      <!-- Two little arched cabins -->
      <path d="M255 258 V238 a30 30 0 0 1 60 0 V258 Z" fill="#f5f2e8" />
      <path d="M335 258 V236 a28 28 0 0 1 56 0 V258 Z" fill="#ecebe1" />

      <!-- Trees: ONE tree shape repeated with v-for (not copy-pasted!) -->
      <g v-for="(t, i) in trees" :key="i" :transform="`translate(${t.x} ${t.y}) scale(${t.s})`">
        <g class="sway" :style="{ animationDelay: i * 0.15 + 's' }">
          <rect x="-4" y="0" width="8" height="12" fill="#6b4f3a" />
          <polygon points="0,-72 -20,-38 20,-38" fill="url(#tree)" />
          <polygon points="0,-52 -26,-12 26,-12" fill="url(#tree)" />
          <polygon points="0,-30 -32,6 32,6" fill="url(#tree)" />
        </g>
      </g>

      <!-- Floating stones (bob up and down) -->
      <circle
        v-for="(o, i) in stones"
        :key="'s' + i"
        class="stone"
        :cx="o.cx"
        :cy="o.cy"
        :r="o.r"
        fill="#e6e9e2"
        :style="{ animationDelay: o.delay + 's' }"
      />

      <!-- The floating shelf everything sits on -->
      <rect x="10" y="262" width="580" height="16" rx="8" fill="#f5f2e8" />
    </svg>
  </div>
</template>

<script setup>
// Tree positions and sizes (x, y = position, s = scale)
const trees = [
  { x: 40, y: 255, s: 0.9 },
  { x: 85, y: 255, s: 1.1 },
  { x: 135, y: 255, s: 0.8 },
  { x: 180, y: 255, s: 1.2 },
  { x: 225, y: 255, s: 0.9 },
  { x: 420, y: 255, s: 0.8 },
  { x: 545, y: 255, s: 1 }
]

// Floating stones (cx, cy = center, r = size, delay = animation delay)
const stones = [
  { cx: 80, cy: 50, r: 14, delay: 0 },
  { cx: 130, cy: 30, r: 8, delay: 0.6 },
  { cx: 520, cy: 70, r: 20, delay: 1.1 },
  { cx: 470, cy: 30, r: 9, delay: 0.3 }
]
</script>

<style scoped>
.scene {
  width: 100%;
}

.svg {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 18px 24px rgba(31, 58, 47, 0.25));
  transition: transform 0.5s ease;
}

/* HOVER: the whole scene floats up slightly */
.scene:hover .svg {
  transform: translateY(-8px) scale(1.02);
}

/* Stones always float gently */
.stone {
  animation: bob 4s ease-in-out infinite alternate;
}

/* HOVER: trees sway side to side */
.sway {
  transform-box: fill-box;
  transform-origin: 50% 100%;
}

.scene:hover .sway {
  animation: sway 1.4s ease-in-out infinite alternate;
}

@keyframes bob {
  from { transform: translateY(0); }
  to { transform: translateY(-12px); }
}

@keyframes sway {
  from { transform: rotate(-3deg); }
  to { transform: rotate(3deg); }
}
</style>
