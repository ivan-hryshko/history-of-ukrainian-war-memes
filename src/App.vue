<template>
  <div class="content">
    <nav>
      <div class="header__bakground">
      </div>
      <div class="header__pages">
        <!-- <router-link to="/life-calendar">
          Life calendar
        </router-link> -->
        <div
          class="burger-menu"
          @click="showSidebar"
        >
          <img src="@/assets/icons/burger-icon.png" alt="">
        </div>
        <div class="central-part">
          <div class="month">
            <div
              class="month-head"
              @click="handleShowMonthList"
            >
              <div class="arrow">
                <img src="@/assets/icons/arrow.png" alt="">
              </div>
              <div class="month-text">
                {{ currentMonth }}
              </div>
            </div>
            <ul
              v-if="isShowMonthList"
              class="month-list"
            >
              <li
                v-for="month, index in generatedMonthList"
                :key="index"
                @click="changeMonth(month)"
              >
                {{ month }}
              </li>
            </ul>
          </div>
          <div
            v-if="route.path==='/'"
            class="rotate-icon"
            @click="changeEventsDirection"
          >
            <svg
              id="Layer_1"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 477.427 477.427"
              style="enable-background:new 0 0 477.427 477.427;"
              xml:space="preserve"
            >
              <g>
                <polygon
                  points="101.82,187.52 57.673,143.372 476.213,143.372 476.213,113.372 57.181,113.372 101.82,68.733 80.607,47.519
                  0,128.126 80.607,208.733 	"
                />
                <polygon
                  id="second"
                  points="396.82,268.694 375.607,289.907 420,334.301 1.213,334.301 1.213,364.301 420,364.301 375.607,408.694
                  396.82,429.907 477.427,349.301 	"
                />
              </g>
            </svg>
          </div>
        </div>
        <div>
          <img
            src="@/assets/povernis_givim_logo.png"
            class="povernis-givim-logo"
            @click="routeToPovernisGivim"
          >
        </div>
      </div>
    </nav>
    <div
      class="sidebar"
    >

    </div>
    <router-view />
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { MONTH_NAME } from '@/constants/month'

export default {
  name: 'HistoryOfUkrainianWarMemes',
  components: {
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const eventsDirection = ref(DIRECTION_OLD)
    const isShowMonthList = ref(false)
    const isShowSidebar = ref(false)
    const currentMonth = ref(`${MONTH_NAME[1]} 2022`)
    const currentDate = ref(new Date)

    const DIRECTION_OLD = 'from_old'
    const DIRECTION_NEW = 'from_new'

    console.log('currentDate.value :>> ', currentDate.value);
    console.log('currentDate.value :>> ', currentDate.value.getFullYear());
    console.log('currentDate.value :>> ', currentDate.value.getMonth());
    const generatedMonthList = computed(() => {
      const newList = []
      const startYear = 2022
      for (let year = startYear; year <= currentDate.value.getFullYear(); year++) {
        for (let monthIndex = 0; monthIndex < MONTH_NAME.length; monthIndex++) {
          if (MONTH_NAME[monthIndex] !== MONTH_NAME[0] && year !== '2022') {
            newList.push(`${MONTH_NAME[monthIndex]} ${year}`)
          }
        }
      }

      return newList
    })

    // router.push({ query: { direction: DIRECTION_OLD } })

    function changeEventsDirection() {
      console.log('route.query :>> ', route.query);
      eventsDirection.value = route.query.direction === DIRECTION_OLD ? DIRECTION_NEW : DIRECTION_OLD
      router.push({ query: { direction: eventsDirection.value } })
    }

    function routeToPovernisGivim() {
      window.location.href = 'https://savelife.in.ua/donate/#donate-army-card-monthly';
    }

    function handleShowMonthList() {
      isShowMonthList.value = !isShowMonthList.value
    }

    function changeMonth(month) {
      currentMonth.value = month
      isShowMonthList.value = false
    }

    function showSidebar() {
      isShowSidebar.value = true
    }

    return {
      route,
      MONTH_NAME,
      currentMonth,
      isShowMonthList,
      isShowSidebar,
      generatedMonthList,
      changeMonth,
      showSidebar,
      handleShowMonthList,
      routeToPovernisGivim,
      changeEventsDirection,
    }
  },
}

</script>

<style lang="scss">
@import '@/css/normalize.css';
@import url('http://fonts.cdnfonts.com/css/montserrat');
@import "./App.scss";
</style>
