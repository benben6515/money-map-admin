<script setup lang="ts">
import { computed } from 'vue'
import { state } from '~/composables'

const { userData, rewardList } = state

const userRewardList = computed(() => {
  return rewardList?.filter((e: any) => userData?.rewards.includes(e.id))
})

const cardTitle = computed(() => {
  return `你已經兌換了 ${userData?.rewards?.length} 個獎勵`
})

const cardTextColor = computed(() => {
  return 'text-mm-warning'
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
    class="my-3 max-w-22rem min-w-22rem bg-mm-background rounded-lg border-5px border-mm-warning"
  >
    <p
      class="text-stroke-title"
      :class="['font-900', cardTextColor]"
      text="1.6rem"
      my-4
    >
      {{ cardTitle }}
    </p>
    <ul class="item-wrapper my-4 mr-2 p-2 space-y-2">
      <li
        v-for="reward in userRewardList"
        :key="reward.id"
      >
        <p
          class="bg-transparent flex items-center justify-between py-1 text-base font-bold text-gray-500 bg-gray-50 rounded-lg hover:text-gray-900 group"
        >
          <span class="ml-3 whitespace-nowrap truncate">{{ reward.name }}</span>
          <span class="ml-3 whitespace-nowrap">{{ reward.rewardCoins }} MM 幣</span>
        </p>
      </li>
    </ul>

    <div class="bg-mm-warning rounded-md text-mm-light text-xl font-900 p-6 m--1">
      你已經支出 {{ state?.userData?.totalCost || 0 }} MM 幣
    </div>
  </div>
</template>

<style lang="scss" scoped>
$maxWrapperHeight: 200px;

.item-wrapper {
  height: $maxWrapperHeight;
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
    background-color: #D86553;
  }
}

.text-stroke-title {
  @media screen and (min-width: 768px) {
    -webkit-text-stroke: 1px #D86553;
  }
}
</style>
