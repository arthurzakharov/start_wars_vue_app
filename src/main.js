import Vue from 'vue';
import App from './App.vue';
import VueMq from 'vue-mq';
import index from './router';
import store from './store/store';
import Paginate from 'vuejs-paginate';
import globalMixin from './mixins/global';
import './styles/styles.scss';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.component('Paginate', Paginate);

Vue.mixin(globalMixin);

Vue.use(VueMq, {
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    pc: Infinity,
  }
});

new Vue({
  router: index,
  store,
  render: h => h(App)
}).$mount('#app');
