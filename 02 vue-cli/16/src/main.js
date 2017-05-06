import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource); // adds a plugin to Vue

new Vue({
  el: '#app',
  render: h => h(App)
})
