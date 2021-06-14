import {VueConstructor} from "vue"

export enum SnackbarPosition {
  TOP,
  TOP_LEFT,
  TOP_RIGHT,
  BOTTOM,
  BOTTOM_LEFT,
  BOTTOM_RIGHT
}

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

export interface SnackbarData {
  showing: boolean
  color: string
  msg: string
  position: SnackbarPosition
}

export default class VuetifyMessage {
  static install(Vue: VueConstructor, options?: any): void
}

declare module 'vue/types/vue' {
  export interface Vue {
    $msg: VuetifyMessages
  }
}
