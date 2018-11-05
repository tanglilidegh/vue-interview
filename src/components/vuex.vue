<template>
  <div class="vuex">
    vuex {{$store.state.count}}
    <button type="button" name="button" @click="increment">增加</button>
    <button type="button" name="button" @click="decrement">删减</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  //mapActions是为了让当前组件中定义的方法跟vuex中actions内部的increment和decrement关联起来。
  export default {
    name: "vuex",
    methods: mapActions({'increment','decrement'})
  }
</script>

<style scoped>

</style>