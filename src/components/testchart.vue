<template>
  <div class="container">
    <apexchart height="300" type="bar" :options="chartOptions" :series="series"/>

    {{ series }}
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
          categories: [
            'Builder/Decorator',
            'CAS/Creating Sims',
            'Legacy/Family gameplay',
            'Storytelling',
            'Creating CC/mods',
            'Other gameplay',
          ],
        },
      },
    };
  },
  computed: {
    series() {
      const builderCount = this.chartData.filter((style) => style.playstyle.includes("builder")).length
      const casCount = this.chartData.filter((style) => style.playstyle.includes("cas")).length
      const familyCount = this.chartData.filter((style) => style.playstyle.includes("family")).length
      const storyCount = this.chartData.filter((style) => style.playstyle.includes("story")).length
      const creatorCount = this.chartData.filter((style) => style.playstyle.includes("creator")).length
      const otherCount = this.chartData.filter((style) => style.playstyle.includes("other")).length
      const arrayData = [builderCount, casCount, familyCount, storyCount, creatorCount, otherCount]
      const seriesObject = { name: "Responses", data: arrayData}
      const newSeries = [seriesObject]
      return newSeries
    },
  }
};
</script>