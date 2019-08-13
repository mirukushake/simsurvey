<template>
  <div class="container">
     <p class="subtitle is-5">Starting a household</p>
    <div class="columns">
      <div class="column"><apexchart height="300" type="donut" :options="enjoyCasOptions" :series="enjoyCas"/></div>
      <div class="column"><apexchart height="300" type="donut" :options="petPrefOptions" :series="petPref"/></div>
    </div>
<p>Over 90% of respondents very much or somewhat enjoyed creating sims, while opinions regarding pet creation/adoption were fairly evenly split.</p>
 <p class="subtitle is-5">Preferred starter household</p>
 <div class="has-text-right">
         <button class="button "
            @click="modal = true">
            View other answers
        </button>
        </div>
<section>
        <div class="block has-text-centered">
            <b-radio v-model="filter"
                native-value="all">
                All responses
            </b-radio>
            <b-radio v-model="filter"
                native-value="builder">
                Builder
            </b-radio>
            <b-radio v-model="filter"
                native-value="cas">
                CAS
            </b-radio>
            <b-radio v-model="filter"
                native-value="play">
                Gameplay
            </b-radio>
        </div>
    </section>
      <apexchart height="500" type="bar" :options="chartOptions" :series="starter"/>
      <p>A single young adult sim was by far the most popular starter household, with young adult couple in distant second. Single parent, young adult with pet, and sibling/twins came up more than once in "other" answers.</p>

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
      filter: 'all',
      modal: false,
      otherAnswers: ['Randomized', 'Single young adult with pets', 'single parent', 'siblings of different ages', 'Depends', 'Twins (Two Young Adults)', 'Single parent + child', 'Siblings (any ages)', 'YA sim + pet', 'Single YA Sim with 1 pet'],
      enjoyCasOptions: {
        labels: ['Very much', 'Somewhat', 'Very little', 'Not at all'],
        title: {
          text: 'Do you enjoy creating sims?',
        },
        legend: {
          position: 'top',
        },
      },
      petPrefOptions: {
        labels: ['Start with pets', 'Adopt', 'No preference'],
        title: {
          text: 'Do you prefer to start with pets or adopt them?',
        },
        legend: {
          position: 'top',
        },
      },
      cctypeOptions: {
        labels: ['Alpha', 'Maxis Match', 'Maxis Mix'],
        title: {
          text: 'Which style of CC do you prefer?',
          align: 'right',
        },
        legend: {
          position: 'top',
        },
      },
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
        xaxis: {
          categories: ['Single sim (Teen)', 'Single sim (Young Adult)', 'Single sim (Adult)', 'Single sim (Elder)', 'Couple (Teen)', 'Couple (Young Adult)',
            'Couple (Adult)', 'Couple (Elder)', 'Family with child(ren)', 'Multigenerational family', 'Roommates', 'Other'],
        },
        yaxis: {
          labels: {
            rotate: 0,
            maxWidth: 200,
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
    enjoyCas() {
      const veryCount = this.chartData.filter(x => x.create_enjoy === 'Very much').length;
      const somewhatCount = this.chartData.filter(x => x.create_enjoy === 'Somewhat').length;
      const littleCount = this.chartData.filter(x => x.create_enjoy === 'Very little').length;
      const notatallCount = this.chartData.filter(x => x.create_enjoy === 'Not at all').length;
      const finalCount = [veryCount, somewhatCount, littleCount, notatallCount];
      return finalCount;
    },
    petPref() {
      const startCount = this.chartData.filter(x => x.pets === 'Start with pets').length;
      const adoptCount = this.chartData.filter(x => x.pets === 'Adopt').length;
      const noprefCount = this.chartData.filter(x => x.pets === 'No preference').length;
      const finalCount = [startCount, adoptCount, noprefCount];
      return finalCount;
    },
    cctype() {
      const alphaCount = this.chartData.filter(x => x.cctype === 'alpha').length;
      const mmCount = this.chartData.filter(x => x.cctype === 'mm').length;
      const mixCount = this.chartData.filter(x => x.cctype === 'mix').length;
      const cctypeCount = [alphaCount, mmCount, mixCount];
      return cctypeCount;
    },
    starter() {
      const hasData = this.chartData.filter(x => x.starter);
      const type1Count = hasData.filter(hh => hh.starter.includes('single teen'));
      const type2Count = hasData.filter(hh => hh.starter.includes('single ya'));
      const type3Count = hasData.filter(hh => hh.starter.includes('single adult'));
      const type4Count = hasData.filter(hh => hh.starter.includes('single elder'));
      const type5Count = hasData.filter(hh => hh.starter.includes('couple teen'));
      const type6Count = hasData.filter(hh => hh.starter.includes('couple ya'));
      const type7Count = hasData.filter(hh => hh.starter.includes('couple adult'));
      const type8Count = hasData.filter(hh => hh.starter.includes('couple elder'));
      const type9Count = hasData.filter(hh => hh.starter.includes('family'));
      const type10Count = hasData.filter(hh => hh.starter.includes('multigen'));
      const type11Count = hasData.filter(hh => hh.starter.includes('roommates'));
      const type12Count = hasData.filter(hh => hh.starter.includes('other'));

      if (this.filter === 'builder') {
        const type1CountNew = type1Count.filter(type => type.playstyle.includes('builder'));
        const type2CountNew = type2Count.filter(type => type.playstyle.includes('builder'));
        const type3CountNew = type3Count.filter(type => type.playstyle.includes('builder'));
        const type4CountNew = type4Count.filter(type => type.playstyle.includes('builder'));
        const type5CountNew = type5Count.filter(type => type.playstyle.includes('builder'));
        const type6CountNew = type6Count.filter(type => type.playstyle.includes('builder'));
        const type7CountNew = type7Count.filter(type => type.playstyle.includes('builder'));
        const type8CountNew = type8Count.filter(type => type.playstyle.includes('builder'));
        const type9CountNew = type9Count.filter(type => type.playstyle.includes('builder'));
        const type10CountNew = type10Count.filter(type => type.playstyle.includes('builder'));
        const type11CountNew = type11Count.filter(type => type.playstyle.includes('builder'));
        const type12CountNew = type12Count.filter(type => type.playstyle.includes('builder'));

        const newArray = [type1CountNew.length, type2CountNew.length, type3CountNew.length,
          type4CountNew.length, type5CountNew.length, type6CountNew.length, type7CountNew.length,
          type8CountNew.length, type9CountNew.length, type10CountNew.length, type11CountNew.length,
          type12CountNew.length];
        const newSeries = [{ data: newArray }];
        return newSeries;
      }
      if (this.filter === 'cas') {
        const type1CountNew = type1Count.filter(type => type.playstyle.includes('cas'));
        const type2CountNew = type2Count.filter(type => type.playstyle.includes('cas'));
        const type3CountNew = type3Count.filter(type => type.playstyle.includes('cas'));
        const type4CountNew = type4Count.filter(type => type.playstyle.includes('cas'));
        const type5CountNew = type5Count.filter(type => type.playstyle.includes('cas'));
        const type6CountNew = type6Count.filter(type => type.playstyle.includes('cas'));
        const type7CountNew = type7Count.filter(type => type.playstyle.includes('cas'));
        const type8CountNew = type8Count.filter(type => type.playstyle.includes('cas'));
        const type9CountNew = type9Count.filter(type => type.playstyle.includes('cas'));
        const type10CountNew = type10Count.filter(type => type.playstyle.includes('cas'));
        const type11CountNew = type11Count.filter(type => type.playstyle.includes('cas'));
        const type12CountNew = type12Count.filter(type => type.playstyle.includes('cas'));

        const newArray = [type1CountNew.length, type2CountNew.length, type3CountNew.length,
          type4CountNew.length, type5CountNew.length, type6CountNew.length, type7CountNew.length,
          type8CountNew.length, type9CountNew.length, type10CountNew.length, type11CountNew.length,
          type12CountNew.length];
        const newSeries = [{ data: newArray }];
        return newSeries;
      }
      if (this.filter === 'play') {
        const type1CountNew = type1Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const type2CountNew = type2Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const type3CountNew = type3Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const type4CountNew = type4Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const type5CountNew = type5Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const type6CountNew = type6Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const type7CountNew = type7Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const type8CountNew = type8Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const type9CountNew = type9Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const type10CountNew = type10Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const type11CountNew = type11Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const type12CountNew = type12Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));

        const newArray = [type1CountNew.length, type2CountNew.length, type3CountNew.length,
          type4CountNew.length, type5CountNew.length, type6CountNew.length, type7CountNew.length,
          type8CountNew.length, type9CountNew.length, type10CountNew.length, type11CountNew.length,
          type12CountNew.length];
        const newSeries = [{ data: newArray }];
        return newSeries;
      }
      const newArray = [type1Count.length, type2Count.length, type3Count.length, type4Count.length, type5Count.length, type6Count.length, type7Count.length,
        type8Count.length, type9Count.length, type10Count.length, type11Count.length,
        type12Count.length];
      const newSeries = [{ data: newArray }];
      return newSeries;
    },
  },
};
</script>
