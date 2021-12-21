import Vue from 'vue2'
import VueCompositionAPI from '@vue/composition-api'

import App from './App.vue'

Vue.use(VueCompositionAPI)

const app = new Vue({
  render: h => h(App)
})

app.$mount('#app')
