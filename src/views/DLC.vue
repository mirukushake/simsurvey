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
        DLC preferences by playstyle
      </h2>
    </div>
  </div>
</section>
    <section class="section">
      <div class="container">
      <p class="title is-3">Pack preferences</p>
      <p>For this section, you can see how EP/GP/SP rankings differ (relatively) by playstyle: Builder/Decorator, CAS/Creating Sims, and Gameplay, which is a combination
         of legacy/family/other gameplay, and storytelling.</p>
         <p>Interestingly enough, preferences seem to be fairly uniform for all groups, but you can see for yourself by selecting the specifc button on each graph.</p>
       </div>
       </section>
       <!-- EP -->
       <section class="section">
         <div class="container">
      <p class="title is-3 is-spaced">EP favorites</p>
        <ep :chart-data="chartData" />
        </div>
    </section>
    <!-- GP -->
    <section class="section">
      <div class="container">
        <p class="title is-3 is-spaced">GP favorites</p>
        <gp :chart-data="chartData" />
        </div>
    </section>
    <!-- SP -->
    <section class="section">
      <div class="container">
        <p class="title is-3 is-spaced">SP favorites</p>
        <sp :chart-data="chartData" />
        </div>
    </section>
  </div>
</template>

<script>
import ep from '@/components/dlcprefsep.vue';
import gp from '@/components/dlcprefsgp.vue';
import sp from '@/components/dlcprefssp.vue';

export default {
  name: 'home',
  components: {
    ep,
    gp,
    sp,
  },
  data() {
    return {
    };
  },
  computed: {
    chartData() {
      return this.$store.state.data;
    },
  },
};
</script>
