<template>
  <div class="container">
    <h2 class="subtitle">Live mode</h2>
<span class="chartfloatleft"><apexchart height="300" type="donut" :options="freewillOptions" :series="freewill"/></span>
<span class="chartfloatright"><apexchart height="300" type="donut" :options="controlOptions" :series="control" width="100%"/></span>
 <div class="is-clearfix"></div>
 Most respondents kept free will on but their games weren't a free for all either: the majority still contolled all members in the household.
 There were several "other" responses for free will. Most were some variation of "free will off for selected sim."
 The "other" responses for control were mostly from single sim players.
 <span class="chartfloatleft"><apexchart height="300" type="donut" :options="agingOptions" :series="aging"/></span>
<span class="chartfloatright"><apexchart height="300" type="donut" :options="rotateOptions" :series="rotate" width="100%"/></span>
 <div class="is-clearfix"></div>
Normal was the most popular lifespan length, with long in second place. I was surprised that there weren't more people using custom lifespans since MCCC is so popular.
People also tended to stick to one family, and "rotate often" and "rotate occassionally" were almost evenly split.  </div>
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
      freewillOptions: {
        labels: ['On', 'Off', 'Other'],
        title: {
          text: 'Do you have free will on or off?',
        },
        chart: {
          fontFamily: '"Nunito", sans-serif',
        },
        legend: {
          position: 'top',
        },
      },
      controlOptions: {
        labels: ['Yes', 'Rotate between sims depending on factors like career, goals, etc.', 'Control only a few, leave others alone', 'Control just one, leave all others alone', 'Other'],
        title: {
          text: 'Do you generally try to control all sims in a household?',
        },
        chart: {
          fontFamily: '"Nunito", sans-serif',
        },
        legend: {
          position: 'top',
        },
      },
      agingOptions: {
        labels: ['On - Short', 'On - Normal', 'On - Long', 'On - Custom length (via mods)', 'Off - Never/rarely age up', 'Off - Age up manually', 'Other'],
        title: {
          text: 'Do you have aging on or off?',
        },
        chart: {
          fontFamily: '"Nunito", sans-serif',
        },
        legend: {
          position: 'top',
        },
      },
      rotateOptions: {
        labels: ['One family/heir', 'Rotate often', 'Rotate occasionally', 'Other'],
        title: {
          text: 'Do you stay with one family or rotate?',
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
    freewill() {
      const onCount = this.chartData.filter(x => x.freewill === 'On').length;
      const offCount = this.chartData.filter(x => x.freewill === 'Off').length;
      const otherCount = this.chartData.filter(x => x.freewill === 'Other').length;
      const finalCount = [onCount, offCount, otherCount];
      return finalCount;
    },
    control() {
      const yesCount = this.chartData.filter(x => x.control === 'yes').length;
      const rotateCount = this.chartData.filter(x => x.control === 'rotate').length;
      const fewCount = this.chartData.filter(x => x.control === 'few').length;
      const oneCount = this.chartData.filter(x => x.control === 'one').length;
      const otherCount = this.chartData.filter(x => x.control === 'other').length;
      const finalCount = [yesCount, rotateCount, fewCount, oneCount, otherCount];
      return finalCount;
    },
    aging() {
      const shortCount = this.chartData.filter(x => x.aging === 'short').length;
      const normalCount = this.chartData.filter(x => x.aging === 'normal').length;
      const longCount = this.chartData.filter(x => x.aging === 'long').length;
      const customCount = this.chartData.filter(x => x.aging === 'custom').length;
      const offCount = this.chartData.filter(x => x.aging === 'off').length;
      const manualCount = this.chartData.filter(x => x.aging === 'manual').length;
      const otherCount = this.chartData.filter(x => x.aging === 'other').length;
      const finalCount = [shortCount, normalCount, longCount, customCount, offCount, manualCount, otherCount];
      return finalCount;
    },
    rotate() {
      const oneCount = this.chartData.filter(x => x.rotate === 'one').length;
      const rotateCount = this.chartData.filter(x => x.rotate === 'often').length;
      const sometimesCount = this.chartData.filter(x => x.rotate === 'sometimes').length;
      const otherCount = this.chartData.filter(x => x.rotate === 'other').length;
      const finalCount = [oneCount, rotateCount, sometimesCount, otherCount];
      return finalCount;
    },
  },
};
</script>
