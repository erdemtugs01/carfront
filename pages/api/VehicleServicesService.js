import axios from 'axios'
import { API_URL, SERVICE_PATH, VEHICLE_PATH } from './constants'

async function getVehicleService(vehicle_id) {
  let res
  try {
    res = await axios.get(`${API_URL}/${VEHICLE_PATH}/${vehicle_id}/${SERVICE_PATH}`)
  }
  catch {
    res = error
  }
  return res
}

export { getVehicleService }