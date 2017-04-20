<template>
    <div class="container">
        <custom-header></custom-header>
        <div class="row">
            <list-group></list-group>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
        <hr>
      <custom-footer></custom-footer>
    </div>
</template>
<script>
  import CustomHeader from './CustomHeader.vue';
  import ListGroup from './ListGroup.vue';
  import CustomFooter from './CustomFooter.vue';

  export default {
    components: {
      'custom-header': CustomHeader,
      'list-group': ListGroup,
      'custom-footer': CustomFooter
    }
  }
</script>

<style>

</style>
