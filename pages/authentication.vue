<template>
  <div class="d-flex authentication pa-5 d-flex align-end justify-center" :style="watchRoute === '/authentication/register'? 'height: 110%': 'height: 80%'">
    <div
      class="authentication__card pa-0 col-lg-4 col-md-5 col-sm-7 col-xsm-10"
    >
      <section id="header" class="pa-5">
        <div
          class="d-flex justify-center authentication__card__header-container mb-4"
        >
          <div
            class="authentication__card__header d-flex align-center justify-center flex-column"
          >
            <v-icon color="red">
              mdi-close
            </v-icon>
            <span>Subscribe</span>
          </div>
        </div>
        <div class="authentication__text">
          <div class="authentication__text__header">
            Welcome subscriber
          </div>
          <div class="authentication__text__sub-title">
            Complete your authentication to gain access to your dashboard.
          </div>
        </div>
      </section>
      <section class="pa-5 authentication-subpage">
        <nuxt-child />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Authentication',
  computed: {
    watchRoute () {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";
@import "@/assets/style/colors.scss";
.authentication {
  color: #000;
  @include background-gradient();
  position: relative;
  transform: skew(0deg, -10deg) translateY(-120px);
  font-weight: 900;
  &__card {
    transform: skew(0deg, 10deg);
    text-align: center;
    background: $light-background;
    border-radius: 5px;
    @include box-shadow();
    &__header {
      margin-top: -52px;
      border-radius: 50%;
      width: 70px;
      height: 70px;
      z-index: 5;
      font-size: 0.7em;
      background: $light-background;
      @include box-shadow();
      font-weight: 700;
    }
  }
  &__text {
    &__header {
      font-weight: 600;
      font-size: 1.3em;
    }
    &__sub-title {
      font-weight: 400;
      font-size: 1em;
    }
  }
  &-subpage {
  }
}
</style>
