import Vue from "vue"
import App from './App'
import Header from './components/layout/Header'
import { store } from'./store/store'

Vue.component('global-header', Header)

new Vue({
  el: "#app",
  render: h => h(App),
  store
});
