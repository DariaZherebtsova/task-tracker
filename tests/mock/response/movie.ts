const successMoviesResponseMock = {
  items: [
    {
      id: 72,
      name: 'Первоклассница',
      description:
        'Маруся Орлова стала первоклассницей для нее началась интересная, полная событий и переживаний жизнь. Из самолюбивой и капризной девочки под воздействием учительницы и под влиянием своих новых подружек она превращается в дисциплинированную, общительную и отзывчивую ученицу.\r\n',
      sources: [
        {
          locale: 'Eng-eng',
          url: 'https://cdn.ttk-sapsan.ru/media/movie/pervoklassnica.1948.mp4',
          withSubtitles: false,
        },
        {
          locale: 'Ru-ru',
          url: 'https://cdn.ttk-sapsan.ru/media/movie/pervoklassnica.1948.mp4',
          withSubtitles: false,
        },
      ],
      image:
        'https://cdn.ttk-sapsan.dev/static/movie/1661870746_02pervoklassnica.jpg',
      editor: 'Илья Фрэз',
      actors:
        'Наталья Защипина, Тамара Макарова, Татьяна Барышева, Кира Головко, Игорь Ерошкин, Алена Егорова, Мария Жвирблис, Мила Костыкова, Елена Таранова,Тамара Вихман',
      country: 'СССР',
      year: 1948,
      duration: 68,
      ageLimit: '0+',
      providerId: 2,
      genreNames: 'Семейный',
      type: 'movie',
    },
    {
      id: 71,
      name: 'Солнце в кармане',
      description:
        'В жизни шестилетней Ани Ивановой происходит большое событие - она идет в первый класс. Трудно маленькому человеку все сразу понять, отличить плохое от хорошего. Подражая бойким подружкам, Аня невзначай обижает своего друга Сережу и школьную няню тетю Клаву. Но рядом с девочкой - родители, друзья, учительница, которые всегда помогут разобраться в плохом и похвалят за добрый поступок.\r\n',
      sources: [
        {
          locale: 'Eng-eng',
          url: 'https://cdn.ttk-sapsan.ru/media/movie/pervoklassnica.1948.mp4',
          withSubtitles: false,
        },
        {
          locale: 'Ru-ru',
          url: 'https://cdn.ttk-sapsan.ru/media/movie/pervoklassnica.1948.mp4',
          withSubtitles: false,
        },
      ],
      image:
        'https://cdn.ttk-sapsan.dev/static/movie/1661870603_01solnce-v-karmane.jpg',
      editor: 'Эдуард Гаврилов',
      actors:
        'Дарья Вишнякова, Анна Сергеева, Юрий Катин-Ярцев, Мария Скворцова, Вадим Андреев, Юрий Назаров, Сергей Никоненко, Ю. Сорокин, Вера Ивлева, Яна Друзь',
      country: 'СССР',
      year: 1984,
      duration: 70,
      ageLimit: '6+',
      providerId: 2,
      genreNames: 'Семейный',
      type: 'series',
    },
  ],
  meta: {
    totalCount: 2,
    pageCount: 1,
    currentPage: 1,
    perPage: 20,
  },
}

const successMovieResponseMock = {
  id: 72,
  name: 'Первоклассница',
  description:
    'Маруся Орлова стала первоклассницей для нее началась интересная, полная событий и переживаний жизнь. Из самолюбивой и капризной девочки под воздействием учительницы и под влиянием своих новых подружек она превращается в дисциплинированную, общительную и отзывчивую ученицу.\r\n',
  sources: [
    {
      locale: 'Eng-eng',
      url: 'https://cdn.ttk-sapsan.ru/media/movie/pervoklassnica.1948.mp4',
      withSubtitles: false,
    },
    {
      locale: 'Ru-ru',
      url: 'https://cdn.ttk-sapsan.ru/media/movie/pervoklassnica.1948.mp4',
      withSubtitles: false,
    },
  ],
  image:
    'https://cdn.ttk-sapsan.dev/static/movie/1661870746_02pervoklassnica.jpg',
  editor: 'Илья Фрэз',
  actors:
    'Наталья Защипина, Тамара Макарова, Татьяна Барышева, Кира Головко, Игорь Ерошкин, Алена Егорова, Мария Жвирблис, Мила Костыкова, Елена Таранова,Тамара Вихман',
  country: 'СССР',
  year: 1948,
  duration: 68,
  ageLimit: '0+',
  providerId: 2,
  genreNames: 'Семейный',
}

const localeListMock = [
  {
    locale: 'Eng-eng',
    url: 'https://cdn.ttk-sapsan.ru/media/movie/pervoklassnica.1948.mp4',
    withSubtitles: false,
  },
  {
    locale: 'Ru-ru',
    url: 'https://cdn.ttk-sapsan.ru/media/movie/pervoklassnica.1948.mp4',
    withSubtitles: false,
  },
]

const seriesListMock = [
  {
    number: 1,
    episodes: [
      {
        number: 1,
        source:
          'https://cdn.ttk-sapsan.ru/media/movie/chelovek-amfibiya-1961.mp4',
        description: 'description',
      },
      {
        number: 2,
        source:
          'https://cdn.ttk-sapsan.ru/media/movie/elon-musk-the-real-life-iron-man.mp4',
        description: 'description',
      },
      {
        number: 3,
        source:
          'https://cdn.ttk-sapsan.ru/media/movie/the-forbidden-kingdom.mp4',
        description: 'description',
      },
    ],
  },
  {
    number: 2,
    episodes: [
      {
        number: 1,
        source: 'https://cdn.ttk-sapsan.ru/media/movie/seobok.mp4',
        description: 'description',
      },
      {
        number: 2,
        source:
          'https://cdn.ttk-sapsan.ru/media/movie/silver-linings-playbook.mp4',
        description: 'description',
      },
      {
        number: 3,
        source:
          'https://cdn.ttk-sapsan.ru/media/movie/the-electrical-life-of-louis-wain.mp4',
        description: 'description',
      },
      {
        number: 4,
        source: 'https://cdn.ttk-sapsan.ru/media/movie/at-eternitys-gate.mp4',
        description: 'description',
      },
    ],
  },
]

const bodoBorodoResponseMock = {
  id: 2,
  name: 'Bodo Borodo',
  description: 'description',
  image: 'https://cdn.ttk-sapsan.dev/static/',
  editor: '',
  actors: '',
  country: 'Russia',
  year: 2020,
  duration: 285,
  ageLimit: '',
  providerId: null,
  genreNames: 'Comedy, Educational',
  seasons_with_episodes: [
    {
      number: 1,
      episodes: [
        {
          number: 1,
          source: 'https://cdn.ttk-sapsan.dev/media/ivi/bb/bb_s01ep01.mp4',
          description:
            'Bodo teaches the kids to travel and goes to Australia in a hot air balloon. But instead of a map, Bodo uses scent, so he lands not in Australia, but at the North Pole.',
        },
        {
          number: 2,
          source: 'https://cdn.ttk-sapsan.dev/media/ivi/bb/bb_s01ep02.mp4',
          description:
            'Bodo lands at Amsterdam airport. To find the train station and get to the city, he learns to navigate at the airport, tries to ask passers-by for directions, and ends up using signs.',
        },
      ],
    },
    {
      number: 2,
      episodes: [
        {
          number: 1,
          source: 'https://cdn.ttk-sapsan.dev/media/ivi/bb/bb_s02ep01.mp4',
          description:
            'Bodo feeds his bonsai to make it grow faster. But the tree does not grow and Bodo decides to take him to the highest trees - let them teach. First, Bodo brings the tree to the African baobab, then to the Australian eucalyptus trees, and finally to the sequoia grove - the tallest trees on the planet. But it turns out that it takes hundreds of years for a tree to grow big. Bodo does not agree to part with his tree for so long. He takes him home and allows him to remain a dwarf.',
        },
        {
          number: 2,
          source: 'https://cdn.ttk-sapsan.dev/media/ivi/bb/bb_s02ep02.mp4',
          description: '',
        },
      ],
    },
  ],
}

const errorMovieResponseMock = {
  name: 'string',
  message: 'string',
  code: 0,
  type: 'string',
}

export {
  successMoviesResponseMock,
  successMovieResponseMock,
  errorMovieResponseMock,
  bodoBorodoResponseMock,
  seriesListMock,
  localeListMock,
}
