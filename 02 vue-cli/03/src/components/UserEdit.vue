<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
        <button @click="editAgeFn()">Edit Age</button>
    </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    props: ['userAge', 'editAgeFn'],
    methods: {
      editAge(){
        this.userAge = 30;
//        this.$emit('ageWasEdited', this.userAge);
//        eventBus.$emit('ageWasEdited', this.userAge); // we can now use eventBus method, defined in main.js file (used below)
        eventBus.changeAge(this.userAge);
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
