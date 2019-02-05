import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/films',
      name: 'films',
      component: () => import('./pages/Films.vue'),
    },
    {
      path: '/people',
      name: 'people',
      component: () => import('./pages/People.vue'),
    },
    {
      path: '/planets',
      name: 'planets',
      component: () => import('./pages/Planets.vue'),
    },
    {
      path: '/species',
      name: 'species',
      component: () => import('./pages/Species.vue'),
    },
    {
      path: '/starships',
      name: 'starships',
      component: () => import('./pages/Starships.vue'),
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: () => import('./pages/Vehicles.vue'),
    },
  ]
})
