<template>
  <button
    :class="{
      'btn': true,
      [btnClass]: true,
      'btn-disabled':disabled
    }"
    v-bind="vBind"
    :type="type"
    :disabled="loading || disabled"
    v-on="vOn"
  >
    <slot />
    <div
      v-if="loading"
      class="loader"
    >
      <v-progress-circular indeterminate />
    </div>
  </button>
</template>

<script>
export default {
  name: 'DefaultButton',
  props: {
    vOn: {
      type: Object,
      default: () => ({})
    },
    btnClass: {
      type: String,
      default: 'default-banger-btn'
    },
    vBind: {
      type: Object,
      default: () => ({})
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    loading: {
      type: Boolean
    },
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/colors";
@import "~/assets/style/mixins";

.btn{
    width: 100%;
    @include background-gradient();
    padding: 10px;
    border-radius: 5px;
    outline: none;
    @include box-shadow();
    color: $light-text;
    &:active{
      transform: scale(0.7, 0.7);
    }
    &:hover{
      transform: scale(1.02, 1.02);
    }
}
</style>
