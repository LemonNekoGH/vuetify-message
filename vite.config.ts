import { defineConfig, PluginOption, UserConfigExport } from 'vite'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// 两种模式都会有的配置
const configForAll: UserConfigExport = {
    plugins: [
        eslint(),
        vue()
    ]
}
export default defineConfig(({ mode }) => {
    if (mode === 'demo') {
        return {
            ...configForAll,
            // 在 demo 模式下的特有配置
            build: {
                outDir: resolve(__dirname, './demoDist')
            },
            base: './'
        }
    } else if (mode === 'lib') {
        return {
            plugins: [
                ...configForAll.plugins as PluginOption[],
                // 用于生成类型文件
                dts({
                    copyDtsFiles: false
                })
            ],
            // 在 lib 模式下的特有配置
            build: {
                lib: {
                    entry: resolve(__dirname, './lib/main.ts'),
                    name: 'VuetifyMessage',
                    fileName: (format) => `vuetify-message.${format}.js`
                },
                rollupOptions: {
                    external: ['vue', 'vuetify'],
                    output: {
                        globals: {
                            vue: 'Vue',
                            vuetify: 'Vuetify'
                        }
                    }
                }
            }
        }
    } else {
        throw new Error('没有名为 ' + mode + ' 的模式')
    }
})
