import Vue from "vue"
import App from './App'
import Header from './components/layout/Header'
import { store } from'./store/store'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.component('global-header', Header)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: "#app",
  router,
  render: h => h(App),
  store
});
