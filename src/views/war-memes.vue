<template>
  <div class="layout">
    <div class="side-block">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
    </div>
    <div class="events">
      <eventBlock
        text="День початку"
        date="2022-02-25"
        picture-name="russian-warship"
      />

    </div>
    <div class="side-block">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
      <img src="@/assets/ukrainian-ornament.jpeg" alt="">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import eventBlock from '@/components/event-block'

export default {
  name: 'WarMemes',
  components: {
    eventBlock,
  },
  setup() {
    const events = ref([
      {
        date: null,
        text: 'hello',
        pictureName: '',
      },
    ])
  },
}
</script>

<style>
.layout {
  display: grid;
  grid-template-columns: 1fr 800px 1fr;
}

.side-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.side-block img{
  width: 150px;
}

.events {
  justify-self: center;
}

</style>
