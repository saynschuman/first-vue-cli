<template>
    <div class="container">
        <ul>
            <li><span>name:</span> {{userName}}</li>
            <li><span>lastName:</span> {{lastName}}</li>
            <li><span>age:</span> {{userAge}}</li>
        </ul>
        <div>
            <div>Parents:</div>
            <ul>
                <li v-for="(value, key, index) in parents" :key="index">
                    <span>{{key}}: </span>
                    {{value}}
                </li>
            </ul>
        </div>
        <div class="updateName">
            <button @click="updateName">updateName</button>
            <button @click="updateLastName('Smith')">updateLastName</button>
        </div>
        <div>
            <input class="input" v-model="message" />
            <button @click="getMessage">get message</button>
            <div>
                <input type="checkbox" value="check1" v-model="check">
                <input type="checkbox" value="check2" v-model="check">
                <div><span>gender: </span>
                    <input type="radio" name="gender" value="men" v-model="gender">
                    <input type="radio" name="gender" value="women" v-model="gender">
                </div>
                <select id="country" v-model="defaultcountry">
                    <option v-for="(country, index) in countries" :key="index">
                        {{country}}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      userName: String,
      lastName: String,
      userAge: Number,
      parents: Object,
      updateLastName: Function
    },
    data() {
      return {
        message: "",
        check: [],
        gender: "",
        countries: [
          'uk',
          'russia',
          'usa'
        ],
        defaultcountry: 'russia'
      }
    },
    methods: {
      updateName() {
        this.$emit('updateName', 'Vitaliy Kuzin')
      },
      getMessage() {
        this.message = this.defaultcountry
      }
    },
  }
</script>

<style scoped>
    .container {
        padding: 20px;
        border: 2px solid #999;
        margin: 20px 0;
    }
</style>