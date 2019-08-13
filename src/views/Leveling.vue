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
            Money, skills, and careers
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="title is-3">Leveling up</p>
        <leveling :chart-data="chartData" />
      </div>
    </section>
    <section class="section">
      <div class="container">
        <p class="title is-3">Popular careers</p>
        <careers :chart-data="chartData" />
      </div>
    </section>
  </div>
</template>

<script>
import leveling from '@/components/skills.vue';
import careers from '@/components/careers.vue';

export default {
  name: 'home',
  components: {
    leveling,
    careers,
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
