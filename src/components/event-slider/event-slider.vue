<template>
  <div class="event-slider">
    <div
      v-for="eventPack, index in sortedEvents"
      :key="index"
    >
      <div
        v-if="eventPack.isOpen"
      >
        <eventBlock
          v-for="event, index in eventPack.events"
          :key="event.date+index"
          :text="event.text"
          :date="event.date"
          :pictures="event.pictures"
        />
        <div
          v-if="isShowMoreButton(index)"
          class="show-more"
          @click="showNextPack(index)"
        >
          Show more
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from 'vue'
import eventBlock from '@/components/event-block'
import { useRouter, useRoute } from 'vue-router'

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
    const sortedEvents = ref([])
    const route = useRoute()

    const routerDirection = computed(() => route.query.direction)

    // watch(() => props.events, (newValue, oldValue) => {
    //   console.log('events');
    //   console.log('oldValue :>> ', oldValue);
    //   console.log('newValue :>> ', newValue);
    //   // events = events.reverse()
    // })

    watch(() => routerDirection.value, (newValue, oldValue) => {
      console.log('oldValue :>> ', oldValue);
      console.log('newValue :>> ', newValue);
      if (newValue === 'from_old') {
        let { events } = props
        events = events.reverse()
        fillSortedEvents(events)
      } else {
        fillSortedEvents(props.events)
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
      fillSortedEvents(props.events)
    }

    function fillSortedEvents(events) {
      const sorted = [{
        events: [],
        isOpen: true,
      }]
      console.log('sorted :>> ', sorted);
      let sortedIndex = 0
      events.forEach(event => {
        if (sorted[sortedIndex].events.length === 10) {
          sorted.push({
            events: [],
            isOpen: false,
          })
          sortedIndex += 1
        }
        sorted[sortedIndex].events.push(event)
      })
      console.log('sorted :>> ', sorted);
      sortedEvents.value = sorted
    }

    function showNextPack(index) {
      sortedEvents.value[index + 1].isOpen = true
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

<style>
@import './event-slider';
</style>
