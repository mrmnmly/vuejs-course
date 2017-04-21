<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <p>Name is {{ name }}</p> <!-- remove the @nameWasReset binding below and then click arount the app and see what happened -->
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                  :myName="name" 
                  @nameWasReset="name = $event"
                  :resetFn="resetName"
                  :userAge="age"
                  ></app-user-detail> <!-- :name must equal the property in string that we defined in UserDetail.vue file in an props array (props: ['myName'] )-->
                <!-- @nameWasReset is an event listener defined in child component, that informs parent component that data changed in the child -->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                  :userAge="age"
                  @ageWasEdited="age = $event"
                  :editAgeFn="editAge"
                  ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
      data: function(){
        return {
          name: 'Max',
          age: 27
        };
      },
      methods: {
        changeName(){
          this.name = 'Anna';
        },
        resetName(){
          this.name = 'Max';
        },
        editAge(){
          this.age = 30;
        }
      },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
