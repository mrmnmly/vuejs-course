new Vue({
  el: '#exercise',
  data: {
      value: ''
  },
  methods: {
    showAlert: function(){
      alert('This is alert!');
    },
    saveValue: function(e){
      this.value = e.target.value;
    }
  }
});
