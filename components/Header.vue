<template>
  <nav class="relative flex w-full items-center justify-between custom-bg lg:min-h-18 lg:px-[5%]">
    <div class="size-full lg:flex lg:items-center lg:justify-between">
      <div class="lg:flex lg:items-center">
        <div class="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <NuxtLink to="/" class="inline-block">
            <img src="/logo.png" alt="Logo image" class="pt-4 pb-4 h-20" />
          </NuxtLink>
          <button @click="toggleMobileMenu" class="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden">
            <span class="my-[3px] h-0.5 w-6 bg-background-primary"></span>
            <span class="my-[3px] h-0.5 w-6 bg-background-primary"></span>
            <span class="my-[3px] h-0.5 w-6 bg-background-primary"></span>
          </button>
        </div>
        <div :class="{ 'hidden': !isMobileMenuOpen, 'block': isMobileMenuOpen, 'lg:flex': true }"
          class="lg:flex lg:items-center lg:ml-6">
          <div
            class="flex flex-col lg:flex-row lg:gap-6 px-[5%] lg:px-0 font-roboto text-base font-normal leading-6 text-left text-text-alternative">
            <NuxtLink to="/" :class="{ 'text-white': isActive('/').value, 'text-text-white5': !isActive('/').value }"
              class="block py-3 text-md lg:px-4 lg:py-6 lg:text-base">
              Home
            </NuxtLink>
            <NuxtLink to="/about" :class="{ 'text-white': isActive('/about').value, 'text-text-white5': !isActive('/about').value }"
              class="block py-3 text-md lg:px-4 lg:py-6 lg:text-base">
              About
            </NuxtLink>
            <NuxtLink to="/#contacts"
              :class="{ 'text-white': isActive('/', '#contacts').value, 'text-text-white5': !isActive('/', '#contacts').value }"
              class="block py-3 text-md lg:px-4 lg:py-6 lg:text-base">
              Contact
            </NuxtLink>
            <NuxtLink to="/buy-hands-histories" :class="{ 'text-white': isActive('/buy-hands-histories').value, 'text-text-white5': !isActive('/buy-hands-histories').value }"
              class="block py-3 text-md lg:px-4 lg:py-6 lg:text-base">
              Buy Hands History
            </NuxtLink>
          </div>
          <!-- Sign Up and Login for mobile view -->
          <div class="flex flex-col gap-3 mt-4 px-[5%] lg:hidden">
            <NuxtLink to="/sign-up">
              <p class="text-text-white">Sign Up</p>
            </NuxtLink>
            <NuxtLink to="/login">
              <p class="text-text-white pb-5">Login</p>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="hidden lg:flex lg:gap-4 lg:items-center">
        <NuxtLink to="/sign-up">
          <p class="text-text-white">Sign Up</p>
        </NuxtLink>
        <NuxtLink to="/login">
          <button class="btn-secondary text-text-black">Login</button>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const isMobileMenuOpen = ref(false);
const route = useRoute();

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

// Function to determine if a specific path or hash should be considered active.
const isActive = (path, hash = '') => computed(() => {
  if (hash) {
    // Check for both path and hash when hash is provided.
    return route.path === path && route.hash === hash;
  }
  // Otherwise, match only the path.
  return route.path === path && !route.hash;
});
</script>

<style scoped>
.btn-primary {
  @apply border border-border-primary text-text-primary bg-background-primary px-5 py-2 focus-visible:ring-2 focus-visible:ring-offset-2;
}

.btn-secondary {
  @apply border border-border-primary bg-background-alternative text-text-alternative px-5 py-2 focus-visible:ring-2 focus-visible:ring-offset-2;
}
</style>
