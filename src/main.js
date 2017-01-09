// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 路由模块和HTTP模块
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/index': {
    component: App
  }
});

router.redirect({
  '*': '/index'
});

router.start(App, '#app');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
