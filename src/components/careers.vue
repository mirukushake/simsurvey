<template>
  <div class="container">
     <div class="has-text-right">
         <button class="button "
            @click="modal = true">
            View other answers
        </button>
        </div>
<apexchart height="800" type="bar" :options="chartOptions" :series="careers"/>
<p>As you can see, the most popular "career" of choice was to have sims paint, write, etc. for money without entering the actual career, although the Painter and Writer careers <i>were</i>
  actually quite popular as well. Culinary was an exteremely popular base game choice, and Actor/Actress from Get Famous was the most popular DLC career.</p>

  <b-modal :active.sync="modal" :width="640">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                      <p class="title is-3">Other answers*</p>

                        <ul>
                           <li v-for="(answer, index) in otherAnswers" :key="index">{{ answer }}</li>
                        </ul>
                        <i class="has-text-grey">*Only unique answers are shown (repeats are shown only once)</i>
                    </div>
                </div>
            </div>
        </b-modal>
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
      modal: false,
      otherAnswers: ['Custom careers', 'Fishing', 'Mix', 'Running a vet clinic', 'Vet', 'No preference', 'Always rotate careers', 'Randomized', 'Porn Star', 'modded careers', 'Lawyer (mod)', 'Selling what I grow/find', 'Usually most of them', 'depends on the sim', 'don\'t know', 'CC careers'],
      careerList: ['Actor/Actress (GF)', 'Astronaut', 'Athlete', 'Business', 'Conservationist (IL)', 'Criminal', 'Critic (CL)', 'Culinary', 'Detective (GTW)', 'Doctor (GTW)', 'Entertainer', 'Gardener (Seasons)', 'Military (SV)', 'Painter', 'Politician (CL)', 'Scientist (GTW)', 'Secret Agent', 'Social Media (CL)', 'Style Influencer', 'Tech Guru', 'Writer', 'Retail/Restaurant', 'Freelancer', 'Self-employed', 'Unemployed'],
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

      const newArray = [c1Count.length, c2Count.length, c3Count.length, c4Count.length, c5Count.length,
        c6Count.length, c7Count.length, c8Count.length, c9Count.length, c10Count.length, c11Count.length,
        c12Count.length, c13Count.length, c14Count.length, c15Count.length, c16Count.length, c17Count.length,
        c18Count.length, c19Count.length, c20Count.length, c21Count.length, c22Count.length, c23Count.length,
        c24Count.length, c25Count.length, 17];
      const newCareerList = this.careerList.concat('Other');
      const newObjects = newCareerList.map((a, i) => ({ x: a, y: newArray[i] }));
      const newSeries = [{ data: newObjects }];
      return newSeries;
    },
  },
};
</script>
