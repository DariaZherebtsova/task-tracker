const projectListMock = [
  { id: 1, code: 'project-1', name: 'Проект 1', sort: 10 },
  { id: 2, code: 'project-2', name: 'Проект 2', sort: 20 },
  { id: 3, code: 'project-3', name: 'Проект 3', sort: 30 },
  { id: 4, code: 'project-4', name: 'Проект 4', sort: 40 },
];

const initValueMock = [
  { id: 2, code: 'project-2', name: 'Проект 2', sort: 20 },
];

const itemsMock = [
  {
    number: 1,
    episodes: [
      { number: 1, source: 's01_e01.mp4', description: '' },
      { number: 2, source: 's01_e02.mp4', description: '' },
      { number: 3, source: 's01_e03.mp4', description: '' },
    ],
  },
];

export { projectListMock, initValueMock, itemsMock };
