<template>
  <v-app>
    <div class="app-background">
      <transition-group>
        <notification
          v-for="(notification, index) in notifications"
          :key="index"
          :type="notification.type"
          :position="notification.position"
          :parent-position="notification.parentPosition"
          :not-text="notification.text"
        />
      </transition-group>
      <nuxt />
    </div>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Notification from '../components/notification/Notification'
export default {
  components: {
    Notification
  },
  computed: {
    ...mapState({
      notifications: state => state.app.notifications
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
</style>
