import { defineStore } from 'pinia';
import type { TCard, TColumn, TProject } from '@/types/types';
import { getCards, getColumns, getProgects } from '@/api/api';

type BaseStore = {
  cards: TCard[];
  cardsByStage: Record<string, TCard[]>;
  columns: TColumn[];
  progects: Record<string, TProject>;
};

export const useBaseStore = defineStore('base', {
  state: () =>
    ({
      cardsByStage: {},
      columns: [],
      cards: [],
      progects: {},
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
    async getData() {
      Promise.all([getColumns(), getCards(), getProgects()])
        .then(([columns, cards, progects]) => {
          this.columns = columns;
          this.cards = cards;

          progects.forEach((project: TProject) => {
            this.progects[project.code] = project;
          });
          console.log('---this.progects', this.progects);

          this.columns.forEach((el) => {
            this.cardsByStage[el.code] = [];
          });
          cards.forEach((card: TCard) => {
            // добавляем название проекта/проектов на русском
            card.projectName = this.createProjectList(card.project);
            this.cardsByStage[card.stage].push(card);
          });
          console.log('---cardsByStage', this.cardsByStage);
        })
        .catch((err) => {
          console.log('--err getData', err);
        });
    },

    // формируем массив с русскими названиями проектов
    createProjectList(cardProjects: boolean | [] | string): boolean | string[] {
      if (!cardProjects) return false;
      if (typeof cardProjects === 'string')
        return [this.progects[cardProjects].name];
      if (Array.isArray(cardProjects)) {
        return cardProjects.map((project) => this.progects[project].name);
      } else return false;
    },

    changeCardStage(stage: string, id: number) {
      const card = this.cardsByStage[stage].find((card) => card.id === id);
      if (card) card.stage = stage;
      console.log('--changeCardStage', this.cardsByStage[stage]);
    },
  },
});
