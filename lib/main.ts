import { createApp, h, reactive } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { VApp, VSnackbar } from 'vuetify/components'
import vuetifyMessage from './vuetify-message.vue'

// 消息选项
export interface MessageOptions {
  color?: string // 消息颜色
}

type Props = MessageOptions & {
  text: string
  modelValue: boolean
}

export interface Message {
  show(text: string, options: MessageOptions): void
}
// 导出使用函数
export const useMessage = (): Message => {
  return (() => {
    // 闭包，保存数据
    const props = reactive<Props>({
      modelValue: false,
      text: '',
      color: 'messageColor',
    })
    return {
      show: (textLocal: string, options: MessageOptions) => {
        let containerEl = document.querySelector('#vuetify-snackbar-container') as HTMLDivElement
        if (!containerEl) {
          // 容器元素不存在，新建一个
          containerEl = document.createElement('div')
          containerEl.id = 'vuetify-snackbar-container'
          document.body.appendChild(containerEl)
        }
        // 新建一个 vue 实例
        const app = createApp({
          render: () => h(vuetifyMessage, props),
        }).use(createVuetify({
          components: {
            'v-snackbar': VSnackbar,
            'v-app': VApp,
          },
          theme: (() => {
            // 如果颜色值开头是 # 的话，表示是 hex 颜色值，需要在 vuetify 中注册
            if (options.color && options.color.startsWith('#')) {
              return {
                defaultTheme: 'light',
                themes: {
                  light: {
                    dark: false,
                    colors: {
                      messageColor: options.color,
                    },
                  },
                },
              }
            }
            return {
              defaultTheme: 'light',
              themes: {
                light: {
                  dark: false,
                  colors: {
                    messageColor: '#6200ee',
                  },
                },
              },
            }
          })(),
        }))
        app.mount(containerEl)
        props.text = textLocal
        props.modelValue = true
        props.color = (options.color?.startsWith('#') ? 'messageColor' : options.color) ?? 'messageColor'
        // 定时关闭
        setTimeout(() => {
          props.modelValue = false
          app.unmount()
        }, 2000)
      },
    }
  })()
}
