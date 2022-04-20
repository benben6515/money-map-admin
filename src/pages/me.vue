<script setup lang="ts">
// import axios from 'axios'
import { email, state } from '~/composables'
import MissionList from '~/components/Homepage/MissionList.vue'
import RewardList from '~/components/Homepage/RewardList.vue'

const router = useRouter()

// console.log(state)
if (!state?.userData || !state.userData.name) {
  state.errorMessage = '找不到使用者'
  router.push('/')
}

const goBack = () => {
  email.value = ''
  router.back()
}

</script>

<template>
  <div class="wrapper">
    <div>
      <div py-5 />

      <!-- <p>{{ state.airtableData }}</p> -->
      <div class="flex flex-col justify-center items-center pb-12">
        <h3 class="text-blue-900 text-4xl font-bold m-4 pb-4 border-b-3 border-blue-900 min-w-60">
          HI, {{ state?.userData?.name || '--' }} 你好
        </h3>

        <div class="flex flex-wrap justify-center items-start gap-4">
          <MissionList />
          <RewardList />
        </div>

        <div class="flex flex-wrap justify-center items-start gap-4">
          <div>
            <p class="py-6 px-8 rounded bg-yellow-400 text-blue-700 text-lg font-bold">
              MM 幣存款
            </p>
            <p class="text-lg font-900 p-4 text-yellow-300 text-shadow-lg">
              剩餘： {{ state?.userData?.totalCoins || 0 }} MM 幣
            </p>
          </div>
          <div>
            <p class="py-6 px-8 rounded bg-yellow-400 text-blue-700 text-lg font-bold">
              MM 幣支出
            </p>
            <p class="text-lg font-900 p-4 text-red-500 text-shadow-lg">
              支出： {{ state?.userData?.totalCost || 0 }} MM 幣
            </p>
          </div>
        </div>

        <button class="m-3 text-sm btn" @click="goBack()">
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
