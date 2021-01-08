<template>
  <form @submit.prevent="addSubscription" class="pt-4">
    <default-input v-model="data.name" class="mb-5" placeholder="Name of application" required />
    <default-input v-model="data.url" class="mb-5" placeholder="Url of application" />
    <default-input v-model.number="data.amount" class="mb-5" placeholder="Amount to be charged by application" type="number" required />
    <span v-text="'Activation date of subscription'" />
    <default-input v-model="data.activationDate" class="mb-5" placeholder="Date subscription was activated" type="date" required />
    <span v-text="'Proposed date of reminder'" />
    <default-input v-model="data.dueDate" class="mb-5" type="date" required />
    <default-button :loading="loading" :disabled="disabled">
      Add Subscription
    </default-button>
  </form>
</template>

<script>
export default {
  name: 'Subscription',
  components: {
    DefaultInput: () => import('../../DefaultInput'),
    DefaultButton: () => import('../../DefaultButton')
  },
  data: () => {
    return {
      data: {
        name: '',
        url: '',
        amount: '',
        activationDate: '',
        dueDate: '',
        subscriber: ''
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
    async addSubscription () {
      this.disabledStatus(true)
      try {
        const response = await this.$apiService.post('/subscriptions/add-subscription', this.data)
        console.log(response)
      } catch (err) {
        console.log(err.response)
      }
      this.disabledStatus(false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
