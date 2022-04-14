<script lang="ts" setup>
import { useMessage } from '../../lib/main'

const msg = useMessage()
</script>
<template>
  <button @click="msg.show(Math.random().toString())">
    点这显示一个 snackbar
  </button>
</template>