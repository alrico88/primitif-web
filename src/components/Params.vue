<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import useStore from '../store';
import LotteryIcon from '~icons/fluent/lottery-24-regular';
import PresetIcon from '~icons/icon-park-outline/list-two';
import Presets from './Presets.vue';

const { t } = useI18n();

const store = useStore();

const showPresets = ref(false);

function togglePresets() {
  showPresets.value = !showPresets.value;
}
</script>

<template lang="pug">
form.form
  .row.row-cols-md-3.row-cols-1
    .col
      .form-group
        label(for="minNumber") {{ t('params.lowest') }}
        input.form-control#minNumber(type="number", v-model.number="store.min", :min="1")
    .col
      .form-group
        label(for="maxNumber") {{ t('params.highest') }}
        input.form-control#maxNumber(type="number", v-model.number="store.max")
    .col
      .form-group
        label(for="size") {{ t('params.numbers') }}
        input.form-control#size(type="number", v-model.number="store.size", :min="1")
  .row
    .col
      .d-flex
        button.btn.shadow-sm.btn-light.border.w-100.me-2(
          type="button",
          @click="togglePresets"
        ) #[preset-icon] {{ t('params.presets') }}
        button.btn.shadow-sm.btn-primary.border.border-primary.w-100.ms-2(
          type="button",
          @click="() => store.createCombination()"
        ) #[lottery-icon] {{ t('params.getCombination') }}
  .row(v-show="showPresets")
    .col.pt-3.pb-2
      presets
</template>
