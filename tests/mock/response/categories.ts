const successCategoriesResponseMock = {
  items: [
    {
      id: 1,
      name: 'category1',
    },
    {
      id: 2,
      name: 'category2',
    },
  ],
  meta: {
    totalCount: 2,
    pageCount: 1,
    currentPage: 1,
    perPage: 20,
  },
};

const successMovieCategoriesResponseMock = {
  items: [
    {
      id: 1,
      name: 'Комедия',
    },
    {
      id: 2,
      name: 'Драма',
    },
  ],
};

const errorCategoriesResponseMock = {
  name: 'string',
  message: 'string',
  code: 0,
  type: 'string',
};

export {
  successCategoriesResponseMock,
  errorCategoriesResponseMock,
  successMovieCategoriesResponseMock,
};
