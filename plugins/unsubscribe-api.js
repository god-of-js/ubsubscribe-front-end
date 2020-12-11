import Vue from 'vue'
import axios from '@nuxtjs/axios'
import get from 'lodash/get'
import { BASE_URL } from '../config/config'
export default (context, inject) => {
  const {
    $cookies
    // redirect
  } = context
  const saveToken = (token) => {
    $cookies.set('AuthToken', token)
  }
  const removeToken = () => {
    $cookies.remove('AuthToken')
  }
  const getToken = () => {
    $cookies.get('AuthToken')
  }
  const token = getToken() || ''
  const config = {
    baseURL: `${BASE_URL}/api/v1`,
    params: {},
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const service = axios.create(config)
  service.interceptors.response.use(
    response => response,
    (error) => {
      // src of error.
      const data = get(error, 'response.data', {})
      Vue.$store.commit('notifications/setNotification', data)
    }
  )
  const ApiService = {
    ...service,
    removeToken,
    saveToken
  }
  inject('ApiService', ApiService)
}
