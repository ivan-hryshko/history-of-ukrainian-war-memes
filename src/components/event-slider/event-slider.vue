<template>
  <div class="event-slider">
    <div
      v-for="event, index in sortedEvents"
      :key="index"
    >
      {{ event }}
      <div>
        --
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

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
  setup(props) {
    const sortedEvents = computed(() => {
      const sorted = [[]]
      console.log('sorted :>> ', sorted);
      let sortedIndex = 0
      props.events.forEach(event => {
        if (sorted[sortedIndex].length === 10) {
          sorted.push([])
          sortedIndex += 1
        }
        sorted[sortedIndex].push(event)
      })
      console.log('sorted :>> ', sorted);
      return sorted
    })

    return {
      sortedEvents,
    }
  },
}
</script>

<style>
@import './event-slider';
</style>
