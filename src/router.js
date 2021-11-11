// ---Dependencias
import Vue from 'vue';
import VueRouter from 'vue-router';
// ---Paginas
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Mau from '@/views/MauPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/mau',
    name: 'Mau',
    component: Mau
  }
];

const router = new VueRouter({
  linkExactActiveClass: 'nav-current',
  routes
});

export default router;
