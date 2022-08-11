<template>
  <div class="events-history_layout">
    <div class="events-history">
      <div class="row-header">
        <div class="row-header__block-empty">

        </div>
        <div v-for="week in 56" :key="week" class="row-header__block">
          {{ week }}
        </div>

      </div>
      <div v-for="indexRow in 100" :key="indexRow" class="events-history__row">
        <div class="events-history__year">
          {{ indexRow }}
        </div>
        <div
          v-for="index in 56" :key="index"
          class="events-history__block"
        >
          <!-- {{ index }} -->
        </div>
      </div>
    </div>
    <div class="control">
      Other text
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'

export default {
  name: 'HomeView',
  components: {
  },
  setup() {
    const warStart = new Date("2022-02-24");
    const currentDate = new Date();

    // get total seconds between the times
    const delta = Math.abs(currentDate - warStart) / 1000;

    // calculate (and subtract) whole days
    const days = Math.floor(delta / 86400);

    return {

    }
  },
}
</script>

<style>
.events-history_layout {
  display: flex;

}

.events-history {
  /* display: grid;
  grid-template-columns: repeat(7, 50px);
  row-gap: 10px;
  column-gap: 10px;
  width: 600px; */
  display: flex;
  flex-direction: column;
}

.events-history__year {
  width: 30px;
}

.events-history__row {
  display: flex;
}

.row-header {
  display: flex;
  margin-left: 30px;
}

.row-header__block {
  width: 16px;
  margin-right: 2px;
  background-color: white;
  font-size: 12px;
}

.row-header__block-empty {
  background-color: white;
}

.events-history__block {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  margin-right: 2px;
  background-color: gray;
  border: 1px solid black ;
  box-sizing: border-box;
}

.control {

}
</style>
