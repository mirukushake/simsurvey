<template>
  <div id="app">
          <navbar />
    <section class="section" id="general">
      <div class="container">
      <h1 class="title">General and Background Information</h1>
        <!--<chart1 :chart-data="chartData" />-->
        <!--<chart2 :chart-data="chartData" />-->
        <chart3 :chart-data="chartData" />
        <!--<chart4 :chart-data="chartData" />-->
</div>
    </section>
        <section class="section" id="dlc">
      <div class="container">
      <h1 class="title">DLC Preferences</h1>
      <!-- <chart5 :chart-data="chartData" />-->
      <chart7 :chart-data="chartData" />
</div>
    </section>
    <section class="section" id="household">
      <div class="container">
      <h1 class="title">Sims/Household</h1>
      <chart8 :chart-data="chartData" />
      <!-- <chart10 :chart-data="chartData" />-->
      <chart14 :chart-data="chartData" />
</div>
    </section>
    <footer class="footer">
  <div class="content has-text-centered">
    <p>
      Data is from <a href="https://forms.gle/f6SkGZd91BGHgr3z7">this survey</a>. Contact mirukushake on Reddit with any comments or concerns.
    </p>
  </div>
</footer>
  </div>
</template>

<style lang="scss">
  @import './styles/bulma.scss';
</style>

<script>
import surveyData from '@/assets/responses.json';

import navbar from './components/navbar.vue';
import chart1 from './components/mainplaystyle.vue';
import chart2 from './components/ccmods.vue';
import chart3 from './components/previousgames.vue';
import chart4 from './components/havedlc.vue';
import chart5 from './components/dlcprefsep.vue';
import chart6 from './components/dlcprefsgp.vue';
import chart7 from './components/dlcprefssp.vue';
import chart8 from './components/startcas.vue';
import chart9 from './components/livemode.vue';
import chart10 from './components/legacy.vue';
import chart11 from './components/premades.vue';
import chart12 from './components/building.vue';
import chart13 from './components/skillscareers.vue';
import chart14 from './components/miscstats.vue';

export default {
  components: {
    navbar,
    chart1,
    chart2,
    chart3,
    chart4,
    chart5,
    chart6,
    chart7,
    chart8,
    chart9,
    chart10,
    chart11,
    chart12,
    chart13,
    chart14,
  },
  data() {
    return {
      chartData: Object.freeze(surveyData),
    };
  },
};
</script>
