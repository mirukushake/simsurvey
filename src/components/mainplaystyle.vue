<template>
  <div>
        <div class="has-text-right">
         <button class="button "
            @click="modal = true">
            View other answers
        </button>
        </div>
    <apexchart height="300" type="bar" :options="chartOptions" :series="series"/>

     <b-modal :active.sync="modal" :width="640">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                      <p class="title is-3">Other answers*</p>

                        <ul>
                           <li v-for="(answer, index) in otherAnswers" :key="index">{{ answer }}</li>
                        </ul>
                        <i class="has-text-grey">*Only unique answers are shown (repeats are shown only once)</i>
                    </div>
                </div>
            </div>
        </b-modal>
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
      modal: false,
      otherAnswers: ['Harem-Building/Sex-Simulator', 'Just playing the game', 'playing the game', 'I use both cas, legacy gameplay and storytelling', 'Goal orientated or challenges', 'goofing around', 'Rags to Riches', 'getting achievements', 'I like to make my personal Challenges', 'Playing for half an hour and then giving up', 'getting bored then making a new family', 'Cheating', 'Collecting sim graves', 'Playing for 10 minutes every few weeks', 'Basic gameplay ', 'Skill building and collections', 'Destroying Everything', 'mix of storytelling/legacy', 'Challenges', 'Just playing the game, like....DUH! Why isn\'t this an option?', 'storytelling/challenges'],
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
        yaxis: {
          labels: {
            rotate: 0,
            maxWidth: 200,
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
