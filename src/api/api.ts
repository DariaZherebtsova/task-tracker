import { cards } from '@/mock-data/data';
import type { TCard } from '@/types/types';

export const getData = async (): Promise<TCard[]> =>
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(cards);
    }, 200);
  });
