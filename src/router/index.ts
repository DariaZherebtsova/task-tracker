import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import BoardView from '../views/BoardView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: BoardView,
  },
  {
    path: '/add-card',
    name: 'addCard',
    component: () => import('../views/AddCardView.vue'),
  },
  {
    path: '/test',
    name: 'testView',
    component: () => import('../views/TestView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export { router, routes };
