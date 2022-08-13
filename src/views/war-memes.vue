<template>
  <div class="layout">
    <SideBlock />
    <div class="events">
      <eventBlock
        v-for="event in events"
        :key="event.date"
        :text="event.text"
        :date="event.date"
        :pictures="event.pictures"
      />
    </div>
    <SideBlock
      position="right"
    />
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import eventBlock from '@/components/event-block'
import SideBlock from '@/components/side-block'
import events from '@/json/events.json'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'WarMemes',
  components: {
    eventBlock,
    SideBlock,
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
