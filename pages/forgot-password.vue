<template>
  <section class="flex min-h-screen items-center justify-center px-[5%] py-10 bg-black">
    <div class="container max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl window-bg p-6 md:p-8 rounded-lg border-2 border-gray2">
      <div class="mb-6 text-center md:mb-8">
        <a href="#" class="mb-8">
          <img src="/favicon.ico" alt="Logo image"
            class="inline-block h-10 md:h-12 mb-5" />
        </a>
        <h1 class="mb-5 text-3xl font-normal md:mb-6 md:text-5xl lg:text-5xl font-gloock text-white">
          Forgot Your Password?
        </h1>
        <p class="md:text-md text-text-white3">Reset your password</p>
      </div>
      <form class="grid grid-cols-1 gap-6">
        <div class="grid w-full items-center">
          <label
            class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 text-text-white3"
            for="email"
            >Email</label
          >
          <div class="relative flex w-full items-center">
            <input
              type="email"
              class="w-full min-h-11 border-2 border-gray2 window-bg py-2 align-middle placeholder:text-text-white4 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 px-3 rounded-md"
              id="email"
              required
              v-model="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div class="grid-col-1 grid gap-4">
          <button
            type="submit"
            class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-white text-black px-6 py-3 min-h-11"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>
