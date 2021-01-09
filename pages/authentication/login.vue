<template>
  <form class="row pl-5 pr-5 pb-4" @submit.prevent="login">
    <default-input v-model="data.email" type="email" placeholder="Email" class="mb-5" required />
    <default-input v-model="data.password" type="password" placeholder="Password" class="mb-5" required />
    <default-button :loading="loading" :disabled="disabled">
      Login
    </default-button>
  </form>
</template>
<script>
import get from 'lodash/get'
import DefaultButton from '../../components/DefaultButton.vue'
import DefaultInput from '../../components/DefaultInput.vue'
export default {
  name: 'Register',
  components: {
    DefaultButton,
    DefaultInput
  },
  data: () => {
    return {
      data: {
        email: '',
        password: ''
      },
      loading: false,
      disabled: false
    }
  },
  methods: {
    disabledStatus (status) {
      this.loading = status
      this.disabled = status
    },
    async login () {
      this.disabledStatus(true)
      try {
        const response = await this.$apiService.post('/authentication/login', this.data)
        const data = get(response, 'data.data', {})
        this.$apiService.saveValue('User', data)
        this.$store.commit('user/setUser', data)
        this.$apiService.saveValue('AuthToken', data.token)
        this.$router.push('/dashboard')
        this.disabledStatus(false)
      } catch (err) {
        this.disabledStatus(false)
        return err
      }
    }
  }
}
</script>
