<script setup lang="ts">
// import axios from 'axios'
import { getDataByEmail } from '~/services'

const name = ref('')
const isShowData = ref(false)
const toggleShowData = () => {
  isShowData.value = !isShowData.value
}

// const router = useRouter()
interface AirtableData {
  coin: number
  name: string
  email: string
  prize: string[]
  mission: string[]
}

interface State {
  airtableData: AirtableData[]
}

const state: State = reactive({
  airtableData: [],
})
const go = async() => {
  toggleShowData()
  // if (name.value)
  //   router.push(`/hi/${encodeURIComponent(name.value)}`)
  try {
    const res: any = await getDataByEmail(name.value)
    state.airtableData = res
  }
  catch (err) {
    console.error(err)
  }
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
          placeholder="請輸入你的 Email"
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

      <!-- <p>{{ state.airtableData }}</p> -->
      <div class="flex flex-col justify-center items-center">
        <h3 class="text-blue-900 text-4xl font-bold m-4 border-b border-blue-900 w-60">
          HI, {{ name }} 你好
        </h3>
        <p
          class="font-normal"
          text="xl blue-400"
          dark="text-blue-200"
          my-4
        >
          我總共挑戰了 4 個任務
        </p>
        <div
          class="p-4 max-w-sm min-w-xs bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700"
        >
          <h5
            class="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white"
          >
            完成的任務
          </h5>
          <ul class="my-4 space-y-3">
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">任務一</span>
                <!-- <span
                  class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400"
                >Popular</span> -->
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">任務二</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">任務三</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">任務四</span>
              </a>
            </li>
          </ul>
        </div>

        <p
          class="font-normal"
          text="xl red-400"
          dark="text-red-200"
          my-4
        >
          我總共兌換了 4 個獎勵
        </p>
        <div
          class="p-4 max-w-sm min-w-xs bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700"
        >
          <h5
            class="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white"
          >
            兌換的獎勵
          </h5>
          <ul class="my-4 space-y-3">
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">獎勵一</span>
                <!-- <span
                  class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400"
                >Popular</span> -->
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">獎勵二</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">獎勵三</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">獎勵四</span>
              </a>
            </li>
          </ul>
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
