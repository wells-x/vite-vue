import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  }
];

const router = createRouter({
  routes,
  // history: createWebHashHistory(),
  history: createWebHistory(),
});

export default router;
