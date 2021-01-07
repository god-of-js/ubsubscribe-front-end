<template>
  <input :type="type" v-on="$listeners">
</template>

<script>
export default {
  name: 'DefaultInput',
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    value: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
