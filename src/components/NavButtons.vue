<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

type BookController = {
  nextPage: () => void
  prevPage: () => void
  currentPage: number
}

const props = defineProps<{
  bookRef: BookController | null
  totalPages: number
}>()

const { t } = useI18n()

const isFirstPage = computed(() => {
  return props.bookRef?.currentPage === 1
})

const isLastPage = computed(() => {
  return props.bookRef?.currentPage === props.totalPages
})
</script>

<template>
  <div class="my-12 flex flex-wrap justify-center gap-6">
    <!-- PREVIOUS -->
    <button
      @click="bookRef?.prevPage()"
      :disabled="isFirstPage"
      class="nav-button"
      :class="{
        'opacity-30 cursor-not-allowed': isFirstPage,
      }"
    >
      {{ t('buttons.prev') }}
    </button>

    <!-- NEXT -->
    <button
      @click="bookRef?.nextPage()"
      :disabled="isLastPage"
      class="nav-button"
      :class="{
        'opacity-30 cursor-not-allowed': isLastPage,
      }"
    >
      {{ t('buttons.next') }}
    </button>
  </div>
</template>

<style scoped>
.nav-button {
  background: color-mix(in srgb, var(--color-gold) 20%, transparent);
  border: 2px solid var(--color-gold);
  color: var(--color-gold);
  padding: 14px 40px;
  font-family: var(--font-family-body);
  font-size: 1rem;
  letter-spacing: 1px;
  border-radius: 9999px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.nav-button:hover:not(:disabled) {
  background: var(--color-gold);
  color: var(--color-night);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
}
</style>
