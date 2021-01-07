<template>
  <input :type="type" v-on="$listeners" @input="$emit('update', $event.target.value)" class="pa-3">
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
