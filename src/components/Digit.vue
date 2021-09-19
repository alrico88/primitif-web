<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps({
  digit: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: false,
    default: 'md',
  },
});
</script>

<template lang="pug">
.numberCircle.shadow-sm(:class="props.size") {{ props.digit }}
</template>
