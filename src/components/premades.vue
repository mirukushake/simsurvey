<template>
  <div class="container">
    <p class="subtitle is-5">EA premades</p>
    <div class="columns">
      <div class="column"><apexchart height="300" type="donut" :options="premadesOptions" :series="premades"/><div class="has-text-centered">
          <button class="button " @click="eaModal = true">
            View other answers
          </button>
        </div></div>
      <div class="column"><p>Most people are content to just leave the premades in the world, with some giving them makeovers or changing their families. However,
 people almost never actually play them.</p>
      </div>
    </div>

 <p class="subtitle is-5">Gallery/CC sims</p>
 <div class="columns">
      <div class="column"><apexchart height="300" type="donut" :options="galleryPlayableOptions" :series="galleryPlayabale"/><div class="has-text-centered">
          <button class="button " @click="playableModal = true">
            View other answers
          </button>
        </div></div>
      <div class="column"><apexchart height="300" type="donut" :options="galleryNPCOptions" :series="galleryNPC"/><div class="has-text-centered">
          <button class="button " @click="npcModal = true">
            View other answers
          </button>
        </div>
      </div>
    </div>
    <p>Respondents generally seemed to prefer making their own playable sims. When it comes to being used as townies/NPCs though, gallery sims get a bit more use.</p>

    <b-modal :active.sync="eaModal" :width="640">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                      <p class="title is-3">Other answers*</p>

                        <ul>
                           <li v-for="(answer, index) in eaAnswers" :key="index">{{ answer }}</li>
                        </ul>
                        <i class="has-text-grey">*Only unique answers are shown (repeats are shown only once)</i>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal :active.sync="playableModal" :width="640">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                      <p class="title is-3">Other answers*</p>

                        <ul>
                           <li v-for="(answer, index) in playableAnswers" :key="index">{{ answer }}</li>
                        </ul>
                        <i class="has-text-grey">*Only unique answers are shown (repeats are shown only once)</i>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal :active.sync="npcModal" :width="640">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                      <p class="title is-3">Other answers*</p>

                        <ul>
                           <li v-for="(answer, index) in npcAnswers" :key="index">{{ answer }}</li>
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
      eaModal: false,
      playableModal: false,
      npcModal: false,
      eaAnswers: ['Keep but sometimes add members to their households or give them makeovers', 'Keep them and give them makeovers ', 'keep in world, play with some', 'I play in my own custom save file', 'You can delete them?!', 'Change Thema in CAS', 'Keep them in the world but make them over', 'i edit them but keep them', 'makeover in cas and leave in world', 'They\'re long dead!', 'i add alpha cc to them', 'I leave them in the game unless I need room as i use the same save file for everyone.', 'Keep them but edit looks a bit (skin overlays mostly and hot and cold weather outfits)', 'keep and modify ones I like', 'Find ways to kill them', 'Recently started revamping some worlds and removing all associated sims, but not always.', 'Depends on the save', 'Evict to make room for my sims', 'Leave them all to die out until I need a bachelor / bachelorette', 'I usually give them makeovers.', 'Evict them from houses to make room for own sims but I don\'t delete them because they\'re the only good sims to see around town that aren\'t my own', 'Move out, give makeovers and keep as townies. Some have been added to played households cause they happened to fit the role I needed.', 'Redesign them'],
      playableAnswers: ['My own', 'No gallery/cc on consoles', 'use as bases', 'On console', 'Sometimes I use them as a base for male sims', 'I have before but none in current save file', 'Only if they have a trait I need like alien pregnancy', 'I use edited gallery sims', 'Can\'t'],
      npcAnswers: ['only from Maxis\' account', 'No but that might be a good idea.', 'Not yet, but I might', 'No gallery/cc on consoles', 'I put the Maxis made Sims in my game as townies.', 'So far I\'ve only downloaded someone\'s Meadow Thayer because I missed her.', 'On console', 'I prefer to make my own, or makeover gallery sims', 'Can\'t', 'I delete some and remake the others lol'],
      premadesOptions: {
        labels: ['Keep in world', 'Play with them', 'Delete all', 'Delete some', 'Other'],
        title: {
          text: 'What do you do with the premade households?',
        },
        legend: {
          position: 'top',
        },
      },
      galleryPlayableOptions: {
        labels: ['Always', 'Often', 'Occasionally', 'Rarely', 'Never', 'Other'],
        title: {
          text: 'Do you use sims from the gallery/CC creators as playable sims?',
        },
        legend: {
          position: 'top',
        },
      },
      galleryNPCOptions: {
        labels: ['Always', 'Often', 'Occasionally', 'Rarely', 'Never', 'Other'],
        title: {
          text: 'Do you use sims from the gallery/CC creators as townies?',
        },
        legend: {
          position: 'top',
        },
      },
    };
  },
  computed: {
    premades() {
      const keepCount = this.chartData.filter(x => x.premades === 'keep').length;
      const playCount = this.chartData.filter(x => x.premades === 'play').length;
      const allCount = this.chartData.filter(x => x.premades === 'delete all').length;
      const someCount = this.chartData.filter(x => x.premades === 'delete some').length;
      const otherCount = this.chartData.filter(x => x.premades === 'other').length;
      const finalCount = [keepCount, playCount, allCount, someCount, otherCount];
      return finalCount;
    },
    galleryPlayabale() {
      const hasData = this.chartData.filter(x => x.gallery_sims);
      const alwaysCount = hasData.filter(x => x.gallery_sims === 'Always').length;
      const oftenCount = hasData.filter(x => x.gallery_sims === 'Often').length;
      const sometimesCount = hasData.filter(x => x.gallery_sims === 'Occassionally').length;
      const rarelyCount = hasData.filter(x => x.gallery_sims === 'Rarely').length;
      const neverCount = hasData.filter(x => x.gallery_sims === 'Never').length;
      const otherCount = hasData.filter(x => x.gallery_sims !== 'Always' && x.gallery_sims !== 'Often' && x.gallery_sims !== 'Occassionally' && x.gallery_sims !== 'Rarely' && x.gallery_sims !== 'Never').length;
      const finalCount = [alwaysCount, oftenCount, sometimesCount, rarelyCount, neverCount, otherCount];
      return finalCount;
    },
    galleryNPC() {
      const hasData = this.chartData.filter(x => x.gallery_townie);
      const alwaysCount = hasData.filter(x => x.gallery_townie === 'Always').length;
      const oftenCount = hasData.filter(x => x.gallery_townie === 'Often').length;
      const sometimesCount = hasData.filter(x => x.gallery_townie === 'Occassionally').length;
      const rarelyCount = hasData.filter(x => x.gallery_townie === 'Rarely').length;
      const neverCount = hasData.filter(x => x.gallery_townie === 'Never').length;
      const otherCount = hasData.filter(x => x.gallery_townie !== 'Always' && x.gallery_townie !== 'Often' && x.gallery_townie !== 'Occassionally' && x.gallery_townie !== 'Rarely' && x.gallery_townie !== 'Never').length;
      const finalCount = [alwaysCount, oftenCount, sometimesCount, rarelyCount, neverCount, otherCount];
      return finalCount;
    },
  },
};
</script>
