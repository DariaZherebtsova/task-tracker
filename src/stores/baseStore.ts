import { defineStore } from 'pinia';
import type { TCard } from '@/types/types';
import { getData } from '@/api/api';

type BaseStore = {
  cards: TCard[];
};

export const useBaseStore = defineStore('base', {
  state: () =>
    ({
      cards: [],
    } as BaseStore),

  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // call other getters with autocompletion ✨
        return this.finishedTodos;
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos;
      }
      return this.todos;
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
