import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HelloVueAxios from '@/components/ChamadaAPI-VueAxios';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/vueaxios',
      name: 'HelloVueAxios',
      component: HelloVueAxios,
    },
  ],
});
