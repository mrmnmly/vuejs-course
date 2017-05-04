<template>
  <div>
    <input type="text" v-model="firstName" @change="firstNameChanged" placeholder="first name">
    <input type="text" v-model="lastName" @change="lastNameChanged" placeholder="last name">
  </div>
</template>
<script>
  export default {
    props: ['firstName', 'lastName'],
    methods: {
      firstNameChanged() {
        this.$emit('input', firstName);
      },
      lastNameChanged() {
        this.$emit('input', 'lastName');
      }
    }
  }
</script>
