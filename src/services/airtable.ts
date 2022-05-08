import axios from 'axios'

const baseURL = (process.env.NODE_ENV === 'production') ? '/api' : 'http://localhost:5000/api'

const instance = axios.create({
  baseURL,
  timeout: 30000,
})

export const getDataByEmail = (email: string) => {
  return instance.get(`/airtable/user/${email}`)
}

export const getMissionList = async() => {
  return instance.get('/airtable/missions')
}

export const getRewardList = async() => {
  return instance.get('/airtable/rewards')
}
