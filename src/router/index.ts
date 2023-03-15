import { createRouter, createWebHistory } from 'vue-router';
import BoardView from '../views/BoardView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
});

export default router;
