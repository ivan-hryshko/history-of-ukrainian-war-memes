<template>
  <div class="layout">
    <SideBlock />
    <div class="events">
      <eventBlock
        v-for="event in events" :key="event.date"
        :text="event.text"
        :date="event.date"
        :pictures="event.pictures"
      />

    </div>
    <SideBlock />
  </div>
</template>

<script>
import { ref } from 'vue'
import eventBlock from '@/components/event-block'
import SideBlock from '@/components/side-block'
import events from '@/json/events.json'

export default {
  name: 'WarMemes',
  components: {
    eventBlock,
    SideBlock,
  },
  setup() {
    // const events = ref([
    //   {
    //     date: '2022-02-25',
    //     text: 'День початку',
    //     pictures: [
    //       'russian-warship',
    //     ],
    //   },
    //   {
    //     date: '2022-05-14',
    //     text: 'Перемога Kalush на Evrovision-2022',
    //     pictures: [
    //       'eurovision-kalush',
    //     ],
    //   },
    // ])
    return {
      events,
    }
  },
}
</script>

<style>
.layout {
  display: grid;
  grid-template-columns: 1fr 800px 1fr;
}

.events {
  justify-self: center;
}

</style>
