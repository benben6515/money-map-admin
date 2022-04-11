import { reactive, ref } from 'vue'

export const email = ref('')

export const state = reactive<{
  userData: any
  missionList: any
  rewardList: any
  errorMessage: string
  isLoading: boolean
}>({
  userData: null,
  missionList: null,
  rewardList: null,
  errorMessage: '',
  isLoading: false,
})
