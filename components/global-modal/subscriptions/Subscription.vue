<template>
  <div class="pt-4">
    <form action="">
      <default-input v-model="name" class="mb-5" placeholder="Name of application" />
      <default-input v-model="name" class="mb-5" placeholder="Url of application" />
      <default-input v-model="name" class="mb-5" placeholder="Amount to be charged by application" />
      <span v-text="'Activation date of subscription'" />
      <default-input v-model="name" class="mb-5" placeholder="Date subscription was activated" type="date" />
      <span>Proposed date of reminder</span>
      <default-input v-model="name" class="mb-5" type="date" />
      <default-button v-text="'Add Subscription'" />
    </form>
  </div>
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
      name: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
