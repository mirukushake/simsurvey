<template>
    <div>
      <b-navbar fixed-top type="is-primary">
        <template slot="end">
            <b-navbar-item tag="router-link" to="/">
                General
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/dlc">
                DLC Preferences
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/sims">
                Sims/Household
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/leveling">
                Leveling
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/building">
                Building
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/misc">
                Miscellaneous
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/info">
                Survey Info
            </b-navbar-item>
        </template>
    </b-navbar>
</div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>
