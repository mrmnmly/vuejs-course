<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)"><!-- @click.native modifier proxies click event to slot'ed {{ quote }} element. We have to pass index to deleteQuote to know which element to delete from quotes array -->
      {{ quote }}
    </app-quote> 
  </div>
</template>
<script>
  import Quote from './Quote.vue';

  export default {
    props: ['quotes'],
    components: {
      appQuote: Quote
    },
    methods: {
      deleteQuote(index) {
        this.$emit('quoteDeleted', index);
      }
    }
  }
</script>
<style></style>
