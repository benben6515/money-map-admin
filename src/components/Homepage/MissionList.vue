<script setup lang="ts">
import { computed } from 'vue'
import { state } from '~/composables'

const { userData, missionList } = state

const userMissionList = computed(() => {
  return missionList?.filter((e: any) => userData?.missions.includes(e.id))
})

const cardTitle = computed(() => {
  return `你已經完成了 ${userData?.missions?.length} 個任務`
})

const cardTextColor = computed(() => {
  return 'text-mm-secondary'
})

</script>

<template>
  <div
    class="px-4 my-3 max-w-md min-w-xs bg-transparent rounded-lg sm:px-6"
  >
    <p
      :class="['font-900', cardTextColor]"
      text="1.8rem"
      my-4
    >
      {{ cardTitle }}
    </p>
    <ul class="item-wrapper my-4 space-y-2">
      <li
        v-for="mission in userMissionList"
        :key="mission.id"
      >
        <p
          class="bg-transparent flex items-center justify-between py-1 text-base font-bold text-gray-500 rounded-lg hover:text-gray-900 group"
        >
          <span class="ml-3 whitespace-nowrap">{{ mission.name }}</span>
          <span class="ml-3 whitespace-nowrap">{{ mission.missionCoins }} MM 幣</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

$maxWrapperHeight: 200px;
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
    border-radius: 3px;
    background-color: #1F6781;
  }
}
</style>
