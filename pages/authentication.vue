<template>
  <div
    :class="[register ? 'justify-end': 'justify-center', 'd-flex authentication pa-5 d-flex align-center flex-column ']"
  >
    <div class="d-flex justify-space-between links no-skew">
      <span class="unsubcscribe-header unsubscribe" v-text="appName" />
      <div>
        <NuxtLink to="/authentication/login" class="mr-2 ml-2 nuxt-link no-link">
          Login
        </NuxtLink>
        <NuxtLink to="/authentication/register" class="mr-2 ml-2 nuxt-link no-link">
          Register
        </NuxtLink>
      </div>
    </div>
    <div
      class="authentication__card no-skew pa-0 col-lg-4 col-md-5 col-sm-7 col-xsm-10"
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
            <span v-text="'Subscribe'" />
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
    register () {
      return this.$route.fullPath === '/authentication/register'
    },
    appName () {
      return this.$store.state.app.appName
    }
  },
  head: {
    title: 'Authentication'
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";
@import "@/assets/style/colors.scss";
@import "@/assets/style/fonts.scss";
@import "@/assets/style/sizes.scss";

.authentication {
  color: $secondary-text-color;
  @include background-gradient();
  position: relative;
  height: 80%;
  transform: skew(0deg, -10deg) translateY(-120px);
  font-weight: 900;
  &__card {
    text-align: center;
    background: $light-background;
    border-radius: 5px;
    margin-bottom: -15%;
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
      color: $primary-text-color;
    }
  }
  &__text {
    &__header {
      font-weight: 600;
      font-size: 1.3em;
      color: $secondary-text-color;
    }
    &__sub-title {
      font-weight: 400;
      font-size: 1em;
      color: $primary-text-color;
    }
  }
}
.no-skew {
  transform: skew(0deg, 10deg);
}
.links {
  width: 100%;
  margin-bottom: 20px;
}
.unsubscribe{
  font-size: 1.2em;
  color: $light-text;
}
.no-link{
  text-decoration: none;
  color: $light-text;
  font-size: 0.8em;
}
@media screen and (max-width: $laptop-small-width) {
  .authentication{
    height: 100%;
  }
}
@media screen and (max-width: $tablet) {
  .authentication{
    height: 105%;
  }
}
@media screen and (max-width: 728px) {
  .authentication{
    height: 107%;
  }
}
@media screen and (max-width: $mobile-large-width) {
  .authentication{
    height: 109%;
  }
}
@media screen and (max-width: $mobile) {
  .authentication{
    height: 115%;
    .links{
      padding-bottom: 5px;
    }
  }
}
</style>
