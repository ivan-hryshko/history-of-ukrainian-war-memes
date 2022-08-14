<template>
  <div class="events-history_layout">
    <div>

    </div>
    <div class="events-history">
      <div class="events-history__birthday">
        <div>
          Оберіть дату народження:
        </div>
        <input
          v-model="birthdayDay"
          type="number"
          placeholder="День"
        >
        <input
          v-model="birthdayMonth"
          type="number"
          placeholder="Місяць"
        >
        <input
          v-model="birthdayYear"
          type="number"
          placeholder="Рік"
        >
      </div>
      <!-- {{ birthday }} -->
      <div class="events-history__from-birth">
        <div>
          Ви прожили тижнів: {{ weeksBirthToWarStart }}
        </div>
        <div>
          Днів: {{ daysBirthForToday }}
        </div>
      </div>
      <div class="row-header">
        <div class="row-header__block-empty" />
        <div
          v-for="week in 56"
          :key="week"
          class="row-header__block"
        >
          {{ week }}
        </div>
      </div>
      <div
        v-for="indexRow in 100"
        :key="indexRow"
        class="events-history__row"
      >
        <div class="events-history__year">
          {{ indexRow }}
        </div>
        <div
          v-for="index in 56"
          :key="index"
          :style="blockStyleOptions(indexRow, index)"
          class="events-history__block"
        >
          <!-- {{ index }} -->
          <!-- {{((indexRow - 1) * 56) + index}} -->
        </div>
      </div>
    </div>
    <div class="control">
      Control panel
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'LifeCalendar',
  components: {
  },
  setup() {
    const route = useRoute()

    const warStart = new Date('2022-02-24')
    const currentDate = new Date()
    const birthdayDay = ref(13)
    const birthdayMonth = ref(10)
    const birthdayYear = ref(1995)
    const birthday = computed(() => new Date(`${birthdayYear.value}-${birthdayMonth.value}-${birthdayDay.value}`))

    // get total seconds between the times
    // const delta = Math.abs(currentDate - warStart) / 1000

    // calculate (and subtract) whole days
    // const days = Math.floor(delta / 86400)

    const weeksBirthToWarStart = computed(() => {
      const delta = Math.abs(warStart - birthday.value) / 1000
      return Math.floor(delta / 604800)
      // 86400 - sec in 1 days
    })

    const weeksBirthForToday = computed(() => {
      const delta = Math.abs(currentDate - birthday.value) / 1000
      return Math.floor(delta / 604800)
      // 86400 - sec in 1 days
    })

    const daysBirthForToday = computed(() => {
      const delta = Math.abs(currentDate - birthday.value) / 1000
      return Math.floor(delta / 86400)
      // 86400 - sec in 1 days
    })

    function blockStyleOptions(indexRow, index) {
      const weeksFromBirth = ((indexRow - 1) * 56) + index
      if (weeksFromBirth === weeksBirthToWarStart.value) {
        console.log('weeksFromBirth :>> ', weeksFromBirth);
        console.log('weeksBirthToWarStart.value :>> ', weeksBirthToWarStart.value);
      }
      // console.log('weeksFromBirth :>> ', weeksFromBirth);
      // console.log('weeksBirthToWarStart.value :>> ', weeksBirthToWarStart.value);
      return {
        'background-color': blockColorStyle(weeksFromBirth),
      }
    }

    function blockColorStyle(weeksFromBirth) {
      if (weeksFromBirth < weeksBirthToWarStart.value) {
        return 'gray'
      } else if (weeksFromBirth <= weeksBirthForToday.value) {
        return 'red'
      } else {
        return 'white'
      }
    }

    return {
      birthday,
      birthdayDay,
      birthdayMonth,
      birthdayYear,
      weeksBirthToWarStart,
      daysBirthForToday,
      weeksBirthForToday,
      blockStyleOptions,
    }
  },
}
</script>

<style>
@import './life-calendar.css';
</style>
