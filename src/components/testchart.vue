<template>
  <div class="container">
    <apexchart height="200" type="line" :options="chartOptions" :series="series"/>

    {{ filteredData }}
  </div>
</template>

<script>
export default {
  props: {
    chartData: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          fontFamily: '"Nunito", sans-serif',
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2019-01-01',
            '2019-02-01',
            '2019-03-01',
            '2019-04-01',
            '2019-05-01',
            '2019-06-01',
            '2019-07-01',
          ],
        },
      },
      series: [
        {
          name: 'WebsiteHits',
          data: [15, 20, 21, 25, 60, 120, 93],
        },
      ],
    };
  },
  computed: {
    filteredData() {
      const playstyle = this.chartData.map(a => a['What is your main play style?'])
      return playstyle
    }
  }
};
</script>