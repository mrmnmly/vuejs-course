<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                  <label for="">Username</label>
                  <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                  <label for="">Mail</label>
                  <input class="form-control" type="text" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <br><br>
                <ul class="list-group">
                  <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          user: {
            username: '',
            email: ''
          },
          users: []
        }
      },
      methods: {
        submit() {
          this.$http.post('https://vuejs-http-316ed.firebaseio.com/data.json', this.user)
            .then(resp => {
              console.log(resp);
            }, err => {
              console.log(err);
            });
        },
        fetchData() {
           this.$http.get('https://vuejs-http-316ed.firebaseio.com/data.json')
            .then(resp => {
              return resp.json(); // built-in method in vue-resource plugin
            }).then(data => {
              const arr = [];

              for(let key in data){
                arr.push(data[key]);
              }
              this.users = arr;
            });
        }
      }
    }
</script>

<style>
</style>
