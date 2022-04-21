import { createVuetify } from 'vuetify'
import { createApp } from 'vue'
import * as components from 'vuetify/components'
import App from './App.vue'

createApp(App).use(createVuetify({
  components,
})).mount('#app')
