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
import { ref, computed, watch, onMounted } from 'vue'
import EventSlider from '@/components/event-slider'
import events from '@/json/events.json'
import { useRouter, useRoute } from 'vue-router'
import { event } from 'vue-gtag'

export default {
  name: 'WarMemes',
  components: {
    EventSlider,
  },
  setup() {
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

    onMounted(() => {
      event('open-app', { method: 'Google' })
    })

    return {
      events,
      helloWorld,
    }
  },
}
</script>

<style lang="scss">
@import './war-memes.scss';

</style>
