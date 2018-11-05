<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <todo-item v-for="item in groceryList" v-bind:todo="item.text" v-bind:key="item.id"></todo-item>
    </ul>
    <href-panel></href-panel>
    <HelloWorld msg="Welcome to Your Vue.js App" num='234' @patch="message2" :number="numbers"/>
    <full-name>

      <h1 slot="a">这里是我要加的东西</h1>
      <h2 slot="b">加在下面的内容</h2>
    </full-name>
    <!--<Vuexx></Vuexx>-->
    <pagea></pagea>
    <pageb></pageb>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import todoItem from './components/todo.vue'
  import hrefPanel from './components/href-panel.vue'
  import fullName from './components/fullName.vue'
  // import Vuexx from './components/vuex.vue'
  import pagea from './components/pagea.vue'
  import pageb from './components/pageb.vue'

  export default {
    name: 'app',
    data() {
      return {
        groceryList: [
          {id: 0, text: '蔬菜'},
          {id: 1, text: '奶酪'},
          {id: 2, text: '随便其它什么人吃的东西'}
        ],
        numbers: 100
      }
    },
    methods:{
      message2:function (ag) {
        this.numbers++;
        window.console.log(ag);
        window.console.log('message2');
      }
    },
    components: {
      HelloWorld,
      'todo-item': todoItem,
      'href-panel':hrefPanel,
      'full-name':fullName,
      // Vuexx,
      pagea,
      pageb
    },
    beforeCreate: function () {
      window.console.log('beforeCreate')
    },
    created:function () {
      window.console.log('created')
    },
    beforeMount:function () {
      window.console.log('beforeMount')
    },
    mounted:function () {
      window.console.log('mounted')
    },
    beforeUpdate:function () {
      window.console.log('beforeUpdate')
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
