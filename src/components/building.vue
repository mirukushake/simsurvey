<template>
  <div class="container">
    <h2 class="subtitle">Build/Buy</h2>
 <span class="chartfloatleft"><apexchart height="300" type="donut" :options="residentialOptions" :series="residential"/></span>
<span class="chartfloatright"><apexchart height="300" type="donut" :options="communityOptions" :series="community" width="100%"/></span>
While most players enjoyed CAS, opinions were much less uniform when it came to building. Buulding community lots in particular was not enjoyed very much,
  <div class="is-clearfix"></div>
<span class="chartfloatleft"><apexchart height="300" type="donut" :options="decorationOptions" :series="decoration"/></span>
<br /><br />Opinions were much more positive for interior design, with nearly two-thirds saying they enjoyed it very much.
 <div class="is-clearfix"></div>
 <span class="chartfloatleft"><apexchart height="300" type="donut" :options="aptsOptions" :series="apt"/></span>
<br /><br />Only slightly more than 25% of respondents preferred apartments, while about 40% had no prference for either.
 <div class="is-clearfix"></div>
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
      residentialOptions: {
        labels: ['Very much', 'Somewhat', 'Very little', 'Not at all'],
        title: {
          text: 'Do you enjoy building houses/apartments?',
        },
        legend: {
          position: 'top',
        },
      },
      communityOptions: {
        labels: ['Very much', 'Somewhat', 'Very little', 'Not at all'],
        title: {
          text: 'Do you enjoy building community lots?',
        },
        legend: {
          position: 'top',
        },
      },
      decorationOptions: {
        labels: ['Very much', 'Somewhat', 'Very little', 'Not at all'],
        title: {
          text: 'Do you enjoy decoration/interior design?',
        },
        legend: {
          position: 'top',
        },
      },
      aptsOptions: {
        labels: ['Standalone homes', 'Apartments', 'No preference'],
        title: {
          text: 'Do you prefer standalone homes or apartments?',
        },
        legend: {
          position: 'top',
        },
      },
    };
  },
  computed: {
    residential() {
      const veryCount = this.chartData.filter(x => x.build_home === 'Very much').length;
      const somewhatCount = this.chartData.filter(x => x.build_home === 'Somewhat').length;
      const littleCount = this.chartData.filter(x => x.build_home === 'Very little').length;
      const notatallCount = this.chartData.filter(x => x.build_home === 'Not at all').length;
      const finalCount = [veryCount, somewhatCount, littleCount, notatallCount];
      return finalCount;
    },
    community() {
      const veryCount = this.chartData.filter(x => x.build_community === 'Very much').length;
      const somewhatCount = this.chartData.filter(x => x.build_community === 'Somewhat').length;
      const littleCount = this.chartData.filter(x => x.build_community === 'Very little').length;
      const notatallCount = this.chartData.filter(x => x.build_community === 'Not at all').length;
      const finalCount = [veryCount, somewhatCount, littleCount, notatallCount];
      return finalCount;
    },
    decoration() {
      const veryCount = this.chartData.filter(x => x.enjoy_decor === 'Very much').length;
      const somewhatCount = this.chartData.filter(x => x.enjoy_decor === 'Somewhat').length;
      const littleCount = this.chartData.filter(x => x.enjoy_decor === 'Very little').length;
      const notatallCount = this.chartData.filter(x => x.enjoy_decor === 'Not at all').length;
      const finalCount = [veryCount, somewhatCount, littleCount, notatallCount];
      return finalCount;
    },
    apt() {
      const houseCount = this.chartData.filter(x => x.which_house === 'Standalone homes').length;
      const aptCount = this.chartData.filter(x => x.which_house === 'Apartments').length;
      const noprefCount = this.chartData.filter(x => x.which_house === 'No preference').length;
      const finalCount = [houseCount, aptCount, noprefCount];
      return finalCount;
    },
  },
};
</script>
