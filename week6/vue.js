var ex0 = new Vue({
  el:"#example1-1",
  data:{
    username:'',
    password:'',
    email:'',
  },
  methods:{
    checkInput: function() {
      var str='';
      if (this.username) {
        str = str +"username: " + this.username;
      }
      if (this.password) {
        str = str +"password: " + this.password;
      }
      if (this.email) {
        str = str +"email: " + this.email;
      }
      if (str) {
        alert(str)
      } else {
        alert("Please input required info")
      }
    }
  }
})

var ex1 = new Vue({
  el: "#example2-1",
  data: {
    checkedDimensions:[],
  },
})

var ex2 = new Vue({
  el: "#example3-1",
  data: {
    selected: '1920x1080 px',
    options: [
      { text: 'Dimension size 1', value: '1920x1080 px' },
      { text: 'Dimension size 2', value: '1280x720 px' },
      { text: 'Dimension size 3', value: '1080x1080 px' }
    ]
  },
})

var ex3 = new Vue({
  el:"#example4-1",
  data:{
    username:'',
    password:'',
    email:'',
  },
  methods:{
    checkInput: function() {
      var str='';
      if (this.username) {
        str = str +"username: " + this.username;
      }
      if (this.password) {
        str = str +"password: " + this.password;
      }
      if (this.email) {
        str = str +"email: " + this.email;
      }
      if (str) {
        alert(str)
      } else {
        alert("Please input required info")
      }
    }
  }
})
