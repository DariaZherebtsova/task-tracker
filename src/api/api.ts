import { cards, columns, projects } from '@/mock-data/data';
import type { TCard, TColumn, TProject } from '@/types/types';

const api = {
  getCards: async (): Promise<TCard[]> =>
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(cards);
      }, 1000);
    }),

  getColumns: async (): Promise<TColumn[]> =>
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(columns);
      }, 3000);
    }),

  getProjects: async (): Promise<TProject[]> =>
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(projects);
      }, 3000);
    }),

  saveCards: async (data): Promise<string> =>
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log('save cards', JSON.stringify(data));
        resolve('ok');
      }, 3000);
    }),
};

export default api;
