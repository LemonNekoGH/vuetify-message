<template>
  <v-snackbar v-model="showing" :color="color">{{ msg }}</v-snackbar>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      showing: false,
      msg: '',
      color: ''
    }
  }
})
</script>
