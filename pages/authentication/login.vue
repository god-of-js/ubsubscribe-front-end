<template>
  <form class="row pl-5 pr-5 pb-4" @submit.prevent="login">
    <input v-model="data.email" type="email" placeholder="Email" class="pa-3 mb-5" required>
    <input v-model="data.password" type="password" placeholder="Password" class="pa-3 mb-5" required>
    <default-button :loading="loading" :disabled="disabled">
      Login
    </default-button>
  </form>
</template>
<script>
import DefaultButton from '../../components/DefaultButton.vue'
export default {
  name: 'Register',
  components: {
    DefaultButton
  },
  data: () => {
    return {
      data: {
        email: 'null@null.com',
        password: 'nullnull'
      },
      loading: false,
      disabled: false
    }
  },
  methods: {
    async login () {
      this.disabled = true
      const response = await this.$apiService.post('/authentication/login', this.data)
      this.disabled = false
      console.log(response)
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
