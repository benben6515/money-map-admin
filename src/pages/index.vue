<script setup lang="ts">
import { email, state } from '~/composables'
import { getDataByEmail, getMissionList, getRewardList } from '~/services'

const router = useRouter()

const isActive = ref(false)

// to to me page
const go = async() => {
  // eslint-disable-next-line no-alert
  if (!email.value) return alert('Please fill your email')
  try {
    const res = await getDataByEmail(email.value)
    // eslint-disable-next-line no-alert
    if (!res) return alert('Not found!')
    state.userData = res.data[0]
    router.push('/me')
  }
  catch (err) {
    console.log(err)
  }
}

try {
  (async() => {
    const missionRes = await getMissionList()
    const rewardRes = await getRewardList()
    if (!missionRes && !rewardRes) {
      // eslint-disable-next-line no-alert
      alert('Please, try latter')
    }
    else {
      state.missionList = missionRes.data
      state.rewardList = rewardRes.data
      isActive.value = true
    }
  })()
  isActive.value = true
}
catch (err) {
  console.log(err)
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

      <div>
        <input
          id="input"
          v-model="email"
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
          <button class="m-3 text-sm btn" :disabled="!email || !isActive" @click="go">
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
