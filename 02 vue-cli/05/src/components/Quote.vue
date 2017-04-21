<template>
  <div>
    <slot></slot>  <!-- <slot></slot> is a reserved, built-in type of component in Vue.js that takes HTML content of parent component (in this case, from App.vue file the insides of <app-quote> --> 
  </div>
</template>

<script>
  export default {
   
  }
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }
  h2 {  /* this local styling is applied to <slot></slot> contents - not the parent! */
    color: red;
  }
  .title {
    font-style: italic;
  }
</style>
