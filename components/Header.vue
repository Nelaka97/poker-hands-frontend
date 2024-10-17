<template>
  <nav class="relative flex w-full items-center justify-between custom-bg lg:min-h-18 lg:px-[5%]">
    <div class="size-full lg:flex lg:items-center lg:justify-between">
      <div class="lg:flex lg:items-center">
        <div class="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <NuxtLink to="/" class="inline-block">
            <img src="/logo.png" alt="Logo image" class="pt-4 pb-4 h-20"/>
          </NuxtLink>
          <button @click="toggleMobileMenu" class="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden">
            <span class="my-[3px] h-0.5 w-6 bg-background-primary"></span>
            <span class="my-[3px] h-0.5 w-6 bg-background-primary"></span>
            <span class="my-[3px] h-0.5 w-6 bg-background-primary"></span>
          </button>
        </div>
        <div :class="{'hidden': !isMobileMenuOpen, 'block': isMobileMenuOpen, 'lg:flex': true}" class="lg:flex lg:items-center lg:ml-6">
          <div class="flex flex-col lg:flex-row lg:gap-6 px-[5%] lg:px-0 font-roboto text-base font-normal leading-6 text-left text-text-alternative">
            <NuxtLink to="/about" class="block py-3 text-md lg:px-4 lg:py-6 lg:text-base">About</NuxtLink>
            <NuxtLink to="/contacts" class="block py-3 text-md lg:px-4 lg:py-6 lg:text-base">Contacts</NuxtLink>
            <NuxtLink to="/buy-hands-histories" class="block py-3 text-md lg:px-4 lg:py-6 lg:text-base">Buy Hands History</NuxtLink>
          </div>
        </div>
      </div>
      <div class="hidden lg:flex lg:gap-4">
        <button class="text-text-white">Sign Up</button>
        <button class="btn-secondary text-text-black">Login</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>

<style scoped>
.btn-primary {
  @apply border border-border-primary text-text-primary bg-background-primary px-5 py-2 focus-visible:ring-2 focus-visible:ring-offset-2;
}

.btn-secondary {
  @apply border border-border-primary bg-background-alternative text-text-alternative px-5 py-2 focus-visible:ring-2 focus-visible:ring-offset-2;
}
</style>
