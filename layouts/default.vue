<template>
  <v-app>
    <div class="app-background">
      <modals />
      <notification
        v-for="(notification, index) in notifications"
        :key="index"
        :type="notification.type"
        :position="notification.position"
        :parent-position="notification.parentPosition"
        :not-text="notification.text"
      />
      <nuxt />
    </div>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Notification from '../components/notification/Notification'
import Modals from '../components/global-modal/Modals'
export default {
  components: {
    Notification,
    Modals
  },
  computed: {
    ...mapState({
      notifications: state => state.app.notifications,
      modalComponent: state => state.app.modalComponent
    })
  }
}
</script>
<style lang="scss" scoped>
// @import url('../assets/style/main.scss');
.app-background {
  background-color: #fff;
  min-height: 100%;
}
html {
  font-family: Montserrat;
}
</style>
