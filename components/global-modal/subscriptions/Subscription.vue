<template>
  <div class="pt-4">
    <form action="">
    <default-input v-model="name" class="mb-5" placeholder="Name of website"/>
    <default-input v-model="name" class="mb-5" placeholder="Url of website"/>
    <default-input v-model="name" class="mb-5" placeholder="Proposed date of reminder" type="date"/>
    <default-button v-text="'Add Subscription'"/>
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
