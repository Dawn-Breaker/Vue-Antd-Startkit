import axios from 'axios'
import store from '../store'

axios.interceptors.request.use((config) => {
  store.commit('SHOW_LOADING')
  return config
}, err => Promise.reject(err))

axios.interceptors.response.use((response) => {
  store.commit('HIDE_LOADING')
  return response
}, err => Promise.reject(err))

export default axios
