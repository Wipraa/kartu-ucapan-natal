import { createApp, watch } from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import router, { updateMeta } from './router'
import { i18n } from './utils/i18n'

const app = createApp(App)

// ✅ HANYA untuk html lang
watch(
  () => i18n.global.locale.value,
  (lang) => {
    document.documentElement.lang = lang
    updateMeta()
  },
  { immediate: true },
)

app.use(router)
app.use(i18n)
app.mount('#app')
