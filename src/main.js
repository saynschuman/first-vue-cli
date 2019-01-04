import Vue from "vue"
import App from './App'
import Header from './components/layout/Header'

Vue.component('global-header', Header)

new Vue({
  el: "#app",
  render: h => h(App)
});
