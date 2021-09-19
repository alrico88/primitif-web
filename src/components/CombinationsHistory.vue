<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import useMainStore from '../store/index';
import TrashIcon from '~icons/bi/trash';
import Digit from './Digit.vue';
import IconEmpty from '~icons/fluent/grid-dots-24-regular';
import IconDownload from '~icons/mdi/download';
import { getDateLocale } from '../i18n/locale';

dayjs.locale(getDateLocale());

const { t } = useI18n();

const store = useMainStore();

function getDayOfWeek(date: Date): string {
  return dayjs(date).format('dddd');
}

function formatDate(date: Date): string {
  return dayjs(date).format('DD MMM YYYY HH:mm');
}

const historyNotEmpty = computed(() => store.combinationHistorySorted.length > 0);
</script>

<template lang="pug">
.card
  .card-header.p-2
    .d-flex.justify-content-between.align-items-center
      div {{ t('history.title') }}
      div
        button.btn.btn-outline-danger.btn-sm(
          type="button",
          @click="store.clearCombinationsHistory",
          :disabled="!historyNotEmpty"
        ) #[trash-icon] {{ t('history.clear') }}
  .card-body.p-0
    table.table.table-light.table-responsive.table-sm.mb-0.table-stackable
      tbody.text-center
        tr(v-if="historyNotEmpty", v-for="item of store.combinationHistorySorted")
          td.align-middle.text-start
            span.fw-bold.text-primary {{ getDayOfWeek(item.date) }}
            br
            | {{ formatDate(item.date) }}
          td.align-middle
            .d-flex.justify-content-between
              div(v-for="number of item.combination")
                digit(:digit="number", size="sm")
          td.align-middle
            button.btn.btn-sm.btn-outline-danger(
              @click="() => store.deleteCombinationHistoryItem(item.id)",
            ) #[trash-icon]
        td.text-center.py-3(v-else)
          icon-empty(:style="{fontSize: '30px'}")
          br
          | {{ t('history.empty') }}
  .card-footer.p-2.small
    .d-flex.justify-content-between.align-items-center
      div {{ t('history.help') }}
      div
        button.btn.btn-sm.btn-outline-secondary(
          @click="store.downloadCombinationsHistory",
          :disabled="!historyNotEmpty"
        ) #[icon-download] {{ t('history.download') }}
</template>
