/* eslint-disable max-len */
<template>
  <div class="container">
    <p>You can use the buttons below to filter the results by playstyle type (applies to all charts).</p>
    <h2 class="subtitle">Favorite EP for gameplay</h2>
    <section>
        <div class="block">
            <b-radio v-model="playFilter"
                native-value="all">
                All responses
            </b-radio>
            <b-radio v-model="playFilter"
                native-value="builder">
                Builder
            </b-radio>
            <b-radio v-model="playFilter"
                native-value="cas">
                CAS
            </b-radio>
            <b-radio v-model="playFilter"
                native-value="play">
                Gameplay
            </b-radio>
        </div>
    </section>
    <apexchart height="300" type="bar" :options="chartOptions" :series="epgameplay"/>
    Seasons is by far the most popular EP for gameplay, no matter which playstyle. In general, Cats & Dogs and City Living were
     the second and third most popular, with Get Famous gaining some traction among the CAs folks.
      <h2 class="subtitle">Favorite EP for build/buy</h2>
          <section>
        <div class="block">
            <b-radio v-model="bbFilter"
                native-value="all">
                All responses
            </b-radio>
            <b-radio v-model="bbFilter"
                native-value="builder">
                Builder
            </b-radio>
            <b-radio v-model="bbFilter"
                native-value="cas">
                CAS
            </b-radio>
            <b-radio v-model="bbFilter"
                native-value="play">
                Gameplay
            </b-radio>
        </div>
    </section>
    <apexchart height="300" type="bar" :options="chartOptions" :series="epbb"/>
    Preferences did not change too much between different playstyles, with Seasons as the clear winner. Builders in particular
     were not big Get to Work fans.
           <h2 class="subtitle">Favorite EP for CAS</h2>
          <section>
        <div class="block">
            <b-radio v-model="casFilter"
                native-value="all">
                All responses
            </b-radio>
            <b-radio v-model="casFilter"
                native-value="builder">
                Builder
            </b-radio>
            <b-radio v-model="casFilter"
                native-value="cas">
                CAS
            </b-radio>
            <b-radio v-model="casFilter"
                native-value="play">
                Gameplay
            </b-radio>
        </div>
    </section>
    <apexchart height="300" type="bar" :options="chartOptions" :series="epcas"/>
    Seasons is once again the winner, with City Living and Get Famous close behind. Get to Work didn't do very well in this category either.
  </div>
</template>

<script>
export default {
  props: {
    chartData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      playFilter: 'all',
      bbFilter: 'all',
      casFilter: 'all',
      eps: ['Get to Work', 'Get Together', 'City Living', 'Cats & Dogs', 'Seasons', 'Get Famous', 'Island Living'],
      chartOptions: {
        theme: {
          monochrome: {
            enabled: true,
            color: '#3273dc',
          },
        },
        plotOptions: {
          bar: {
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter(val) {
            return val;
          },
          textAnchor: 'start',
          offsetY: -1,
          offsetX: 20,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
        },
        tooltip: {
          enabled: false,
        },
      },
    };
  },
  computed: {
    epgameplay() {
      const hasData = this.chartData.filter(x => x.ep_play);
      const ep1Count = hasData.filter(game => game.ep_play.includes(this.eps[0]));
      const ep2Count = hasData.filter(game => game.ep_play.includes(this.eps[1]));
      const ep3Count = hasData.filter(game => game.ep_play.includes(this.eps[2]));
      const ep4Count = hasData.filter(game => game.ep_play.includes(this.eps[3]));
      const ep5Count = hasData.filter(game => game.ep_play.includes(this.eps[4]));
      const ep6Count = hasData.filter(game => game.ep_play.includes(this.eps[5]));
      const ep7Count = hasData.filter(game => game.ep_play.includes(this.eps[6]));

      if (this.playFilter === 'builder') {
        const ep1CountNew = ep1Count.filter(type => type.playstyle.includes('builder'));
        const ep2CountNew = ep2Count.filter(type => type.playstyle.includes('builder'));
        const ep3CountNew = ep3Count.filter(type => type.playstyle.includes('builder'));
        const ep4CountNew = ep4Count.filter(type => type.playstyle.includes('builder'));
        const ep5CountNew = ep5Count.filter(type => type.playstyle.includes('builder'));
        const ep6CountNew = ep6Count.filter(type => type.playstyle.includes('builder'));
        const ep7CountNew = ep7Count.filter(type => type.playstyle.includes('builder'));

        const newArray = [ep1CountNew.length, ep2CountNew.length, ep3CountNew.length,
          ep4CountNew.length, ep5CountNew.length, ep6CountNew.length, ep7CountNew.length];
        const newObjects = this.eps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.playFilter === 'cas') {
        const ep1CountNew = ep1Count.filter(type => type.playstyle.includes('cas'));
        const ep2CountNew = ep2Count.filter(type => type.playstyle.includes('cas'));
        const ep3CountNew = ep3Count.filter(type => type.playstyle.includes('cas'));
        const ep4CountNew = ep4Count.filter(type => type.playstyle.includes('cas'));
        const ep5CountNew = ep5Count.filter(type => type.playstyle.includes('cas'));
        const ep6CountNew = ep6Count.filter(type => type.playstyle.includes('cas'));
        const ep7CountNew = ep7Count.filter(type => type.playstyle.includes('cas'));

        const newArray = [ep1CountNew.length, ep2CountNew.length, ep3CountNew.length,
          ep4CountNew.length, ep5CountNew.length, ep6CountNew.length, ep7CountNew.length];
        const newObjects = this.eps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.playFilter === 'play') {
        const ep1CountNew = ep1Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep2CountNew = ep2Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep3CountNew = ep3Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep4CountNew = ep4Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep5CountNew = ep5Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep6CountNew = ep6Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep7CountNew = ep7Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));

        const newArray = [ep1CountNew.length, ep2CountNew.length, ep3CountNew.length,
          ep4CountNew.length, ep5CountNew.length, ep6CountNew.length, ep7CountNew.length];
        const newObjects = this.eps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      const newArray = [ep1Count.length, ep2Count.length, ep3Count.length, ep4Count.length, ep5Count.length, ep6Count.length, ep7Count.length];
      const newObjects = this.eps.map((a, i) => ({ x: a, y: newArray[i] }));
      const newSeries = [{ data: newObjects }];
      return newSeries;
    },
    epbb() {
      const hasData = this.chartData.filter(x => x.ep_bb);
      const ep1Count = hasData.filter(game => game.ep_bb.includes(this.eps[0]));
      const ep2Count = hasData.filter(game => game.ep_bb.includes(this.eps[1]));
      const ep3Count = hasData.filter(game => game.ep_bb.includes(this.eps[2]));
      const ep4Count = hasData.filter(game => game.ep_bb.includes(this.eps[3]));
      const ep5Count = hasData.filter(game => game.ep_bb.includes(this.eps[4]));
      const ep6Count = hasData.filter(game => game.ep_bb.includes(this.eps[5]));
      const ep7Count = hasData.filter(game => game.ep_bb.includes(this.eps[6]));

      if (this.bbFilter === 'builder') {
        const ep1CountNew = ep1Count.filter(type => type.playstyle.includes('builder'));
        const ep2CountNew = ep2Count.filter(type => type.playstyle.includes('builder'));
        const ep3CountNew = ep3Count.filter(type => type.playstyle.includes('builder'));
        const ep4CountNew = ep4Count.filter(type => type.playstyle.includes('builder'));
        const ep5CountNew = ep5Count.filter(type => type.playstyle.includes('builder'));
        const ep6CountNew = ep6Count.filter(type => type.playstyle.includes('builder'));
        const ep7CountNew = ep7Count.filter(type => type.playstyle.includes('builder'));

        const newArray = [ep1CountNew.length, ep2CountNew.length, ep3CountNew.length,
          ep4CountNew.length, ep5CountNew.length, ep6CountNew.length, ep7CountNew.length];
        const newObjects = this.eps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.bbFilter === 'cas') {
        const ep1CountNew = ep1Count.filter(type => type.playstyle.includes('cas'));
        const ep2CountNew = ep2Count.filter(type => type.playstyle.includes('cas'));
        const ep3CountNew = ep3Count.filter(type => type.playstyle.includes('cas'));
        const ep4CountNew = ep4Count.filter(type => type.playstyle.includes('cas'));
        const ep5CountNew = ep5Count.filter(type => type.playstyle.includes('cas'));
        const ep6CountNew = ep6Count.filter(type => type.playstyle.includes('cas'));
        const ep7CountNew = ep7Count.filter(type => type.playstyle.includes('cas'));

        const newArray = [ep1CountNew.length, ep2CountNew.length, ep3CountNew.length,
          ep4CountNew.length, ep5CountNew.length, ep6CountNew.length, ep7CountNew.length];
        const newObjects = this.eps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.bbFilter === 'play') {
        const ep1CountNew = ep1Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep2CountNew = ep2Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep3CountNew = ep3Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep4CountNew = ep4Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep5CountNew = ep5Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep6CountNew = ep6Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep7CountNew = ep7Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));

        const newArray = [ep1CountNew.length, ep2CountNew.length, ep3CountNew.length,
          ep4CountNew.length, ep5CountNew.length, ep6CountNew.length, ep7CountNew.length];
        const newObjects = this.eps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }

      const newArray = [ep1Count.length, ep2Count.length, ep3Count.length, ep4Count.length, ep5Count.length, ep6Count.length, ep7Count.length];
      const newObjects = this.eps.map((a, i) => ({ x: a, y: newArray[i] }));
      const newSeries = [{ data: newObjects }];
      return newSeries;
    },
    epcas() {
      const hasData = this.chartData.filter(x => x.ep_cas);
      const ep1Count = hasData.filter(game => game.ep_cas.includes(this.eps[0]));
      const ep2Count = hasData.filter(game => game.ep_cas.includes(this.eps[1]));
      const ep3Count = hasData.filter(game => game.ep_cas.includes(this.eps[2]));
      const ep4Count = hasData.filter(game => game.ep_cas.includes(this.eps[3]));
      const ep5Count = hasData.filter(game => game.ep_cas.includes(this.eps[4]));
      const ep6Count = hasData.filter(game => game.ep_cas.includes(this.eps[5]));
      const ep7Count = hasData.filter(game => game.ep_cas.includes(this.eps[6]));

      if (this.casFilter === 'builder') {
        const ep1CountNew = ep1Count.filter(type => type.playstyle.includes('builder'));
        const ep2CountNew = ep2Count.filter(type => type.playstyle.includes('builder'));
        const ep3CountNew = ep3Count.filter(type => type.playstyle.includes('builder'));
        const ep4CountNew = ep4Count.filter(type => type.playstyle.includes('builder'));
        const ep5CountNew = ep5Count.filter(type => type.playstyle.includes('builder'));
        const ep6CountNew = ep6Count.filter(type => type.playstyle.includes('builder'));
        const ep7CountNew = ep7Count.filter(type => type.playstyle.includes('builder'));

        const newArray = [ep1CountNew.length, ep2CountNew.length, ep3CountNew.length,
          ep4CountNew.length, ep5CountNew.length, ep6CountNew.length, ep7CountNew.length];
        const newObjects = this.eps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.casFilter === 'cas') {
        const ep1CountNew = ep1Count.filter(type => type.playstyle.includes('cas'));
        const ep2CountNew = ep2Count.filter(type => type.playstyle.includes('cas'));
        const ep3CountNew = ep3Count.filter(type => type.playstyle.includes('cas'));
        const ep4CountNew = ep4Count.filter(type => type.playstyle.includes('cas'));
        const ep5CountNew = ep5Count.filter(type => type.playstyle.includes('cas'));
        const ep6CountNew = ep6Count.filter(type => type.playstyle.includes('cas'));
        const ep7CountNew = ep7Count.filter(type => type.playstyle.includes('cas'));

        const newArray = [ep1CountNew.length, ep2CountNew.length, ep3CountNew.length,
          ep4CountNew.length, ep5CountNew.length, ep6CountNew.length, ep7CountNew.length];
        const newObjects = this.eps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.casFilter === 'play') {
        const ep1CountNew = ep1Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep2CountNew = ep2Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep3CountNew = ep3Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep4CountNew = ep4Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep5CountNew = ep5Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep6CountNew = ep6Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const ep7CountNew = ep7Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));

        const newArray = [ep1CountNew.length, ep2CountNew.length, ep3CountNew.length,
          ep4CountNew.length, ep5CountNew.length, ep6CountNew.length, ep7CountNew.length];
        const newObjects = this.eps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }

      const newArray = [ep1Count.length, ep2Count.length, ep3Count.length, ep4Count.length, ep5Count.length, ep6Count.length, ep7Count.length];
      const newObjects = this.eps.map((a, i) => ({ x: a, y: newArray[i] }));
      const newSeries = [{ data: newObjects }];
      return newSeries;
    },
  },
};
</script>
