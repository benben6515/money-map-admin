<script setup lang="ts">
// import axios from 'axios'
import { getDataByEmail } from '~/api'

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
  <div>
    <div i-carbon-campsite text-2rem inline-block />
    <p>
      <a
        rel="noreferrer"
        href="https://www.instagram.com/_moneymap/?hl=zh-tw"
        target="_blank"
      >MoneyMap</a>
    </p>
    <p>
      <em text-sm op75>MoneyMap 學員查詢</em>
    </p>

    <div py-4 />

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

    <!-- <p>{{ state.airtableData }}</p> -->

    <div
      v-if="isShowData"
      class="flex justify-center items-center flex-col gap-5"
    >
      <h3>Hi, {{ name }}</h3>
      <div
        class="flex justify-center gap-5"
      >
        <div
          class="p-4 max-w-sm min-w-xs bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700"
        >
          <h5
            class="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white"
          >
            完成的任務
          </h5>
          <p
            class="text-sm font-normal text-gray-500 dark:text-gray-400"
          >
            我總共完成了 4 個任務
          </p>
          <ul class="my-4 space-y-3">
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div i-carbon-campsite text-2rem inline-block />
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
                <div i-carbon-campsite text-2rem inline-block />
                <span class="flex-1 ml-3 whitespace-nowrap">任務二</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div i-carbon-campsite text-2rem inline-block />
                <span class="flex-1 ml-3 whitespace-nowrap">任務三</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div i-carbon-campsite text-2rem inline-block />
                <span class="flex-1 ml-3 whitespace-nowrap">任務四</span>
              </a>
            </li>
          </ul>
        </div>

        <div
          class="p-4 max-w-sm min-w-xs bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700"
        >
          <h5
            class="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white"
          >
            兌換的獎勵
          </h5>
          <p
            class="text-sm font-normal text-gray-500 dark:text-gray-400"
          >
            我總共兌換了 4 個獎勵
          </p>
          <ul class="my-4 space-y-3">
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div i-carbon-campsite text-2rem inline-block />
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
                <div i-carbon-campsite text-2rem inline-block />
                <span class="flex-1 ml-3 whitespace-nowrap">獎勵二</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div i-carbon-campsite text-2rem inline-block />
                <span class="flex-1 ml-3 whitespace-nowrap">獎勵三</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div i-carbon-campsite text-2rem inline-block />
                <span class="flex-1 ml-3 whitespace-nowrap">獎勵四</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
