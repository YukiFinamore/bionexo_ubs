import constants from '../constants'
import axios from 'axios';

const API_PATH = `${constants.api.path}`

export const getHospitals = (mapCenter) => {
  return axios.get(
    `${API_PATH}/api/v1/find_ubs?query=${mapCenter}`,
  )
}

export const filterByInput = (term, page) => {
  return axios.post(
    `${API_PATH}/api/v1/find_by_term?search=${term}&page=${page}`,
  )
}