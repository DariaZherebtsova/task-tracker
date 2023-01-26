import { cards } from '@/mock-data/data';

export const getData = async () =>
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(cards);
    }, 2000);
  });
