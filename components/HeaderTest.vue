<template>
  <header class="custom-bg p-2 pl-16 pr-16">
    <nav class="flex justify-between items-center">
      <div class="flex items-center">
        <NuxtLink to="/">
          <img src="/logo.png" alt="Website Logo" class="h-7" />
        </NuxtLink>

        <ul class="flex items-center gap-6 ml-4">
          <li>
            <NuxtLink to="/" class="text-white hover:underline font-roboto text-base font-normal leading-6 text-left">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="text-white hover:underline font-roboto text-base font-normal leading-6 text-left">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="text-white hover:underline font-roboto text-base font-normal leading-6 text-left">Contact</NuxtLink>
          </li>

          <li class="relative group">
            <button class="text-white hover:underline flex items-center font-roboto text-base font-normal leading-6 text-left">
              Buy Hand Histories
              <svg class="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div class="absolute left-0 mt-2 hidden bg-black/70 text-white rounded-md shadow-lg group-hover:block">
              <ul class="py-2">
                <li>
                  <NuxtLink to="/history-page-1" class="block px-4 py-2 hover:bg-black/50 font-roboto text-base font-normal leading-6 text-left">History Page 1</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/history-page-2" class="block px-4 py-2 hover:bg-black/50 font-roboto text-base font-normal leading-6 text-left">History Page 2</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/history-page-3" class="block px-4 py-2 hover:bg-black/50 font-roboto text-base font-normal leading-6 text-left">History Page 3</NuxtLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div class="flex items-center gap-4">
        <NuxtLink to="/signup" class="text-white hover:underline font-roboto text-base font-normal leading-6 text-left">Sign Up</NuxtLink>
        <NuxtLink to="/login" class="bg-white text-black px-4 py-2 hover:bg-gray-100 font-roboto text-base font-normal leading-6 text-left">
          Login
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Style the dropdown to appear on hover */
.group:hover .group-hover\:block {
  display: block;
}
</style>
