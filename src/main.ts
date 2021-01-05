import { createApp } from 'vue'
import App from './App.vue'
import { i18n, setI18nLanguage } from './i18n'

setI18nLanguage(i18n, 'en')

createApp(App).use(i18n).mount('#app')
