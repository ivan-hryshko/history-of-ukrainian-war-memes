<template>
  <div class="view-layout">
    <div class="feedback">
      <div class="content">
        <h2 class="title">
          Залиште відгук
        </h2>

        <p>
          <label>
            <p>
              Якщо ви знайшли помилку, або не знайшли свій улюблюний мем, будь ласка залиште нам відгук, ми постараємось виправитись :)
            </p>
            <textarea
              v-model="message"
              type="text" rows="10" name="name"
            />
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
            <input
              v-model="email"
              type="email" name="email"
            />
          </label>
        </p>
        <p>
          <button
            @click="submitMessage"
          >
            Відправити
          </button>
        </p>

      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import axios from 'axios'

export default {
  name: 'LeaveFeedback',
  setup(props) {
    const message = ref('')
    const email = ref('')
    const token = ref('5621538987:AAEK213yJWLtgOYcTeWTxTsDkeANfl_Iyuk')
    const chatId = ref('-870015491')

    const fullMessage = computed(() => `Message: ${message.value}\n Email: ${email.value}`)

    function submitMessage() {
      console.log('fullMessage.value :>> ', fullMessage.value);
      axios
        .get("https://finalspaceapi.com/api/v0/character/?limit=2")
        .then((response) => {
          console.log(response);
        });
      axios
        .post(`https://api.telegram.org/bot${token.value}/sendMessage?chat_id=${chatId.value}&text=${fullMessage.value}`)
        .then((response) => {
          console.log(response);
        });
    }

    return {
      email,
      message,
      submitMessage,
    }
  },
}
</script>

<style lang="scss">
@import './leave-feedback';
</style>
