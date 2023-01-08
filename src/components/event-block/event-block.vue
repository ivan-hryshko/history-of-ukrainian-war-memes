<template>
  <div class="event-block">

    <div
      class="event-block__days"
    >
      <div
        v-if="date"
        class="event-block__date"
      >
        <div class="day-wrapped">
          <div class="date__icon">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="1.53845" width="21" height="2.30746" fill="#A1A1A1"/>
              <line x1="3.45447" y1="1.74817" x2="3.45447" y2="9.56059e-05" stroke="#A1A1A1" stroke-width="2"/>
              <line x1="7.90918" y1="1.74817" x2="7.90918" y2="9.56059e-05" stroke="#A1A1A1" stroke-width="2"/>
              <line x1="12.3638" y1="1.74817" x2="12.3638" y2="9.56059e-05" stroke="#A1A1A1" stroke-width="2"/>
              <line x1="16.8182" y1="1.74817" x2="16.8182" y2="9.56059e-05" stroke="#A1A1A1" stroke-width="2"/>
              <rect x="0.5" y="2.27136" width="20" height="18.2288" stroke="#A1A1A1"/>
            </svg>
          </div>
          <div class="day">
            <!-- Дата: -->
            {{ eventDay }}
          </div>
        </div>
        <div class="month">
          {{ eventMonthName }}
        </div>
      </div>

      <div
        v-if="date"
        class="event-block__day-block"
      >
        <div class="event-block__day-wrapped">
          <div class="event-block__day">
            <!-- День -->
            {{ days }}
          </div>
          <div class="event-block__day-text">
            день війни
          </div>
        </div>
      </div>
    </div>

    <div class="event-block__images-wrapped">
      <div
        class="event-block__images"
      >
        <!-- v-for="pictureName, index in pictures"
        :key="pictureName" -->
        <img
          :src="getImagePath()"
          class="event-block__image"
        >
        <!-- :style="imageStyleOptions(index)" -->
      </div>
    </div>

    <div class="event-block__text-block">
      <div class="event-block__text">
        {{ text }}
      </div>
      <div
        v-if="backAlive"
        class="event-block__action"
      >
        <button
          @click="routeToPovernisGivim"
        >
          Підтримати
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { MONTH_NAME } from '@/constants/month'

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
    /**
     * use it if you want to add button to event
     */
    backAlive: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const days = ref(0)
    const picturePath = ref(`src/assets/memes/${props.pictureName}`)
    const currentPictureIndex = ref(0)

    const newDayFormat = computed(() => {
      return `${props.date[8]}${props.date[9]}.${props.date[5]}${props.date[6]}.${props.date[0]}${props.date[1]}${props.date[2]}${props.date[3]}`
    })

    const eventDay = computed(() => {
      if (props.date[8] !== '0') {
        return `${props.date[8]}${props.date[9]}`
      }
      return props.date[9]
    })

    const eventMonth = computed(() => {
      if (props.date[5] !== '0') {
        return Number(`${props.date[5]}${props.date[6]}`)
      }
      return Number(props.date[6])
    })

    const eventMonthName = computed(() => {
      return MONTH_NAME[eventMonth.value - 1]
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

    function isShowArrow(pictures) {
      return pictures.length > 1
    }

    function getImagePath() {
      try {
        const path = require(`@/assets/memes/${props.pictures[currentPictureIndex.value]}`)
        return require(`@/assets/memes/${props.pictures[currentPictureIndex.value]}`)
      } catch (error) {
        console.log('error :>> ', error);
      }
    }

    function routeToPovernisGivim() {
      emit('backAlive')
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
      eventDay,
      currentPictureIndex,
      imageStyleOptions,
      eventMonthName,
      getImagePath,
      nextPicture,
      isShowArrow,
      previousPicture,
      routeToPovernisGivim,
    }
  },
}
</script>

<style lang="scss">
@import './event-block';
</style>
