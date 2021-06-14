# vuetify-message
[![Vue-Badge][Vue-Badge]][Vue-Link]
[![Vuetify-Badge][Vuetify-Badge]][Vuetify-Link]

一个用于显示 [Vuetify 消息条](https://vuetifyjs.com/zh-Hans/components/snackbars) 的 Vue 插件

### 开始使用
#### 安装依赖
- `Vue >= 2.6.11`
- `Vuetify >= 2.4.0`

#### 安装插件
NPM
```
npm install @lemonneko/vuetify-message
```
Yarn
```
yarn add @lemonneko/vuetify-message
```
#### 设置插件
你只需要导入插件类然后直接让 Vue 用它就好了。

举个栗子，这是你的 `main.ts`
```typescript
import VuetifyMessage from '@lemonneko/vuetify-message'
import Vue from 'vue'
import '@lemonneko/vuetify-message/dist/index.css'

Vue.use(VuetifyMessage)
```
你需要导入 `@lemonneko/vuetify-message/dist/index.css`，不然显示的消息条会丢失样式。

#### 在代码中使用
举个栗子，这是你的 `App.vue`
```vue
<template>
  <v-btn @click="showMsg">Click To Show Snackbar</v-btn>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extends({
  methods: {
    showMsg() {
      this.$msg.info('This is your snackbar')
    }
  }
})
</script>
```
在这个栗子里，你创建了一个按钮，然后把 `showMsg` 方法绑定到了按钮的 `点击` 事件上。

当你点击这个按钮时，`showMsg` 方法便会执行，并在你的屏幕下方显示一个消息条。

### 未完成列表
- 插件设置：自定义绑定到 `Vue` 示例上的属性名
- 插件设置：文档
- 消息条选项：位置
- 消息条选项：在屏幕上显示的时间
- 消息条选项：消息条上显示的图标
- 消息条选项：关闭按钮
- 消息条选项的文档

[Vue-Badge]: https://img.shields.io/badge/-Vue_>=_2.6.11-4FC08D?logo=vue.js&logoColor=white "Vue"
[Vue-Link]: https://cn.vuejs.org/ "Vue-Link"
[Vuetify-Badge]: https://img.shields.io/badge/-Vuetify_%3E=_2.4.0-1867C0?logo=vuetify&logoColor=white "Vuetify"
[Vuetify-Link]: https://vuetifyjs.com/zh-Hans/ "Vuetify-Link"
