<script setup lang="ts">
import { onMounted } from 'vue';
import Combination from './components/Combination.vue';
import CombinationsHistory from './components/CombinationsHistory.vue';
import Params from './components/Params.vue';
import useMainStore from './store/index';
import EmptyCombination from './components/EmptyCombination.vue';

const store = useMainStore();

onMounted(() => {
  store.loadCombinationsHistoryFromStorage();
});
</script>

<template lang="pug">
.container
  .row.justify-content-center.pb-3
    .col-md-8
      .row.text-center.py-4
        .col
          img.img-fluid.logo(src="./assets/primitif.svg")
      .row
        .col
          .card
            .card-body
              params
      .row.py-4
        .col
          combination(v-if="store.combination.length > 0" :combination="store.combination")
          empty-combination(v-else)
      .row
        .col
          combinations-history
</template>

<style lang="scss" scoped>
.logo {
  height: 40px;
}
</style>
