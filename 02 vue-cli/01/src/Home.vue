<template>
  <div><!-- we have to wrap template with div because if not then we will have an error of multiple root elements in main template (remember that this is file with component which we want to use multiple times across our app) - and <template> doesn't count there -->
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>
<script>
  export default {
    data: function(){
      return {
        status: 'Critical'
      };
    },
    methods: {
      changeStatus(){ //ES6 syntax, same as changeStatus: function(){ ...
        this.status = 'Normal';
      }
    }
  }
</script>
