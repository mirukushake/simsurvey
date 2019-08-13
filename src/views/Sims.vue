<template>
  <div>
    <section class="hero is-primary is-medium">
      <div class="hero-head">
      </div>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Sims 4 Playstyle Survey Results
          </h1>
          <h2 class="subtitle">
            How players create and control their sims
          </h2>
        </div>
      </div>
    </section>
    <!-- CAS/household -->
    <section class="section">
      <div class="container">
        <p class="title is-3">Getting started</p>
        <start :chart-data="chartData" />
      </div>
    </section>
    <!-- Live mode -->
    <section class="section">
      <div class="container">
        <p class="title is-3">Live Mode</p>
        <livemode :chart-data="chartData" />
      </div>
    </section>
    <!-- Legacy -->
    <section class="section">
      <div class="container">
        <p class="title is-3">Legacy play</p>
        <legacy :chart-data="chartData" />
      </div>
    </section>
    <!-- Premades -->
    <section class="section">
      <div class="container">
        <p class="title is-3">Premades</p>
        <premades :chart-data="chartData" />
      </div>
    </section>
  </div>
</template>

<script>
import start from '@/components/startcas.vue';
import livemode from '@/components/livemode.vue';
import legacy from '@/components/legacy.vue';
import premades from '@/components/premades.vue';

export default {
  name: 'home',
  components: {
    start,
    livemode,
    legacy,
    premades,
  },
  data() {
    return {};
  },
  computed: {
    chartData() {
      return this.$store.state.data;
    },
  },
};

</script>
