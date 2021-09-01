// variable called popup-component - handler #1
new Vue({
  el: '#prompt',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})

// Define a new component called title-component - prop #2
Vue.component('title-component', {
  data: function () {
    return {
    }
  },
  props: ['title'],
  template: '<h4>{{ title }}</h4>'
})

new Vue({ el: '#art-name' })

// Define a new component called heading-component #3
Vue.component('heading-component', {
   template : '<div><h1>Ernesto Vaquero</h1></div>'
})

new Vue({ el: '#artist-name' })

// Define a new component called anchored-heading-component - rendering #4
Vue.component('anchored-heading-component', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,
      this.$slots.default
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
