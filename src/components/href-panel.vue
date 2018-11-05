<template>
  <div class="click-div" v-on:click.prevent.stop="onClickDiv">
    <a href="http://www.iheima.com" class="click-a" v-on:click="onClickA">iheima</a>
  </div>
</template>

<script>
  export default {
    name: "href-panel",
    methods:{
      onClickDiv:function () {
        console.log('这里是click-div')
      },
      onClickA:function () {
        console.log('这里是click-a')
      }
    }
  }
</script>

<style scoped>

</style>