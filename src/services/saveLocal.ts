import type { TLocalData } from '@/types/types';

const LOCAL_STORAGE_KEY = 'tt_cards';

export const saveLocal = (data: TLocalData) => {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

export const getLocal = () => {
  return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
};
