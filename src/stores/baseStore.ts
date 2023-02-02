import { defineStore } from 'pinia';
import type { TCard, TColumn, TProject } from '@/types/types';
import api from '@/api/api';
import { getLocal } from '@/services/saveLocal';
import { isEmpty } from '@/utils/index';

type BaseStore = {
  // cards: TCard[];
  // cardsNumber: number;
  cardsByStage: Record<string, TCard[]>;
  columns: TColumn[];
  projects: Record<string, TProject>;
  projectsList: TProject[];
  selectedProject: string;
};

export const useBaseStore = defineStore('base', {
  state: () =>
    ({
      cardsByStage: {},
      // cardsNumber: 0,
      columns: [],
      // cards: [],
      projects: {},
      projectsList: [],
      selectedProject: '',
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
    filtredCards: (state) => {
      if (!state.selectedProject) return state.cardsByStage;

      const filtredCardsByStage: Record<string, TCard[]> = {};
      state.columns.forEach((el) => {
        filtredCardsByStage[el.code] = state.cardsByStage[el.code].filter(
          (card) => {
            console.log('---card.project', card.project);
            if (!card.project) return false;
            if (typeof card.project === 'string') {
              return card.project === state.selectedProject;
            }
            if (Array.isArray(card.project)) {
              return card.project.includes(state.selectedProject);
            }
          }
        );
      });
      console.log('--filtredCardsByStage', filtredCardsByStage);
      return filtredCardsByStage;
    },
  },
  actions: {
    async getData() {
      const localData = getLocal();
      console.log('---store getData localData', isEmpty(localData));
      if (!isEmpty(localData)) {
        this.columns = localData.columns;
        this.cardsByStage = localData.cardsByStage;
        // this.cardsNumber = localData.cardsNumber;
        this.projects = localData.projects;
        this.projectsList = Object.values(localData.projects);
        return;
      }
      console.log('---запрашиваем---');
      Promise.all([api.getColumns(), api.getCards(), api.getProjects()])
        .then(([columns, cards, projects]) => {
          this.columns = columns;
          // this.cards = cards;
          // this.cardsNumber = cards.length;
          this.projectsList = [
            {
              id: 0,
              code: '',
              name: 'Не выбрано',
              sort: 0,
            },
            ...projects,
          ];
          // this.projectsList = projects;
          console.log('---projects', projects);

          projects.forEach((project: TProject) => {
            this.projects[project.code] = project;
          });
          console.log('---this.projects', this.projects);

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
    createProjectList(
      cardProjects: boolean | string[] | string
    ): boolean | string[] {
      if (!cardProjects) return false;
      if (typeof cardProjects === 'string')
        return [this.projects[cardProjects].name];
      if (Array.isArray(cardProjects)) {
        return cardProjects.map((project) => this.projects[project].name);
      } else return false;
    },

    changeCardStage(stage: string, id: number) {
      const card = this.cardsByStage[stage].find((card) => card.id === id);
      if (card) card.stage = stage;
      console.log('--changeCardStage', this.cardsByStage[stage]);
    },

    sortCardsUp(stage: string) {
      console.log('---sortCardsUp', stage);
      this.cardsByStage[stage].sort((a: TCard, b: TCard) => a.score - b.score);
    },

    sortCardsDown(stage: string) {
      console.log('---sortCardsDown', stage);
      this.cardsByStage[stage].sort((a: TCard, b: TCard) => b.score - a.score);
    },

    setSelectedProject(project: string) {
      this.selectedProject = project;
    },

    addCard(card: TCard) {
      console.log('---addCaaard');
      this.cardsByStage[card.stage].push(card);
    },
  },
});
