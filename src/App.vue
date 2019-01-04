<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
            <button class="button btn, btn-primary" @click="display = !display">Toggle</button>
            <transition name="appear">
                <div class="p-3 mb-2 bg-success text-white" v-if="display">Hello</div>
            </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          display: false
        }
      },
      methods: {
        updateLastName(value) {
          this.lastName = value
        }
      }
    }
</script>

<style>
    button {
        cursor: pointer;
    }
    .container {
        margin-top: 20px;
    }
    .button {
        display: block;
        margin-bottom: 20px;
    }
    .appear-enter {
        opacity: 0;
        transform: translateX(10px);
    }
    .appear-enter-active {
        transition: all 1s;
    }
    .appear-leave {

    }

    .appear-leave-active {
        opacity: 0;
        transition: all .5s;
        transform: translateX(10px);
    }

</style>