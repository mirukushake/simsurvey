/* eslint-disable max-len */
<template>
  <div class="container">
    <p class="subtitle is-5">Gameplay</p>
    <section class="has-text-centered">
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

    <apexchart height="500" type="bar" :options="chartOptions" :series="spgameplay"/>

    <p>The community-guided stuff pack is the clear winner. I don't know what it is about virtual laundry when I don't want to touch my <i>real</i> laundry with
     a 10-foot pole, but I'm also a big fan of Laundry Day Stuff.</p>

      <p class="subtitle is-5">Build/Buy</p>
          <section>
        <div class="block has-text-centered">
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

    <apexchart height="500" type="bar" :options="chartOptions" :series="spbb"/>

    <p>Laundry Day Stuff stays ahead of the packs, but with less of a margin. Movie Hangout stayed in second, while Vintage Glamour gained a lot of traction.</p>
           <p class="subtitle is-5">CAS</p>
          <section>
        <div class="block has-text-centered">
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
    <apexchart height="500" type="bar" :options="chartOptions" :series="spcas"/>
    <p>Although Laundry Day still kicked butt, there was a large increase in those who voted "None." CAS had compartively more none votes in all categories, probably
      since a lot of people can get arguably better stuff via CC.</p>
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
      sps: ['Luxury Party Stuff', 'Perfect Patio Stuff', 'Cool Kitchen Stuff', 'Spooky Stuff', 'Movie Hangout Stuff', 'Romantic Garden Stuff', 'Kids Room Stuff',
        'Backyard Stuff', 'Vintage Glamour Stuff', 'Bowling Night Stuff', 'Fitness Stuff', 'Toddler Stuff', 'Laundry Day Stuff', 'My First Pet Stuff', 'None'],
      chartOptions: {
        theme: {
          monochrome: {
            enabled: true,
            color: '#00838f',
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
    spgameplay() {
      const hasData = this.chartData.filter(x => x.sp_play);
      const sp1Count = hasData.filter(game => game.sp_play.includes(this.sps[0]));
      const sp2Count = hasData.filter(game => game.sp_play.includes(this.sps[1]));
      const sp3Count = hasData.filter(game => game.sp_play.includes(this.sps[2]));
      const sp4Count = hasData.filter(game => game.sp_play.includes(this.sps[3]));
      const sp5Count = hasData.filter(game => game.sp_play.includes(this.sps[4]));
      const sp6Count = hasData.filter(game => game.sp_play.includes(this.sps[5]));
      const sp7Count = hasData.filter(game => game.sp_play.includes(this.sps[6]));
      const sp8Count = hasData.filter(game => game.sp_play.includes(this.sps[7]));
      const sp9Count = hasData.filter(game => game.sp_play.includes(this.sps[8]));
      const sp10Count = hasData.filter(game => game.sp_play.includes(this.sps[9]));
      const sp11Count = hasData.filter(game => game.sp_play.includes(this.sps[10]));
      const sp12Count = hasData.filter(game => game.sp_play.includes(this.sps[11]));
      const sp13Count = hasData.filter(game => game.sp_play.includes(this.sps[12]));
      const sp14Count = hasData.filter(game => game.sp_play.includes(this.sps[13]));
      const sp15Count = hasData.filter(game => game.sp_play.includes(this.sps[14]));

      if (this.playFilter === 'builder') {
        const sp1CountNew = sp1Count.filter(type => type.playstyle.includes('builder'));
        const sp2CountNew = sp2Count.filter(type => type.playstyle.includes('builder'));
        const sp3CountNew = sp3Count.filter(type => type.playstyle.includes('builder'));
        const sp4CountNew = sp4Count.filter(type => type.playstyle.includes('builder'));
        const sp5CountNew = sp5Count.filter(type => type.playstyle.includes('builder'));
        const sp6CountNew = sp6Count.filter(type => type.playstyle.includes('builder'));
        const sp7CountNew = sp7Count.filter(type => type.playstyle.includes('builder'));
        const sp8CountNew = sp8Count.filter(type => type.playstyle.includes('builder'));
        const sp9CountNew = sp9Count.filter(type => type.playstyle.includes('builder'));
        const sp10CountNew = sp10Count.filter(type => type.playstyle.includes('builder'));
        const sp11CountNew = sp11Count.filter(type => type.playstyle.includes('builder'));
        const sp12CountNew = sp12Count.filter(type => type.playstyle.includes('builder'));
        const sp13CountNew = sp13Count.filter(type => type.playstyle.includes('builder'));
        const sp14CountNew = sp14Count.filter(type => type.playstyle.includes('builder'));
        const sp15CountNew = sp15Count.filter(type => type.playstyle.includes('builder'));


        const newArray = [sp1CountNew.length, sp2CountNew.length, sp3CountNew.length,
          sp4CountNew.length, sp5CountNew.length, sp6CountNew.length, sp7CountNew.length,
          sp8CountNew.length, sp9CountNew.length, sp10CountNew.length, sp11CountNew.length,
          sp12CountNew.length, sp13CountNew.length, sp14CountNew.length, sp15CountNew.length];
        const newObjects = this.sps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.playFilter === 'cas') {
        const sp1CountNew = sp1Count.filter(type => type.playstyle.includes('cas'));
        const sp2CountNew = sp2Count.filter(type => type.playstyle.includes('cas'));
        const sp3CountNew = sp3Count.filter(type => type.playstyle.includes('cas'));
        const sp4CountNew = sp4Count.filter(type => type.playstyle.includes('cas'));
        const sp5CountNew = sp5Count.filter(type => type.playstyle.includes('cas'));
        const sp6CountNew = sp6Count.filter(type => type.playstyle.includes('cas'));
        const sp7CountNew = sp7Count.filter(type => type.playstyle.includes('cas'));
        const sp8CountNew = sp8Count.filter(type => type.playstyle.includes('cas'));
        const sp9CountNew = sp9Count.filter(type => type.playstyle.includes('cas'));
        const sp10CountNew = sp10Count.filter(type => type.playstyle.includes('cas'));
        const sp11CountNew = sp11Count.filter(type => type.playstyle.includes('cas'));
        const sp12CountNew = sp12Count.filter(type => type.playstyle.includes('cas'));
        const sp13CountNew = sp13Count.filter(type => type.playstyle.includes('cas'));
        const sp14CountNew = sp14Count.filter(type => type.playstyle.includes('cas'));
        const sp15CountNew = sp15Count.filter(type => type.playstyle.includes('cas'));

        const newArray = [sp1CountNew.length, sp2CountNew.length, sp3CountNew.length,
          sp4CountNew.length, sp5CountNew.length, sp6CountNew.length, sp7CountNew.length,
          sp8CountNew.length, sp9CountNew.length, sp10CountNew.length, sp11CountNew.length,
          sp12CountNew.length, sp13CountNew.length, sp14CountNew.length, sp15CountNew.length];
        const newObjects = this.sps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.playFilter === 'play') {
        const sp1CountNew = sp1Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp2CountNew = sp2Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp3CountNew = sp3Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp4CountNew = sp4Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp5CountNew = sp5Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp6CountNew = sp6Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp7CountNew = sp7Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp8CountNew = sp8Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp9CountNew = sp9Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp10CountNew = sp10Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp11CountNew = sp11Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp12CountNew = sp12Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp13CountNew = sp13Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp14CountNew = sp14Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp15CountNew = sp15Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));

        const newArray = [sp1CountNew.length, sp2CountNew.length, sp3CountNew.length,
          sp4CountNew.length, sp5CountNew.length, sp6CountNew.length, sp7CountNew.length,
          sp8CountNew.length, sp9CountNew.length, sp10CountNew.length, sp11CountNew.length,
          sp12CountNew.length, sp13CountNew.length, sp14CountNew.length, sp15CountNew.length];
        const newObjects = this.sps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      const newArray = [sp1Count.length, sp2Count.length, sp3Count.length, sp4Count.length, sp5Count.length, sp6Count.length, sp7Count.length,
        sp8Count.length, sp9Count.length, sp10Count.length, sp11Count.length,
        sp12Count.length, sp13Count.length, sp14Count.length, sp15Count.length];
      const newObjects = this.sps.map((a, i) => ({ x: a, y: newArray[i] }));
      const newSeries = [{ data: newObjects }];
      return newSeries;
    },
    spbb() {
      const hasData = this.chartData.filter(x => x.sp_bb);
      const sp1Count = hasData.filter(game => game.sp_bb.includes(this.sps[0]));
      const sp2Count = hasData.filter(game => game.sp_bb.includes(this.sps[1]));
      const sp3Count = hasData.filter(game => game.sp_bb.includes(this.sps[2]));
      const sp4Count = hasData.filter(game => game.sp_bb.includes(this.sps[3]));
      const sp5Count = hasData.filter(game => game.sp_bb.includes(this.sps[4]));
      const sp6Count = hasData.filter(game => game.sp_bb.includes(this.sps[5]));
      const sp7Count = hasData.filter(game => game.sp_bb.includes(this.sps[6]));
      const sp8Count = hasData.filter(game => game.sp_bb.includes(this.sps[7]));
      const sp9Count = hasData.filter(game => game.sp_bb.includes(this.sps[8]));
      const sp10Count = hasData.filter(game => game.sp_bb.includes(this.sps[9]));
      const sp11Count = hasData.filter(game => game.sp_bb.includes(this.sps[10]));
      const sp12Count = hasData.filter(game => game.sp_bb.includes(this.sps[11]));
      const sp13Count = hasData.filter(game => game.sp_bb.includes(this.sps[12]));
      const sp14Count = hasData.filter(game => game.sp_bb.includes(this.sps[13]));
      const sp15Count = hasData.filter(game => game.sp_bb.includes(this.sps[14]));

      if (this.bbFilter === 'builder') {
        const sp1CountNew = sp1Count.filter(type => type.playstyle.includes('builder'));
        const sp2CountNew = sp2Count.filter(type => type.playstyle.includes('builder'));
        const sp3CountNew = sp3Count.filter(type => type.playstyle.includes('builder'));
        const sp4CountNew = sp4Count.filter(type => type.playstyle.includes('builder'));
        const sp5CountNew = sp5Count.filter(type => type.playstyle.includes('builder'));
        const sp6CountNew = sp6Count.filter(type => type.playstyle.includes('builder'));
        const sp7CountNew = sp7Count.filter(type => type.playstyle.includes('builder'));
        const sp8CountNew = sp8Count.filter(type => type.playstyle.includes('builder'));
        const sp9CountNew = sp9Count.filter(type => type.playstyle.includes('builder'));
        const sp10CountNew = sp10Count.filter(type => type.playstyle.includes('builder'));
        const sp11CountNew = sp11Count.filter(type => type.playstyle.includes('builder'));
        const sp12CountNew = sp12Count.filter(type => type.playstyle.includes('builder'));
        const sp13CountNew = sp13Count.filter(type => type.playstyle.includes('builder'));
        const sp14CountNew = sp14Count.filter(type => type.playstyle.includes('builder'));
        const sp15CountNew = sp15Count.filter(type => type.playstyle.includes('builder'));


        const newArray = [sp1CountNew.length, sp2CountNew.length, sp3CountNew.length,
          sp4CountNew.length, sp5CountNew.length, sp6CountNew.length, sp7CountNew.length,
          sp8CountNew.length, sp9CountNew.length, sp10CountNew.length, sp11CountNew.length,
          sp12CountNew.length, sp13CountNew.length, sp14CountNew.length, sp15CountNew.length];
        const newObjects = this.sps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.bbFilter === 'cas') {
        const sp1CountNew = sp1Count.filter(type => type.playstyle.includes('cas'));
        const sp2CountNew = sp2Count.filter(type => type.playstyle.includes('cas'));
        const sp3CountNew = sp3Count.filter(type => type.playstyle.includes('cas'));
        const sp4CountNew = sp4Count.filter(type => type.playstyle.includes('cas'));
        const sp5CountNew = sp5Count.filter(type => type.playstyle.includes('cas'));
        const sp6CountNew = sp6Count.filter(type => type.playstyle.includes('cas'));
        const sp7CountNew = sp7Count.filter(type => type.playstyle.includes('cas'));
        const sp8CountNew = sp8Count.filter(type => type.playstyle.includes('cas'));
        const sp9CountNew = sp9Count.filter(type => type.playstyle.includes('cas'));
        const sp10CountNew = sp10Count.filter(type => type.playstyle.includes('cas'));
        const sp11CountNew = sp11Count.filter(type => type.playstyle.includes('cas'));
        const sp12CountNew = sp12Count.filter(type => type.playstyle.includes('cas'));
        const sp13CountNew = sp13Count.filter(type => type.playstyle.includes('cas'));
        const sp14CountNew = sp14Count.filter(type => type.playstyle.includes('cas'));
        const sp15CountNew = sp15Count.filter(type => type.playstyle.includes('cas'));

        const newArray = [sp1CountNew.length, sp2CountNew.length, sp3CountNew.length,
          sp4CountNew.length, sp5CountNew.length, sp6CountNew.length, sp7CountNew.length,
          sp8CountNew.length, sp9CountNew.length, sp10CountNew.length, sp11CountNew.length,
          sp12CountNew.length, sp13CountNew.length, sp14CountNew.length, sp15CountNew.length];
        const newObjects = this.sps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.bbFilter === 'play') {
        const sp1CountNew = sp1Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp2CountNew = sp2Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp3CountNew = sp3Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp4CountNew = sp4Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp5CountNew = sp5Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp6CountNew = sp6Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp7CountNew = sp7Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp8CountNew = sp8Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp9CountNew = sp9Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp10CountNew = sp10Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp11CountNew = sp11Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp12CountNew = sp12Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp13CountNew = sp13Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp14CountNew = sp14Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp15CountNew = sp15Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));

        const newArray = [sp1CountNew.length, sp2CountNew.length, sp3CountNew.length,
          sp4CountNew.length, sp5CountNew.length, sp6CountNew.length, sp7CountNew.length,
          sp8CountNew.length, sp9CountNew.length, sp10CountNew.length, sp11CountNew.length,
          sp12CountNew.length, sp13CountNew.length, sp14CountNew.length, sp15CountNew.length];
        const newObjects = this.sps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      const newArray = [sp1Count.length, sp2Count.length, sp3Count.length, sp4Count.length, sp5Count.length, sp6Count.length, sp7Count.length,
        sp8Count.length, sp9Count.length, sp10Count.length, sp11Count.length,
        sp12Count.length, sp13Count.length, sp14Count.length, sp15Count.length];
      const newObjects = this.sps.map((a, i) => ({ x: a, y: newArray[i] }));
      const newSeries = [{ data: newObjects }];
      return newSeries;
    },
    spcas() {
      const hasData = this.chartData.filter(x => x.sp_cas);
      const sp1Count = hasData.filter(game => game.sp_cas.includes(this.sps[0]));
      const sp2Count = hasData.filter(game => game.sp_cas.includes(this.sps[1]));
      const sp3Count = hasData.filter(game => game.sp_cas.includes(this.sps[2]));
      const sp4Count = hasData.filter(game => game.sp_cas.includes(this.sps[3]));
      const sp5Count = hasData.filter(game => game.sp_cas.includes(this.sps[4]));
      const sp6Count = hasData.filter(game => game.sp_cas.includes(this.sps[5]));
      const sp7Count = hasData.filter(game => game.sp_cas.includes(this.sps[6]));
      const sp8Count = hasData.filter(game => game.sp_cas.includes(this.sps[7]));
      const sp9Count = hasData.filter(game => game.sp_cas.includes(this.sps[8]));
      const sp10Count = hasData.filter(game => game.sp_cas.includes(this.sps[9]));
      const sp11Count = hasData.filter(game => game.sp_cas.includes(this.sps[10]));
      const sp12Count = hasData.filter(game => game.sp_cas.includes(this.sps[11]));
      const sp13Count = hasData.filter(game => game.sp_cas.includes(this.sps[12]));
      const sp14Count = hasData.filter(game => game.sp_cas.includes(this.sps[13]));
      const sp15Count = hasData.filter(game => game.sp_cas.includes(this.sps[14]));

      if (this.casFilter === 'builder') {
        const sp1CountNew = sp1Count.filter(type => type.playstyle.includes('builder'));
        const sp2CountNew = sp2Count.filter(type => type.playstyle.includes('builder'));
        const sp3CountNew = sp3Count.filter(type => type.playstyle.includes('builder'));
        const sp4CountNew = sp4Count.filter(type => type.playstyle.includes('builder'));
        const sp5CountNew = sp5Count.filter(type => type.playstyle.includes('builder'));
        const sp6CountNew = sp6Count.filter(type => type.playstyle.includes('builder'));
        const sp7CountNew = sp7Count.filter(type => type.playstyle.includes('builder'));
        const sp8CountNew = sp8Count.filter(type => type.playstyle.includes('builder'));
        const sp9CountNew = sp9Count.filter(type => type.playstyle.includes('builder'));
        const sp10CountNew = sp10Count.filter(type => type.playstyle.includes('builder'));
        const sp11CountNew = sp11Count.filter(type => type.playstyle.includes('builder'));
        const sp12CountNew = sp12Count.filter(type => type.playstyle.includes('builder'));
        const sp13CountNew = sp13Count.filter(type => type.playstyle.includes('builder'));
        const sp14CountNew = sp14Count.filter(type => type.playstyle.includes('builder'));
        const sp15CountNew = sp15Count.filter(type => type.playstyle.includes('builder'));


        const newArray = [sp1CountNew.length, sp2CountNew.length, sp3CountNew.length,
          sp4CountNew.length, sp5CountNew.length, sp6CountNew.length, sp7CountNew.length,
          sp8CountNew.length, sp9CountNew.length, sp10CountNew.length, sp11CountNew.length,
          sp12CountNew.length, sp13CountNew.length, sp14CountNew.length, sp15CountNew.length];
        const newObjects = this.sps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.casFilter === 'cas') {
        const sp1CountNew = sp1Count.filter(type => type.playstyle.includes('cas'));
        const sp2CountNew = sp2Count.filter(type => type.playstyle.includes('cas'));
        const sp3CountNew = sp3Count.filter(type => type.playstyle.includes('cas'));
        const sp4CountNew = sp4Count.filter(type => type.playstyle.includes('cas'));
        const sp5CountNew = sp5Count.filter(type => type.playstyle.includes('cas'));
        const sp6CountNew = sp6Count.filter(type => type.playstyle.includes('cas'));
        const sp7CountNew = sp7Count.filter(type => type.playstyle.includes('cas'));
        const sp8CountNew = sp8Count.filter(type => type.playstyle.includes('cas'));
        const sp9CountNew = sp9Count.filter(type => type.playstyle.includes('cas'));
        const sp10CountNew = sp10Count.filter(type => type.playstyle.includes('cas'));
        const sp11CountNew = sp11Count.filter(type => type.playstyle.includes('cas'));
        const sp12CountNew = sp12Count.filter(type => type.playstyle.includes('cas'));
        const sp13CountNew = sp13Count.filter(type => type.playstyle.includes('cas'));
        const sp14CountNew = sp14Count.filter(type => type.playstyle.includes('cas'));
        const sp15CountNew = sp15Count.filter(type => type.playstyle.includes('cas'));

        const newArray = [sp1CountNew.length, sp2CountNew.length, sp3CountNew.length,
          sp4CountNew.length, sp5CountNew.length, sp6CountNew.length, sp7CountNew.length,
          sp8CountNew.length, sp9CountNew.length, sp10CountNew.length, sp11CountNew.length,
          sp12CountNew.length, sp13CountNew.length, sp14CountNew.length, sp15CountNew.length];
        const newObjects = this.sps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      if (this.casFilter === 'play') {
        const sp1CountNew = sp1Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp2CountNew = sp2Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp3CountNew = sp3Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp4CountNew = sp4Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp5CountNew = sp5Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp6CountNew = sp6Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp7CountNew = sp7Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp8CountNew = sp8Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp9CountNew = sp9Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp10CountNew = sp10Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp11CountNew = sp11Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp12CountNew = sp12Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp13CountNew = sp13Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp14CountNew = sp14Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));
        const sp15CountNew = sp15Count.filter(type => type.playstyle.includes('family') || type.playstyle.includes('family') || type.playstyle.includes('other'));

        const newArray = [sp1CountNew.length, sp2CountNew.length, sp3CountNew.length,
          sp4CountNew.length, sp5CountNew.length, sp6CountNew.length, sp7CountNew.length,
          sp8CountNew.length, sp9CountNew.length, sp10CountNew.length, sp11CountNew.length,
          sp12CountNew.length, sp13CountNew.length, sp14CountNew.length, sp15CountNew.length];
        const newObjects = this.sps.map((a, i) => ({ x: a, y: newArray[i] }));
        const newSeries = [{ data: newObjects }];
        return newSeries;
      }
      const newArray = [sp1Count.length, sp2Count.length, sp3Count.length, sp4Count.length, sp5Count.length, sp6Count.length, sp7Count.length,
        sp8Count.length, sp9Count.length, sp10Count.length, sp11Count.length,
        sp12Count.length, sp13Count.length, sp14Count.length, sp15Count.length];
      const newObjects = this.sps.map((a, i) => ({ x: a, y: newArray[i] }));
      const newSeries = [{ data: newObjects }];
      return newSeries;
    },
  },
};
</script>
