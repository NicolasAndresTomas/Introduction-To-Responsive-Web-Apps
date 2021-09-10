Vue.component("demo-component", {
  props:{
    title:String,
    likes:Number,
    commentids:Array,
    author:Object,
  },
  template:'<div><p><demoComponent></demoComponent></p> \
  <h3>{{title}} and likes {{likes}} by {{author.name}}</h3> \
  <h6></h6> <button v:on:click="$emit(\'say-hi\')">Say Hi</button>\
  </div>',
})

Vue.component("demoComponent", {
  template:"<p>this is a message</p>",
})

var componentA = {
  template:"<p>another paragraph</p>",
}

var ex1 = new Vue({
  el: "#example1-1",
  data: {
    title:'SIT120',
    likes: 20,
    commentids:[10,11,12],
    author: {
      name: 'Nicolas Andres Tomas',
    },
    post: {
      title:'SIT120',
      likes: 20,
      commentids:[10,11,12],
      author: {
        name: 'Nicolas Andres Tomas',
      },
    },
  },
  components: {
    "component-a": componentA,
  },
  methods: {
    sayHi: function() {
      alert("hi");
    },
  },
})

Vue.component('child',{
  props: {
    text: {
      type: String,
      required: true
    }
  },
  template: `<div>{{ text }}</div>`
});

new Vue({
  el: '#example2-1',
  data() {
    return {
      message: 'Welcome to my page!'
    }
  }
})

Vue.component('child-component', {
  template: '#child-component',
  data() {
      return {
        childTitle: 'title from child component',
        childSubtitle: 'subtitle from child component'
      }
  },
  props:{
    subtitle: {
      type: String,
      required: true
    }
  }
})

new Vue ({
  el: '#example4-1',
  data() {
      return {
        title: '- ART GALLERY -',
        subtitle: 'painting information are written through top and bottom slots'
    }
  }
})
