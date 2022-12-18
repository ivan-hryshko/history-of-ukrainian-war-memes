<template>
  <div class="events-history_layout">
    <!-- <div>

    </div> -->
    <div class="events-history">
      <div class="events-history__birthday">
        <div>
          Оберіть дату народження:
        </div>
        <input
          v-model="birthdayDay"
          type="number"
          placeholder="День"
          class="events-history__birthday-day"
        >
        <input
          v-model="birthdayMonth"
          type="number"
          placeholder="Місяць"
          class="events-history__birthday-month"
        >
        <input
          v-model="birthdayYear"
          type="number"
          placeholder="Рік"
          class="events-history__birthday-year"
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
        <div>
          Тижнів з початку року: {{ weekFromYearStartForBirth }}
        </div>
      </div>
      <div class="events-history__row">
        <div class="events-history__row-wrap">
          <div class="events-history__year" />
          <div
            v-for="week in 56"
            :key="week"
            class="row-header__block"
          >
            {{ week }}
          </div>
        </div>
      </div>
      <div
        v-for="indexRow in 100"
        :key="indexRow"
        class="events-history__row"
      >
        <div class="events-history__row-wrap">
          <div class="events-history__year">
            {{ birthdayYear + indexRow - 1 }} - {{ indexRow }}
          </div>
          <div
            v-for="week in 56"
            :key="week"
            :style="blockStyleOptions(indexRow, week)"
            class="events-history__block"
            @click="selectDate(indexRow, week)"
          >
            <!-- {{ week }} -->
            <!-- {{((indexRow - 1) * 56) + week}} -->
          </div>
        </div>
        <div v-if="indexRow === selectedDate.row" class="events-history__selected-week">
          <!-- <div>
            Обраний рік: {{ selectedDate.row + birthdayYear - 1}},
          </div>
          <div>
            Вам років: {{ selectedDate.row }},
          </div>
          <div>
            Обраний тиждень: {{ selectedDate.week }}
          </div> -->
          <div class="events">
            <eventBlock
              v-for="event in eventsSelected"
              :key="event.date + event.text"
              :text="event.text"
              :date="event.date"
              :pictures="event.pictures"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="false"
      class="control"
    >
      <div>
        Control panel
      </div>
      <div>
        Оберіть дату
      </div>
      <div v-if="selectedDate.row">
        Обраний рік: {{ selectedDate.row + birthdayYear - 1}}, Вам років: {{ selectedDate.row }}
      </div>
      <div v-if="selectedDate.week">
        Обраний тиждень: {{ selectedDate.week }}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import eventBlock from '@/components/event-block'
import events from '@/json/events.json'

export default {
  name: 'LifeCalendar',
  components: {
    eventBlock,
  },
  setup() {
    const route = useRoute()

    const secInMinute = 60
    const secInHour = secInMinute * 60 // 3600
    const secInDay = secInHour * 24 // 86400
    const secInWeek = secInDay * 7 // 604800
    const msInWeek = secInWeek * 1000 // 604 800 000

    const selectedDate = ref({
      row: null,
      week: null,
    })

    const warStart = new Date('2022-02-24')
    const startOf2022 = new Date('2022-01-01')
    const currentDate = new Date()
    const birthdayDay = ref(13)
    const birthdayMonth = ref(10)
    const birthdayYear = ref(1995)
    const yearStart = ref(new Date(`${birthdayYear.value}-01-01`))
    const birthday = computed(() => new Date(`${birthdayYear.value}-${birthdayMonth.value}-${birthdayDay.value}`))
    const weekFromYearStartForBirth = computed(() => Math.floor((birthday.value - yearStart.value) / msInWeek))
    const seventyYearInWeek = 70 * 56

    const eventsSelected = computed(() => {
      return events.filter(event => {
        const eventDate = new Date(event.date)
        console.log('eventDate :>> ', eventDate);
        const eventWeekFrom2022 = Math.floor((eventDate - startOf2022) / msInWeek)
        console.log('eventWeekFrom2022 :>> ', eventWeekFrom2022);
        console.log('selectedDate.value.week :>> ', selectedDate.value.week);
        const result = eventWeekFrom2022 === selectedDate.value.week
        console.log('result :>> ', result);
        return result
      })
    })

    // get total seconds between the times
    // const delta = Math.abs(currentDate - warStart) / 1000

    // calculate (and subtract) whole days
    // const days = Math.floor(delta / 86400)

    const weeksBirthToWarStart = computed(() => {
      const delta = Math.abs(warStart - birthday.value) / 1000
      return Math.floor(delta / secInWeek)
    })

    const weeksBirthForToday = computed(() => {
      const delta = Math.abs(currentDate - birthday.value) / 1000
      return Math.floor(delta / secInWeek)
    })

    const daysBirthForToday = computed(() => {
      const delta = Math.abs(currentDate - birthday.value) / 1000
      return Math.floor(delta / secInDay)
    })

    function blockStyleOptions(indexRow, week) {
      const weeksFromBirth = ((indexRow - 1) * 56) + week
      if (weeksFromBirth === weeksBirthToWarStart.value) {
        // console.log('weeksFromBirth :>> ', weeksFromBirth);
        // console.log('weeksBirthToWarStart.value :>> ', weeksBirthToWarStart.value);
      }
      // console.log('weeksFromBirth :>> ', weeksFromBirth);
      // console.log('weeksBirthToWarStart.value :>> ', weeksBirthToWarStart.value);
      return {
        'background-color': blockColorStyle(weeksFromBirth),
      }
    }

    function blockColorStyle(weeksFromBirth) {
      if (weeksFromBirth < weekFromYearStartForBirth.value) {
        return 'white'
      } else if (weeksFromBirth < weeksBirthToWarStart.value + weekFromYearStartForBirth.value) {
        return '#abced6'
      } else if (weeksFromBirth <= weeksBirthForToday.value + weekFromYearStartForBirth.value) {
        return '#c05353'
      } else if (weeksFromBirth > seventyYearInWeek) {
        return '#c9c9c9'
      } else {
        return 'white'
      }
    }

    function selectDate(indexRow, week) {
      selectedDate.value.row = indexRow
      selectedDate.value.week = week
    }

    onMounted(() => {
    })

    return {
      events,
      eventsSelected,
      birthday,
      selectedDate,
      birthdayDay,
      birthdayMonth,
      birthdayYear,
      weeksBirthToWarStart,
      daysBirthForToday,
      weeksBirthForToday,
      weekFromYearStartForBirth,
      selectDate,
      blockStyleOptions,
    }
  },
}
</script>

<style lang="scss">
@import './life-calendar.scss';
</style>
