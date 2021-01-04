// import Vue from 'vue'
import axios from 'axios'
import get from 'lodash/get'
import cookies from 'js-cookie'
import { BASE_URL } from '../config/config'
export default (context, inject) => {
  const { redirect } = context
  const saveValue = (nameOfValue = 'AuthToken', value) => {
    cookies.set(nameOfValue, value)
  }
  const removeValue = (nameOfValue = 'AuthToken') => {
    cookies.remove(nameOfValue)
  }
  const getValue = (nameOfValue = 'AuthToken') => {
    return cookies.get(nameOfValue)
  }
  const token = getValue() || ''
  const config = {
    baseURL: `${BASE_URL}/api/v1`,
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const service = axios.create(config)
  service.interceptors.response.use(
    response => response,
    (error) => {
      const status = get(error, 'response.data.status', null)
      const data = get(error, 'response.data', {})
      if (status === 404) {
        redirect('/404')
      } else {
        console.log(data)
        // Vue.$store.commit('notifications/setNotification', data)
      }
    }
  )
  const ApiService = {
    ...service,
    removeValue,
    saveValue,
    getValue
  }
  inject('apiService', ApiService)
}
