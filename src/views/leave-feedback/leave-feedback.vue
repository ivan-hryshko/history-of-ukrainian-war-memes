<template>
  <div class="view-layout">
    <div class="feedback">
      <div class="content">
        <!-- <p>
          
        </p>
        <textarea name="" id="" rows="10" />
        <p>
          
        </p>
        <input type="text"> -->
        <h2 class="title">
          Залиште відгук
        </h2>

        <form name="contact" netlify>
          <p>
            <label>
              <p>
                Якщо ви знайшли помилку, або не знайшли свій улюблюний мем, будь ласка залиште нам відгук, ми постараємось виправитись :)
              </p>
              <textarea type="text" rows="10" name="name" />
            </label>
          </p>
          <p>
            <label>
              <p>Додати файл:</p>
              <input name="file" type="file" class="file"/>
            </label>
          </p>
          <p>
            <label>
              <p>
                Якщо хочете щоб ми з вами звʼязались, залиште контактні дані (email, telegram і т.п.)
              </p>
              <input type="email" name="email" /></label>
          </p>
          <p>
            <button type="submit">Відправити</button>
          </p>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'LeaveFeedback',
  setup(props) {
    return {
    }
  },
}
</script>

<style lang="scss">
@import './leave-feedback';
</style>
