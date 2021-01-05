export default {
  getNotification ({ commit, state }, data) {
    const length = state.notifications.length
    commit('setNotification', data)
    setTimeout(() => {
      commit('removeNotification', length)
    }, 7000)
  }
}
