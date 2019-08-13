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
            Interesting stuff that doesn't fit anywhere else
          </h2>
        </div>
      </div>
    </section>
    <!-- CAS/household -->
    <section class="section">
      <div class="container">
        <p class="title is-3">Miscellaneous Stats</p>
        <misc :chart-data="chartData" />
      </div>
    </section>
  </div>
</template>

<script>
import misc from '@/components/miscstats.vue';

export default {
  name: 'home',
  components: {
    misc,
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
