import axios from 'axios'

const URL_API = 'http://localhost:5555/api/prompt'

export const makeRequest = async (messege) => {
  const { data } = await axios.post(URL_API, messege)
  return data
}