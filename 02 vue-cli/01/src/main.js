import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue';

// global component declaration - we can now use it in other modules, e.g. in App.vue file - check it out ;)
Vue.component('app-servers', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
