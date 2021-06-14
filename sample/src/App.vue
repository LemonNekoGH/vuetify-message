<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>VuetifyMessage Sample</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-btn @click="showMessage">Click to show message</v-btn>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  methods: {
    showMessage () {
      this.$msg.success('test')
    }
  }
})
</script>

<style lang="less">
</style>
