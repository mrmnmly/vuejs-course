    <!--<slot></slot> --> <!-- <slot></slot> is a reserved, built-in type of component in Vue.js that takes HTML content of parent component (in this case, from App.vue file the insides of <app-quote>. This should be placed in template --> 
<template>
  <div>
    <div class="title">
      <slot name="title"></slot> 
      <span style="color: #ccc"><slot name="subtitle">The Subtitle</slot></span> <!-- slot with default value -->
    </div>
    <hr>
    <div>
      <slot name="content"></slot>
      <slot></slot> <!-- default slot, whithout a name -->
    </div>
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
