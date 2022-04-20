import { reactive, ref } from 'vue'

export const email = ref('')

export const state = reactive<{
  userData: any
  missionList: any
  rewardList: any
  totalCost: any
  errorMessage: string
  isLoading: boolean
}>({
  userData: null,
  missionList: null,
  rewardList: null,
  totalCost: 0,
  errorMessage: '',
  isLoading: false,
})
