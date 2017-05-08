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
    },
    beforeRouteEnter(to, from, next) { // new lifecycle hook, thanks to vue-router (component hasn't been created yet so You can't access data etc.)
      // next();// if You don't execute next() function, then this component won't be loaded !!!

      // dummy example of authentication - let's assume that true/false is the switch/result of that user has been authenticated
      if(false){
        next();
      }else{
        next(false);
      }

      /* next (vm => { // way to access component data - because as it is mentioned above - this component wasn't created yet before, but in a callback it is ;)
        vm.link;  // <- here we can access as an example link data because component has been created
      }); */
    }
  }
</script>
