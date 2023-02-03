import { defineStore } from 'pinia';
import type { TCard, TColumn, TProject } from '@/types/types';
import api from '@/api/api';
import { getLocal } from '@/services/saveLocal';
import { isEmpty } from '@/utils/index';

type BaseStore = {
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
      columns: [],
      projects: {},
      projectsList: [],
      selectedProject: '',
    } as BaseStore),

  getters: {
    filtredCards: (state) => {
      if (!state.selectedProject) return state.cardsByStage;

      const filtredCardsByStage: Record<string, TCard[]> = {};
      state.columns.forEach((el) => {
        filtredCardsByStage[el.code] = state.cardsByStage[el.code].filter(
          (card) => {
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
        this.projects = localData.projects;
        this.projectsList = Object.values(localData.projects);
        this.projectsList = [
          {
            id: 0,
            code: '',
            name: 'Не выбрано',
            sort: 0,
          },
          ...this.projectsList,
        ];
        return;
      }

      Promise.all([api.getColumns(), api.getCards(), api.getProjects()])
        .then(([columns, cards, projects]) => {
          this.columns = columns;
          this.projectsList = [
            {
              id: 0,
              code: '',
              name: 'Не выбрано',
              sort: 0,
            },
            ...projects,
          ];

          projects.forEach((project: TProject) => {
            this.projects[project.code] = project;
          });

          this.columns.forEach((el) => {
            this.cardsByStage[el.code] = [];
          });
          cards.forEach((card: TCard) => {
            // добавляем название проекта/проектов на русском
            card.projectName = this.createProjectList(card.project);
            this.cardsByStage[card.stage].push(card);
          });
        })
        .catch((err) => {
          console.log('error getData', err);
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
    },

    sortCardsUp(stage: string) {
      this.cardsByStage[stage].sort((a: TCard, b: TCard) => a.score - b.score);
    },

    sortCardsDown(stage: string) {
      this.cardsByStage[stage].sort((a: TCard, b: TCard) => b.score - a.score);
    },

    setSelectedProject(project: string) {
      this.selectedProject = project;
    },

    addCard(card: TCard) {
      this.cardsByStage[card.stage].push(card);
    },

    editCard(card: TCard) {
      const index = this.cardsByStage[card.stage].findIndex(
        (item) => item.id === card.id
      );
      this.cardsByStage[card.stage][index] = card;
    },

    deleteCard(card: TCard) {
      this.cardsByStage[card.stage] = this.cardsByStage[card.stage].filter(
        (item) => item.id !== card.id
      );
    },
  },
});
