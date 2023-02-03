import type { TLocalData } from '@/types/types';

const LOCAL_STORAGE_KEY = 'tt_cards';

export const saveLocal = (data: TLocalData) => {
  console.log('-----saveLocal', JSON.stringify(data));
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

export const getLocal = () => {
  console.log('-----getLocal');
  return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
};
