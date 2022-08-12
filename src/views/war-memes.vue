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
