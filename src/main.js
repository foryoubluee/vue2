import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
