<template>
  <form class="row pl-5 pr-5 pb-4" @submit.prevent="login">
    <default-input v-model="data.email" type="email" placeholder="Email" class="mb-5" required />
    <default-input v-model="data.password" type="password" placeholder="Password" class="mb-5" required />
    <default-button :loading="loading" :disabled="disabled" >
      Login
    </default-button>
  </form>
</template>
<script>
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
    async login () {
      this.disabled = true
      this.loading = true
      try {
        const response = await this.$apiService.post('/authentication/login', this.data)
        this.$apiService.saveValue('User', response.data.data)
        this.$apiService.saveValue('AuthToken', response.data.data.token)
        this.disabled = false
        this.loading = false
        this.$router.push('/dashboard')
      } catch (err) {
        this.disabled = false
        this.loading = false
        return err
      }
    }
  }
}
</script>
