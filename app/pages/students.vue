<script setup lang="ts">
useHead({ title: 'Students | Student Information Website' })

const students = useStudents()
const tilts = [-2.5, 1.5, -1, 2, -2, 1]

const years = ['All', '1st Year', '2nd Year', '3rd Year', '4th Year']
const year = ref('All')
const query = ref('')

const visible = computed(() =>
  students.filter(s =>
    (year.value === 'All' || s.yearLevel === year.value) &&
    s.name.toLowerCase().includes(query.value.trim().toLowerCase())
  )
)
</script>

<template>
  <div>
    <section class="page-banner">
      <div class="container">
        <p class="hand">class directory</p>
        <h1>Students</h1>
        <p class="sub">{{ students.length }} classmates pinned on the board. Hover or tap a card to flip it.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="tools">
          <label class="search">
            <span class="hand">find a classmate</span>
            <input v-model="query" type="search" placeholder="Type a name…">
          </label>
          <div class="chips" role="group" aria-label="Filter by year level">
            <button
              v-for="y in years"
              :key="y"
              type="button"
              class="chip"
              :class="{ on: year === y }"
              :aria-pressed="year === y"
              @click="year = y"
            >
              {{ y }}
            </button>
          </div>
        </div>

        <div v-if="visible.length" class="grid">
          <StudentCard
            v-for="(s, i) in visible"
            :key="s.studentId"
            :name="s.name"
            :nickname="s.nickname"
            :student-id="s.studentId"
            :course="s.course"
            :year-level="s.yearLevel"
            :email="s.email"
            :motto="s.motto"
            :hobby="s.hobby"
            :skills="s.skills"
            :color="s.color"
            :photo="s.photo"
            :tilt="tilts[i % tilts.length]"
          />
        </div>
        <p v-else class="empty hand">No classmate matches that search. Try another name or choose “All”.</p>

        <div class="back">
          <AppButton label="Back to home" to="/" color="forest" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tools { display: flex; flex-wrap: wrap; gap: 1rem 2rem; align-items: flex-end; justify-content: space-between; margin-bottom: 2.6rem; }
.search { display: flex; flex-direction: column; }
.search .hand { font-size: 1.5rem; line-height: 1; color: var(--moss); }
input {
  width: min(320px, 100%); padding: .55rem 1.1rem; border: 2px solid var(--forest); border-radius: 999px;
  background: var(--cream); font: 600 1rem var(--sans); color: var(--ink); box-shadow: 3px 3px 0 var(--forest);
  transition: box-shadow .2s, transform .2s;
}
input:focus { transform: translate(-1px, -1px); box-shadow: 5px 5px 0 var(--forest); }
.chips { display: flex; flex-wrap: wrap; gap: .5rem; }
.chip {
  padding: .3rem 1rem; border: 2px solid var(--forest); border-radius: 999px; background: var(--cream);
  color: var(--forest); font: 700 .9rem var(--sans); cursor: pointer; transition: transform .2s, background .2s;
}
.chip:hover { background: var(--sage); transform: rotate(-3deg) translateY(-2px); }
.chip.on { background: var(--forest); color: var(--cream); }
.empty { font-size: 1.8rem; text-align: center; color: var(--moss); padding: 2rem 0; }
.back { margin-top: 3rem; text-align: center; }
</style>
