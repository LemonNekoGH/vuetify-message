import { createApp, reactive, h } from "vue"
import vuetifyMessage from './vuetify-message.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { VSnackbar, VApp } from "vuetify/components"

export type Message = {
  show(text: string): void
}
// 导出使用函数
export const useMessage = (): Message => {
  return (() => {
    // 闭包，保存数据
    const props = reactive({
      modelValue: false,
      text: ''
    })
    return {
      show: (textLocal: string) => {
        let containerEl = document.querySelector('#vuetify-snackbar-container') as HTMLDivElement
        if (!containerEl) {
          // 容器元素不存在，新建一个
          containerEl = document.createElement('div')
          containerEl.id = 'vuetify-snackbar-container'
          document.body.appendChild(containerEl)
          // 新建一个 vue 实例
          createApp({
            render: () => h(vuetifyMessage, props)
          }).use(createVuetify({
            components: {
              'v-snackbar': VSnackbar,
              'v-app': VApp
            }
          })).mount('#vuetify-snackbar-container')
            
        }
        props.text = textLocal
        props.modelValue = true
        // 定时关闭
        setTimeout(() => props.modelValue = false, 2000)
      } 
    }
  })()
}