<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <apexchart height="300" type="donut" :options="freewillOptions" :series="freewill" />
        <div class="has-text-centered">
          <button class="button " @click="freewillModal = true">
            View other answers
          </button>
        </div>
      </div>
      <div class="column">
        <apexchart height="300" type="donut" :options="controlOptions" :series="control"
          width="100%" />
        <div class="has-text-centered">
          <button class="button " @click="controlModal = true">
            View other answers
          </button>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <apexchart height="300" type="donut" :options="rotateOptions" :series="rotate"
          width="100%" />
          <div class="has-text-centered">
          <button class="button " @click="rotateModal = true">
            View other answers
          </button>
        <!-- <apexchart height="300" type="donut" :options="agingOptions" :series="aging" /> -->
      </div>
      </div>
      <div class="column">
      <p>Most respondents kept free will on but their games weren't a free for all either: the
      majority still contolled all members in the household.
      There were several "other" responses for free will. Most were some variation of "free will off
      for selected sim," which I should have had as an option in the first place...
      The "other" responses for control were mostly from single sim players.</p>
        </div>
    </div>
    <p class="subtitle is-5">Aging</p>
<div class="has-text-right">
          <button class="button " @click="agingModal = true">
            View other answers
          </button>
        </div>
      <apexchart height="500" type="bar" :options="barOptions" :series="aging"/>
          <p>Normal was the most popular lifespan length, with long in second place. I was surprised that
      there weren't more people using custom lifespans since MCCC is so popular.
      People also tended to stick to one family, and "rotate often" and "rotate occasionally" were
      almost evenly split.</p>


    <b-modal :active.sync="freewillModal" :width="640">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <p class="title is-3">Other answers*</p>

            <ul>
              <li v-for="(answer, index) in freewillAnswers" :key="index">{{ answer }}</li>
            </ul>
            <i class="has-text-grey">*Only unique answers are shown (repeats are shown only
              once)</i>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal :active.sync="controlModal" :width="640">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <p class="title is-3">Other answers*</p>

            <ul>
              <li v-for="(answer, index) in controlAnswers" :key="index">{{ answer }}</li>
            </ul>
            <i class="has-text-grey">*Only unique answers are shown (repeats are shown only
              once)</i>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal :active.sync="agingModal" :width="640">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <p class="title is-3">Other answers*</p>

            <ul>
              <li v-for="(answer, index) in agingAnswers" :key="index">{{ answer }}</li>
            </ul>
            <i class="has-text-grey">*Only unique answers are shown (repeats are shown only
              once)</i>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal :active.sync="rotateModal" :width="640">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <p class="title is-3">Other answers*</p>

            <ul>
              <li v-for="(answer, index) in rotateAnswers" :key="index">{{ answer }}</li>
            </ul>
            <i class="has-text-grey">*Only unique answers are shown (repeats are shown only
              once)</i>
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
      freewillModal: false,
      controlModal: false,
      agingModal: false,
      rotateModal: false,
      freewillAnswers: ['Disabled for controlled', 'Off on selected sim', '90% of the time',
        'Off for selected sim', 'I turn it off/on depending on the Sim.',
        'off for selected sim', 'Off for current sim', 'off on selected sim',
        'On for everyone in household but off on selected sim ',
        'On if there are more than 4 sims', 'depends on the family size/challenge',
        'Both, though usually on with micromanagement.',
        'On when there’s kids in the family for the parenthood pack, making mess etc. ',
        'free will off for selected sims ', 'Depends on what I\'m doing', 'Both',
        'Off, unless doing challenge that requires it to be on.',
        'Disabled for current sim, enabled for others.', 'Switch', 'it depends',
        'Disabled for controlled sim', 'Depends',
        'I didn’t know this was a thing so I have no idea', 'usually', 'most of the time',
        'Off for selected Sim', 'for all but the sim im controlling, unless its a family',
        'i dont know what that is lol', 'On, but only if I have over 3 sims.',
        'Depends on size of family', 'Sim selected no. Everyone else, yes.',
        'On with autonomy interference from MCCC', 'Depends on household', 'Sometimes',
        'Depends on how big household + off for selected sim',
        'On unless I’m trying to do something specific',
        'Depends on whether the sims have toddlers', 'Unsure ',
        'on, but deactivated for active sim',
        'Sometimes on when playing with multiple sims in a family, off other times',
        'Free Will, heavily controlled with No Autonomy Mods', 'off on selected',
        'Off for selected sim, high for everyone else',
        'Off for active Sim, On for everyone else',
      ],
      controlAnswers: ['Usually play one sim households',
        'As long ad everybody gets their homework done, I don\'t care',
        'Yes, unless it is a challenge that requires me to only control one sim.',
        'usually only play with one person, but occasionally rotating',
        'control one, keep track of the others through door locks',
        'Rarely control kids or younger, but 100% on others.',
        'Solo sim nothing else to control.',
      ],
      agingAnswers: ['depends on the challenge/usually either off or normal',
        'Depends on the save ', 'Played households off. NPCs on. ', 'Depends on the save file',
        'Either on normal or off completely ',
        'Off- never/rarely age, unless a challenge requires aging.',
        'On/normal for legacy, off for worldbuilding',
        'It depends on what my goals for my sims are and how long it\'ll take to reach said goals.', 'Can\'t remember!', 'Only on for very few families',
        'i never do gameplay long enough to notice',
        'Effectively immortal favored sims, normal lifespan on everyone else',
        'Depends on the game I usually have it off but when its on its on long ',
        'On - Long but I often manually age up sims sooner', 'Alternate between on and off ',
        'depends on the family I play with',
      ],
      rotateAnswers: ['A couple main families, rotate only to world build',
        'I rotate playing multiple households from the same family tree',
        'One family/heir per save', 'I tend to switch between multiple saves.',
        'Stay with one family per save file, but often rotate between save files.',
        'Rotate households but within the same family ',
        'One household per savestate - I learned the hard way that rotational breaks easily. ><',
        'I play the relatives/cousins family for a couple of minutes every now and then, getting them married etc but I stick to my main family/heir',
        'One family, get tired of them, move to a new one, eventually start a new save file',
        'Rotate but in the same save file',
        'Rotate often, keep all sims on one save file so I can see them around',
        'One or two primary families + "side characters" that get played to add outside influence to the story',
        'Don’t play',
      ],
      freewillOptions: {
        labels: ['On', 'Off', 'Other'],
        title: {
          text: 'Do you have free will on or off?',
        },
        legend: {
          position: 'top',
        },
      },
      controlOptions: {
        labels: ['Yes', 'Rotate between sims depending on factors like career, goals, etc.',
          'Control only a few, leave others alone', 'Control just one, leave all others alone',
          'Other',
        ],
        title: {
          text: 'Do you generally try to control all sims in a household?',
        },
        legend: {
          position: 'top',
        },
      },
      rotateOptions: {
        labels: ['One family/heir', 'Rotate often', 'Rotate occasionally', 'Other'],
        title: {
          text: 'Do you stay with one family or rotate?',
        },
        legend: {
          position: 'top',
        },
      },
      barOptions: {
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
        xaxis: {
          categories: ['On - Short', 'On - Normal', 'On - Long', 'On - Custom length',
            'Off - Never/rarely age up', 'Off - Age up manually', 'Other',
          ],
        },
        tooltip: {
          enabled: false,
        },
      },
    };
  },
  computed: {
    freewill() {
      const onCount = this.chartData.filter(x => x.freewill === 'On').length;
      const offCount = this.chartData.filter(x => x.freewill === 'Off').length;
      const otherCount = this.chartData.filter(x => x.freewill === 'Other').length;
      const finalCount = [onCount, offCount, otherCount];
      return finalCount;
    },
    control() {
      const yesCount = this.chartData.filter(x => x.control === 'yes').length;
      const rotateCount = this.chartData.filter(x => x.control === 'rotate').length;
      const fewCount = this.chartData.filter(x => x.control === 'few').length;
      const oneCount = this.chartData.filter(x => x.control === 'one').length;
      const otherCount = this.chartData.filter(x => x.control === 'other').length;
      const finalCount = [yesCount, rotateCount, fewCount, oneCount, otherCount];
      return finalCount;
    },
    aging() {
      const shortCount = this.chartData.filter(x => x.aging === 'short').length;
      const normalCount = this.chartData.filter(x => x.aging === 'normal').length;
      const longCount = this.chartData.filter(x => x.aging === 'long').length;
      const customCount = this.chartData.filter(x => x.aging === 'custom').length;
      const offCount = this.chartData.filter(x => x.aging === 'off').length;
      const manualCount = this.chartData.filter(x => x.aging === 'manual').length;
      const otherCount = this.chartData.filter(x => x.aging === 'other').length;
      const finalCount = [{
        data: [shortCount, normalCount, longCount, customCount, offCount, manualCount,
          otherCount],
      }];
      return finalCount;
    },
    rotate() {
      const oneCount = this.chartData.filter(x => x.rotate === 'one').length;
      const rotateCount = this.chartData.filter(x => x.rotate === 'often').length;
      const sometimesCount = this.chartData.filter(x => x.rotate === 'sometimes').length;
      const otherCount = this.chartData.filter(x => x.rotate === 'other').length;
      const finalCount = [oneCount, rotateCount, sometimesCount, otherCount];
      return finalCount;
    },
  },
};

</script>
