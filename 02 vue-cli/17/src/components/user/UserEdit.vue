<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics (q): {{ $route.query.q }}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div style="height: 700px;"></div>
    <p id="data">Some extra data</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        confirmed: false
      };
    },
    beforeRouteLeave(to, from, next) { // another extra lifecycle hook, thanks to vue-router
      if(this.confirmed){ // in this hook, component is already created so we can access our component's data.
        next();  
      }else{
        if(confirm('Are You sure?')){
          next();
        }else{
          next(false);
        }
      }
    }
  }
</script>
