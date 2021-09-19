<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import useStore from '../store/index';

const { t } = useI18n();

const store = useStore();

// eslint-disable-next-line no-undef
const props = defineProps({
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

function applyPreset() {
  store.setPreset(props.min, props.max, props.size);
}

const isActive = computed(() => store.min === props.min
  && store.max === props.max
  && store.size === props.size);

const className = computed(() => ({
  active: isActive.value,
  'text-dark': isActive.value,
}));
</script>

<template lang="pug">
a.list-group-item(href="#", @click.prevent="applyPreset", :class="className")
  .row.align-items-center
    .col-4
      p.lead.fw-bold {{ props.name }}
      p.align-bottom {{ props.country }}
    .col
      p.fw-bold {{ t('preset.from') }}
      p.align-bottom {{ props.min }}
    .col
      p.fw-bold {{ t('preset.to') }}
      p.align-bottom {{ props.max }}
    .col
      p.fw-bold {{ t('preset.numbers') }}
      p.align-bottom {{ props.size }}
</template>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
</style>
