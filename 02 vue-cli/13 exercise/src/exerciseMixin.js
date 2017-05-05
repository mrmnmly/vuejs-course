export const exerciseMixin = {
  data() {
    return {
      text: 'An example text'
    };
  },
  computed: {
    reverse(){
      return this.text.split('').reverse().join('');    
    },
    counter(){
      const l = this.text.length;
      return this.text + ' (' + l + ')';
    }
  }
};
