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
import SearchLab from '../views/SearchLab.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile/:userId',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/cart/:userId',
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
    path: '/labdetail/:labId',
    name: 'LabDetail',
    component: LabDetail,
  },
  {
    path: '/:pathMatch(.*)*',
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
  {
    path: '/searchlab',
    name: 'SearchLab',
    component: SearchLab,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
