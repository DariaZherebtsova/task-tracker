import { cards, columns, projects } from '@/mock-data/data';
import type { TCard, TColumn, TProject } from '@/types/types';

export const getCards = async (): Promise<TCard[]> =>
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(cards);
    }, 1000);
  });

export const getColumns = async (): Promise<TColumn[]> =>
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(columns);
    }, 1000);
  });

export const getProgects = async (): Promise<TProject[]> =>
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, 1000);
  });
