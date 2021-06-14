import OurVue, {VueConstructor, PluginObject} from 'vue'
import Message from "./Message.vue"
import Vuetify from "vuetify"

export interface MessageOptions {
  color?: string
  message: string
  top?: boolean
  bottom?: boolean
  left?: boolean
  right?: boolean
}

export interface VuetifyMessages {
  info(msg: string): void
  warning(msg: string): void
  error(msg: string): void
  success(msg: string): void
  show(options: MessageOptions): void
}

export default class VuetifyMessage {
  static install(Vue: VueConstructor, options?: any): void {
    OurVue.use(Vuetify)

    const container = document.createElement('div')
    container.classList.add('snack-bar-container')

    const snackbar = new Message({
      vuetify: new Vuetify({}),
      el: container,
      data: {
        showing: false,
        color: '',
        msg: ''
      }
    })
    document.body.appendChild(snackbar.$el)

    Vue.prototype.$msg = <VuetifyMessages>{
      info(msg: string) {
        this.show({ color: '#03A9F4', message: msg })
      },
      warning(msg: string) {
        this.show({ color: '#FF9800', message: msg })
      },
      error(msg: string) {
        this.show({ color: '#F44336', message: msg })
      },
      success(msg: string) {
        this.show({ color: '#4CAF50', message: msg })
      },
      show(options: MessageOptions) {
        if (options.color) {
          snackbar.color = options.color
        }
        snackbar.msg = options.message
        snackbar.showing = true
      },
    }

    console.log('VuetifyMessage plugin installed.')
  }
}
