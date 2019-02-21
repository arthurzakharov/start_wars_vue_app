import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import PageTemplate from './pages/PageTemplate.vue';
import store from './store/store.js';

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
      component: PageTemplate
    },
    {
      path: '/films',
      name: 'films',
      component: () => import('./pages/PageTemplate.vue'),
    },
    {
      path: '/people',
      name: 'people',
      component: () => import('./pages/PageTemplate.vue'),
    },
    {
      path: '/planets',
      name: 'planets',
      component: () => import('./pages/PageTemplate.vue'),
    },
    {
      path: '/species',
      name: 'species',
      component: () => import('./pages/PageTemplate.vue'),
    },
    {
      path: '/starships',
      name: 'starships',
      component: () => import('./pages/PageTemplate.vue'),
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: () => import('./pages/PageTemplate.vue'),
    },
  ]
});

router.beforeEach((to, from, next) => {
  console.log('beforeEach [ROUTER]');
  store.dispatch('data/changeCurrentPageInfo', to.name)
    .then(() => next())
    .catch((e) => console.error(`error on performing vuex action ata/changeCurrentPageInfo\n${e}`));
});

export default router;
