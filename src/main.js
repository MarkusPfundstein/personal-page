// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import DigitalVideo from './components/DigitalVideo';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Front from './components/Front';

Vue.config.productionTip = false;

Vue.component('app-header', AppHeader);
Vue.component('app-footer', AppFooter);
Vue.component('about-me', AboutMe);
Vue.component('digital-video', DigitalVideo);
Vue.component('projects', Projects);
Vue.component('contact', Contact);
Vue.component('front', Front);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
