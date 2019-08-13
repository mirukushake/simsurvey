<template>
  <div class="container">
    <div class="columns">
      <div class="column"><apexchart height="300" type="donut" :options="donutOptions" :series="donutSeries"/></div>
      <div class="column"><p>Almost all respondents have some sort of DLC for the game.</p>
      </div>
    </div>

      <p class="subtitle is-5">DLC Completion</p>
    <apexchart height="300" type="bar" :options="barOptions" :series="barSeries"/>
    <p>I was a little surprised at how many people have all DLC, but I also did not ask if they had <i>bought</i> all of their DLC *wink wink*. Expansion pack completion matched my expectations, and I think that
    number will increase once Island Living goes on sale. There were also nearly 300 respondents, about 40%, who did not answer (so they have DLC, but have not completed any category).</p></div>
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
        legend: {
          position: 'top',
        },
      },
      barOptions: {
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
    donutSeries() {
      const dlcYesCount = this.chartData.filter(x => x.dlc === 'Yes').length;
      const dlcNoCount = this.chartData.filter(x => x.dlc === 'No').length;
      const dlcCount = [dlcYesCount, dlcNoCount];
      return dlcCount;
    },
    barSeries() {
      const havedata = this.chartData.filter(data => data.dlc_completion);
      const allCount = havedata.filter(game => game.dlc_completion === 'all').length;
      const epCount = havedata.filter(game => game.dlc_completion.includes('allep')).length;
      const gpCount = havedata.filter(game => game.dlc_completion.includes('allgp')).length;
      const spCount = havedata.filter(game => game.dlc_completion.includes('allsp')).length;
      const newSeries = [{
        data: [
          { x: 'All', y: allCount },
          { x: 'All EPs', y: epCount },
          { x: 'All GPs', y: gpCount },
          { x: 'All SPs', y: spCount },
        ].sort((a, b) => b.y - a.y),
      }];
      return newSeries;
    },
  },
};
</script>
