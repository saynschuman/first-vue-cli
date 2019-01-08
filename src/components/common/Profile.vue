<template>
    <div class="container">
         <b>from other component</b>
        <div class="name">name: <span> {{name}} </span></div>
        <div class="name">surname: <span>{{surName}}</span></div>
    </div>
</template>

<script>
  export default {
    computed: {
      name() {
        return this.$store.state.name
      },
      surName() {
        return this.$store.state.surName
      }
    }
  };
</script>

<style scoped>

</style>