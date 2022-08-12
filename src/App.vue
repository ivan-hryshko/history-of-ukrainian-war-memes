<template>
  <div class="header">
    <nav>
      <router-link to="/">
        Ukraine War Memes
      </router-link> |
      <router-link to="/life-calendar">
        Life calendar
      </router-link>
      <div
        class="rotate-icon"
        @click="helloWorld"
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
              points="396.82,268.694 375.607,289.907 420,334.301 1.213,334.301 1.213,364.301 420,364.301 375.607,408.694
              396.82,429.907 477.427,349.301 	"
            />
          </g>
        </svg>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

.header {
  overflow: hidden;
}
.header svg{

}

nav {
  display: flex;
  justify-content: center;
  z-index: 100;
  padding: 16px;
  position: fixed;
  margin: auto;
  width: 100%;
  background-color: white;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0px 8px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.rotate-icon {
  cursor: pointer;
}

.rotate-icon svg {
  width: 24px;
  transform: rotate(90deg);
}

.rotate-icon svg polygon {
  fill: grey;
}

.rotate-icon svg:hover polygon {
  fill: black;
}

img {
  display: block;
  margin: 0px;
}

@import '@/css/normalize.css';
</style>
