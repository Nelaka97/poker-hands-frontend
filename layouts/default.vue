<!-- layouts/default.vue -->
<template>
  <div>
    <Header />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
/* Add any specific styles for the layout here */
</style>
