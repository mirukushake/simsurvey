<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <apexchart height="300" type="donut" :options="residentialOptions" :series="residential" />
      </div>
      <div class="column">
        <apexchart height="300" type="donut" :options="communityOptions" :series="community" />
      </div>
    </div>
    <p>While most players at least somewhat enjoyed CAS, opinions were much less uniform when it
      came to building. Building community lots in particular was not enjoyed very much.</p>
    <div class="columns">
      <div class="column">
        <apexchart height="300" type="donut" :options="decorationOptions" :series="decoration" />
      </div>
      <div class="column">
        <p>On the other hand, opinions were much more positive for interior design, with nearly two-thirds saying they
          enjoyed it very much.</p>
      </div>
    </div>
    <p class="subtitle is-5">Living situation</p>
    <div class="columns">
      <div class="column">
        <apexchart height="300" type="donut" :options="aptsOptions" :series="apt" />
      </div>
      <div class="column">
        <p>Only slightly more than 25% of respondents preferred apartments, while about 40% had no
          preference for either. However, my placement and wording of the question most likely made it
          unclear whether the question was about <i>building/decorating</i> them or living in them (which was my intention).</p>
      </div>
    </div>
    <p class="subtitle is-5">Premade homes</p>
    <div class="columns">
      <div class="column">
        <apexchart height="300" type="donut" :options="galleryLotsOptions" :series="galleryLots" />
        <div class="has-text-centered">
          <button class="button " @click="modal = true">
            View other answers
          </button>
        </div>
      </div>
      <div class="column">
        <p>As building was less enjoyable than creating sims for many players, it's not surprising
          that a larger number of players used gallery/CC lots to some extent. I probably should
          have split this into household lots and community/lots for NPCs like I did for sims.</p>
      </div>
    </div>

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
      otherAnswers: ['No gallery/cc on consoles.', 'I move my spares into them', 'Yes but almost always it\'s Maxis-created content.', 'All lots except appartments', 'Can\'t'],
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
      galleryLotsOptions: {
        labels: ['Always', 'Often', 'Occasionally', 'Rarely', 'Never', 'Other'],
        title: {
          text: 'Do you use lots from the gallery/CC creators?',
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
    galleryLots() {
      const hasData = this.chartData.filter(x => x.gallery_lots);
      const alwaysCount = hasData.filter(x => x.gallery_lots === 'Always').length;
      const oftenCount = hasData.filter(x => x.gallery_lots === 'Often').length;
      const sometimesCount = hasData.filter(x => x.gallery_lots === 'Ocassionally').length;
      const rarelyCount = hasData.filter(x => x.gallery_lots === 'Rarely').length;
      const neverCount = hasData.filter(x => x.gallery_lots === 'Never').length;
      const otherCount = hasData.filter(x => x.gallery_lots !== 'Always' && x.gallery_lots !== 'Often' && x.gallery_lots !== 'Ocassionally' && x.gallery_lots !== 'Rarely' && x.gallery_lots !== 'Never').length;
      const finalCount = [alwaysCount, oftenCount, sometimesCount, rarelyCount, neverCount, otherCount];
      return finalCount;
    },
  },
};
</script>
