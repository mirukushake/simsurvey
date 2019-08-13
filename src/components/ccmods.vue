<template>
  <div class="container">
    <div class="columns">
      <div class="column"><apexchart height="300" type="donut" :options="ccuseOptions" :series="ccuse"/></div>
      <div class="column"><apexchart height="300" type="donut" :options="moduseOptions" :series="moduse"/></div>
    </div>
   <p>About two-thirds of the respondents use custom content and mods, with slightly more using mods.
    Unfortunately, I did not include a quesion about game platform,
     so it's not known how many of those who do not use CC or mods are console or PC players.
</p>
        <div class="columns">
      <div class="column"><apexchart height="300" type="donut" :options="cctypeOptions" :series="cctype"/></div>
      <div class="column">
        <br />
        <p class="subtitle is-5">CC style</p>
        <p>It looks like Maxis Match is the most popular CC type, with Maxis Match second. However, there is a
      <strong>fairly strong bias</strong> to this data, as the poll was also shared on Tumblr mostly thorugh MM blogs.</p>
      </div>
    </div>
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
      ccuseOptions: {
        labels: ['Yes', 'No'],
        title: {
          text: 'Do you use CC?',
        },
        chart: {
          fontFamily: '"Nunito", sans-serif',
        },
        legend: {
          position: 'top',
        },
      },
      moduseOptions: {
        labels: ['Yes', 'No'],
        title: {
          text: 'Do you use mods?',
        },
        chart: {
          fontFamily: '"Nunito", sans-serif',
        },
        legend: {
          position: 'top',
        },
      },
      cctypeOptions: {
        labels: ['Alpha', 'Maxis Match', 'Maxis Mix'],
        title: {
          text: 'Which style of CC do you prefer?',
        },
        chart: {
          fontFamily: '"Nunito", sans-serif',
        },
        legend: {
          position: 'top',
        },
      },
    };
  },
  computed: {
    ccuse() {
      const useYesCount = this.chartData.filter(x => x.usecc === 'Yes').length;
      const useNoCount = this.chartData.filter(x => x.usecc === 'No').length;
      const ccuseCount = [useYesCount, useNoCount];
      return ccuseCount;
    },
    moduse() {
      const modYesCount = this.chartData.filter(x => x.mods === 'Yes').length;
      const modNoCount = this.chartData.filter(x => x.mods === 'No').length;
      const moduseCount = [modYesCount, modNoCount];
      return moduseCount;
    },
    cctype() {
      const alphaCount = this.chartData.filter(x => x.cctype === 'alpha').length;
      const mmCount = this.chartData.filter(x => x.cctype === 'mm').length;
      const mixCount = this.chartData.filter(x => x.cctype === 'mix').length;
      const cctypeCount = [alphaCount, mmCount, mixCount];
      return cctypeCount;
    },
  },
};
</script>
