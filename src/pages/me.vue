<script setup lang="ts">
// import axios from 'axios'
import { state } from '~/composables'
import MissionList from '~/components/Homepage/MissionList.vue'
import RewardList from '~/components/Homepage/RewardList.vue'

const router = useRouter()

// console.log(state)
if (!state.userData.name) router.push('/')

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

      <div py-15 />

      <!-- <p>{{ state.airtableData }}</p> -->
      <div class="flex flex-col justify-center items-center pb-12">
        <h3 class="text-blue-900 text-4xl font-bold m-4 border-b border-blue-900 w-60">
          HI, {{ state.userData.name }} 你好
        </h3>

        <MissionList />

        <RewardList />

        <button class="m-3 text-sm btn" @click="router.back()">
          返回
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    background: url('../images/bg-02-mb.jpg') no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
  background: url('../images/bg-02.jpg') no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
</style>
