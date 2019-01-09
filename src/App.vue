<template>
  <div>
    <div class="container">
      <div class="name">name: <span> {{showName}} </span></div>
      <div class="name">surname: <span>{{showSurName}}</span></div>
      <div class="name">age: <span>{{showAge}}</span></div>
    </div>
    <div class="container">
      <div class="buttons">
        <div>
          <input type="text" v-model="name">
          <div>
            <button @click="swapName(name)">add new name</button>
            <button @click="changeAge">change age</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      name: ""
    };
  },
  computed: {
    ...mapGetters([
        'showAge',
        'showName',
        'showSurName'
    ])
  },
  methods: {
    ...mapMutations([
      'changeAge',
      'swapName'
    ])
  }
};
</script>

<style>
  .container {
    margin: 30px;
  }
</style>
