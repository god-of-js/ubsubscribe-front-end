<template>
  <form class="row pl-5 pr-5" @submit.prevent="register">
    <input v-model="data.name" type="text" placeholder="Full Name" class="pa-3 mb-5" required>
    <input v-model="data.email" type="email" placeholder="Email" class="pa-3 mb-5" required>
    <input
      v-model.number="data.phone"
      type="number"
      placeholder="Phone Number"
      class="pa-3 mb-5"
      required
    >
    <input v-model="data.password" type="password" placeholder="Password" class="pa-3 mb-5" required>
    <default-button :loading="loading" :disabled="disabled">
      Register
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
        name: '',
        email: '',
        phone: null,
        password: ''
      },
      loading: false,
      disabled: false
    }
  },
  methods: {
    async register () {
      this.disabled = true
      this.loading = true
      const response = await this.$apiService.post('/authentication/register', this.data)
      this.disabled = false
      this.loading = false
      if (!response) { return '' }
      this.$apiService.saveValue('User', response.data.data)
      this.$apiService.saveValue('AuthToken', response.data.data.token)
      this.$router.push('/dashboard')
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
