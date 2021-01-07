<template>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odio repellendus pariatur architecto nesciunt illo praesentium delectus accusamus placeat suscipit expedita officia quasi velit laudantium omnis, cum nisi nobis quam.
    <default-input v-model="name" />
    <button @click="prin">
      Print
    </button>
  </div>
</template>

<script>
export default {
  name: 'Subscription',
  components: {
    DefaultInput: () => import('../../DefaultInput')
  },
  data: () => {
    return {
      name: ''
    }
  },
  methods: {
    prin () {
      console.log(this.name)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
