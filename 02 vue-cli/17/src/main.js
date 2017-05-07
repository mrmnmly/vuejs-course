import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes // ES6 key-value short syntax
});

new Vue({
  el: '#app',
  router, // again, ES6 short key-value syntax (router: router)
  render: h => h(App)
})
