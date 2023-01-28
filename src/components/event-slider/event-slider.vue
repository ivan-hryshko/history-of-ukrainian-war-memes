<template>
  <div class="event-slider">
    <div
      v-for="eventPack, index in sortedEvents"
      class="pack"
      :key="index"
    >
      <div
        v-if="eventPack.isOpen"
        class="events"
      >
        <eventBlock
          v-for="eventAtPack, index in eventPack.events"
          :key="eventAtPack.date+index"
          :text="eventAtPack.text"
          :date="eventAtPack.date"
          :pictures="eventAtPack.pictures"
        />
        <eventBlock
          v-if="index === 0 || index === eventPack.events.length - 1"
          :key="index+'back_alive'"
          text="Дякуємо нашим бійцям, завдяки яким ми можемо дивитись ці меми. Щоб збільшити кількість бавовни та харошіх рускіх, пропонуємо вам підтримати копійкою фонд 'Повернись живим'"
          :pictures="['povernis-jivim-black-box.jpeg']"
          back-alive
          @backAlive="routeToPovernisGivim(index)"
        />
        <div
          class="show-more-wrapped"
        >
          <div
            v-if="isShowMoreButton(index)"
            class="show-more"
            @click="showNextPack(index)"
          >
            Наступні
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from 'vue'
import eventBlock from '@/components/event-block'
import { event } from 'vue-gtag'
import { useMemSlider } from '@/store/use'
import { MONTH_NAME } from '@/constants/month'

export default {
  name: 'EventSlider',
  props: {
    /**
     * Events array
     */
    events: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    eventBlock,
  },
  setup(props) {
    const {
      eventDirection,
      selectedDateFilter,
    } = useMemSlider()

    const sortedEvents = ref([])

    watch(() => eventDirection.value, (newValue, oldValue) => {
      let { events } = props
      events = events.reverse()
      divideEventsByPack(filterEventsBySelectedDate(events))
    }, { deep: true })

    watch(() => selectedDateFilter.value, (newValue, oldValue) => {
      if (oldValue !== newValue) {
        const { events } = props
        divideEventsByPack(filterEventsBySelectedDate(events))
      }
    }, { deep: true })

    const someEvents = computed(() => {
      console.log('props.events some :>> ', props.events);
      return props.events
    })

    onMounted(() => {
      initialization()
    })

    function initialization() {
      divideEventsByPack(props.events)
    }

    function divideEventsByPack(events) {
      const sorted = [{
        events: [],
        isOpen: true,
      }]
      console.log('sorted :>> ', sorted);
      let sortedIndex = 0
      events.forEach(someEvent => {
        if (sorted[sortedIndex].events.length === 10) {
          sorted.push({
            events: [],
            isOpen: false,
          })
          sortedIndex += 1
        }
        sorted[sortedIndex].events.push(someEvent)
      })
      console.log('sorted :>> ', sorted);
      sortedEvents.value = sorted
    }

    function filterEventsBySelectedDate(events) {
      const [filterMonth, filterYear] = selectedDateFilter.value.split(' ')
      event(`filter-event-by-month-${filterYear}-${filterMonth}`, { method: 'Google' })
      if (selectedDateFilter.value === 'Всі') {
        return events
      }
      return events.filter(someEvent => {
        const [eventYear, eventMonth, eventDay] = someEvent.date.split('-')
        const isYearCorrect = eventYear === filterYear
        const isMonthCorrect = MONTH_NAME.findIndex(monthName => monthName === filterMonth) === Number(eventMonth) - 1
        return isYearCorrect && isMonthCorrect
      })
    }

    function showNextPack(index) {
      sortedEvents.value[index + 1].isOpen = true
      event(`show-next-pack-${index + 1}`, { method: 'Google' })
    }

    function isShowMoreButton(index) {
      console.log('index :>> ', index);
      return sortedEvents.value[index + 1]?.isOpen === false
    }

    function routeToPovernisGivim(index) {
      if (index === 0) {
        event('click-back-alive-post-10', { method: 'Google' })
      } else {
        event('click-back-alive-post-last', { method: 'Google' })
      }
      window.location.href = 'https://savelife.in.ua/donate/#donate-army-card-monthly';
    }

    return {
      sortedEvents,
      showNextPack,
      isShowMoreButton,
      routeToPovernisGivim,
    }
  },
}
</script>

<style lang="scss">
@import './event-slider';
</style>
