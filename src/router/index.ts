import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/login/index.vue';
import HomeView from '@/views/home/index.vue';
import RegisterView from '@/views/register/index.vue';
import { ElMessage } from 'element-plus';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: () => {
        if (sessionStorage.getItem('token')) {
          ElMessage({
            message: '您已登陆，跳转到首页',
            type: 'success'
          });
          return '/';
        }
      }
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // beforeEnter: () => {
      //   if (!sessionStorage.getItem('token')) {
      //     ElMessage({
      //       message: '请先登录',
      //       type: 'warning'
      //     });
      //     return '/login';
      //   }
      // }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    }
  ]
});

export default router;