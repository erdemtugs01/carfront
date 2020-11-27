import { default as axios } from 'axios'
import { CITIZEN_PATH, VEHICLE_PATH, API_URL } from './constants'

async function getAllVehicles() {
  let res
  try {
    res = await axios.get(`${API_URL}/${VEHICLE_PATH}`)
  }
  catch(error) {
    res = error
  }

  return res
}

async function getVehicle(id) {
  let res
  try {
    res = await axios.get(`${API_URL}/${VEHICLE_PATH}/${id}`)
  }
  catch(error) {
    res = error
  }
  return res
}

async function getCitizenVehicles(citizen_id) {
  let res
  try {
    res = await axios.get(`${API_URL}/${CITIZEN_PATH}/${citizen_id}/${VEHICLE_PATH}`)
  }
  catch(error) {
    res = error
  }
  return res
}

export { getAllVehicles, getVehicle, getCitizenVehicles }
