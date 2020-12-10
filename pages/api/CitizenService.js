import axios from 'axios'
import { CITIZEN_PATH, API_URL } from './constants'

async function getAllCitizen() {
  let res
  try {
    res = await axios.get(`${API_URL}/${CITIZEN_PATH}`)
  }
  catch(error) {
    res = error
  }

  return res
}

async function getCitizen(id) {
  let res
  try {
    res = await axios.get(`${API_URL}/${CITIZEN_PATH}/${id}`)
  }
  catch(error) {
    res = error
  }
  return res
}

export { getAllCitizen, getCitizen }
