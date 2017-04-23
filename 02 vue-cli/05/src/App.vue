<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <button @click="selectedComponent = 'appQuote'">Quote</button>
              <button @click="selectedComponent = 'appAuthor'">Author</button>
              <button @click="selectedComponent = 'appNew'">New</button>
              <hr>
              <p>Selected Component: {{ selectedComponent }}</p>
              <component :is="selectedComponent"> <!-- reserved word for Vue - a dynamic component directive when switching between components they're destoyed and recreated brand new -->
                <p>Default Content</p>
              </component>
              <hr>
              <keep-alive> <!-- this is reserved word for Vue - it keeps alive components when we switch between them in <component :is .. > directive - yay! :D -->
                <component :is="selectedComponent"></component>
              </keep-alive>
              <!-- <app-quote>
                <h2 slot="title">{{ quoteTitle }}</h2>
                <p slot="content">A wonderful Quote!</p>
                <hr>
                <p>This will be contents of unnamed slot :)</p>
              </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  import Author from './components/Author.vue';
  import New from './components/New.vue';

    export default {
      data: function(){
        return {
          quoteTitle: 'The Quote',
          selectedComponent: 'appQuote'
        };
      },
      components: {
        appQuote: Quote,
        appAuthor: Author,
        appNew: New
      }        
    }
</script>

<style>
</style>
