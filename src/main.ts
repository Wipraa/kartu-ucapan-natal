import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import { i18n } from './utils/i18n'

const app = createApp(App)

watch(
  () => i18n.global.locale.value,
  () => {
    const currentRoute = router.currentRoute.value
    const { t } = i18n.global

    // Update title
    if (currentRoute.meta.titleKey) {
      document.title = t(currentRoute.meta.titleKey as string)
    }

    // Update description
    const description = document.querySelector('meta[name="description"]') as HTMLMetaElement

    if (description && currentRoute.meta.descKey) {
      description.setAttribute('content', t(currentRoute.meta.descKey as string))
    }
  },
)

app.use(router)
app.use(i18n)
app.mount('#app')
