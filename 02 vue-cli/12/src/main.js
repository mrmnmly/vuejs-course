import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value){ // global filter
  return value.toLowerCase();
});

// global mixin below - you will be rarely want to do this - mostly when creating a plugin, not into production app itself
// it will be mixed in to every Vue's instances AUTOMATICALLY !!
Vue.mixin({
  created() {
    console.log('global mixin!');
  }
});

// global mixin lands also here ;)
new Vue({
  el: '#app',
  render: h => h(App)
})
// global mixins runs first, then local mixins, and component code last - has the last word ;)
// mixin objects are fresh copies - data is not shared - if You want share data, consider using eventBus or something.
