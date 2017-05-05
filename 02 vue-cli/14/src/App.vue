<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Toggle Alert</button>
                <br><br>
                <transition name="fade"> <!-- we can animate only ONE DOM element inside <transition> tag! -->
                  <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                
                <transition name="slide">
                  <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              show: false 
            }
        }
    }
</script>

<style>
  /* those are standard suffixes for showing and hiding transition animation - default (no transition name provided in template) would be .v-enter, .v-enter-active etc. */
  .fade-enter {
    opacity: 0; 
  }
  .fade-enter-active {
    transition: opacity 1s;
    /*opacity: 1; */ /* we don't have to set this to 1 because it is default 1 */ 
  }
  .fade-leave {
    /*opacity: 1; */ /* we don't have to set this to 1 because it is default 1 */ 
  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
  
  .slide-enter {
    /* we don't have to define starting point, because it is in its default position  */ 
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }
  .slide-leave {
    /* same as on .slide-enter */
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
  }
  @keyframes slide-in{
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out{
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
