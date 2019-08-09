<template>
  <div id="app">
          <navbar />
    <section class="section" id="general">
      <div class="container">
      <h1 class="title">General and Background Information</h1>
        <!--<chart1 :chart-data="chartData" />-->
        <!--<chart2 :chart-data="chartData" />-->
        <!--<chart3 :chart-data="chartData" />-->
        <!--<chart4 :chart-data="chartData" />-->
</div>
    </section>
        <section class="section" id="dlc">
      <div class="container">
      <h1 class="title">DLC Preferences</h1>
      <chart5 :chart-data="chartData" />
</div>
    </section>
    <section class="section" id="household">
      <div class="container">
      <h1 class="title">Sims/Household</h1>
      <b-field>
        <b-checkbox>Checkbox</b-checkbox>
      </b-field>

      <b-field>
        <b-switch>Default</b-switch>
      </b-field>

      <b-field label="Name">
        <b-input placeholder="John Silver"></b-input>
      </b-field>

      <div class="block">
        <b-icon icon="person"></b-icon>
        <b-icon icon="home"></b-icon>
        <b-icon icon="dashboard"></b-icon>
      </div>

      <b-message title="Danger with icon" type="is-danger" has-icon>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam.
         Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
      </b-message>
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
import surveyData from '@/assets/responses781.json';

import navbar from './components/navbar.vue';
import chart1 from './components/mainplaystyle.vue';
import chart2 from './components/ccmods.vue';
import chart3 from './components/previousgames.vue';
import chart4 from './components/havedlc.vue';
import chart5 from './components/dlcprefs.vue';

export default {
  components: {
    navbar,
    chart1,
    chart2,
    chart3,
    chart4,
    chart5,
  },
  data() {
    return {
      chartData: Object.freeze(surveyData),
    };
  },
};
</script>
