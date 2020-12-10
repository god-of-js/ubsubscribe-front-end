<template>
  <form class="row pl-5 pr-5">
    <input type="text" placeholder="Full Name" class="pa-3 mb-5" required>
    <input type="email" placeholder="Email" class="pa-3 mb-5" required>
    <input type="number" placeholder="Phone Number" class="pa-3 mb-5" required>
    <input type="password" placeholder="Password" class="pa-3 mb-5" required>
    <default-button
          @click.native="register"> Register </default-button>
  </form>
</template>
<script>
import DefaultButton from '@/components/DefaultButton.vue'
export default {
  name: 'Register',
  components: {
    DefaultButton
  },
  data: () => {
    return {
      data: {
        fullName: null,
        email: null,
        phoneNumber: null,
        password: null
      }
    }
  },
  methods: {
    register () {
      alert('Hola Hola')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";
@import "@/assets/style/colors.scss";
input {
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  outline: none;
  @include box-shadow();
}
</style>
