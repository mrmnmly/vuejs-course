<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control"> 
                  <option value="fade">Fade</option>
                  <option value="slide">Slide</option>
                </select>
                <br><br>
                <button class="btn btn-primary" @click="show = !show">Toggle Alert</button>
                <br><br>
                <transition :name="alertAnimation"> <!-- we can animate only ONE DOM element inside <transition> tag! -->
                  <div class="alert alert-info" v-if="show">This is some Info</div><!-- we can also use v-show here instead of v-if -->
                </transition>
                
                <transition name="slide" type="animation"> <!-- type can be set also to "animation" - it sets the main timing value to finish everything at the same time (synchronize) -->
                  <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <hr>
                <transition name="fade" appear><!-- thanks to appear prop, it will animate on page load ;) -->
                  <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <hr>
                <transition
                  enter-active-class="animated bounce"
                  leave-active-class="animated shake"> <!-- overriding default vuejs transition class name scheming with total custom classes - we can also use enter-class and leave-class but in this case we don't have to so we haven't inserted it here -->
                  <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <hr>
                <transition :name="alertAnimation" mode="out-in"> <!-- mode out-in == all animations of hiding goes on, and when ends the showing animations will go - the invertion of this is "in-out" value --> 
                  <div class="alert alert-info" v-if="show" key="info">This is some Info</div><!-- value of the "key" property must be unique - we have to use it when we want to handle transition between two elements inside <transition> tag - from one to another -->
                  <div class="alert alert-warning" v-else key="warning">This is some Warning</div> <!-- we have to use here v-if and v-else - NOT v-show! -->
                </transition>
                <hr>
                 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              show: true,
              alertAnimation: 'fade'
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
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }
  .slide-leave {
    /* we don't have to set opacity to 1 here because it will already be 1 */
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 3s;
    opacity: 0;
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
