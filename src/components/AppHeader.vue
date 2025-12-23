<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSelector from './LanguageSelector.vue'

const { t } = useI18n()
</script>

<template>
  <header class="relative mb-6 md:mb-20 text-center animate-[fadeInDown_1s_ease-out]">
    <!-- Language Selector -->
    <div class="">
      <LanguageSelector />
    </div>

    <!-- Title -->
    <h1
      class="mb-4 font-display tracking-[0.3em] text-gold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
    >
      {{ t('header.title') }}
    </h1>

    <!-- Subtitle -->
    <p class="text-sm sm:text-base md:text-lg tracking-[0.3em] text-ivory/90">
      {{ t('header.subtitle') }}
    </p>
  </header>
</template>
