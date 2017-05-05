import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value){ // global filter
  return value.toLowerCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
