<template>
    <div class="container">
        <customHeader></customHeader> <!-- I can use camelCase or dash component tags for naming -->
        <custom-header></custom-header>
        <div class="row">
          <list-group></list-group>
          <server-status></server-status>
          <hr>
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
      customHeader: CustomHeader, // if I want to use camelCase components tags, then I can remove quotation marks, but it's not a common solution
      'list-group': ListGroup,
      CustomFooter, // thanks to ES6, this transpiles to CustomFooter: CustomFooter
      'server-status': ServerStatus
    }
  }
</script>

<style>

</style>
