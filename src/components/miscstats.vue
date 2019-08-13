<template>
  <div class="container">
    <p class="subtitle is-5">Hours in game</p>
    <div class="columns">
      <div class="column"><apexchart height="300" type="donut" :options="hoursOptions" :series="hours"/></div>
      <div class="column"><p>I struggled with best way to display this data since there was a such a huge range! After filtering out the literally impossible values, I had a range of 1 to 10961 hours (an average of 6 hours a day for 5 years).
 However, the median was 598 hours, and the most frequent answer was 100 hours, so I focused on the lower end of the scale.</p>
      </div>
    </div>
    <p class="subtitle is-5">Active saves</p>
    <div class="columns">
      <div class="column"><apexchart height="300" type="donut" :options="savesOptions" :series="saves"/></div>
      <div class="column"><p>I defined an active save as a save you intend to go back to, so basically any save you see as not yet finished, whether or not you ever actually do go back to it or not.
 As much as "starting yet another new save" is a meme, the numbers were quite low, with a median of 3, and the most frequent answer being 2. So, people at least aren't keeping the saves to play them later.
  The highest number was 2023, but it's so much higher than the second-highest 124, I'm not sure it was an actual answer...</p>
      </div>
    </div>
    <p class="subtitle is-5">Challenges</p>
    <div class="columns">
      <div class="column"><apexchart height="300" type="donut" :options="challengesOptions" :series="challenges"/></div>
      <div class="column"><p>Answers were quite mixed, but slightly half of respondents said they do challenges at least occasionally.</p>
      </div>
    </div>
    <p>Below you can see the most popular challenges and links to the rules. The number of responses is probably inaccurate but I think I at least listed all with at least a couple of responses.
       The legacy challenge (or some version of it) was the most popular, but there were quite a few different ones listed.
    <div class="has-text-right">
          <button class="button " @click="challengeModal = true">
            View all answers
          </button>
        </div>
        <b-table
            :data="challengeTable"
            default-sort="count"
            default-sort-direction="desc"
            striped
            class="b-space"
            >

            <template slot-scope="props">
                <b-table-column field="challenge" label="Challenge" sortable>
                    {{ props.row.challenge }}
                </b-table-column>

                <b-table-column field="count" label="Responses" numeric sortable>
                    {{ props.row.count }}
                </b-table-column>

                <b-table-column label="Rules">
                    <span>
                      <a :href="props.row.rules">
                        <b-icon icon="link">
                        </b-icon>
                        </a>
                    </span>
                </b-table-column>
            </template>
        </b-table>

<p class="subtitle is-5">Playstyle quirks</p>
<p>Playstyle quirks are the things that make your playstyle unique, that one thing you always end up doing when you play. I've listed below some interesting ones/my favorites,
  but I think you should definitely check out the full list!
</p>
   <div class="has-text-right">
          <button class="button " @click="quirkModal = true">
            View all answers
          </button>
        </div>
        <b-table
            :data="quirkTable"
            striped
            class="b-space"
            >
            <template slot-scope="props">
                <b-table-column field="quirk" label="">
                    {{ props.row.quirk }}
                </b-table-column>
            </template>
        </b-table>

        <b-modal :active.sync="challengeModal" :width="640">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                      <p class="title is-3">All answers*</p>

                        <ul>
                           <li v-for="(answer, index) in challengeAnswers" :key="index">{{ answer }}</li>
                        </ul>
                        <i class="has-text-grey">*Only unique answers are shown (repeats are shown only once)</i>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal :active.sync="quirkModal" :width="640">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                      <p class="title is-3">All answers*</p>

                        <ul>
                           <li v-for="(answer, index) in quirkAnswers" :key="index">{{ answer }}</li>
                        </ul>
                        <i class="has-text-grey">*Only unique answers are shown (repeats are shown only once)</i>
                    </div>
                </div>
            </div>
        </b-modal>
  </div>
</template>

<script>
import challengeList from '@/assets/challenges.json';
import quirkList from '@/assets/quirks.json';

export default {
  props: {
    chartData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      challengeModal: false,
      quirkModal: false,
      challengeAnswers: challengeList,
      quirkAnswers: quirkList,
      hoursOptions: {
        labels: ['0-500', '501-1000', '1001-1500', '1501-2000', '2001+'],
        title: {
          text: 'How many hours have you played?',
        },
        legend: {
          position: 'top',
        },
      },
      savesOptions: {
        labels: ['1-3', '4-7', '8-11', '12-15', '16+'],
        title: {
          text: 'How many active saves do you have?',
        },
        legend: {
          position: 'top',
        },
      },
      challengesOptions: {
        labels: ['Always', 'Often', 'Occasionally', 'Rarely', 'Never', 'Haven\'t but would like to try'],
        title: {
          text: 'Do you do challenges?',
        },
        legend: {
          position: 'top',
        },
      },
      challengeTable: [
        {
          challenge: 'Legacy',
          count: 187,
          rules: 'https://www.simslegacychallenge.com/the-sims-4-legacy-challenge-rules/',
        },
        {
          challenge: 'Rags to riches',
          count: 81,
          rules: 'http://modthesims.info/t/550861',
        },
        {
          challenge: 'Asylum',
          count: 11,
          rules: 'https://forums.thesims.com/en_US/discussion/792947/the-sims-4-asylum-challenge',
        },
        {
          challenge: 'Not so berry',
          count: 56,
          rules: 'https://lilsimsie.tumblr.com/post/157671494755/not-so-berry-legacy-challenge',
        },
        {
          challenge: 'Black widow',
          count: 27,
          rules: 'https://forums.thesims.com/en_US/discussion/916212/the-black-widow-challenge-with-extra-challenges',
        },
        {
          challenge: '100 baby',
          count: 91,
          rules: 'https://snarky-sims-witch.tumblr.com/post/181535303038/tos-i-am-the-original-writer-of-the-sims-4-version',
        },
        {
          challenge: 'Decades',
          count: 19,
          rules: 'https://forums.thesims.com/en_US/discussion/816128/decades-challenge',
        },
        {
          challenge: 'Disney princess',
          count: 12,
          rules: 'https://twinfinite.net/2017/07/the-sims-4-disney-princess-challenge/5/',
        },
        {
          challenge: 'Runaway teen',
          count: 14,
          rules: 'https://forums.thesims.com/en_us/discussion/790920/runaway-teen-challenge-updated-03-10-19',
        },
        {
          challenge: 'Homeless',
          count: 9,
          rules: 'https://sims-online.com/sims-4-homeless-challenge/',
        },
        {
          challenge: 'Off the grid',
          count: 3,
          rules: 'https://simscommunity.info/2017/09/24/the-sims-4-off-the-grid-challenge/',
        },
        {
          challenge: 'Super sim',
          count: 21,
          rules: 'https://lithiarch.weebly.com/the-super-sim-challenge.html',
        },
        {
          challenge: 'Perfect sim',
          count: 4,
          rules: 'https://forums.thesims.com/en_US/discussion/836668/perfect-sim-challenge',
        },
        {
          challenge: 'Apocalypse',
          count: 5,
          rules: 'https://www.simslegacychallenge.com/sims-4-apocalypse-challenge-rules/',
        },
        {
          challenge: 'Breed out the ugly',
          count: 8,
          rules: 'https://forums.thesims.com/en_US/discussion/415867/breeding-out-the-ugly-legacy-challange-inspired-by-siminthesun-eugenia-barkley',
        },
      ],
      quirkTable: [
        {
          quirk: 'I try to give them daily habits like waking up early for coffee or going for a jog after work',
        },
        {
          quirk: 'I never make male sims. I never really make families, "I\'ll tend to keep a single non-aging sim and have aging on for unplayed sims. I\'ll always have a dog/cat as a companion. 90% of my plays are rags to riches. I\'m not that creative."',
        },
        {
          quirk: "Everyone's gay",
        },
        {
          quirk: 'Micromanaging',
        },
        {
          quirk: 'Everyone must be happy always, no drama ever',
        },
        {
          quirk: 'I rebuild worlds completely with my own creations',
        },
        {
          quirk: 'Almost only playing occult sims',
        },
        {
          quirk: "They're all Hetalia characters",
        },
        {
          quirk: 'I murder random townies alot',
        },
        {
          quirk: 'Love to create drama in the town',
        },
        {
          quirk: 'Binge play then not play for months',
        },
        {
          quirk: 'Everyone shags everyone (except children)',
        },
        {
          quirk: 'Almost all pregnancies in my game are "accidental" / out of wedlock',
        },
        {
          quirk: 'Always have a matriarchy',
        },
        {
          quirk: 'Sims based on my original characters',
        },
        {
          quirk: 'I like to create painting dungeons',
        },
        {
          quirk: 'I rarely play without doing a challenge.',
        },
        {
          quirk: 'Start off with good intentions, end up ruining everyone\'s lives and trying to marry the grim reaper',
        },
        {
          quirk: 'All sims have to look decent',
        },
        {
          quirk: 'I come up with my sims’ life stories pretty much before they are even born. Whenever a new pack is released or there is a new feature added to the game I try to pick out a sim that I can play through that career/skill/hobby with. I also come up with very dramatic stories that play out more in my head than in my game.',
        },
        {
          quirk: 'Play as realistically as possible, no cheating ever, no quitting without saving, what happens, happens and just go along with it.',
        },
      ],
    };
  },
  computed: {
    hours() {
      const hasData = this.chartData.filter(x => x.hours && x.hours < (365 * 24 * 5));
      const first = hasData.filter(a => a.hours >= 0 && a.hours <= 500).length;
      const second = hasData.filter(a => a.hours >= 501 && a.hours <= 1000).length;
      const third = hasData.filter(a => a.hours >= 1001 && a.hours <= 1500).length;
      const fourth = hasData.filter(a => a.hours >= 1501 && a.hours <= 2000).length;
      const fifth = hasData.filter(a => a.hours >= 2001).length;
      const finalCount = [first, second, third, fourth, fifth];
      return finalCount;
    },
    saves() {
      const hasData = this.chartData.filter(x => x.saves);
      const first = hasData.filter(a => a.saves >= 1 && a.saves <= 3).length;
      const second = hasData.filter(a => a.saves >= 4 && a.saves <= 7).length;
      const third = hasData.filter(a => a.saves >= 8 && a.saves <= 11).length;
      const fourth = hasData.filter(a => a.saves >= 12 && a.saves <= 15).length;
      const fifth = hasData.filter(a => a.saves >= 16).length;
      const newSeries = [first, second, third, fourth, fifth];
      return newSeries;
    },
    challenges() {
      const hasData = this.chartData.filter(x => x.challenges);
      const alwaysCount = hasData.filter(x => x.challenges === 'Always').length;
      const oftenCount = hasData.filter(x => x.challenges === 'Often').length;
      const sometimesCount = hasData.filter(x => x.challenges === 'Ocassionally').length;
      const rarelyCount = hasData.filter(x => x.challenges === 'Rarely').length;
      const neverCount = hasData.filter(x => x.challenges === 'Never').length;
      const tryCount = hasData.filter(x => x.challenges === 'Haven\'t but would like to try').length;
      const finalCount = [alwaysCount, oftenCount, sometimesCount, rarelyCount, neverCount, tryCount];
      return finalCount;
    },
  },
};
</script>
