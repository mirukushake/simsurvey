<template>
    <div>
      <scrollactive :offset="52">
      <b-navbar fixed-top type="is-success">
        <template slot="end">
            <b-navbar-item href="#general" class="scrollactive-item">
                General
            </b-navbar-item>
            <b-navbar-item href="#dlc" class="scrollactive-item">
                DLC Preferences
            </b-navbar-item>
            <b-navbar-item href="#household" class="scrollactive-item">
                Sims/Household
            </b-navbar-item>
            <b-navbar-item href="#" class="scrollactive-item">
                Leveling
            </b-navbar-item>
            <b-navbar-item href="#" class="scrollactive-item">
                Building
            </b-navbar-item>
            <b-navbar-item href="#" class="scrollactive-item">
                Miscellaneous
            </b-navbar-item>
            <b-navbar-item href="#" class="scrollactive-item">
                Survey Info
            </b-navbar-item>
        </template>
    </b-navbar>
    </scrollactive>
    <section class="hero is-success is-medium">
      <div class="hero-head">
      </div>
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Sims 4 Playstyle Survey Results
      </h1>
      <h2 class="subtitle">
        A look at how TS4 players enjoy the game.
      </h2>
    </div>
  </div>
</section>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>
