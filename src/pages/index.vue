<script setup lang="ts">
import { name } from '~/composables'

const isShowData = ref(false)

const router = useRouter()

const go = () => {
  if (name.value) router.push('/me')
}
</script>

<template>
  <div class="wrapper">
    <div>
      <!-- <p>
        <a
          rel="noreferrer"
          href="https://www.instagram.com/_moneymap/?hl=zh-tw"
          target="_blank"
        >MoneyMap</a>
      </p> -->

      <div py-30 />

      <div v-if="!isShowData">
        <input
          id="input"
          v-model="name"
          placeholder="請輸入你的購課 Email"
          type="text"
          autocomplete="false"
          p="x-4 y-2"
          m-10
          w="250px"
          text="center"
          bg="transparent"
          border="~ rounded gray-200 dark:gray-700"
          outline="none active:none"
          @keydown.enter="go"
        >

        <div>
          <button class="m-3 text-sm btn" :disabled="!name" @click="go">
            查詢
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    background: url('../images/bg-01-mb.jpg') no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
  background: url('../images/bg-01.jpg') no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
</style>
