<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-my-on:click="message">Click me</button>
                <textarea rows="5" cols="40" v-my-on:mouseenter="message"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        'my-on': {
          bind(el, binding, vNode){
            const callbackFn = binding.value;
            const type = binding.arg;

            el.addEventListener(type, callbackFn);
          }
        }
      },
      methods: {
        message() {
          console.log('This is message');
        }
      }
    }
</script>

<style>
</style>
