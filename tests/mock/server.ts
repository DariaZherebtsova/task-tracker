import { setupServer } from 'msw/node';
import { rest } from 'msw';

import {
  successMoviesResponseMock,
  successMovieResponseMock,
  bodoBorodoResponseMock,
} from './response/movie';

const moviesHandlers = [
  rest.get(
    `${import.meta.env.VITE_API_BASE_URL}/v1/cinema/`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(successMoviesResponseMock));
    }
  ),
  rest.get(
    `${import.meta.env.VITE_API_BASE_URL}/v1/movie/1/`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(successMovieResponseMock));
    }
  ),
  rest.get(
    `${import.meta.env.VITE_API_BASE_URL}/v1/series/2/`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(bodoBorodoResponseMock));
    }
  ),
];

export const server = setupServer(...moviesHandlers);
