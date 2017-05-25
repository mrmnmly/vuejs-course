<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    
    export default {
        methods: {
            ...mapMutations([ // execute mutations #2 example
              'increment',
              'decrement'
            ])
            /*increment() {
                 //this.$store.state.counter++;
                 this.$store.commit('increment');// execute mutations #1 example
            },
            decrement() {
//                this.$store.state.counter--;
              this.$store.commit('decrement');
            }*/
        }
    }
</script>
