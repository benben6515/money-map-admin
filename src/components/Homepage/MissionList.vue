<script setup lang="ts">
import { computed } from 'vue'
import { state } from '~/composables'

// const { userData, missionList } = toRefs(state)
const { userData, missionList } = state

const userMissionList = computed(() => {
  return missionList.filter((e: any) => userData.missions.includes(e.id))
})

const cardTitle = computed(() => {
  return `我總共完成了${userData.missions.length}個任務`
})
const cardItemTitle = computed(() => {
  return '完成的任務'
})

const cardTextColor = computed(() => {
  return 'text-blue-600 dark-text-blue-400'
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
        v-for="mission in userMissionList"
        :key="mission.id"
      >
        <p
          class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <span class="flex-1 ml-3 whitespace-nowrap">{{ mission.name }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
