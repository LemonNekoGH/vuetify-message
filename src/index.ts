import OurVue, {VueConstructor, PluginObject} from 'vue'
import Message from "./Message.vue"
import Vuetify from "vuetify"
import {CombinedVueInstance} from "vue/types/vue";

export interface MessageOptions {
  color?: string
  message: string
  position?: SnackbarPosition
}

export interface VuetifyMessages {
  info(msg: string): void
  warning(msg: string): void
  error(msg: string): void
  success(msg: string): void
  show(options: MessageOptions): void
}

export enum SnackbarPosition {
  TOP,
  TOP_LEFT,
  TOP_RIGHT,
  BOTTOM,
  BOTTOM_LEFT,
  BOTTOM_RIGHT
}

export interface SnackbarData {
  showing: boolean
  color: string
  msg: string
  position: SnackbarPosition
}

export default class VuetifyMessage {
  static install(Vue: VueConstructor, options?: any): void {
    OurVue.use(Vuetify)

    const container = document.createElement('div')
    container.classList.add('snack-bar-container')

    const snackbar: CombinedVueInstance<Vue, SnackbarData, any, any, any> = new Message({
      vuetify: new Vuetify({}),
      el: container,
      data(): SnackbarData {
        return {
          showing: false,
          color: '',
          msg: '',
          position: SnackbarPosition.TOP
        }
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
          switch (options.color) {
            case 'success': snackbar.color = '#4CAF50';break
            case 'info': snackbar.color = '#03A9F4';break
            case 'warning': snackbar.color = '#FF9800';break
            case 'error': snackbar.color = '#F44336';break
            default: snackbar.color = options.color
          }
        }
        snackbar.msg = options.message
        if (options.position) {
          snackbar.position = options.position
        } else {
          snackbar.position = SnackbarPosition.TOP
        }
        snackbar.showing = true
      },
    }

    console.log('VuetifyMessage plugin installed.')
  }
}
