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
      <div class="event-block">
        <div class="event-block__info">
          <div class="event-block__day">
            1 - day
          </div>
          <div class="event-block__day">
            24.02.2022 - date
          </div>
          <div class="event-block__text">
            War started
          </div>
        </div>
        <div >
          <img src="@/assets/russian-warship.jpeg" class="event-block__image" alt="">
        </div>
      </div>
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

.event-block {
  display: flex;
  border: 2px solid #000000;
  justify-content: flex-start;
  width: 600px;
  border-radius: 8px;
  padding: 10px;
}

.event-block__info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 10px;
  width: 100%;
}

.event-block__day {
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 50px;
  width: 100%;
  border-radius: 8px;
  background-color: rgb(110, 110, 110);
  margin-bottom: 8px;
  box-sizing: border-box;
  color: white;
}

.event-block__text {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  border-radius: 8px;
  background-color: #c92931;
  color: white;
  flex-grow: 1;
}

.event-block__image {
  height: 300px;
}

</style>
