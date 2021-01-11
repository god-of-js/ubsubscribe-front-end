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
      await this.$store.dispatch('auth/authenticate', { url: '/authentication/login', dataObj: this.data })
      this.disabledStatus(false)
    }
  }
}
</script>
