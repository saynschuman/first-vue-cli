<template>
  <div class="container">
    <div>async data</div>
    <div>data in console</div>
  </div>
</template>

<script>
export default {
  methods: {
    async getData() {
      try {
        const get = await fetch("https://randomuser.me/api/?results=10");
        const data = await get.json();
        return data;
      } catch (err) {
        throw new Error("somth went wrong");
      }
    },
    async showData() {
      try {
        const returnedData = await this.getData();
        console.log(returnedData);
      } catch (err) {
        console.log(err);
      }
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


