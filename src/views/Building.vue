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
            Building and decorating
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <p class="title is-3">Build/Buy</p>
        <building :chart-data="chartData" />
      </div>
    </section>
  </div>
</template>

<script>
import building from '@/components/building.vue';

export default {
  name: 'home',
  components: {
    building,
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
