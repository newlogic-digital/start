import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { createI18n } from 'vue-i18n'
import type { I18nOptions } from 'vue-i18n'
import { createPinia } from 'pinia'
import { PiniaColada } from '@pinia/colada'
import { routes } from 'vue-router/auto-routes'
import messages from '@intlify/unplugin-vue-i18n/messages'
import App from './app.vue'
import { datetimeFormats, numberFormats, pluralRules } from '@/utils/localeRules.js'

const locale = window.navigator.language.split('-')[0]

const pinia = createPinia()

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

const app = createApp(App)

app.use(pinia)
app.use(PiniaColada)
app.use(router)
app.use(createI18n({
  locale,
  datetimeFormats,
  numberFormats,
  pluralRules,
  messages,
} as I18nOptions))

app.mount('#app')
