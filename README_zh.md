# `vuetify-message`
[EN](./README.md) | 简体中文

[![npm version](https://badge.fury.io/js/@lemonneko%2Fvuetify-message.svg)](https://badge.fury.io/js/@lemonneko%2Fvuetify-message)
[![vue version](https://shields.io/npm/dependency-version/%40lemonneko%2Fvuetify-message/dev/vue)](https://www.npmjs.com/package/vue)
[![vue version](https://shields.io/npm/dependency-version/%40lemonneko%2Fvuetify-message/dev/vuetify)](https://www.npmjs.com/package/vuetify)  
![GitHub CI](https://github.com/LemonNekoGH/vuetify-message/actions/workflows/ci.yml/badge.svg)

<img src="./logo.png">

一个用 [Vuetify 中的 Snackbar](https://next.vuetifyjs.com/en/components/snackbars/) 来显示提示信息的插件。  
[这里有](https://vuetify-message-demo.lemonneko.moe/) `Vue 2` 版本的 Demo。

## 快速上手
`Vue 3` 版本的 `vuetify-message` 仍在初始化阶段，因此暂时没有指引信息。  

## 开发或调试此项目
### 建议安装的 `VSCode` 插件
- Volar
- ESLint
### 安装依赖
```bash
$ yarn
```
### 预览 Demo 页面
运行以下命令，然后就可以在 http://localhost:3000 查看
```bash
$ yarn dev
```
如果需要在手机等其它局域网内设备查看，可以换成以下命令
```bash
$ yarn dev --host 0.0.0.0
```
### 构建
运行以下命令以构建 `Demo` 页，构建产物会输出到 `demoDist` 文件夹
```bash
$ yarn build:demo
``` 
运行以下命令以构建库文件，构建产物会输出到 `dist` 文件夹
```bash
$ yarn build:lib
```
## 要做的事情
- [x] 可以调用 `Vuetify` 中的 `Snackbar`
- [ ] 可以调整 `Snackbar` 的位置
- [ ] 可以调整 `Snackbar` 的颜色
- [x] 可以调整 `Snackbar` 的文字颜色
- [ ] 可以调整 `Snackbar` 的种类
- [ ] 可以调整 `Snackbar` 的消失时间
- [ ] 可以调整 `Snackbar` 会被挂载到的元素
- [ ] 可以调整 `Snackbar` 上会显示的按钮
- [ ] 可以在传统的 `Options API` 中使用
- [ ] 可以在 `Nuxt` SSR 中使用
- [ ] 可以在 `Vite` SSR 中使用