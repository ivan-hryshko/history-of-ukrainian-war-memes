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
              Якщо ви знайшли помилку, або не знайшли свій улюблений мем, будь ласка залиште нам відгук, ми постараємось виправитись :)
              <br>
              <br>
              На жаль в нас поки немає можливості прикріпити файл, якщо надішлете посилання на файл або картинку, будемо вдячні.
            </p>
            <textarea
              v-model="message"
              type="text" rows="10" name="name"
            />
          </label>
        </p>
        <!-- <p>
          <label>
            <p>Додати файл:</p>
            <input
              name="file"
              type="file"
              class="file"
            />
          </label>
        </p> -->
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
        <p
          v-if="!isMessageSend"
        >
          <button
            @click="submitMessage"
          >
            Відправити
          </button>
        </p>
        <p
          v-else
          class="succssesfull-message"
        >
          Повідомлення успішно відправлено. Дякуюємо за відгук)
        </p>

      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { event } from 'vue-gtag'

export default {
  name: 'LeaveFeedback',
  setup(props) {
    const isMessageSend = ref(false)
    const message = ref('')
    const email = ref('')
    const token = ref('5621538987:AAEK213yJWLtgOYcTeWTxTsDkeANfl_Iyuk')
    const chatId = ref('-870015491')

    const fullMessage = computed(() => `Message: ${message.value}\n Email: ${email.value}`)

    // function uploadFile() {
    //   this.Images = this.$refs.file.files[0];
    // }

    // function submitFile() {
    //   const formData = new FormData();
    //   formData.append('file', this.Images);
    //   const headers = { 'Content-Type': 'multipart/form-data' };
    //   axios.post('https://httpbin.org/post', formData, { headers }).then((res) => {
    //     res.data.files; // binary representation of the file
    //     res.status; // HTTP status
    //   });
    // }

    function submitMessage() {
      // For test
      // axios
      //   .get("https://finalspaceapi.com/api/v0/character/?limit=2")
      //   .then((response) => {
      //     console.log(response);
      //   });
      try {
        axios
          .post(`https://api.telegram.org/bot${token.value}/sendMessage?chat_id=${chatId.value}&text=${fullMessage.value}`)
          .then((response) => {
            // console.log(response);
          });
        isMessageSend.value = true
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(() => {
      event('open-feedback', { method: 'Google' })
    })

    return {
      email,
      message,
      isMessageSend,
      submitMessage,
    }
  },
}
</script>

<style lang="scss">
@import './leave-feedback';
</style>
