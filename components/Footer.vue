<template>
  <footer class="px-[5%] py-12 md:py-18 lg:py-20 bg-black">
    <div class="container mx-auto">
      <div class="flex flex-col items-center pb-12 md:pb-18 lg:pb-20">
        <a href="#" class="mb-8">
          <img src="/logo.png" alt="Logo image"
            class="inline-block h-10 md:h-12" />
        </a>
        <!-- Centered Menu Items for All Screen Sizes -->
        <ul
          class="flex flex-col items-center gap-4 text-center md:flex-row md:gap-6 text-text-white">
          <li class="font-semibold">
            <a href="/about" class="hover:underline">About</a>
          </li>
          <li class="font-semibold">
            <a href="contacts" class="hover:underline">Contacts</a>
          </li>
          <li class="font-semibold">
            <a href="buy-hands-histories" class="hover:underline">Buy Hand History</a>
          </li>
        </ul>
      </div>
      <div class="h-px w-full bg-gray-500"></div>
      <!-- Centered Text and Links for Mobile, Flex Row for Larger Screens -->
      <div class="flex flex-col-reverse items-center justify-center py-6 text-center text-sm md:flex-row md:justify-between md:py-8">
        <p class="mt-6 md:mt-0 text-text-white3">© 2024 Relume. All rights reserved.</p> 
        <ul class="flex flex-col items-center gap-y-4 text-center md:flex-row md:gap-x-6 text-text-white3">
          <li>
            <a href="#" class="underline text-text-white3 underline-offset-2 hover:text-text-white">Privacy
              Policy</a>
          </li>
          <li>
            <a href="#" class="underline text-text-white3 underline-offset-2 hover:text-text-white">Terms of
              Service</a>
          </li>
          <li>
            <a href="#" class="underline text-text-white3 underline-offset-2 hover:text-text-white">Cookies
              Settings</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
