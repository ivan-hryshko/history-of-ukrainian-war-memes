<template>
  <div class="layout">
    <!-- <div class="layout__images">
      <img src="@/assets/background.png" alt="">
    </div> -->
    <div class="events">
      <EventSlider
        :events="events"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import EventSlider from '@/components/event-slider'
import events from '@/json/events.json'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'WarMemes',
  components: {
    EventSlider,
  },
  setup() {
    const router = useRouter()
    const route = useRoute()

    const DIRECTION_OLD = 'from_old'
    const DIRECTION_NEW = 'from_new'

    const someVal = computed(() => route.query.direction)

    // router.push({ query: { direction: DIRECTION_OLD } })

    const routeQuery = computed(() => {
      console.log('route.query.direction war :>> ', route.query.direction);
      return route.query.direction
    })

    watch(() => someVal.value, (newValue, oldValue) => {
      console.log('oldValue :>> ', oldValue);
      console.log('newValue :>> ', newValue);
      events = events.reverse()
    })

    function helloWorld() {
      console.log('HelloWorld');
    }

    function sortEvents() {
      events.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0
      })
    }

    sortEvents()

    return {
      events,
      helloWorld,
    }
  },
}
</script>

<style>
@import './war-memes.css';

</style>
