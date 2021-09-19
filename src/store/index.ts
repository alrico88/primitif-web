import { defineStore } from 'pinia';
import orderBy from 'lodash/orderBy';
import { v4 as uuid } from 'uuid';
import { saveAs } from 'file-saver';
import { unparse } from 'papaparse';
import { createCombination } from 'primitif';
import { storage } from '../helpers/storage';

type Combination = number[];

interface CombinationHistoryItem {
  id: string,
  date: Date,
  combination: Combination,
}

export default defineStore('main', {
  state: () => ({
    min: 1,
    max: 49,
    size: 6,
    combination: [] as Combination,
    combinationsHistory: [] as CombinationHistoryItem[],
  }),
  getters: {
    combinationHistorySorted(): CombinationHistoryItem[] {
      return orderBy(this.combinationsHistory, (d) => new Date(d.date), 'desc');
    },
  },
  actions: {
    createCombination(): void {
      this.combination = createCombination(this.min, this.max, this.size) as Combination;
      this.combinationsHistory.push({
        date: new Date(),
        combination: [...this.combination],
        id: uuid(),
      });
      this.updateCombinationsHistoryStorage();
    },
    clearCombinationsHistory(): void {
      this.combinationsHistory = [];
      this.updateCombinationsHistoryStorage();
    },
    deleteCombinationHistoryItem(id: string): void {
      const cloned = [...this.combinationsHistory];
      const pos = cloned.findIndex((d) => d.id === id);
      cloned.splice(pos, 1);

      this.combinationsHistory = cloned;

      this.updateCombinationsHistoryStorage();
    },
    setPreset(min: number, max: number, size: number): void {
      this.min = min;
      this.max = max;
      this.size = size;
    },
    loadCombinationsHistoryFromStorage(): void {
      const history = storage.getItem('combinations');

      if (history !== null) {
        this.combinationsHistory = history as CombinationHistoryItem[];
      }
    },
    updateCombinationsHistoryStorage(): void {
      storage.setItem('combinations', this.combinationsHistory);
    },
    downloadCombinationsHistory(): void {
      const blob = new Blob([unparse(this.combinationsHistory)], { type: 'text/plain;charset=utf-8' });

      saveAs(blob, 'primitif-history.csv');
    },
  },
});
