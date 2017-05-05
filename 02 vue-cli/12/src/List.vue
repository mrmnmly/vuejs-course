<template>
    <div>
      <h1>Filters & Mixins</h1>
      <input v-model="filterText">
        <ul><!--  we shouldn't use filters here, because they're recalculated on each render - no matter if something changed or not - it's better to use computed property here   -->
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin} from './fruitMixin';

    export default {
      mixins: [fruitMixin],
      created() { // component can override mixins behavior - because it is ran as last
        console.log('list created');
      }
    }
</script>

<style>

</style>
