<script setup lang="ts">
import { computed } from 'vue'
import { state } from '~/composables'

const { userData, rewardList } = state

const userRewardList = computed(() => {
  return rewardList?.filter((e: any) => userData?.rewards.includes(e.id))
})

const cardTitle = computed(() => {
  return `我總共兌換了 ${userData?.rewards?.length} 個獎勵`
})

const cardTextColor = computed(() => {
  return 'text-red-600'
})

if (userData) {
  const totalCost = userData?.rewards.reduce((acc: number, cur: any) => {
    const currentItem = rewardList.filter((e: { id: string }) => e.id === cur)
    return acc + (currentItem ? currentItem[0].rewardCoins : 0)
  }, 0)
  userData.totalCost = totalCost
}

</script>

<template>
  <div
    class="px-4 my-3 max-w-sm min-w-xs rounded-lg sm:px-6"
  >
    <p
      :class="['font-900', cardTextColor]"
      text="1.5rem"
      my-4
    >
      {{ cardTitle }}
    </p>
    <ul class="item-wrapper my-4 space-y-3">
      <li
        v-for="reward in userRewardList"
        :key="reward.id"
      >
        <p
          class="bg-transparent flex items-center justify-between p-3 text-base font-bold text-gray-500 bg-gray-50 rounded-lg hover:text-gray-900 group"
        >
          <span class="ml-3 whitespace-nowrap">{{ reward.name }}</span>
          <span class="ml-3 whitespace-nowrap">{{ reward.rewardCoins }} MM 幣</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
$maxWrapperHeight: 240px;

.item-wrapper {
  max-height: $maxWrapperHeight;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    height: 8px;
    border-radius: 4px;
    background-color: rgb(220, 38, 38);
  }
}
</style>
