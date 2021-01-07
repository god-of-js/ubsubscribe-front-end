<template>
  <div class="pa-5 pt-10">
    <v-row>
      <v-col
        v-for="(statistic, index) in dashboardStatistics"
        :key="index"
        sm="6"
        md="4"
        xsm="12"
      >
        <dashboard-statistics-card
          :name-of-stat="statistic.nameOfStat"
          :numerical-value="statistic.numericalValue"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {
    DashboardStatisticsCard: () => import('../../components/cards/DashboardStatisticsCard')
  },
  data: () => {
    return {
      dashboardStatistics: [
        {
          nameOfStat: 'Total no of subscriptions',
          numericalValue: 0
        },
        {
          nameOfStat: 'No of past subscription alerts',
          numericalValue: 0
        },
        {
          nameOfStat: 'No of upcoming subscription alerts',
          numericalValue: 0
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
