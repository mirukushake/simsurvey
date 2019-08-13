<template>
  <div id="app">
          <navbar />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import './styles/bulma.scss';
</style>

<script>
import navbar from './components/navbar.vue';

export default {
  components: {
    navbar,
  },
  data() {
    return {
    };
  },
};
</script>
