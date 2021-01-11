export default {
  getNotification ({ commit, state }, data) {
    const length = state.notifications.length
    commit('setNotification', data)
    const sleep = () => {
      return new Promise(resolve => setTimeout(resolve, 2000))
    }
    sleep.then(() => {
      console.log(length)
      commit('removeNotification', length)
    })
  }
}
