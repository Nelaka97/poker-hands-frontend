<template>
  <section class="flex min-h-screen items-center justify-center px-[5%] py-10 bg-black">
    <div class="container max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl window-bg p-6 md:p-8 rounded-lg border-2 border-gray2">
      <div class="mb-6 text-center md:mb-8">
        <a href="#" class="mb-8">
          <img src="/favicon.ico" alt="Logo image"
            class="inline-block h-10 md:h-12 mb-5" />
        </a>
        <h1 class="mb-5 text-3xl font-normal md:mb-6 md:text-5xl lg:text-5xl font-gloock text-white">
          Sign Up
        </h1>
        <p class="md:text-md text-text-white3">Sign up to your account or log in</p>
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
        <div class="grid w-full items-center">
          <label
            class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 text-text-white3"
            for="password"
            >Password</label
          >
          <div class="relative flex w-full items-center">
            <input
              type="password"
              class="w-full min-h-11 border-2 border-gray2 window-bg py-2 align-middle placeholder:text-text-white4 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 px-3 rounded-md"
              id="password"
              required
              v-model="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div class="grid-col-1 grid gap-4">
          <button
            type="submit"
            class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-white text-black px-6 py-3 min-h-11"
          >
            Sign Up
          </button>
              <div class="w-full border-t-2 border-gray2 my-4"></div>
          <button
            type="button"
            class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-secondory text-text-white bg-window px-6 py-3 gap-x-3 min-h-11"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="size-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
              ></path>
            </svg>
            Sign Up with Google
          </button>
        </div>
      </form>
      <div class="mt-5 w-full text-center md:mt-6 text-text-white3">
        Already have an account? <NuxtLink to="/login" class="underline text-text-white">Log In</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>
