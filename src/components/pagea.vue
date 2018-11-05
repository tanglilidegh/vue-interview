<template>
  <div class="pagea">
    <h1>page a</h1>
    <h2>{{ $store.state.money.money }}</h2>
    <button type="button" name="button" @click="add">增加</button>
    <button type="button" name="button" @click="reduce">减少</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    methods:mapActions('money',['add','reduce']),
    name: "pagea"
  }
</script>

<style scoped>

</style>