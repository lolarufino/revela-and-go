import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Cart from '../views/Cart.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import LabDetail from '../views/LabDetail.vue';
import NotFound from '../views/NotFound.vue';
import GuidedFilter from '../views/GuidedFilter.vue';
import LabsList from '../views/LabsList.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/labdetail',
    name: 'LabDetail',
    component: LabDetail,
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/guidedfilter',
    name: 'GuidedFilter',
    component: GuidedFilter,
  },
  {
    path: '/labslist',
    name: 'LabsList',
    component: LabsList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
