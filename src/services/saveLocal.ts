const LOCAL_STORAGE_KEY = 'tt_cards';

export const saveLocal = (data) => {
  console.log('-----saveLocal', JSON.stringify(data));
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

export const getLocal = () => {
  console.log('-----getLocal');
  return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
};

// export class TodoLocal {
//   static loadTodos() {
//     return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
//   }

//   static storeTodos(todos) {
//     window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
//   }
// }