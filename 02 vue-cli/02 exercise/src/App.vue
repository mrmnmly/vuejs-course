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
  import CustomHeader from './components/CustomHeader.vue';
  import ListGroup from './components/ListGroup.vue';
  import CustomFooter from './components/CustomFooter.vue';
  import ServerStatus from './components/ServerStatus.vue';

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
