import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource); // adds a plugin to Vue

// global config of the VueResource (without $!)
Vue.http.options.root = 'https://vuejs-http-316ed.firebaseio.com/';

// this function will be executed on every request
Vue.http.interceptors.push((req, next) => {
  console.log('REQ', req);
  if(req.method == 'POST'){
    req.method = 'PUT';
  }
  // and this for every response
  next(resp => {
    resp.json = () => {
      return {messages: resp.body};
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
