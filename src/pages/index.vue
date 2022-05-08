<script setup lang="ts">
import { email, state } from '~/composables'
import { getDataByEmail, getMissionList, getRewardList } from '~/services'

const router = useRouter()

const isActive = ref(false)

// to to me page
const go = async() => {
  // eslint-disable-next-line no-alert
  if (state.isLoading) return
  state.errorMessage = ''
  if (!email.value.includes('@')) return state.errorMessage = '請輸入正確的 Email！'
  state.isLoading = true
  try {
    const res = await getDataByEmail(email.value)
    // eslint-disable-next-line no-alert
    if (!res) return alert('Not found!')
    if (!res.data[0]) return state.errorMessage = '找不到使用者！'
    state.userData = res.data[0]
    router.push('/info')
  }
  catch (err) {
    state.errorMessage = '忙碌中，請稍後再試！'
    console.error(err)
  }
  finally {
    state.isLoading = false
  }
}

try {
  (async() => {
    const missionRes = await getMissionList()
    const rewardRes = await getRewardList()
    if (!missionRes && !rewardRes) {
      // eslint-disable-next-line no-alert
      state.errorMessage = '忙碌中，請稍後再試！'
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
  console.error(err)
}

</script>

<template>
  <div class="wrapper">
    <div class="flex justify-center items-center min-h-screen">
      <!-- <p>
        <a
          rel="noreferrer"
          href="https://www.instagram.com/_moneymap/?hl=zh-tw"
          target="_blank"
        >MoneyMap</a>
      </p> -->

      <div>
        <input
          id="input"
          v-model="email"
          placeholder="購課 Email"
          type="text"
          autocomplete="false"
          p="x-4 y-2"
          m-10
          w="250px"
          text="center mm-primary"
          bg="transparent"
          border="~ rounded-100 dotted 2 mm-primary"
          outline="none active:none"
          class="placeholder:text-mm-primary"
          @keydown.enter="go"
          @input="state.errorMessage = ''"
        >

        <div>
          <button class="m-3 text-sm btn" :disabled="!email || !isActive || state.isLoading" @click="go">
            {{ state.isLoading ? '查詢中 ...' : '查詢' }}
          </button>
        </div>

        <div v-if="state.errorMessage" class="text-gray-200">
          {{ state.errorMessage }}
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
