import { defineStore } from 'pinia';
import type { TCard, TColumn } from '@/types/types';
import { getData } from '@/api/api';
import { unref } from 'vue';

type BaseStore = {
  cards: TCard[];
  cardsByStage: Record<string, TCard[]>;
  columns: TColumn[];
};

export const useBaseStore = defineStore('base', {
  state: () =>
    ({
      cardsByStage: {},
      columns: [
        {
          id: 1,
          sort: 10,
          name: 'Стадия 1',
          code: 'stage-1',
        },
        {
          id: 2,
          sort: 20,
          name: 'Стадия 2',
          code: 'stage-2',
        },
        {
          id: 3,
          sort: 30,
          name: 'Стадия 3',
          code: 'stage-3',
        },
        {
          id: 4,
          sort: 40,
          name: 'Стадия 4',
          code: 'stage-4',
        },
        {
          id: 5,
          sort: 30,
          name: 'Стадия 3',
          code: 'stage-3',
        },
        {
          id: 6,
          sort: 40,
          name: 'Стадия 4',
          code: 'stage-4',
        },
      ],
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
      getData().then((data) => {
        this.cards = data;

        console.log('---getCards', data);

        this.columns.forEach((el) => {
          this.cardsByStage[el.code] = [];
        });

        data.forEach((card: TCard) => {
          this.cardsByStage[card.stage].push(card);
        });

        // console.log('---cardsByStage', this.cardsByStage);
      });
    },

    changeCardStage(stage: string, id: number) {
      const card = this.cardsByStage[stage].find((card) => card.id === id);
      if (card) card.stage = stage;
      console.log('--changeCardStage', this.cardsByStage[stage]);
    },
  },
});
