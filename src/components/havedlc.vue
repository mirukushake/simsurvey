<template>
  <div class="container">
    <span class="chartfloatright"><apexchart height="300" type="donut" :options="donutOptions" :series="donutSeries"/></span>
    <h2 class="subtitle">Do you have any DLC?</h2>
    The vast majority of respondents have bought DLC for the game. 
      <div class="is-clearfix"></div>
      <h2 class="subtitle">DLC Completion</h2>
    <apexchart height="300" type="bar" :options="barOptions" :series="barSeries"/>
    I was a little surprised at how many people have all DLC. Expansion pack completion matched my expectations, and I think that
    number will increase once Island Living goes on sale. 
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
      donutOptions: {
        labels: ['Yes', 'No'],
        chart: {
          fontFamily: '"Nunito", sans-serif',
        },
      },
      barOptions: {
        theme: {
          monochrome: {
            enabled: true,
            color: '#3273dc',
          },
        },
        plotOptions: {
          bar: {
            distributed: true,
            dataLabels: {
              position: 'top',
            },
          },
        },
        title: {
          // text: `${this.barResponses.y} responses`,
          style: {
            fontSize: '14px',
          },
        },
        dataLabels: {
          enabled: true,
          formatter(val) {
            return val;
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
        },
        tooltip: {
          enabled: false,
        },
        chart: {
          fontFamily: '"Nunito", sans-serif',
          toolbar: {
            show: false,
          },
        },
      },
    };
  },
  computed: {
    donutSeries() {
      const dlcYesCount = this.chartData.filter(x => x.dlc === 'Yes').length;
      const dlcNoCount = this.chartData.filter(x => x.dlc === 'No').length;
      const dlcCount = [dlcYesCount, dlcNoCount];
      return dlcCount;
    },
    barSeries() {
      const havedata = this.chartData.filter(data => data.dlc_completion)
      const allCount = havedata.filter(game => game.dlc_completion === "all").length;
      const epCount = havedata.filter(game => game.dlc_completion.includes('allep')).length;
      const gpCount = havedata.filter(game => game.dlc_completion.includes('allgp')).length;
      const spCount = havedata.filter(game => game.dlc_completion.includes('allsp')).length;
      const newSeries = [{ data: [
        { x: 'All', y: allCount },
        { x: 'All EPs', y: epCount },
        { x: 'All GPs', y: gpCount },
        { x: 'All SPs', y: spCount },
        ].sort((a, b) => b.y - a.y) }];
      return newSeries;
    },
  },
};
</script>
