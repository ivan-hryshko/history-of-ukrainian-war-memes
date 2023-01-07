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
    } = useMemSlider()

    const sortedEvents = ref([])

    watch(() => eventDirection.value, (newValue, oldValue) => {
      console.log('oldValue :>> ', oldValue);
      console.log('newValue :>> ', newValue);
      let { events } = props
      events = events.reverse()
      fillSortedEvents(events)
    }, { deep: true })

    const someEvents = computed(() => {
      console.log('props.events some :>> ', props.events);
      return props.events
    })

    onMounted(() => {
      initialization()
    })

    function initialization() {
      fillSortedEvents(props.events)
    }

    function fillSortedEvents(events) {
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

    function showNextPack(index) {
      sortedEvents.value[index + 1].isOpen = true
      event('show-next-pack', { method: 'Google' })
    }

    function isShowMoreButton(index) {
      console.log('index :>> ', index);
      return sortedEvents.value[index + 1]?.isOpen === false
    }

    return {
      sortedEvents,
      showNextPack,
      isShowMoreButton,
    }
  },
}
</script>

<style lang="scss">
@import './event-slider';
</style>
