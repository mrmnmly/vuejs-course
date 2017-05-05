<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
              <p>{{ text | toUppercase }}</p>
              <p>{{ text | to-lowercase }}</p>
              <p>{{ text | toUppercase | to-lowercase }}</p>
              <hr>
              <button @click="fruits.push('Berries')">Add new item</button>
              <input v-model="filterText">
              <ul><!--  we shouldn't use filters here, because they're recalculated on each render - no matter if something changed or not - it's better to use computed property here   -->
                <li v-for="fruit in filteredFruits">{{ fruit }}</li>
              </ul>
              <hr>
              <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMixin } from './fruitMixin';

    export default {
      mixins: [fruitMixin], // it doesn't destroy the data - it is merged into it. If we have some lifecycle hooks inside mixin and component - the hook from the component will run first, and then the component's one
      data() {
        return {
          text: 'Hello there!'
        };
      },
      filters: { // filters TRANSFORMS the way of data looks in the template/output - it doesn't transform data ITSELF! !
        toUppercase(value) { // filters always has a value to filter as a first argument!
          return value.toUpperCase(); 
        }       
      },
      components: {
        'app-list': List
      }
    }
</script>

<style>

</style>
