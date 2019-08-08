<template>
  <div class="container">
    <h2 class="subtitle">What is your main playstyle?</h2>
    <apexchart height="300" type="bar" :options="chartOptions" :series="series"/>
    Family/legacy play was the most popular answer, with CAS second and building third.
     Storytelling was lower than I thought it would be.
     There were a variety of comments for "other gameplay," including:
    <article class="message">
  <div class="message-body">
    <ul>
      <li>＊ Challenges, especially rags to riches</li>
      <li>＊ Collecting sim graves</li>
      <li>＊ Getting achievements</li>
      <li>＊ Destroying everything</li>
    </ul>
  </div>
</article>
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
          text: `${this.chartData.length} responses`,
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
        xaxis: {
          categories: [
            'Legacy/Family gameplay',
            'CAS/Creating Sims',
            'Builder/Decorator',
            'Storytelling',
            'Other gameplay',
            'Creating CC/mods',
          ],
        },
      },
    };
  },
  computed: {
    series() {
      const builderCount = this.chartData.filter(style => style.playstyle.includes('builder')).length;
      const casCount = this.chartData.filter(style => style.playstyle.includes('cas')).length;
      const familyCount = this.chartData.filter(style => style.playstyle.includes('family')).length;
      const storyCount = this.chartData.filter(style => style.playstyle.includes('story')).length;
      const creatorCount = this.chartData.filter(style => style.playstyle.includes('creator')).length;
      const otherCount = this.chartData.filter(style => style.playstyle.includes('other')).length;
      const arrayData = [builderCount, casCount, familyCount, storyCount, creatorCount, otherCount].sort((a, b) => b - a);
      const newSeries = [{ name: 'Responses', data: arrayData }];
      return newSeries;
    },
  },
};
</script>
