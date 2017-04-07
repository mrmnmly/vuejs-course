new Vue({
  el: '#exercise',
  data: {
    firstClass: {backgroundColor: 'pink'},
    secondClass: {display: 'block', margin: '0 auto', textAlign: 'center'},
    customClass: '',
    plainStyleList: '',
  },
  computed: {
    styleList: function(){
      var arr = this.plainStyleList.split(';');
      var resultArr = [];

      for(var item in arr){
        var styles = {};
        var splited = arr[item].split(':');

        if(splited.length === 2){
          styles[splited[0]] = splited[1]
          resultArr.push(styles);
        }
      }
      console.log(resultArr);
      return resultArr;
    }
  },
  methods: {
    startEffect: function() {
      var div = document.getElementById('effect'); 
      
      if(div.classList.contains('highlight')){
        div.className = 'shrink';
      }else{
        div.className = 'highlight';
      }
    },
    startProgress: function(){
    
    }
  }
});
