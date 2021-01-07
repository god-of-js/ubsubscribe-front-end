export default {
  setModalAttributes (state, modalObject) {
    state.dialog = modalObject.dialog
    state.modalComponent = modalObject.modalComponent
    state.modalCommonData = modalObject.modalCommonData
  }
}
/***
 *
  modalComponent: '',
  modalCommonData: {},
  dialog: false,
  fullScreen: true
 */
