<template>
    <div class="container">
      <app-new-quote @quoteAdded="newQuote"></app-new-quote>
      <app-quote-grid :quotes="quotes"></app-quote-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-inf"></div>
        </div>  
      </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';

    export default {
      data: function(){
        return {
          quotes: ['Just a Quote to see something'],
          maxQuotes: 10
        };
      },
      methods: {
        newQuote(quote){
           this.quotes.push(quote);  
        }
      },
      components: {
        appQuoteGrid: QuoteGrid,
        appNewQuote: NewQuote
      }
    }
</script>

<style>
</style>
