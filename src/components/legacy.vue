<template>
  <div class="container">
    <h2 class="subtitle">Legacy Play</h2>
<span class="chartfloatleft"><apexchart height="300" type="donut" :options="sparesOptions" :series="spares"/></span>
<span class="chartfloatright"><apexchart height="300" type="donut" :options="legacyOptions" :series="legacy"/></span>
 <div class="is-clearfix"></div>

More than half of legacy players moved out their spares and left them to heir own devices. Most of the "other" responses were "do not play legacy" answers.
Most legacy player's longest generations were within the 0-5 range, with the most common answer being 3, and a median of 4. The longest was 26, the length of the Alphabet Legacy achievement. I wondered if anyone has finished "Legendary Legacy" (100 gens)?
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
        labels: ['0-5', '6-10', '11-15', '16-20', '21-26'],
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
      const first = hasData.filter(a => a.gens >= 0 && a.gens <= 5).length;
      const second = hasData.filter(a => a.gens >= 6 && a.gens <= 10).length;
      const third = hasData.filter(a => a.gens >= 11 && a.gens <= 15).length;
      const fourth = hasData.filter(a => a.gens >= 16 && a.gens <= 20).length;
      const fifth = hasData.filter(a => a.gens >= 21 && a.gens <= 26).length;
      const newSeries = [first, second, third, fourth, fifth];
      return newSeries;
    },
  },
};
</script>
