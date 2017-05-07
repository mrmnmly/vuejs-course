import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes, // ES6 key-value short syntax
  mode: 'history' //to use urls without hashtag we have to config our server to server always index.html to all url cases!!!
});

new Vue({
  el: '#app',
  router, // again, ES6 short key-value syntax (router: router)
  render: h => h(App)
})
