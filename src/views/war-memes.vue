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
          <div class="event-block__days">
            <div class="event-block__day">
              1
            </div>
            <div class="event-block__date">
              24.02.2022
            </div>
          </div>
          <div class="event-block__text">
            День початку війни
          </div>
        </div>
        <div >
          <img src="@/assets/russian-warship.jpeg" class="event-block__image" alt="">
        </div>
      </div>

      <div class="event-block">
        <div class="event-block__info">
          <div class="event-block__days">
            <div class="event-block__day">
              1
            </div>
            <div class="event-block__date">
              24.02.2022
            </div>
            <div class="event-block__text">
              День початку війни
            </div>
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
  flex-direction: column;
  border: 2px solid #000000;
  justify-content: flex-start;
  width: 600px;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 32px;
}

.event-block__info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 10px;
  width: 100%;
  margin-bottom: 8px;
}

.event-block__days {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.event-block__day {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 16px;
  height: 50px;
  border-radius: 8px;
  background-color: rgb(110, 110, 110);
  margin-right: 8px;
  box-sizing: border-box;
  color: white;
}

.event-block__date {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 16px;
  height: 50px;
  border-radius: 8px;
  background-color: rgb(110, 110, 110);
  margin-right: 8px;
  box-sizing: border-box;
  color: white;
}

.event-block__text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  background-color: #e9e8e8;
  color: black;
  flex-grow: 1;
}

.event-block__image {
  width: 100%;
}

</style>
