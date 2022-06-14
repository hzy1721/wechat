import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/login/index.vue';
import HomeView from '@/views/home/index.vue';
import RegisterView from '@/views/register/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    }
  ]
});

export default router;