<template>
  <div class="pageb">
    <h1>page b</h1>
    <h2>{{ $store.state.count.count }}</h2>
    <button type="button" name="button" @click="add(2)">增加</button>
    <button type="button" name="button" @click="reduce">减少</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    methods:mapActions('count',['add','reduce']),
    name: "pageb"
  }
</script>

<style scoped>

</style>