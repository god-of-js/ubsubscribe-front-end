<template>
  <v-dialog
    v-model="dialog"
    :fullscreen="smallDevices"
    max-width="540"
    overlay-color="rgba(0, 0, 0, 0.4)"
    persistent
    overlay-opacity=".82"
    :retain-focus="false"
    scrollable
  >
    <div class="modal__inner pa-7">
      <div class="d-flex justify-end">
        <button class="pa-1" @click="cancelModal">
          <v-icon color="#be1338" size="25">
            mdi-close
          </v-icon>
        </button>
      </div>
      <component
        :is="modalComponent"
        keep-alive
      />
    </div>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'
import ModalComponents from './ModalComponents'
export default {
  name: 'Modals',
  components: {
    ...ModalComponents
  },
  data: () => {
    return {
      test: true
    }
  },
  computed: {
    ...mapState({
      modalComponent: state => state.modals.modalComponent,
      modalCommonData: state => state.modals.modalCommonData,
      dialog: state => state.modals.dialog
    }),
    smallDevices () {
      return this.$vuetify.breakpoint.width <= 768
    }
  },
  methods: {
    cancelModal () {
      this.$store.commit('modals/setModalAttributes', {
        modalComponent: '',
        modalCommonData: {},
        dialog: false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";
.modal__inner{
    background: $primary-darker-background;
    border-radius: 7px;
    // z-index: 5;
}
button {
    outline: none;
    background: rgba(190, 19, 56, 0.2);
    border-radius: 5px;
}
button:active{
    transform: scale(1.3, 1.2);
}
</style>
