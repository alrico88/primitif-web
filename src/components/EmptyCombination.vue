<script lang="ts" setup>
import useMainStore from '../store/index';

const store = useMainStore();
</script>

<template lang="pug">
table.table.table-borderless.mb-0
  tbody
    tr
      td.align-middle.text-center(v-for="i of store.size")
        .numberCircle.shadow-sm ?
</template>

<style lang="scss" scoped>
.table {
  table-layout: fixed;
}
</style>
