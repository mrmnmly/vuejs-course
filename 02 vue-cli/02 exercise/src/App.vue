<template>
    <div class="container">
        <custom-header></custom-header>
        <div class="row">
          <list-group></list-group>
          <server-status></server-status>
        </div>
        <hr>
      <custom-footer></custom-footer>
    </div>
</template>
<script>
  import CustomHeader from './components/Shared/CustomHeader.vue';
  import ListGroup from './components/Server/ListGroup.vue';
  import CustomFooter from './components/Shared/CustomFooter.vue';
  import ServerStatus from './components/Server/ServerStatus.vue';

  export default {
    components: {
      'custom-header': CustomHeader,
      'list-group': ListGroup,
      'custom-footer': CustomFooter,
      'server-status': ServerStatus
    }
  }
</script>

<style>

</style>
