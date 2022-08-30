<template>
  <div class="event-block">
    <div class="event-block__info">
      <div class="event-block__text-block">
        <img
          src="@/assets/dots_by.svg"
          class="event-block__text-dots"
        >
        <div class="event-block__text">
          {{ text }}
        </div>
      </div>
      <div class="event-block__days">
        <div class="event-block__date">
          <!-- <p>Дата:</p> -->
          {{ newDayFormat }}
        </div>
        <div class="event-block__divider-wrapped">
          <div class="event-block__divider">

          </div>
        </div>
        <div class="event-block__day-block">
          <div class="event-block__day-wrapped">
            <div class="event-block__day">
              <!-- <p>День:</p> -->
              {{ days }}
            </div>
            <div class="event-block__day-text">
              день війни
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="event-block__images-wrapped">
      <div
        class="event-block__arrow-wrapped"
        @click="previousPicture"
      >
        <img
          v-if="pictures.length > 1"
          src="@/assets/icons/arror-slider.svg"
          class="event-block__arrow event-block__arrow-left"
        >
      </div>
      <div
        class="event-block__images"
      >
        <!-- v-for="pictureName, index in pictures"
        :key="pictureName" -->
        <img
          :src="require(`@/assets/memes/${pictures[currentPictureIndex]}`)"
          class="event-block__image"
        >
        <!-- :style="imageStyleOptions(index)" -->
      </div>
      <div
        class="event-block__arrow-wrapped"
        @click="nextPicture"
      >
        <img
          v-if="pictures.length > 1"
          src="@/assets/icons/arror-slider.svg"
          class="event-block__arrow event-block__arrow-right"
        >
      </div>
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
    const picturePath = ref(`src/assets/memes/${props.pictureName}`)
    const currentPictureIndex = ref(0)
    const newDayFormat = computed(() => {
      return `${props.date[8]}${props.date[9]}.${props.date[5]}${props.date[6]}.${props.date[0]}${props.date[1]}${props.date[2]}${props.date[3]}`
    })
    const imageStyleOptions = computed((index) => {
      return {
        'display': index === currentPictureIndex.value ? 'show' : 'block',
      }
    })

    function nextPicture() {
      const isIndexOverflow = currentPictureIndex.value + 1 >= props.pictures.length
      console.log('isIndexOverflow :>> ', isIndexOverflow);
      currentPictureIndex.value = isIndexOverflow ? 0 : currentPictureIndex.value + 1
      console.log('currentPictureIndex.value :>> ', currentPictureIndex.value);
    }

    function previousPicture() {
      const isIndexOverflow = currentPictureIndex.value - 1 < 0
      console.log('isIndexOverflow :>> ', isIndexOverflow);
      currentPictureIndex.value = isIndexOverflow ? props.pictures.length - 1 : currentPictureIndex.value - 1
      console.log('currentPictureIndex.value :>> ', currentPictureIndex.value);
    }

    const warStart = new Date('2022-02-24')
    // console.log('warStart evetnt :>> ', warStart)
    const eventDate = new Date(props.date)

    // get total seconds between the times
    const delta = Math.abs(eventDate - warStart) / 1000

    // calculate (and subtract) whole days
    days.value = Math.floor(delta / 86400)
    days.value += 1

    // console.log('days :>> ', days)

    return {
      days,
      picturePath,
      newDayFormat,
      currentPictureIndex,
      imageStyleOptions,
      nextPicture,
      previousPicture,
    }
  },
}
</script>

<style>
@import './event-block';
</style>
