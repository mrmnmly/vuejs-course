import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue(); // main class for maintaining data flow/update between components - must be declared BEFORE main Vue instance

new Vue({
  el: '#app',
  render: h => h(App)
});
