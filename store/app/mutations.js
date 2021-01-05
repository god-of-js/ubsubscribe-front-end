export default {
  setNotification (state, param) {
    state.notifications.push(param)
  },
  removeNotification (state, param) {
    state.notifications.splice(param, param + 1)
  }
}
