<template>
  <div class="container">
    <div>async data</div>
    <div>data in console</div>
  </div>
</template>

<script>
export default {
  methods: {
    async showData() {
      const get = await fetch("https://randomuser.me/api/?results=10");
      const data = await get.json();
      console.log(data);
    }
  },
  created() {
    this.showData();
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
  border: 1px solid #999;
  display: flex;
  justify-content: space-between;
}
</style>


