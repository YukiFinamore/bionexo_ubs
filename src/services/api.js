import constants from '../constants'
import axios from 'axios';

const API_PATH = `${constants.api.path}`

export const getHospitals = () => {
  return axios.get(
    `${API_PATH}/api/v1/find_ubs`,
  )
}