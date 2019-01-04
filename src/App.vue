<template>
    <div class="container">
        <global-header />
        <Profile
            :userName="name"
            :lastName="lastName"
            :userAge="age"
            :parents="parents"
            @updateName="name = $event"
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