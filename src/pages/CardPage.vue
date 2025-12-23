<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import ChrismastBook from '@/components/ChrismastBook.vue'
import NavButtons from '@/components/NavButtons.vue'
import { ref } from 'vue'

const bookRef = ref<InstanceType<typeof ChrismastBook> | null>(null)
</script>

<template>
  <!-- <main class="relative min-h-screen px-4"> -->
  <main class="min-h-screen text-ivory relative overflow-hidden container mx-auto px-4">
    <div class="fixed inset-0 pointer-events-none bg-snowfall"></div>
    <AppHeader />
    <ChrismastBook ref="bookRef" />
    <NavButtons :book-ref="bookRef" :total-pages="4" />
  </main>
</template>
