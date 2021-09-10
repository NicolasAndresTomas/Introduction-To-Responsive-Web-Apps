Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var ex0 = new Vue({
  el: '#example1-1',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Fruit' }
    ]
  }
})

Vue.component('heading-component', {
   template : '<div><h1>Heading 1</h1></div>'
})

var ex1 = new Vue({ el: '#example2-1' })

Vue.component('title-component', {
  data: function () {
    return {
    }
  },
  props: ['title'],
  template: '<h4>{{ title }}</h4>'
})

var ex2 = new Vue({ el: '#example2-2' })

var ex3 = new Vue({
  el: '#example3-1',
  data: {
    message: 'bad'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var ex4 = new Vue({
  el: '#example3-2',
  data: {
    message: '...'
  }
})
