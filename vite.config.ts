import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { pluginI18n } from '@intlify/vite-plugin-vue-i18n'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    pluginI18n({
      // you need to set i18n resource including paths !
      include: path.resolve(__dirname, './src/locales/**')
    })
  ]
})
