<template>
  <div class="container">
    <h2 class="subtitle">Miscellaneous Stats</h2>
<span class="chartfloatleft"><apexchart height="300" type="donut" :options="hoursOptions" :series="hours"/></span>
I struggled with best way to display this data since there was a such a huge range! After filtering out the literally impossible values, I had a range of 1 to 10961 hours (an average of 6 hours a day for 5 years).
 However, the median was 598 hours, and the most frequent answer was 100 hours, so I focused on the lower end of the scale.
 <!-- <span class="chartfloatright"><apexchart height="300" type="donut" :options="legacyOptions" :series="legacy"/></span> -->
 <div class="is-clearfix"></div>

 <span class="chartfloatleft"><apexchart height="300" type="donut" :options="savesOptions" :series="saves"/></span>
<br /><br />
I defined an active save as a save you intend to go back to, so basically any save you see as not yet finished, whether or not you ever actually do go back to it or not.
 As much as "starting yet another new save" is a meme, the numbers were quite low, with a median of 3, and the most frequent answer being 2.
  The highest number was 2023, but it's so much higher than the second-highest 124, I'm not sure it was an actual answer...
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
      hoursOptions: {
        labels: ['0-500', '501-1000', '1001-1500', '1501-2000', '2001+'],
        title: {
          text: 'How many hours have you played?',
        },
        legend: {
          position: 'top',
        },
      },
      savesOptions: {
        labels: ['0-3', '4-7', '8-11', '12-15', '16+'],
        title: {
          text: 'How many active saves do you have?',
        },
        legend: {
          position: 'top',
        },
      },
    };
  },
  computed: {
    hours() {
      const hasData = this.chartData.filter(x => x.hours && x.hours < (365 * 24 * 5));
      const first = hasData.filter(a => a.hours >= 0 && a.hours <= 500).length;
      const second = hasData.filter(a => a.hours >= 501 && a.hours <= 1000).length;
      const third = hasData.filter(a => a.hours >= 1001 && a.hours <= 1500).length;
      const fourth = hasData.filter(a => a.hours >= 1501 && a.hours <= 2000).length;
      const fifth = hasData.filter(a => a.hours >= 2001).length;
      const finalCount = [first, second, third, fourth, fifth];
      return finalCount;
    },
    saves() {
      const hasData = this.chartData.filter(x => x.saves);
      const first = hasData.filter(a => a.saves >= 0 && a.saves <= 3).length;
      const second = hasData.filter(a => a.saves >= 4 && a.saves <= 7).length;
      const third = hasData.filter(a => a.saves >= 8 && a.saves <= 11).length;
      const fourth = hasData.filter(a => a.saves >= 12 && a.saves <= 15).length;
      const fifth = hasData.filter(a => a.saves >= 16).length;
      const newSeries = [first, second, third, fourth, fifth];
      return newSeries;
    },
  },
};
</script>
