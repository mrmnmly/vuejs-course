<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }} (Reversed: {{ switchName() }})</p>
    </div>
</template>

<script>
  export default {
//    props: ['name'], // props attribute are the properties from parent components - in this case - User.vue component data called 'name'
    props: {
//      name: String
//      name: [String, Array] // available ways of defying props ;)  
/*    name: {
        type: Object, // or for Array
        default: function(){
          return {
            name: 'Max',
            age: 25
          }
        }
      }*/
      name: {
        type: String,
//      default: 'Max', // doesn't make sense with required set to true ;)
        required: true
      }
    },
    methods: {
      switchName() {
        return this.name.split('').reverse().join('');
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
