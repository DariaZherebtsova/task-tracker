import { defineStore } from 'pinia';
import type { TCard } from '@/types/types';
import { getData } from '@/api/api';
import { unref } from 'vue';

type BaseStore = {
  cards: TCard[];
};

export const useBaseStore = defineStore('base', {
  state: () =>
    ({
      cards: [],
    } as BaseStore),

  getters: {
    getCardByStage: (state) => {
      return (stage: string) => {
        console.log('---getCardByStage', stage);
        const result = state.cards.filter((card) => card.stage === stage);
        console.log(result.length);
        return result;
      };
    },
  },
  actions: {
    async getCards() {
      getData().then((d) => {
        this.cards = d as TCard[];
      });
    },
  },
});
