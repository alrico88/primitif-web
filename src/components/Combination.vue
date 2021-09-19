<script lang="ts" setup>
import Digit from './Digit.vue';

// eslint-disable-next-line no-undef
const props = defineProps<{
  combination: number[],
}>();
</script>

<template lang="pug">
table.table.table-borderless.mb-0
  tbody
    tr
      td.align-middle.text-center(v-for="number of props.combination")
        digit(:digit="number")
</template>

<style lang="scss" scoped>
.table {
  table-layout: fixed;
}
</style>
