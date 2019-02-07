import Vue from 'vue';
import App from './App.vue';
import VueMq from 'vue-mq';
import router from './router';
import store from './store/store';
import './styles/styles.scss';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    pc: Infinity,
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
