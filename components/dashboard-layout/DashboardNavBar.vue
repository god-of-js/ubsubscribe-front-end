<template>
  <div class="d-flex justify-end align-center pa-5">
    <div class="pr-4">
      <default-button @click="addSubscription">
        Add Subscription
      </default-button>
    </div>
    <button class="round__button">
      <v-icon color="#0a2e65" size="30" class="icon">
        mdi-face
      </v-icon>
    </button>
  </div>
</template>
<script>
export default {
  name: 'DashboardNavBar',
  components: {
    DefaultButton: () => import('../DefaultButton')
  },
  methods: {
    addSubscription () {
      this.$store.commit('modals/setModalAttributes', {
        modalComponent: '',
        modalCommonData: {},
        dialog: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";
  .round__button {
    border-radius: 50%;
    background: $light-background;
    width: 40px;
    height: 40px;
  }
  .round__button:hover{
    .icon{
      color: $hover-active-text-color !important;
      transition-delay: 0.1s;
    }
  }
button {
  outline: none;
}
  ::v-deep {
    #btn{
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
</style>
