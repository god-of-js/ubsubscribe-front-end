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
    baseURL: `${BASE_URL}/dev/api/v1`,
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${token || ' '}`
    }
  }
  const service = axios.create(config)
  service.interceptors.response.use(
    (response) => {
      const responseObj = JSON.parse(response.data)
      if (responseObj.status === 'fail') {
        const alert = errorAlert(responseObj.message)
        store.dispatch('app/getNotification', alert)
        return Promise.reject(response)
      }
      if (!responseObj.data.customHandle) {
        const alert = successAlert(responseObj.message)
        store.dispatch('app/getNotification', alert)
      }
      return Promise.resolve(responseObj)
    },
    (error) => {
      const parsedError = JSON.parse(error)
      const status = get(parsedError, 'response.data.status', null)
      const message = get(parsedError, 'response.data.message', 'Something went wrong')
      const customHandle = get(parsedError, 'response.data.customHandle', false)
      if (status === 404) {
        redirect('/404')
      } else if (!customHandle) {
        const alert = errorAlert(message)
        store.dispatch('app/getNotification', alert)
      }
      return Promise.reject(parsedError)
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

const alert = {
  text: '',
  type: '',
  position: '',
  parentPosition: ''
}
function errorAlert (message) {
  alert.text = message
  alert.parentPosition = 'justify-center'
  alert.type = 'error'
  alert.position = 'center'
  return alert
}
function successAlert (message) {
  alert.text = message
  alert.type = 'success'
  alert.position = 'bottom'
  alert.parentPosition = ''
  return alert
}
