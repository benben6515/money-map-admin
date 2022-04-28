import axios from 'axios'
// import dotenv from 'dotenv'
// const { BASE_URL } = dotenv.config()

const baseURL = 'http://localhost:5000/api'
// const baseURL = '/api'

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
