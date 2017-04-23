<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Increase!</button>
    <p>Counter: {{ counter }}</p>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        counter: 0
      };
    },
    destroyed(){
      console.log('Destroyed!');
    },
    deactivated(){
      console.log('Switched to other component!');
    },
    activated(){
      console.log('Switched to New component!');
    }
  }
</script>

<style></style>
