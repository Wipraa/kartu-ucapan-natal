import { createI18n } from 'vue-i18n'
import fr from '@/locales/fr'
import en from '@/locales/en'
import id from '@/locales/id'

const messages = {
  en,
  id,
  fr,
}

const savedLocale = typeof window !== 'undefined' ? localStorage.getItem('preferredLanguage') : null

const defaultLocale = savedLocale || 'en'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages,
})
