<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        // props: ['counter']
        computed: {
          counter() {
            return this.$store.state.counter;
          }
        }
    }
</script>
