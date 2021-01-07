<template>
  <button
    :class="{
      'btn': true,
      'btn-disabled': loading || disabled
    }"
    :disabled="loading || disabled"
    v-on="$listeners"
    id="btn"
  >
    <div v-if="!loading" class="text">
      <slot />
    </div>
    <div
      v-else
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
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
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
      transform: scale(1.04, 1.03);
    }
    &:hover{
      @include hover-gradient();
    }
}
.btn-disabled{
    opacity: 0.6;
    cursor: not-allowed;
}
</style>
