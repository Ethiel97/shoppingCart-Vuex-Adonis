require('./bootstrap')

window.Vue = require('vue')

import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

import store from './store/index'

import App from './components/App'

Vue.component('banner', require('./components/Banner'))
Vue.component('search-bar', require('./components/SearchBar'))
Vue.component('products', require('./components/Products'))
Vue.component('app', require('./components/App'))

new Vue({
  el: '#app',
  components: {
    App,
  },
  store
})
