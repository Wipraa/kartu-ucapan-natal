<script setup lang="ts">
import Header from '@/components/Header.vue'
import Book from '@/components/Book.vue'
import NavButtons from '@/components/NavButtons.vue'
import { ref } from 'vue'

const bookRef = ref<InstanceType<typeof Book> | null>(null)
</script>

<template>
  <!-- <main class="relative min-h-screen px-4"> -->
  <main class="min-h-screen text-ivory relative overflow-hidden container mx-auto px-4">
    <div class="fixed inset-0 pointer-events-none bg-snowfall"></div>
    <Header />
    <Book ref="bookRef" />
    <NavButtons :book-ref="bookRef" :total-pages="4" />
  </main>
</template>
