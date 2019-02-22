import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import store from '../store/store.js';

Vue.use(Router);

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/films',
      name: 'films',
      component: () => import('../pages/PageTemplate.vue'),
    },
    {
      path: '/people',
      name: 'people',
      component: () => import('../pages/PageTemplate.vue'),
    },
    {
      path: '/planets',
      name: 'planets',
      component: () => import('../pages/PageTemplate.vue'),
    },
    {
      path: '/species',
      name: 'species',
      component: () => import('../pages/PageTemplate.vue'),
    },
    {
      path: '/starships',
      name: 'starships',
      component: () => import('../pages/PageTemplate.vue'),
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: () => import('../pages/PageTemplate.vue'),
    },
  ]
});

router.beforeEach((to, from, next) => {
  store.dispatch('data/changeCurrentPageInfo', to.name)
    .then(() => next())
    .catch((e) => console.error(`error on performing vuex action data/changeCurrentPageInfo\n${e}`));
});

export default router;
