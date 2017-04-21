<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please select a server</p>
    <p v-else>Server #{{ server.id }}, Server Status: {{ server.status }}</p>
    <hr>
    <button @click="resetStatus" v-if="server">Change to Normal</button>
  </div>
</template>
<script>
  import { serverBus } from '../../main';

  export default{
    data: function(){
      return {
        server: null
      };
    },
    created(){
      serverBus.$on('serverSelected', (server) => {
        this.server = server;
      });
    },
    methods: {
      resetStatus(){
        this.server.status = 'Normal';  // we don't need to emit this change to ListGroup.vue file, because we're referencing here to OBJECT from ListGroup data - and when we're doing so we're referencing to the same place in memory so this root object will be updated 
      }
    }
  }
</script>
