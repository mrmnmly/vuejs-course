new Vue({
  el: '#exercise',
  data: {
    isVisible: false,
    classForSwitch: 'box',
    effect: '',
    customClass: '',
    plainStyleList: '',
    progressBar:{
      width: '0px',
      height: '20px',
      backgroundColor: 'red'
    }
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
      var vm = this;
      this.effect = 'highlight';
      setInterval(function(){
        vm.effect = vm.effect === 'highlight' ? 'shrink' : 'highlight';
      }, 2500);
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
     
      setInterval(function() {
        width = width + 10;
        vm.progressBar.width = width + 'px';
      }, 500);
    }
  }
});
