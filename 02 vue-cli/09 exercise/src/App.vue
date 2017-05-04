<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <input v-model="firstName" type="text" placeholder="first name">
                    <input v-model="lastName" type="text" placeholder="last name">
                    <input v-model="email" type="email" placeholder="email">
                    <input v-model="password" type="password" placeholder="password">
                    <input v-model="storeData" type="checkbox">
                    <app-full-name :firstName="firstName" :lastName="lastName"></app-full-name>
                    <button @click.prevent="submitted = true">Submit</button>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import FullName from './FullName.vue';

    export default {
      data: function() {
        return {
          firstName: '',
          lastName: '',
          email: '',
          password: '', 
          storeData: false,
          submitted: false,
          fullNameChanged: false
        };
      },
      computed: {
        fullName () {
          return this.firstName + ' ' + this.lastName;
        }
      },
      components: {
        'app-full-name': FullName
      }
    }
</script>

<style>
  input {
    clear: both;
    margin: 10px auto;
  }
</style>
