import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => { // state is always passed to the getters
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + ' Clicks';
    }
  },
  mutations: {
    increment: state => { // like in getters, state is always passed
      state.counter++; 
    },
    decrement: state => {
      state.counter--;
    }
  }

});
