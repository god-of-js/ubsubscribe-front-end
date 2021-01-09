<template>
  <aside class="sidebar">
    <div class="sidebar__app-name pt-12 pb-12 text-center" v-text="appName" />
    <ul>
      <NuxtLink
        v-for="(route, index) in routes"
        :key="index"
        :to="route.path"
        class="no-link"
      >
        <li
          :class="[checkRoute(route.path) ?
            'sidebar__route__active' : '', 'd-flex align-center sidebar__route pa-3 mt-3']"
        >
          <v-icon color="#0a2e65" class="mr-6 icon" size="22">
            {{ route.icon }}
          </v-icon>
          <span class="sidebar__route__text"> {{ route.text }} </span>
        </li>
      </NuxtLink>
      <li
        :class="['d-flex align-center sidebar__route pa-3 mt-3']"
        @click="logOut"
      >
        <v-icon color="#0a2e65" class="mr-6 icon" size="22">
          mdi-power
        </v-icon>
        <span class="sidebar__route__text"> Log Out </span>
      </li>
    </ul>
  </aside>
</template>
<script>
export default {
  name: 'DashboardSideBar',
  data: () => {
    return {
      routes: [
        {
          path: '/dashboard',
          text: 'Dashboard',
          icon: 'mdi-home'
        },
        {
          path: '/dashboard/subscriptions',
          text: 'Subscriptions',
          icon: 'mdi-youtube-subscription'
        },
        {
          path: '/dashboard/settings',
          text: 'Settings',
          icon: 'mdi-cog'
        }
      ]
    }
  },
  computed: {
    appName () {
      return this.$store.state.app.appName
    }
  },
  methods: {
    checkRoute (routePath) {
      return routePath === this.$route.fullPath
    },
    logOut () {
      this.$apiService.removeValue('AuthToken')
      this.$apiService.removeValue('User')
      this.$router.push('/authentication/register')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";
  .sidebar{
    width: 15%;
    position: fixed;
    height: 100%;
    color: $text-alternative-color;
    &__app-name{
      font-weight: 900;
      font-size: 1.1em;
    }
    ul {
      list-style: none;
    }
    &__route {
      border-radius: 4px;
      cursor: pointer;
      color: $text-alternative-color;
      &__text{
        font-size: 0.9em;
        font-weight: bold;
      }
    }
    &__route:hover {
      color: $hover-active-text-color;
      transition-delay: 0.1s;
      background-color: $primary-background;
      .icon{
        color: $hover-active-text-color !important;
        transition-delay: 0.1s;
      }
    }
    &__route__active {
      color: $hover-active-text-color;
      transition-delay: 0.1s;
      background-color: $hover-active-bg-color !important;
      .icon{
        color: $hover-active-text-color !important;
        transition-delay: 0.1s;
      }
    }
  }
.no-link{
  text-decoration: none;
}
</style>
