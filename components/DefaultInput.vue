<template>
 <input :type="type" v-on="$listeners" v-bind="$attrs" >
</template>

<script>
export default {
   name: 'DefaultInput',
   props: {
      type: {
        type: String,
        required: false,
        default: 'text'
      },
      value: {
        type: [String, Number],
        required: true
      },

   }   
}
</script>

<style lang="scss" scoped>

</style>