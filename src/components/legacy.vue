<template>
  <div class="container">
        <div class="columns">
      <div class="column">
        <apexchart height="300" type="donut" :options="sparesOptions" :series="spares"/>
        <div class="has-text-centered">
          <button class="button " @click="modal = true">
            View other answers
          </button>
        </div>
      </div>
      <div class="column">
        <apexchart height="300" type="donut" :options="legacyOptions" :series="legacy"/>
      </div>
    </div>

<p>More than half of legacy players moved out their spares and left them to their own devices; however, many set them up nicely before setting them free. Most of the "other" responses were of the "do not play legacy" variety.
Most legacy player's longest generations were within the 0-5 range, with the most common answer being 3, and a median of 4. The longest was 26, the length of the Alphabet Legacy achievement. I wondered if anyone has finished "Legendary Legacy" (100 gens)?</p>

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
      otherAnswers: ['I dont play legacy style', 'I don\'t play legacies', 'Move them out, but set up their career, spouse, etc before not playing with them', 'Because I have story progression with MCCC, I move them out knowing they will live their life. I don\'t play them, but I will give their new family a makeover and maintain friendly relations with my "protagonists". ', 'Haven\'t done a legacy yet', 'They usually have a child or so. And then I don’t play with them anymore. ', 'I don\'t play legacy style', 'Move out some, keep one because I really like them.', 'Move them out, set up their life, leave them alone', 'Move them out, play with some', 'Move them out, give them a life of their own and then don\'t play with them', 'Not sure. They haven’t moved out yet. ', 'sometimes play', 'Don\'t play legacy', 'keep them in the main household and move them out when i\'m tired of them/find a reason for them to leave.', 'Move out and set up for future (house, spouse) then let MCCC take over', 'Marry them off, get them pregnant/have a child, then move out spare/spouse/their children. They\'re then left alone (besides being invited over by family etc)', 'N/A', 'Finish aspirations then move out.', 'A mix', 'Move them out and occasionally visit them', 'I do not play Legacy', 'kill them in a pool with walls', 'i don’t play legacy style ever', 'I dont', '1st and/or 3rd option with third I move out with the ehir and don\'t play the spares left behind', 'Sometimes I move them out, sometimes they stay in the family home, it depends on how I\'m feeling', 'dont play legacy', 'Never played legacy style', 'I move out my heir 9 times out of 10 to get their own house/apartment, then let the spares "take care" of their parents', 'Haven’t played legacy ', 'n/a; don’t play legacy', 'I don\'t play Legacy Style', 'I don’t play legacy', 'Move them out, set them up, play them occasionally', 'No legacy', 'Legacy style is sooooo boring and limits spontaneity, imagination and takes the joy of playing at Sims so i don\'t play it.', 'Don’t play', 'i don’t play legacy style', 'I do all three!'],
      sparesOptions: {
        labels: ['Move out and do not play', 'Move out and play', 'Leave in main household', 'Other'],
        title: {
          text: 'What do you do with spares?',
        },
        chart: {
          fontFamily: '"Nunito", sans-serif',
        },
        legend: {
          position: 'top',
        },
      },
      legacyOptions: {
        labels: ['0-3', '4-7', '8-11', '12-15', '16+'],
        title: {
          text: 'What is your longest legacy?',
        },
        chart: {
          fontFamily: '"Nunito", sans-serif',
        },
        legend: {
          position: 'top',
        },
      },
    };
  },
  computed: {
    spares() {
      const moveCount = this.chartData.filter(x => x.spares === 'move out').length;
      const playCount = this.chartData.filter(x => x.spares === 'play').length;
      const leaveCount = this.chartData.filter(x => x.spares === 'leave').length;
      const otherCount = this.chartData.filter(x => x.spares === 'other').length;
      const finalCount = [moveCount, playCount, leaveCount, otherCount];
      return finalCount;
    },
    legacy() {
      const hasData = this.chartData.filter(x => x.gens);
      const first = hasData.filter(a => a.gens >= 0 && a.gens <= 3).length;
      const second = hasData.filter(a => a.gens >= 4 && a.gens <= 7).length;
      const third = hasData.filter(a => a.gens >= 8 && a.gens <= 11).length;
      const fourth = hasData.filter(a => a.gens >= 12 && a.gens <= 15).length;
      const fifth = hasData.filter(a => a.gens >= 16).length;
      const newSeries = [first, second, third, fourth, fifth];
      return newSeries;
    },
  },
};
</script>
