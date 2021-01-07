<template>
  <div class="pt-4">
    <form action="">
    <default-input v-model="name" class="mb-5"/>
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
    prin () {
      console.log(this.name + 'did it?')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
