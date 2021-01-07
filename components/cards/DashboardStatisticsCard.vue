<template>
  <section class="dashboard-statistic-card pa-6">
    <article v-text="nameOfStat" class="nameOfStat" />
    <article v-text="numericalValue" class="numericalValue" />
  </section>
</template>

<script>
export default {
  name: 'DashboardStatisticsCard',
  props: {
    nameOfStat: {
      required: true,
      type: String,
      default: ''
    },
    numericalValue: {
      required: true,
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";
@import "@/assets/style/mixins.scss";
 .dashboard-statistic-card{
     background: $light-background;
     border-radius: 5px;
     border: 1px solid $primary-darker-background;
     .nameOfStat{
         font-weight: 500;
         font-size: 0.9em;
     }
     .numericalValue{
         font-size: 1.4em;
         font-weight: 400;
         text-align: right;
     }
 }
</style>
