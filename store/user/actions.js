export default {
  async getUser ({ commit }) {
    try {
      const request = await this.$apiService.get('/user/get-user')
      console.log(request)
      commit()
    } catch (err) {
      console.log(err, 'store err')
    }
  }
}
