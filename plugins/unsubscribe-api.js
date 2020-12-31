import Vue from 'vue'
import axios from 'axios'
import get from 'lodash/get'
import cookies from 'js-cookie'
import { BASE_URL } from '../config/config'
export default (context, inject) => {
  const { redirect } = context
  const saveToken = (token) => {
    cookies.set('AuthToken', token)
  }
  const removeToken = () => {
    cookies.remove('AuthToken')
  }
  const getToken = () => {
    return cookies.get('AuthToken')
  }
  const token = getToken() || ''
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
        Vue.$store.commit('notifications/setNotification', data)
      }
    }
  )
  const ApiService = {
    ...service,
    removeToken,
    saveToken
  }
  inject('apiService', ApiService)
}
