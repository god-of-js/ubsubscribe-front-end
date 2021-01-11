// import Vue from 'vue'
import get from 'lodash/get'
export default {
  async authenticate ({ commit }, { url, dataObj }) {
    try {
      const response = await this.$apiService.post(url, dataObj)
      const data = get(response, 'data.data', {})
      this.$apiService.saveValue('User', data)
      commit('user/setUser', data, { root: true })
      this.$apiService.saveValue('AuthToken', data.token)
      this.$router.push('/dashboard')
      return data
    } catch (err) {
      console.log(err.response)
      return err
    }
  }
}
