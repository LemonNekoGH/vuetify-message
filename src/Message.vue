<template>
  <v-snackbar v-model="showing" :color="color" :top="isTop" :left="isLeft" :bottom="isBottom" :right="isRight">{{ msg }}</v-snackbar>
</template>
<script lang="ts">
import Vue from 'vue'
import {SnackbarData, SnackbarPosition} from "./index";

export default Vue.extend({
  computed: {
    isTop(): boolean {
      return this.position === SnackbarPosition.TOP
      || this.position === SnackbarPosition.TOP_LEFT
      || this.position === SnackbarPosition.TOP_RIGHT
    },
    isLeft(): boolean {
      return this.position === SnackbarPosition.TOP_LEFT
      || this.position === SnackbarPosition.BOTTOM_LEFT
    },
    isRight(): boolean {
      return this.position === SnackbarPosition.TOP_RIGHT
      || this.position === SnackbarPosition.BOTTOM_RIGHT
    },
    isBottom(): boolean {
      return this.position === SnackbarPosition.BOTTOM
        || this.position === SnackbarPosition.BOTTOM_RIGHT
        || this.position === SnackbarPosition.BOTTOM_LEFT
    }
  },
  data(): SnackbarData {
    return {
      showing: false,
      msg: '',
      color: '',
      position: SnackbarPosition.TOP
    }
  }
})
</script>
