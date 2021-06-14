import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VuetifyMessage from '@lemonneko/vuetify-message'
import '@lemonneko/vuetify-message/dist/index.css'

Vue.config.productionTip = false
Vue.use(VuetifyMessage)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
