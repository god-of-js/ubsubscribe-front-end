<template>
  <form class="row pl-5 pr-5" @submit.prevent="register">
    <input v-model="data.fullName" type="text" placeholder="Full Name" class="pa-3 mb-5" required>
    <input v-model="data.email" type="email" placeholder="Email" class="pa-3 mb-5" required>
    <input v-model.number="data.phoneNumber" type="number" placeholder="Phone Number" class="pa-3 mb-5" required>
    <input v-model="data.password" type="password" placeholder="Password" class="pa-3 mb-5" required>
    <default-button :loading="loading" :disabled="disabled">
      Register
    </default-button>
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
      },
      loading: false,
      disabled: false
    }
  },
  methods: {
    async register () {
      alert('boom v1')
      this.disabled = true
      try {
        const response = await this.$apiService.post('/authentication/register', this.data)
        this.$store.commit('', response)
      } catch (err) {
        this.$store.commit('', err)
      }
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
