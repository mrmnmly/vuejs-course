<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
    </div>
</template>

<script>
  export default {
    props: ['name'] // props attribute are the properties from parent components - in this case - User.vue component data called 'name'
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
