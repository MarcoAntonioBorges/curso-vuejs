// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

// eslint-disable-next-line import/first
import 'vue-material/dist/vue-material.css';
// eslint-disable-next-line import/first
import VueMaterial from 'vue-material';

Vue.use(VueMaterial);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
