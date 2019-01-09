<template>
  <div>
    <div class="container">
      <div class="name">
        name:
        <span>{{showName}}</span>
      </div>
      <div class="name">
        surname:
        <span>{{showSurName}}</span>
      </div>
      <div class="name">
        age:
        <span>{{showAge}}</span>
      </div>
      <div v-if="isLoading" class="name">
        count:
        <span>loading...</span>
      </div>
      <div v-if="!isLoading" class="name">
        count:
        <span>{{showCount}}</span>
      </div>
    </div>
    <div class="container">
      <div class="buttons">
        <div>
          <input type="text" v-model="name">
          <div>
            <button @click="swapName(name)">add new name</button>
            <button @click="changeAge">change age</button>
            <button @click="increment">increment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      name: ""
    };
  },
  computed: {
    ...mapGetters([
      "showAge",
      "showName",
      "showSurName",
      "showCount",
      "isLoading"
    ])
  },
  methods: {
    ...mapMutations(["changeAge", "swapName"]),
    ...mapActions(["increment"])
  }
};
</script>

<style>
.container {
  margin: 30px;
}
</style>
