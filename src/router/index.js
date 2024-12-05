import { createRouter, createWebHistory } from 'vue-router';
import AuthForm from '../components/AuthForm/AuthForm.vue';
import MainPage from '../view/MainView.vue'; // Создайте или добавьте вашу главную страницу
import SalaryView from '../view/SalaryView.vue';
import AdminView from '../view/AdminView.vue'
import ShiftView from '../view/ShiftView.vue';

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: AuthForm,
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage,
    meta: { requiresAuth: true }, // Маршрут требует авторизации
  },
  {
    path: '/main/salary',
    name: 'SalaryView',
    component: SalaryView,
    meta: { requiresAuth: true}
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView,
    meta: {requiresAuth: true, }
  },
  {
    path: '/main/shift',
    name: 'ShiftView',
    component: ShiftView,
    meta: {requiresAuth: true}
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Глобальная проверка авторизации перед переходом
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Проверяем, есть ли токен

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Auth' }); // Перенаправление на страницу авторизации
  } else {
    next(); // Продолжаем переход
  }
});

export default router;
