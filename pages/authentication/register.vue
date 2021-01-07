<template>
  <form class="row pl-5 pr-5" @submit.prevent="register">
    <default-input v-model="data.name" type="text" placeholder="Full Name" class="pa-3 mb-5" required />
    <default-input v-model="data.email" type="email" placeholder="Email" class="pa-3 mb-5" required />
    <default-input
      v-model.number="data.phone"
      type="number"
      placeholder="Phone Number"
      class="pa-3 mb-5"
      required
    />
    <default-input v-model="data.password" type="password" placeholder="Password" class="pa-3 mb-5" required />
    <default-button :loading="loading" :disabled="disabled">
      Register
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
      try {
        const response = await this.$apiService.post('/authentication/register', this.data)
        this.$apiService.saveValue('User', response.data.data)
        this.$apiService.saveValue('AuthToken', response.data.data.token)
        this.$router.push('/dashboard')
      } catch (err) {
        return err
      }
      this.disabled = false
      this.loading = false
    }
  }
}
</script>
