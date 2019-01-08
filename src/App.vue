<template>
  <div>
    <div class="container">
      <div class="name">name: <span> {{name}} </span></div>
      <div class="name">surname: <span>{{surName}}</span></div>
    </div>
    <Profile />
    <div class="container">
      <div class="buttons">
        <button @click="updateName">update</button>
        <div>
          <input type="text" v-model="inputName">
          <div>
            <button @click="addNewName">add new name</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from './components/common/Profile'
export default {
  data() {
    return {
      inputName: ''
    };
  },
  computed: {
    name() {
      return this.$store.state.name
    },
    surName() {
      return this.$store.state.surName
    }
  },
  methods: {
    updateName() {
      // console.log('new mame')
      this.$store.state.name = 'new Name'
    },
    addNewName() {
      this.$store.state.name = this.inputName
    }
  },
  components: {
    Profile
  }
};
</script>

<style>
  .container {
    margin: 30px;
  }
</style>