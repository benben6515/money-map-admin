import axios from 'axios'
// import dotenv from 'dotenv'
// const { BASEURL } = dotenv.config()

// const baseURL = 'http://localhost:5000/api'
const baseURL = '/api'

const instance = axios.create({
  baseURL,
  timeout: 30000,
})

export const getDataByEmail = (email: string) => {
  instance.get('/airtable/student', {
    params: { target: email },
  })
}
