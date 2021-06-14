<template>
  <v-app>
    <v-app-bar app flat color="#ff8a65" dark>
      <span class="text-h5">VuetifyMessage Sample</span>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field outlined label="Input your message here" v-model="message"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field outlined label="Input your snackbar color here" v-model="color"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="text-body-2">Change your snackbar position</p>
            <v-btn-toggle v-model="position" v-if="$vuetify.breakpoint.width > 640" :dense="$vuetify.breakpoint.width < 670">
              <v-btn>TOP</v-btn>
              <v-btn>TOP-LEFT</v-btn>
              <v-btn>TOP-RIGHT</v-btn>
              <v-btn>BOTTOM</v-btn>
              <v-btn>BOTTOM-LEFT</v-btn>
              <v-btn>BOTTOM-RIGHT</v-btn>
            </v-btn-toggle>
            <v-menu v-if="$vuetify.breakpoint.width <= 640">
              <template #activator="{attr, on}">
                <v-btn outlined text v-on="on" v-bind="attr">
                  {{selectedPosition}}
                  <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list dense>
                <v-list-item @click="position=0">TOP</v-list-item>
                <v-list-item @click="position=1">TOP-LEFT</v-list-item>
                <v-list-item @click="position=2">TOP-RIGHT</v-list-item>
                <v-list-item @click="position=3">BOTTOM</v-list-item>
                <v-list-item @click="position=4">BOTTOM-LEFT</v-list-item>
                <v-list-item @click="position=5">BOTTOM-RIGHT</v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card outlined>
              <v-card-subtitle>Your code may like this</v-card-subtitle>
              <v-divider></v-divider>
              <v-card-text>
                <pre class="code">
1 this.$msg.show({
2     message: '{{message}}',
3     color: '{{color}}',
4     position: SnackbarPosition.{{selectedPosition}}
5 })
                </pre>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="showMessage" text outlined>Click to show your message</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  methods: {
    showMessage () {
      this.$msg.show({
        message: this.message,
        color: this.color,
        position: this.position
      })
    }
  },
  data () {
    return {
      message: '',
      color: '',
      position: 0
    }
  },
  computed: {
    selectedPosition (): string {
      switch (this.position) {
        case 0: return 'TOP'
        case 1: return 'TOP_LEFT'
        case 2: return 'TOP_RIGHT'
        case 3: return 'BOTTOM'
        case 4: return 'BOTTOM_LEFT'
        case 5: return 'BOTTOM_RIGHT'
        default: return 'TOP'
      }
    }
  }
})
</script>

<style lang="less">
.code {
  overflow-y: auto;
}
</style>
