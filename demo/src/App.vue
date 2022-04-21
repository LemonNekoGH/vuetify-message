<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import type { MessageOptions } from '../../lib/main'
import { useMessage } from '../../lib/main'

const msg = useMessage()
const text = ref('my text')
const options = reactive<MessageOptions>({
  color: '#6200ee',
})

const code = computed(() => `import { useMessage } from '@lemonneko/vuetify-message'
import '@lemoneko/vuetify-message/dist/style.css'

const message = useMessage()
message.show('${text.value}', {
  color: '${options.color}'
})
`)
</script>
<template>
  <v-app>
    <v-app-bar app flat color="primary">
      <v-toolbar-title>Vuetify Message For Vue3 Demo</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-text-field v-model="text" variant="outlined" label="text" color="primary" />
        <v-text-field v-model="options.color" variant="outlined" label="color(hex, or vuetify colors)" color="primary" />
        <v-card variant="outlined">
          <v-card-title>Your code</v-card-title>
          <v-divider />
          <v-card-text>
            <pre>{{ code }}</pre>
          </v-card-text>
        </v-card>
        <v-btn variant="outlined" color="primary" style="margin-top: 24px" @click="msg.show(text, options)">
          Show Snackbar
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>
