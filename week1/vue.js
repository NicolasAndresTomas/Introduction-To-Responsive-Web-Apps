var ex0 = new Vue({

  el:'#example4-1',
  data: {
    items:[]
  },

methods:{

  addItem() {
    this.items.push(this.newItem);
    this.newItem='';
  }
}
})

var ex1 = new Vue({
  el: '#example4-2',
  data: {
    message: 'Welcome to my HTML page!'
  }
})

var ex2 = new Vue({
  el: '#example4-3',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
