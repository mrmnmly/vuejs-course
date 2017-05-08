<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <router-link 
      tag="button"
      :to="link"
      class="btn btn-primary">Edit User</router-link>
    <!--  :to="'/user/' + $route.params.id + '/edit'" - previous example of dynamic url - before using a route name -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit', 
          params: { 
            id: this.$route.params.id 
          }, 
          query: { 
            locale: 'en', 
            q: 100 
          },
          hash: '#data' // for now, page won't scroll to the bottom, even if hash is in the url
        }
      }; 
    }
  }
</script>
