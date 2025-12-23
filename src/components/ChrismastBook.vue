<script setup lang="ts">
import { ref, computed, readonly } from 'vue'
import { useI18n } from 'vue-i18n'

type Page = {
  title: string
  texts: string[]
  closing?: string
}

const { t, tm } = useI18n()

const currentPage = ref(1)
const totalPages = 4

const pages = computed<Page[]>(() => {
  return tm('pages') as Page[]
})

/**
 * ✅ Ambil page aktif dengan aman
 */
const activePage = computed<Page | null>(() => {
  return pages.value[currentPage.value - 1] ?? null
})

const nextPage = () => {
  if (currentPage.value < totalPages) currentPage.value++
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

defineExpose({
  nextPage,
  prevPage,
  currentPage: readonly(currentPage),
})
</script>

<template>
  <div class="flex justify-center md:my-16 [perspective:2000px] rounded-l-3xl">
    <div class="relative w-full max-w-4xl h-[600px] [transform-style:preserve-3d] rounded-l-3xl">
      <!-- Halaman kiri (dummy cover) -->
      <div
        class="absolute inset-0 rounded-l-3xl shadow-2xl bg-gradient-to-br from-night to-navy [backface-visibility:hidden]"
      />

      <!-- Halaman kanan -->
      <div
        v-for="n in totalPages"
        :key="n"
        class="absolute inset-0 flex items-center justify-center px-12 rounded-r-3xl origin-left bg-gradient-to-br from-ivory to-[#f5f3ed] transition-transform duration-700 ease-in-out [transform-style:preserve-3d] [backface-visibility:hidden]"
        :class="{
          '[transform:rotateY(0deg)_translateZ(1px)]': currentPage === n || currentPage < n,
          '[transform:rotateY(-180deg)_translateZ(-1px)]': currentPage > n,
          '[transform:rotateY(0deg)_translateZ(1px)_z-10]': currentPage < n,
        }"
        :style="{ zIndex: totalPages - Math.abs(currentPage - n) }"
      >
        <!-- Isi halaman -->
        <div v-if="activePage" class="relative w-full max-w-lg text-night">
          <h2 class="mb-12 text-center font-display tracking-wide text-4xl md:text-5xl text-gold">
            {{ t(activePage.title) }}
          </h2>

          <div class="space-y-8 text-lg leading-relaxed text-justify text-navy">
            <p v-for="key in activePage.texts" :key="key">
              {{ t(key) }}
            </p>

            <p
              v-if="activePage.closing"
              class="mt-12 text-center italic text-xl font-display text-gold"
            >
              {{ t(activePage.closing) }}
            </p>
          </div>

          <div class="relative mx-auto my-12 h-0.5 w-20 bg-gold">
            <span class="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-gold" />
            <span class="absolute -right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-gold" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
