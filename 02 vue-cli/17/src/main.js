import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes, // ES6 key-value short syntax
  mode: 'history', //to use urls without hashtag we have to config our server to server always index.html to all url cases!!!
  scrollBehavior(to, from, savedPosition) { // handles scrolling to local anchor when hash is present in the url path
    if(savedPosition) { // if user goes back to page where he scrolled somewhere, then we return the value of that scroll so he will be on the same place again
      return savedPosition;
    }
    if(to.hash) {
      return { selector: to.hash }; // if hash (local anchor) is available in path, then scroll to it, otherwise stay on top
    }
    //return {x: 0, y: 700}; 
  }
});

new Vue({
  el: '#app',
  router, // again, ES6 short key-value syntax (router: router)
  render: h => h(App)
})
