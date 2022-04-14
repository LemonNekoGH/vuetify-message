<script lang="ts" setup>import { computed, CSSProperties } from 'vue'

// 定义要传入的参数
type Props = {
  modelValue: boolean,
  text: string,
  color?: string,
  textColor?: string
}
const props = withDefaults(defineProps<Props>(), {
  color: 'indigo',
  textColor: ''
})
// 文字样式
const textStyle = computed<CSSProperties>(() => {
  return props.textColor ? {
    color: props.textColor
  } : {}
})
</script>
<template>
  <v-app>
    <v-snackbar
      app
      :color="props.color"
      :model-value="props.modelValue"
      :timeout="-1"
    >
      <span :style="textStyle">{{ props.text }}</span>
    </v-snackbar>
  </v-app>
</template>