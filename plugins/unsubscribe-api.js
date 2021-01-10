// import Vue from 'vue'
import axios from 'axios'
import get from 'lodash/get'
import cookies from 'js-cookie'
import { BASE_URL } from '../config/config'
export default (context, inject, ctx) => {
  const { redirect, store } = context
  const saveValue = (nameOfValue = 'AuthToken', value) => {
    cookies.set(nameOfValue, value)
  }
  const removeValue = (nameOfValue = 'AuthToken') => {
    cookies.remove(nameOfValue)
  }
  const getValue = (nameOfValue = 'AuthToken') => {
    return cookies.get(nameOfValue)
  }
  const token = getValue()
  const config = {
    baseURL: `${BASE_URL}/api/v1`,
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${token || ' '}`
    }
  }
  const alert = {
    text: '',
    type: '',
    position: '',
    parentPosition: ''
  }
  const service = axios.create(config)
  service.interceptors.response.use(
    (response) => {
      if (!response.data.customHandle) {
        alert.text = response.data.message
        alert.type = 'success'
        alert.position = 'bottom'
        alert.parentPosition = ''
        store.dispatch('app/getNotification', alert)
      }
      return response
    },
    (error) => {
      const status = get(error, 'response.data.status', null)
      const message = get(error, 'response.data.message', 'Something went wrong')
      const customHandle = get(error, 'response.data.customHandle', false)
      if (status === 404) {
        redirect('/404')
      } else if (!customHandle) {
        alert.text = message
        alert.parentPosition = 'justify-center'
        alert.type = 'error'
        alert.position = 'center'
        store.dispatch('app/getNotification', alert)
      }
      return Promise.reject(error)
    }
  )
  const ApiService = {
    ...service,
    saveValue,
    getValue,
    removeValue
  }
  inject('apiService', ApiService)
}
