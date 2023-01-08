<template>
  <div class="view-layout">
    <div class="about-us">
      <div class="content">
        <p>
          Даний сайт було створено для того, щоб показати який складний шлях пройшов Український народ та як багато ми змогли досягнути.
        </p>
        <p>
          Інша ціль - це збір коштів на потреби ЗСУ. Не обовʼязково це робити саме з нашого сайту, зробіть з того джерела якому довіряєте. Ми ж просто хочемо вам ще раз про це нагадати та цим подякувати нашим воїнам за свободу.
        </p>
        <p>
          Основними джерелами цих мемів послугували пабліки в телеграмі <a href="https://t.me/privatnamemarnya">Перша приватна мемарня</a>, <a href="https://t.me/novinach">Новинач</a>, <a href="https://t.me/gonimems">GONI</a>, <a href="https://www.instagram.com/bloome__ua/">bloome__ua</a>, Український народ та інші.
        </p>
        <p>
          Також можете долучитись до нашої групи в <a href="https://t.me/ukraine_war_memes">телеграмі</a>, щоб стежити за оновленнями.
        </p>
        <p>
          Якщо ви знайшли помилку, або не знайшли свій улюблюний мем, будь ласка залиште нам відгук, ми постараємось виправитись :)
        </p>
        <br>
        <p>
          Слава Україні!
        </p>
        <p>
          Разом переможемо!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { event } from 'vue-gtag'

export default {
  name: 'AboutUs',
  setup(props) {
    onMounted(() => {
      event('open-about-us', { method: 'Google' })
    })
    return {
    }
  },
}
</script>

<style lang="scss">
@import './about-us';
</style>
