<template>
  <div :class="parentPosition + ' d-flex'">
    <v-alert :class="[position, 'notification']" dense text :type="type" transition="scale-transition">
      {{ notText }}
    </v-alert>
  </div>
</template>

<script>
export default {
  props: {
    notText: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      default: 'success'
    },
    position: {
      type: String,
      required: true
    },
    parentPosition: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.notification{
  position: fixed;
  z-index: 5;
  margin: 15px !important;
  float: left;
}
.center{
  top: 5;
  margin: auto;
}
.bottom{
  bottom: 0;
}
</style>
