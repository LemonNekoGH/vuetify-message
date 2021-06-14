import {VueConstructor} from "vue";

export interface MessageOptions {
  color?: string
  message: string
}

export interface VuetifyMessages {
  info(msg: string): void
  warning(msg: string): void
  error(msg: string): void
  success(msg: string): void
  show(options: MessageOptions): void
}

export default class VuetifyMessage {
  static install(Vue: VueConstructor, options?: any): void
}

declare module 'vue/types/vue' {
  export interface Vue {
    $msg: VuetifyMessages
  }
}
