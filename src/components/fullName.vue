<template>

  <div>
    <slot name="a"></slot>
    {{fullName}}
    <p>{{fullName2}}</p>
    <slot name="b"></slot>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        firstName: 'Fosweewo',
        lastName: 'Bawwwr',
        fullName: 'Foo Bar',
        // fullName2: 'Foo2 Bar2'
      }
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
      }
    },
    computed: {
      fullName2: {
        get: function () {
          return this.firstName + ' ' + this.lastName;
        },
        set: function (newValue) {
          var names = newValue.split(' ');
          this.firstName = names[0];
          this.lastName = names[names.length - 1];
        }
      }
    }
  }
</script>

<style scoped>

</style>