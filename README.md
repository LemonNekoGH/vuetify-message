# `vuetify-message`
EN | [简体中文](./README_zh.md)

[![npm version](https://badge.fury.io/js/@lemonneko%2Fvuetify-message.svg)](https://badge.fury.io/js/@lemonneko%2Fvuetify-message)
[![vue version](https://shields.io/npm/dependency-version/%40lemonneko%2Fvuetify-message/dev/vue)](https://www.npmjs.com/package/vue)
[![vue version](https://shields.io/npm/dependency-version/%40lemonneko%2Fvuetify-message/dev/vuetify)](https://www.npmjs.com/package/vuetify)  
![GitHub CI](https://github.com/LemonNekoGH/vuetify-message/actions/workflows/ci.yml/badge.svg)

<img src="./logo.png">

A vue plugin to show [vuetify snackbar](https://next.vuetifyjs.com/en/components/snackbars/).  
Demo is [here](https://vuetify-message-demo.lemonneko.moe/).

## Get Started
vuetify-message for vue3 is working in progress now. Sorry for no further information.

## Development Or Debug
### `VSCode` Plugin Sugguestion
- Volar
- ESLint
### Install Dependencies
```bash
$ yarn
```
### Demo Preview
Run this command, and view on http://localhost:3000
```bash
$ yarn dev
```
If you need view on other devices in local network.
```bash
$ yarn dev --host 0.0.0.0
```
### Build
Run this command to build `Demo`, and the dist after build will output to `demoDist` folder.
```bash
$ yarn build:demo
``` 
Run this command to build the library, and the dist after build will output to `dist` folder.
```bash
$ yarn build:lib
```
## Todo list
- [x] You can use `Snackbar` in `Vuetify`
- [ ] Configure: `Snackbar` position
- [ ] Configure: `Snackbar` color
- [ ] Configure: `Snackbar` text color
- [ ] Configure: `Snackbar` variant
- [ ] Configure: `Snackbar` timeout
- [ ] Configure: `Snackbar` actions button
- [ ] Configure: The element `Snackbar` will mount on
- [ ] Support `Options API`
- [ ] Support `Nuxt` SSR
- [ ] Support `Vite` SSR