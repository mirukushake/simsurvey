/* eslint-disable max-len */
<template>
  <div class="container">
    <p>You can use the buttons below to filter the results by playstyle type.</p>
    <h2 class="subtitle">Favorite GP for gameplay</h2>
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

    <apexchart height="300" type="bar" :options="chartOptions" :series="gpgameplay"/>
    Parenthood is absolutely the top GP, with Vampires coming in second place with barely more than half the votes for Parenthood.
     The gap becomes even more noticeable for gameplay-oriented players.
      <h2 class="subtitle">Favorite GP for build/buy</h2>
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

    <apexchart height="300" type="bar" :options="chartOptions" :series="gpbb"/>
    I thought for sure Jungle Adventure would be the winner in this category, but Parenthood was top again!
     For builders, the votes were distributed much more evenly than for other playstyles.
           <h2 class="subtitle">Favorite GP for CAS</h2>
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
    <apexchart height="300" type="bar" :options="chartOptions" :series="gpcas"/>
    Once again, Parenthood was the clear winner overall. Interestingly, Spa Day was much more popular with the CAS folks than other playstyles.
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
      gps: ['Outdoor Retreat', 'Spa Day', 'Dine Out', 'Vampires', 'Parenthood', 'Jungle Adventure', 'Strangerville'],
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
        chart: {
          fontFamily: '"Nunito", sans-serif',
          toolbar: {
            show: false,
          },
        },
      },
    };
  },
  computed: {
    gpgameplay() {
      const hasData = this.chartData.filter(x => x.gp_play);
      const gp1Count = hasData.filter(game => game.gp_play.includes(this.gps[0]));
      const gp2Count = hasData.filter(game => game.gp_play.includes(this.gps[1]));
      const gp3Count = hasData.filter(game => game.gp_play.includes(this.gps[2]));
      const gp4Count = hasData.filter(game => game.gp_play.includes(this.gps[3]));
      const gp5Count = hasData.filter(game => game.gp_play.includes(this.gps[4]));
      const gp6Count = hasData.filter(game => game.gp_play.includes(this.gps[5]));
      const gp7Count = hasData.filter(game => game.gp_play.includes(this.gps[6]));

      if (this.playFilter === 'builder') {
        const gp1CountNew = gp1Count.filter(type => type.playstyle.includes('builder'));
        const gp2CountNew = gp2Count.filter(type => type.playstyle.includes('builder'));
        const gp3CountNew = gp3Count.filter(type => type.playstyle.includes('builder'));
        const gp4CountNew = gp4Count.filter(type => type.playstyle.includes('builder'));
        const gp5CountNew = gp5Count.filter(type => type.playstyle.includes('builder'));
        const gp6CountNew = gp6Count.filter(type => type.playstyle.includes('builder'));
        const gp7CountNew = gp7Count.filter(type => type.playstyle.includes('builder'));

        const newArray = [gp1CountNew.length, gp2CountNew.length, gp3CountNew.length,
          gp4CountNew.length, gp5CountNew.length, gp6CountNew.length, gp7CountNew.length];
        const newObjects = this.gps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.playFilter === 'cas') {
        const gp1CountNew = gp1Count.filter(type => type.playstyle.includes('cas'));
        const gp2CountNew = gp2Count.filter(type => type.playstyle.includes('cas'));
        const gp3CountNew = gp3Count.filter(type => type.playstyle.includes('cas'));
        const gp4CountNew = gp4Count.filter(type => type.playstyle.includes('cas'));
        const gp5CountNew = gp5Count.filter(type => type.playstyle.includes('cas'));
        const gp6CountNew = gp6Count.filter(type => type.playstyle.includes('cas'));
        const gp7CountNew = gp7Count.filter(type => type.playstyle.includes('cas'));

        const newArray = [gp1CountNew.length, gp2CountNew.length, gp3CountNew.length,
          gp4CountNew.length, gp5CountNew.length, gp6CountNew.length, gp7CountNew.length];
        const newObjects = this.gps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.playFilter === 'play') {
        const gp1CountNew = gp1Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp2CountNew = gp2Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp3CountNew = gp3Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp4CountNew = gp4Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp5CountNew = gp5Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp6CountNew = gp6Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp7CountNew = gp7Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));

        const newArray = [gp1CountNew.length, gp2CountNew.length, gp3CountNew.length,
          gp4CountNew.length, gp5CountNew.length, gp6CountNew.length, gp7CountNew.length];
        const newObjects = this.gps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      const newArray = [gp1Count.length, gp2Count.length, gp3Count.length, gp4Count.length, gp5Count.length, gp6Count.length, gp7Count.length];
      const newObjects = this.gps.map((a, i) => ({ x: a, y: newArray[i] }));
      const newSeries = [{ data: newObjects }];
      return newSeries;
    },
    gpbb() {
      const hasData = this.chartData.filter(x => x.gp_bb);
      const gp1Count = hasData.filter(game => game.gp_bb.includes(this.gps[0]));
      const gp2Count = hasData.filter(game => game.gp_bb.includes(this.gps[1]));
      const gp3Count = hasData.filter(game => game.gp_bb.includes(this.gps[2]));
      const gp4Count = hasData.filter(game => game.gp_bb.includes(this.gps[3]));
      const gp5Count = hasData.filter(game => game.gp_bb.includes(this.gps[4]));
      const gp6Count = hasData.filter(game => game.gp_bb.includes(this.gps[5]));
      const gp7Count = hasData.filter(game => game.gp_bb.includes(this.gps[6]));

      if (this.bbFilter === 'builder') {
        const gp1CountNew = gp1Count.filter(type => type.playstyle.includes('builder'));
        const gp2CountNew = gp2Count.filter(type => type.playstyle.includes('builder'));
        const gp3CountNew = gp3Count.filter(type => type.playstyle.includes('builder'));
        const gp4CountNew = gp4Count.filter(type => type.playstyle.includes('builder'));
        const gp5CountNew = gp5Count.filter(type => type.playstyle.includes('builder'));
        const gp6CountNew = gp6Count.filter(type => type.playstyle.includes('builder'));
        const gp7CountNew = gp7Count.filter(type => type.playstyle.includes('builder'));

        const newArray = [gp1CountNew.length, gp2CountNew.length, gp3CountNew.length,
          gp4CountNew.length, gp5CountNew.length, gp6CountNew.length, gp7CountNew.length];
        const newObjects = this.gps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.bbFilter === 'cas') {
        const gp1CountNew = gp1Count.filter(type => type.playstyle.includes('cas'));
        const gp2CountNew = gp2Count.filter(type => type.playstyle.includes('cas'));
        const gp3CountNew = gp3Count.filter(type => type.playstyle.includes('cas'));
        const gp4CountNew = gp4Count.filter(type => type.playstyle.includes('cas'));
        const gp5CountNew = gp5Count.filter(type => type.playstyle.includes('cas'));
        const gp6CountNew = gp6Count.filter(type => type.playstyle.includes('cas'));
        const gp7CountNew = gp7Count.filter(type => type.playstyle.includes('cas'));

        const newArray = [gp1CountNew.length, gp2CountNew.length, gp3CountNew.length,
          gp4CountNew.length, gp5CountNew.length, gp6CountNew.length, gp7CountNew.length];
        const newObjects = this.gps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.bbFilter === 'play') {
        const gp1CountNew = gp1Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp2CountNew = gp2Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp3CountNew = gp3Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp4CountNew = gp4Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp5CountNew = gp5Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp6CountNew = gp6Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp7CountNew = gp7Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));

        const newArray = [gp1CountNew.length, gp2CountNew.length, gp3CountNew.length,
          gp4CountNew.length, gp5CountNew.length, gp6CountNew.length, gp7CountNew.length];
        const newObjects = this.gps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }

      const newArray = [gp1Count.length, gp2Count.length, gp3Count.length, gp4Count.length, gp5Count.length, gp6Count.length, gp7Count.length];
      const newObjects = this.gps.map((a, i) => ({ x: a, y: newArray[i] }));
      const newSeries = [{ data: newObjects }];
      return newSeries;
    },
    gpcas() {
      const hasData = this.chartData.filter(x => x.gp_cas);
      const gp1Count = hasData.filter(game => game.gp_cas.includes(this.gps[0]));
      const gp2Count = hasData.filter(game => game.gp_cas.includes(this.gps[1]));
      const gp3Count = hasData.filter(game => game.gp_cas.includes(this.gps[2]));
      const gp4Count = hasData.filter(game => game.gp_cas.includes(this.gps[3]));
      const gp5Count = hasData.filter(game => game.gp_cas.includes(this.gps[4]));
      const gp6Count = hasData.filter(game => game.gp_cas.includes(this.gps[5]));
      const gp7Count = hasData.filter(game => game.gp_cas.includes(this.gps[6]));

      if (this.casFilter === 'builder') {
        const gp1CountNew = gp1Count.filter(type => type.playstyle.includes('builder'));
        const gp2CountNew = gp2Count.filter(type => type.playstyle.includes('builder'));
        const gp3CountNew = gp3Count.filter(type => type.playstyle.includes('builder'));
        const gp4CountNew = gp4Count.filter(type => type.playstyle.includes('builder'));
        const gp5CountNew = gp5Count.filter(type => type.playstyle.includes('builder'));
        const gp6CountNew = gp6Count.filter(type => type.playstyle.includes('builder'));
        const gp7CountNew = gp7Count.filter(type => type.playstyle.includes('builder'));

        const newArray = [gp1CountNew.length, gp2CountNew.length, gp3CountNew.length,
          gp4CountNew.length, gp5CountNew.length, gp6CountNew.length, gp7CountNew.length];
        const newObjects = this.gps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.casFilter === 'cas') {
        const gp1CountNew = gp1Count.filter(type => type.playstyle.includes('cas'));
        const gp2CountNew = gp2Count.filter(type => type.playstyle.includes('cas'));
        const gp3CountNew = gp3Count.filter(type => type.playstyle.includes('cas'));
        const gp4CountNew = gp4Count.filter(type => type.playstyle.includes('cas'));
        const gp5CountNew = gp5Count.filter(type => type.playstyle.includes('cas'));
        const gp6CountNew = gp6Count.filter(type => type.playstyle.includes('cas'));
        const gp7CountNew = gp7Count.filter(type => type.playstyle.includes('cas'));

        const newArray = [gp1CountNew.length, gp2CountNew.length, gp3CountNew.length,
          gp4CountNew.length, gp5CountNew.length, gp6CountNew.length, gp7CountNew.length];
        const newObjects = this.gps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.casFilter === 'play') {
        const gp1CountNew = gp1Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp2CountNew = gp2Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp3CountNew = gp3Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp4CountNew = gp4Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp5CountNew = gp5Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp6CountNew = gp6Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const gp7CountNew = gp7Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));

        const newArray = [gp1CountNew.length, gp2CountNew.length, gp3CountNew.length,
          gp4CountNew.length, gp5CountNew.length, gp6CountNew.length, gp7CountNew.length];
        const newObjects = this.gps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }

      const newArray = [gp1Count.length, gp2Count.length, gp3Count.length, gp4Count.length, gp5Count.length, gp6Count.length, gp7Count.length];
      const newObjects = this.gps.map((a, i) => ({ x: a, y: newArray[i] }));
      const newSeries = [{ data: newObjects }];
      return newSeries;
    },
  },
};
</script>
