# vuetify-message
[![Vue-Badge][Vue-Badge]][Vue-Link]
[![Vuetify-Badge][Vuetify-Badge]][Vuetify-Link]

A vue plugin to show [vuetify snackbar](https://vuetifyjs.com/en/components/snackbars).

[Demo is here](https://vuetify-message-demo.lemonneko.moe)

### Get Started
Because Lemoneko's English is not good, you may need to check the example program to understand, sorry

如果你会一点中文，可以直接看[中文](./README.zh.md)版本。

#### Install Dependencies
- `Vue >= 2.6.11`
- `Vuetify >= 2.4.0`

#### Install Plugin
NPM
```
npm install @lemonneko/vuetify-message
```
Yarn
```
yarn add @lemonneko/vuetify-message
```
#### Set Up Plugin
You just need to import the plugin class and let Vue use it.

For example, in your `main.ts`
```typescript
import VuetifyMessage from '@lemonneko/vuetify-message'
import Vue from 'vue'
import '@lemonneko/vuetify-message/dist/index.css'

Vue.use(VuetifyMessage)
```
You must import `@lemonneko/vuetify-message/dist/index.css`, or the snackbar will display with no style.

#### Now use it in your logic code.
For example, in your `App.vue`
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
In this example, you create a button, and bind `showMsg` to button's click event.

Once the method with name `showMsg` execute, the snackbar will show in your screen.

### TODO-List
- Plugin Configure: Custom property name to bind on Vue instance
- Plugin Configure: Document of custom property name
- Snackbar option: display timeout
- Snackbar option: prepend icon
- Snackbar option: close button
- Document of Snackbar option: position

[Vue-Badge]: https://img.shields.io/badge/-Vue_>=_2.6.11-4FC08D?logo=vue.js&logoColor=white "Vue"
[Vue-Link]: https://vuejs.org/ "Vue-Link"
[Vuetify-Badge]: https://img.shields.io/badge/-Vuetify_%3E=_2.4.0-1867C0?logo=vuetify&logoColor=white "Vuetify"
[Vuetify-Link]: https://vuetifyjs.com/en/ "Vuetify-Link"
