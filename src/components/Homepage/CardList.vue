<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  typeName: String,
})

const isMission = computed(() => props.typeName === 'mission')

const cardTitle = computed(() => {
  return `我總共${isMission.value ? '完成' : '兌換'}了${4}個${isMission.value ? '任務' : '獎勵'}`
})
const cardItemTitle = computed(() => {
  return `${isMission.value ? '完成' : '兌換'}的${isMission.value ? '任務' : '獎勵'}`
})

const cardTextColor = computed(() => {
  return isMission.value ? 'text-blue-600 dark-text-blue-400' : 'text-red-600 dark-text-red-400'
})

</script>

<template>
  <p
    :class="['font-900', cardTextColor]"
    text="xl"
    my-4
  >
    {{ cardTitle }}
  </p>
  <div
    class="p-4 max-w-sm min-w-xs bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700"
  >
    <h5
      class="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white"
    >
      {{ cardItemTitle }}
    </h5>
    <ul class="my-4 space-y-3">
      <li>
        <a
          href="#"
          class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <span class="flex-1 ml-3 whitespace-nowrap">任務一</span>
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
</template>
