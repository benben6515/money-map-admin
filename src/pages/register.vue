<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const username = ref('')
const password = ref('')
const passwordAgain = ref('')

// interface SubmitData {
//   username: String,
//   password: String,
// }

const login = async() => {
  // TODO: login real api
  const submitData = {
    username: username.value,
    password: password.value,
  }
  console.log(submitData)
  const res = await axios.post('http://localhost:5000/api/register', submitData)
  console.log(res.data)
}
</script>

<template>
  <h2
    m-4
    text="2rem"
  >
    註冊
  </h2>
  <div
    flex flex-col
    justify-center
    items-center
  >
    <input
      id="input"
      v-model="username"
      placeholder="請輸入你的帳號"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      m-5
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    >
    <input
      id="input"
      v-model="password"
      placeholder="請輸入你的密碼"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      m-5
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="login"
    >
    <input
      id="input"
      v-model="passwordAgain"
      placeholder="請再次輸入你的密碼"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      m-5
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="login"
    >

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!username && !password"
        @click="login"
      >
        註冊
      </button>
    </div>
  </div>
</template>

<style scoped></style>
