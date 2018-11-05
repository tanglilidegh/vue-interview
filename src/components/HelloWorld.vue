<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ message }}</p>
    <p>{{fullNum}}</p>
    <button v-on:click="reverseMessage">逆转message</button>
    <div v-bind:title="desc">鼠标悬停几秒钟查看此处动态绑定的提示信息！</div>
    <div v-if="seen">现在看到我了</div>
    <p>{{inputText}}</p>
    <input type="text" v-model="inputText">
    <div v-for="item in todos" v-bind:key="item.id">{{item.test}}</div>
    <p>{{fullNum + 1}}</p>
    <p>{{seen?'YES':'NO'}}</p>
    <p>{{message.split('-').reverse().join()}}</p>
    <br>
    <a v-bind:href="url">iheima</a>
    <br>
    <button v-on:click='showText'>说些什么内容呢</button>
    <br>
    <button type="button" @click="$emit('patch',34)">发送到父组件</button>
    <br>
    <hr>
    <p>{{number}}</p>
    <hr>
    <br>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        message: 'reverseMessage',
        desc: '页面加载于' + new Date().toLocaleString(),
        seen: true,
        todos: [
          {test: '-webkit-font-smoothing', id: 0},
          {test: '-moz-osx-font-smoothing', id: 1},
          {test: 'text-align', id: 2},
          {test: 'color', id: 3},
        ],
        inputText: '',
        url: 'http:www.iheima.com'
      }
    },
    computed: {
      fullNum: function () {
        return parseInt(this.num) * 6;
      }
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('');
      },
      showText: function () {
        console.log('说些什么内容呢？')
      }
    },
    props: {
      msg: String,
      num: String,
      number: Number
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
