<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'id', label: 'Indonesia' },
]

const changeLanguage = (lang: string) => {
  locale.value = lang
  localStorage.setItem('preferredLanguage', lang)
}
</script>

<template>
  <div class="flex flex-wrap justify-center gap-3 my-4">
    <button
      v-for="lang in languages"
      :key="lang.code"
      @click="changeLanguage(lang.code)"
      class="rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-md transition-all"
      :class="
        locale === lang.code
          ? 'bg-gold text-night border-gold'
          : 'bg-white/10 text-gold border-gold hover:bg-white/20'
      "
    >
      {{ lang.label }}
    </button>
  </div>
</template>
