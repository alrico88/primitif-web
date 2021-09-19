<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Preset from './Preset.vue';

const { t } = useI18n();

interface IPreset {
  name: string,
  country: string,
  min: number,
  max: number,
  size: number,
}

const presets: IPreset[] = [
  {
    country: t('countries.es'),
    name: 'Primitiva',
    min: 1,
    max: 49,
    size: 6,
  },
  {
    country: t('countries.es'),
    name: 'Bono Loto',
    min: 1,
    max: 49,
    size: 6,
  },
  {
    country: t('countries.eu'),
    name: 'EuroMillones',
    min: 1,
    max: 50,
    size: 5,
  },
  {
    country: t('countries.es'),
    name: 'Power Ball',
    min: 1,
    max: 69,
    size: 5,
  },
  {
    country: t('countries.usa'),
    name: 'Mega Millions',
    min: 1,
    max: 70,
    size: 5,
  },
];
</script>

<template lang="pug">
ul.list-group.mb-0
  preset(
    v-for="item of presets",
    :name="item.name",
    :country="item.country",
    :min="item.min",
    :max="item.max",
    :size="item.size"
  )
</template>
