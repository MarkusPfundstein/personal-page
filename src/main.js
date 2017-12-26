// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

Vue.config.productionTip = false;

Vue.component('app-header', AppHeader);
Vue.component('app-footer', AppFooter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
