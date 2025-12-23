import { createI18n } from 'vue-i18n'
import fr from '@/locales/fr'
import en from '@/locales/en'
import id from '@/locales/id'

export const i18n = createI18n({
  legacy: false, // wajib untuk Composition API
  locale: 'id', // default language
  fallbackLocale: 'en',
  messages: {
    en,
    id,
    fr,
  },
})
