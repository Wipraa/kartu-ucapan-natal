<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSelector from '@/components/LanguageSelector.vue'

const { t } = useI18n()
const router = useRouter()

const goToCard = () => {
  router.push('/card')
}
</script>

<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Background Animation -->
    <div class="absolute inset-0 bg-gradient-to-br from-night to-navy">
      <div class="fixed inset-0 pointer-events-none bg-snowfall" />
    </div>
    <!-- Content -->
    <div
      class="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6"
    >
      <LanguageSelector />
      <h1 class="my-8 font-display tracking-[0.3em] text-gold text-5xl md:text-7xl">
        {{ t('christmas.title') }}
      </h1>

      <p class="mb-12 max-w-xl text-lg md:text-xl text-ivory/90">
        {{ t('christmas.subtitle') }}
      </p>

      <button
        @click="goToCard"
        class="rounded-full border-2 border-gold px-10 py-4 text-gold backdrop-blur-md transition-all hover:bg-gold hover:text-night"
      >
        {{ t('buttons.openCard') }}
      </button>
    </div>
  </div>
</template>
