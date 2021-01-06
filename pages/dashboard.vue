<template>
  <div class="dashboard d-flex">
    <dashboard-side-bar />
    <div>
      <dashboard-nav-bar />
      <nuxt-child />
    </div>
  </div>
</template>
<script>
import DashboardNavBar from '../components/dashboard-layout/DashboardNavBar.vue'
import DashboardSideBar from '../components/dashboard-layout/DashboardSideBar.vue'
export default {
  name: 'Dashboard',
  components: {
    DashboardSideBar,
    DashboardNavBar
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";
.dashboard {
  min-height: 100%;
  color: #000000;
  background: $primary-background;
}
</style>
