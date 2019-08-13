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
        Survey information and general questions
      </h2>
    </div>
  </div>
</section>
    <section class="section">
      <div class="container">
      <p class="title is-3">Background</p>
      <p>There are so many ways to play the Sims, and I thought it would be interesting to see how people are playing.
        I looked around but I couldn't find much official information, and unofficial surveys were mostly focused on DLC, so I decided to
         make my own.
      </p>
      <p>I cannot thank the wonderful Sims community enough. I thought I would get maybe 300 responses at most, but had <strong>825(!!)</strong>
       when I finished putting everything together. I hope you enjoy reading the results as much as I did!</p>
       </div>
       </section>
       <section class="section">
         <div class="container">
      <p class="title is-3 is-spaced">General questions</p>
      <!-- playstyle -->
<p class="subtitle is-5">Main playstyle</p>
        <playstyle :chart-data="chartData" />
            <p>Family/legacy play was the most popular answer, with CAS second and building third.
     Storytelling was lower than I thought it would be.
     "Challenges" was the most common answer given for other gameplay, but there were some very interesting ones like collecting sim graves.
</p>
<!-- CC and mods -->
        <p class="subtitle is-5">Custom content and mods</p>
        <ccmods :chart-data="chartData" />

<!-- previous games -->
<p class="subtitle is-5">Previous games</p>
<prevgames :chart-data="chartData" />
    <p>The vast majority of respondents were long time players of the series. Not surprisingly, the newer games were played more often. <br />
    There were a few invalid answers I didn't get around to cleaning up, but there were less than a handful of them so
     they should have no sizeable impact on the overall results.</p>
<!-- DLC -->
<p class="subtitle is-5">DLC (Packs)</p>
<dlc :chart-data="chartData" />
        </div>
    </section>
  </div>
</template>

<script>
import playstyle from '@/components/mainplaystyle.vue';
import ccmods from '@/components/ccmods.vue';
import prevgames from '@/components/previousgames.vue';
import dlc from '@/components/havedlc.vue';

export default {
  name: 'home',
  components: {
    playstyle,
    ccmods,
    prevgames,
    dlc,
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
