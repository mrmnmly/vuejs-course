<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ myName }} (Reversed: {{ switchName() }})</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button> <!-- function without custom event, has to have () because it's a (remote) function -->
    </div>
</template>

<script>
  export default {
//    props: ['myName'], // props attribute are the properties from parent components - in this case - User.vue component data called 'myName'
    props: {
//      myName: String
//      myName: [String, Array] // available ways of defying props ;)  
/*    myName: {
        type: Object, // or for Array
        default: function(){
          return {
            name: 'Max',
            age: 25
          }
        }
      }*/
      myName: {
        type: String
      },
      resetFn: Function,
      userAge: Number
    },
    methods: {
      switchName() {
        return this.myName.split('').reverse().join('');
      },
      resetName() {
        this.myName = 'Max'; // this changes value only in current component, not in the parent one, we have to emit an event to update parent component value
        this.$emit('nameWasReset', this.myName);
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
