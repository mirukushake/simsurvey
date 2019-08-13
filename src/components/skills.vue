<template>
  <div class="container">
    <p class="subtitle is-5">Cheats usage</p>
    <p>Skilling, careers, and making money are often seen as some of the main goals when playing The Sims, but they're also things that can be easily manipulated with cheats.
     I thought it would be interesting to see which of these goals players were stricter about.</p>
    <div class="columns">
      <div class="column"><apexchart height="300" type="donut" :options="moneyCheatsOptions" :series="moneyCheats"/></div>
      <div class="column"><apexchart height="300" type="donut" :options="skillCheatsOptions" :series="skillCheats" width="100%"/></div>
    </div>
    <div class="columns">
      <div class="column"><apexchart height="300" type="donut" :options="careerCheatsOptions" :series="careerCheats"/></div>
      <div class="column">

        <p>Players were much more liberal with money cheats than skilling or career cheats. I was surprised at how many
     did not use career cheats at all. However, as you can see below, a large number players actually do not give their
     sims the traditional careers, which may play a large part in this.</p>
      </div>
    </div>
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
      careerFilter: 'all',
      careerList: ['Actor/Actress (GF)', 'Astronaut', 'Athlete', 'Business', 'Conservationist (IL)', 'Criminal', 'Critic (CL)', 'Culinary', 'Detective (GTW)', 'Doctor (GTW)', 'Entertainer', 'Gardener (Seasons)', 'Military (SV)', 'Painter', 'Politician (CL)', 'Scientist (GTW)', 'Secret Agent', 'Social Media (CL)', 'Style Influencer', 'Tech Guru', 'Writer', 'Retail/Restaurant', 'Freelancer', 'Self-employed', 'Unemployed'],
      moneyCheatsOptions: {
        labels: ['Always', 'Often', 'Occasionally', 'Rarely', 'Never'],
        title: {
          text: 'Do you use money-related cheats?',
        },
        legend: {
          position: 'top',
        },
      },
      skillCheatsOptions: {
        labels: ['Always', 'Often', 'Occasionally', 'Rarely', 'Never'],
        title: {
          text: 'Do you use skill-related cheats?',
        },
        legend: {
          position: 'top',
        },
      },
      careerCheatsOptions: {
        labels: ['Always', 'Often', 'Occasionally', 'Rarely', 'Never'],
        title: {
          text: 'Do you use career-related cheats?',
        },
        legend: {
          position: 'top',
        },
      },
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
    moneyCheats() {
      const hasData = this.chartData.filter(x => x.money_cheat);
      const alwaysCount = hasData.filter(x => x.money_cheat === 'Always').length;
      const oftenCount = hasData.filter(x => x.money_cheat === 'Often').length;
      const sometimesCount = hasData.filter(x => x.money_cheat === 'Occassionally').length;
      const rarelyCount = hasData.filter(x => x.money_cheat === 'Rarely').length;
      const neverCount = hasData.filter(x => x.money_cheat === 'Never').length;
      const finalCount = [alwaysCount, oftenCount, sometimesCount, rarelyCount, neverCount];
      return finalCount;
    },
    skillCheats() {
      const hasData = this.chartData.filter(x => x.skill_cheat);
      const alwaysCount = hasData.filter(x => x.skill_cheat === 'Always').length;
      const oftenCount = hasData.filter(x => x.skill_cheat === 'Often').length;
      const sometimesCount = hasData.filter(x => x.skill_cheat === 'Occassionally').length;
      const rarelyCount = hasData.filter(x => x.skill_cheat === 'Rarely').length;
      const neverCount = hasData.filter(x => x.skill_cheat === 'Never').length;
      const finalCount = [alwaysCount, oftenCount, sometimesCount, rarelyCount, neverCount];
      return finalCount;
    },
    careerCheats() {
      const hasData = this.chartData.filter(x => x.career_cheat);
      const alwaysCount = hasData.filter(x => x.career_cheat === 'Always').length;
      const oftenCount = hasData.filter(x => x.career_cheat === 'Often').length;
      const sometimesCount = hasData.filter(x => x.career_cheat === 'Occassionally').length;
      const rarelyCount = hasData.filter(x => x.career_cheat === 'Rarely').length;
      const neverCount = hasData.filter(x => x.career_cheat === 'Never').length;
      const finalCount = [alwaysCount, oftenCount, sometimesCount, rarelyCount, neverCount];
      return finalCount;
    },
    careers() {
      const hasData = this.chartData.filter(x => x.careers);
      const c1Count = hasData.filter(career => career.careers.includes(this.careerList[0]));
      const c2Count = hasData.filter(career => career.careers.includes(this.careerList[1]));
      const c3Count = hasData.filter(career => career.careers.includes(this.careerList[2]));
      const c4Count = hasData.filter(career => career.careers.includes(this.careerList[3]));
      const c5Count = hasData.filter(career => career.careers.includes(this.careerList[4]));
      const c6Count = hasData.filter(career => career.careers.includes(this.careerList[5]));
      const c7Count = hasData.filter(career => career.careers.includes(this.careerList[6]));
      const c8Count = hasData.filter(career => career.careers.includes(this.careerList[7]));
      const c9Count = hasData.filter(career => career.careers.includes(this.careerList[8]));
      const c10Count = hasData.filter(career => career.careers.includes(this.careerList[9]));
      const c11Count = hasData.filter(career => career.careers.includes(this.careerList[10]));
      const c12Count = hasData.filter(career => career.careers.includes(this.careerList[11]));
      const c13Count = hasData.filter(career => career.careers.includes(this.careerList[12]));
      const c14Count = hasData.filter(career => career.careers.includes(this.careerList[13]));
      const c15Count = hasData.filter(career => career.careers.includes(this.careerList[14]));
      const c16Count = hasData.filter(career => career.careers.includes(this.careerList[15]));
      const c17Count = hasData.filter(career => career.careers.includes(this.careerList[16]));
      const c18Count = hasData.filter(career => career.careers.includes(this.careerList[17]));
      const c19Count = hasData.filter(career => career.careers.includes(this.careerList[18]));
      const c20Count = hasData.filter(career => career.careers.includes(this.careerList[19]));
      const c21Count = hasData.filter(career => career.careers.includes(this.careerList[20]));
      const c22Count = hasData.filter(career => career.careers.includes(this.careerList[21]));
      const c23Count = hasData.filter(career => career.careers.includes(this.careerList[22]));
      const c24Count = hasData.filter(career => career.careers.includes(this.careerList[23]));
      const c25Count = hasData.filter(career => career.careers.includes(this.careerList[24]));
      // const cOtherCount = hasData.filter(career => !this.careerList.includes(career.careers)).concat(this.careerList.filter(x => !hasData.careers.includes(x)));

      const newArray = [c1Count.length, c2Count.length, c3Count.length, c4Count.length, c5Count.length,
        c6Count.length, c7Count.length, c8Count.length, c9Count.length, c10Count.length, c11Count.length,
        c12Count.length, c13Count.length, c14Count.length, c15Count.length, c16Count.length, c17Count.length,
        c18Count.length, c19Count.length, c20Count.length, c21Count.length, c22Count.length, c23Count.length,
        c24Count.length, c25Count.length, 16];
      const newCareerList = this.careerList.concat('Other');
      const newObjects = newCareerList.map((a, i) => ({ x: a, y: newArray[i] }));
      const newSeries = [{ data: newObjects }];
      return newSeries;
    },
  },
};
</script>
