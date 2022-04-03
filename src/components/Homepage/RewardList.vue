<script setup lang="ts">
import { computed } from 'vue'
import { state } from '~/composables'

const { userData, rewardList } = state

const userRewardList = computed(() => {
  return rewardList.filter((e: any) => userData.rewards.includes(e.id))
})

const cardTitle = computed(() => {
  return `我總共兌換了${userData.rewards.length}個獎勵`
})
const cardItemTitle = computed(() => {
  return '兌換的獎勵'
})

const cardTextColor = computed(() => {
  return 'text-red-600 dark-text-red-400'
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
      <li
        v-for="reward in userRewardList"
        :key="reward.id"
      >
        <p
          class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <span class="flex-1 ml-3 whitespace-nowrap">{{ reward.name }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
