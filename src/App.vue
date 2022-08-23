<template>
  <div class="content">
    <nav>
      <div class="header__bakground">

      </div>
      <router-link to="/">
        Ukraine War Memes
      </router-link>
      <div class="event-block__divider-wrapped">
        <div class="header__divider">
        </div>
      </div>
      <router-link to="/life-calendar">
        Life calendar
      </router-link>
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
      <div>

      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  name: 'HistiryOfUkrainianWarMemes',
  components: {
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const eventsDirection = ref(DIRECTION_OLD)

    const DIRECTION_OLD = 'from_old'
    const DIRECTION_NEW = 'from_new'

    // router.push({ query: { direction: DIRECTION_OLD } })

    function changeEventsDirection() {
      console.log('route.query :>> ', route.query);
      eventsDirection.value = route.query.direction === DIRECTION_OLD ? DIRECTION_NEW : DIRECTION_OLD
      router.push({ query: { direction: eventsDirection.value } })
    }

    return {
      route,
      changeEventsDirection,
    }
  },
}

</script>

<style>
@import '@/css/normalize.css';
@import url('http://fonts.cdnfonts.com/css/montserrat');

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  font-weight: 500;
}

.content {
  overflow: hidden;
}

nav {
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 100;
  position: fixed;
  margin: auto;
  width: 100%;
  height: 100px;
  /* background-color: #000000; */
}

.header__bakground {
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.2;
  z-index: -1;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0px 8px;
  font-size: 30px;
  align-self: center;
}

nav a.router-link-exact-active {
  /* color: #42b983; */
}

.header__divider {
  width: 4px;
  height: 50px;
  left: 699px;
  top: 58px;
  background: #D9D9D9;
  border-radius: 2px;
}

.rotate-icon {
  cursor: pointer;
  align-self: center;
}

.rotate-icon svg {
  transform: rotate(90deg);
  height: 30px;
}

.rotate-icon svg polygon {
  fill: grey;
}

.rotate-icon svg:hover polygon {
  fill: white;
}

img {
  display: block;
  margin: 0px;
}

</style>
