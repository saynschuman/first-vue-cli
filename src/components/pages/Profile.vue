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
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      userName: String,
      lastName: String,
      userAge: Number,
      parents: Object
    },
    methods: {
      updateName() {
        this.$emit('updateName', 'Vitaliy Kuzin')
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