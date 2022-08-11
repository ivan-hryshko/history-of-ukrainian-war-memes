<template>
  <div
    class="side-block"
    :style="styleOptions"
  >
    <!-- <img src="@/assets/ukrainian-ornament.jpeg" alt="">
    <img src="@/assets/ukrainian-ornament.jpeg" alt="">
    <img src="@/assets/ukrainian-ornament.jpeg" alt="">
    <img src="@/assets/ukrainian-ornament.jpeg" alt="">
    <img src="@/assets/ukrainian-ornament.jpeg" alt="">
    <img src="@/assets/ukrainian-ornament.jpeg" alt="">
    <img src="@/assets/ukrainian-ornament.jpeg" alt="">
    <img src="@/assets/ukrainian-ornament.jpeg" alt="">
    <img src="@/assets/ukrainian-ornament.jpeg" alt=""> -->
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SideBlock',
  props: {
    position: {
      type: String,
      default: 'left',
    },
  },
  setup(props) {
    const styleOptions = computed(() => {
      return {
        'background-position': props.position,
      }
    })

    return {
      styleOptions,
    }
  },
}
</script>

<style>
@import './side-block';
</style>
