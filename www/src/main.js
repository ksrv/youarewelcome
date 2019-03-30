import Vue from 'vue'
import VueBus from 'vue-bus';
import App from './App.vue'
import store from './store'

Vue.use(VueBus);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
