<template>
    <div class="container">
        <global-header />
        <div><span>name: </span>{{name}}</div>
        <div><span>name: </span>{{lastName}}</div>
        <Profile
            :userName="name"
            :lastName="lastName"
            :userAge="age"
            :parents="parents"
            @updateName="name = $event"
            :updateLastName="updateLastName"
        />
        <Footer />
    </div>
</template>

<script>
    import Footer from './components/layout/Footer'
    import Profile from './components/pages/Profile'
    export default {
      data() {
        return {
          name: "Vitaliy",
          lastName: "Kuzin",
          age: 28,
          parents: {
            mother: "Larisa",
            father: "Vladimir"
          }
        }
      },
      methods: {
        updateLastName(value) {
          this.lastName = value
        }
      },
      components: {
        Footer,
        Profile
      }
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
    .container {
        padding: 30px;
    }
    .updateName {
        margin: 20px 0 0;
    }
</style>