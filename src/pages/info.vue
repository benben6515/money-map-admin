<script setup lang="ts">
// import axios from 'axios'
import { email, state } from '~/composables'
import MissionList from '~/components/Homepage/MissionList.vue'
import RewardList from '~/components/Homepage/RewardList.vue'

const router = useRouter()

// console.log(state)
if (!state?.userData || !state.userData.name) router.push('/')

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
      <div class="flex flex-col justify-center items-center pb-8">
        <h3 class="text-mm-dark text-2xl font-bold m-4 pb-4 min-w-60">
          Hello, 小船長 {{ state?.userData?.name || '--' }}
        </h3>

        <div class="min-h-23rem flex flex-wrap justify-center items-start gap-4">
          <MissionList />
          <RewardList />
        </div>

        <!-- <div class="flex flex-wrap justify-center items-start gap-4">
          <div>
            <p class="py-3 px-8 rounded-lg bg-mm-primary text-mm-secondary text-lg font-900 text-shadow-sm">
              MM 幣存款
            </p>
            <p class="text-xl font-900 p-4 text-mm-primary text-shadow-sm">
              餘 {{ state?.userData?.totalCoins || 0 }} MM 幣
            </p>
          </div>
          <div>
            <p class="py-3 px-8 rounded-lg bg-mm-primary text-mm-secondary text-lg font-900 text-shadow-sm">
              MM 幣支出
            </p>
            <p class="text-xl font-900 p-4 text-mm-warning text-shadow-sm">
              支出 {{ state?.userData?.totalCost || 0 }} MM 幣
            </p>
          </div>
        </div> -->

        <button class="m-6 mt-8 sm:mt-26 py-1 px-10 text-lg btn bg-mm-dark" @click="goBack()">
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
