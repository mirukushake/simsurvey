<template>
  <div class="container">
    <apexchart height="300" type="bar" :options="chartOptions" :series="series"/>
  </div>
</template>

<script>
export default {
  props: {
    chartData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartOptions: {
        theme: {
          monochrome: {
            enabled: true,
            color: '#00838f',
          },
        },
        plotOptions: {
          bar: {
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter(val) {
            return val;
          },
          textAnchor: 'start',
          offsetY: -1,
          offsetX: 20,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
        },
        tooltip: {
          enabled: false,
        },
      },
    };
  },
  computed: {
    series() {
      const allCount = this.chartData.filter(game => game.othergames.includes('All')).length;
      const sims1Count = this.chartData.filter(game => game.othergames.includes('Sims 1')).length;
      const sims2Count = this.chartData.filter(game => game.othergames.includes('Sims 2')).length;
      const sims3Count = this.chartData.filter(game => game.othergames.includes('Sims 3')).length;
      const noneCount = this.chartData.filter(game => game.othergames.includes('None')).length;
      const newSeries = [{
        data: [
          { x: 'All', y: allCount },
          { x: 'Sims 1', y: sims1Count },
          { x: 'Sims 2', y: sims2Count },
          { x: 'Sims 3', y: sims3Count },
          { x: 'None', y: noneCount },
        ].sort((a, b) => b.y - a.y),
      }];
      return newSeries;
    },
  },
};
</script>
