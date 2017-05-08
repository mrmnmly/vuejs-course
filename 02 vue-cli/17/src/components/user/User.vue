<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <!--<p>Loaded ID: {{ id }}</p>-->
    <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    /*(data() {
      return {
        id: this.$route.params.id // access route params example
      }
    },
    watch: {
      '$route'(to, from) { // watch for route changes to update id when switching between same component but different ids
        this.id = to.params.id;
      }
    },*/
    methods: {
      navigateToHome() {
//        this.$router.push('/'); // js-based navigation example
        this.$router.push({ name: 'home'}); // js-based navigation example
      }
    }
  }
</script>
