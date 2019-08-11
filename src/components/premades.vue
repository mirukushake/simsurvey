<template>
  <div class="container">
    <h2 class="subtitle">EA premades</h2>
<span class="chartfloatleft"><apexchart height="300" type="donut" :options="premadesOptions" :series="premades"/></span>
Most people are content to just leave the premades in the world, although some gave them makeovers or changed their families. However,
 people almost never actually play them.
 <div class="is-clearfix"></div>

 <h2 class="subtitle">Gallery and CC content</h2>
 <span class="chartfloatleft"><apexchart height="300" type="donut" :options="galleryPlayableOptions" :series="galleryPlayabale"/></span>
<span class="chartfloatright"><apexchart height="300" type="donut" :options="galleryNPCOptions" :series="galleryNPC" width="100%"/></span>

  Nearly two-thirds of the respondents never or rarely play sims made by others. Considering how many enjoyed CAS, this makes sense.
 These numbers change in regard to townies, with people who responded "often" doubling.
  <div class="is-clearfix"></div>
<span class="chartfloatleft"><apexchart height="300" type="donut" :options="galleryLotsOptions" :series="galleryLots"/></span>
<br /><br />As building was less enjoyable than creating sims for many players, it's not surprising that a larger number of players used gallery/CC lots to some extent.
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
      premadesOptions: {
        labels: ['Keep in world', 'Play with them', 'Delete all', 'Delete some', 'Other'],
        title: {
          text: 'What do you do with the premade households?',
        },
        legend: {
          position: 'top',
        },
      },
      galleryPlayableOptions: {
        labels: ['Always', 'Often', 'Occasionally', 'Rarely', 'Never', 'Other'],
        title: {
          text: 'Do you use sims from the gallery/CC creators as playable sims?',
        },
        legend: {
          position: 'top',
        },
      },
      galleryNPCOptions: {
        labels: ['Always', 'Often', 'Occasionally', 'Rarely', 'Never', 'Other'],
        title: {
          text: 'Do you use sims from the gallery/CC creators as townies?',
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
    premades() {
      const keepCount = this.chartData.filter(x => x.premades === 'keep').length;
      const playCount = this.chartData.filter(x => x.premades === 'play').length;
      const allCount = this.chartData.filter(x => x.premades === 'delete all').length;
      const someCount = this.chartData.filter(x => x.premades === 'delete some').length;
      const otherCount = this.chartData.filter(x => x.premades === 'other').length;
      const finalCount = [keepCount, playCount, allCount, someCount, otherCount];
      return finalCount;
    },
    galleryPlayabale() {
      const hasData = this.chartData.filter(x => x.gallery_sims);
      const alwaysCount = hasData.filter(x => x.gallery_sims === 'Always').length;
      const oftenCount = hasData.filter(x => x.gallery_sims === 'Often').length;
      const sometimesCount = hasData.filter(x => x.gallery_sims === 'Occassionally').length;
      const rarelyCount = hasData.filter(x => x.gallery_sims === 'Rarely').length;
      const neverCount = hasData.filter(x => x.gallery_sims === 'Never').length;
      const otherCount = hasData.filter(x => x.gallery_sims !== 'Always' && x.gallery_sims !== 'Often' && x.gallery_sims !== 'Occassionally' && x.gallery_sims !== 'Rarely' && x.gallery_sims !== 'Never').length;
      const finalCount = [alwaysCount, oftenCount, sometimesCount, rarelyCount, neverCount, otherCount];
      return finalCount;
    },
    galleryNPC() {
      const hasData = this.chartData.filter(x => x.gallery_townie);
      const alwaysCount = hasData.filter(x => x.gallery_townie === 'Always').length;
      const oftenCount = hasData.filter(x => x.gallery_townie === 'Often').length;
      const sometimesCount = hasData.filter(x => x.gallery_townie === 'Occassionally').length;
      const rarelyCount = hasData.filter(x => x.gallery_townie === 'Rarely').length;
      const neverCount = hasData.filter(x => x.gallery_townie === 'Never').length;
      const otherCount = hasData.filter(x => x.gallery_townie !== 'Always' && x.gallery_townie !== 'Often' && x.gallery_townie !== 'Occassionally' && x.gallery_townie !== 'Rarely' && x.gallery_townie !== 'Never').length;
      const finalCount = [alwaysCount, oftenCount, sometimesCount, rarelyCount, neverCount, otherCount];
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
