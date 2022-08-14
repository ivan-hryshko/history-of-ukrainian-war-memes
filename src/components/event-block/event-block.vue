<template>
  <div class="event-block">
    <div class="event-block__info">
      <div class="event-block__days">
        <div class="event-block__day">
          <!-- <p>День:</p> -->
          {{ days }}
        </div>
        <div class="event-block__date">
          <!-- <p>Дата:</p> -->
          {{ newDayFormat }}
        </div>
      </div>
      <div class="event-block__text">
        {{ text }}
      </div>
    </div>
    <div
      class="event-block__images"
    >
      <img
        v-for="pictureName in pictures"
        :key="pictureName"
        :src="require(`@/assets/${pictureName}`)"
        class="event-block__image"
        alt=""
      >
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'EventBlock',
  props: {
    /**
     * Text
     */
    text: {
      type: String,
      default: '',
    },
    /**
     * Text
     */
    date: {
      type: String,
      default: '',

    },
    /**
     * Text
     */
    pictures: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const days = ref(0)
    const picturePath = ref(`src/assets/${props.pictureName}`)
    const newDayFormat = computed(() => {
      return `${props.date[8]}${props.date[9]}.${props.date[5]}${props.date[6]}.${props.date[0]}${props.date[1]}${props.date[2]}${props.date[3]}`
    })

    const warStart = new Date('2022-02-24')
    console.log('warStart evetnt :>> ', warStart)
    const eventDate = new Date(props.date)

    // get total seconds between the times
    const delta = Math.abs(eventDate - warStart) / 1000

    // calculate (and subtract) whole days
    days.value = Math.floor(delta / 86400)
    days.value += 1

    console.log('days :>> ', days)

    return {
      days,
      picturePath,
      newDayFormat,
    }
  },
}
</script>

<style>
@import './event-block';
</style>
