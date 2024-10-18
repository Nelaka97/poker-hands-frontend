<template>
  <section class="bg-black py-16 px-[5%]">
    <h2 class="text-4xl font-normal text-text-white2 mb-8 font-gloock">Buy Hand Histories</h2>

    <!-- Container for the boxes -->
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Box 1 -->
      <div @click="selectBox(1)" :class="[
        'w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/4 p-6 border-2 rounded-lg transition-colors duration-300 cursor-pointer',
        selectedBox === 1 ? 'border-white' : 'border-gray-700'
      ]" class="bg-primary text-white">
        <h3 class="text-xl font-semibold mb-2">Cash Game</h3>
        <p class="text-sm">Gain the Winning Edge: Purchase Hand Histories for Cash Games</p>
      </div>

      <!-- Box 2 -->
      <div @click="selectBox(2)" :class="[
        'w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/4 p-6 border-2 rounded-lg transition-colors duration-300 cursor-pointer',
        selectedBox === 2 ? 'border-white' : 'border-gray-700'
      ]" class="box-bg text-white">
        <h3 class="text-xl font-semibold mb-2">Subscription</h3>
        <p class="text-sm">Unlock Exclusive Access to Premium Content with Flexible Subscription Plans</p>
      </div>

      <!-- Box 3 -->
      <div @click="selectBox(3)" :class="[
        'w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/4 p-6 border-2 rounded-lg transition-colors duration-300 cursor-pointer',
        selectedBox === 3 ? 'border-white' : 'border-gray-700'
      ]" class="box-bg text-white">
        <h3 class="text-xl font-semibold mb-2">Sit and Go - MTT Hand Histories</h3>
        <p class="text-sm">Master the Game: Buy Hand Histories for SNG & MTT Tournaments</p>
      </div>
    </div>
  </section>


  <section class="bg-black pb-16 px-[5%]">
    <!-- Title and Subtitle -->
    <!-- Conditionally render the title component based on selectedBox -->
    <component :is="currentTitleComponent" />

    <!-- Container for the two columns -->
    <div class="flex flex-col lg:flex-row gap-8">

      <!-- Left Side (Form) -->
      <!-- Conditionally render the Form component based on selectedBox -->
      <component :is="currentFormComponent" />

      <!-- Right Side -->
      <div class="lg:w-4/12">
        <!-- Selected Items Info -->
        <div class="text-xs mb-6 flex flex-wrap gap-2">
          <p class="text-text-white3">Hands: <span class="text-white">125,000</span></p>
          <p class="text-text-white3">Site: <span class="text-white">PokerStars.com</span></p>
          <p class="text-text-white3">Game: <span class="text-white">NL Hold'em</span></p>
          <p class="text-text-white3">Stake: <span class="text-white">0.50/1</span></p>
          <p class="text-text-white3">Type: <span class="text-white">Shorthanded</span></p>
        </div>

        <!-- Total Charge -->
        <div class="flex justify-between items-center mb-6">
          <p class="text-lg text-text-white3">Total Charged:</p>
          <p class="text-xl font-semibold text-white">9€</p>
        </div>

        <!-- Payment Box -->
        <div class="box-bg border-2 border-gray2 rounded-md p-6">
          <div class="flex gap-4">
            <div class="flex gap-4">
              <button class="flex-1 bg-yellow-400 rounded-md hover:bg-gray-300 transition text-white">
                <img src="/logos/paypal.png" alt="paypal" class="mx-auto px-5 md:px-4 lg:px-6 xl:px-4 2xl:px-10">
              </button>
              <button class="flex-1 bg-white rounded-md hover:bg-gray-300 transition text-gray-700">
                <img src="/logos/gpay.png" alt="gpay" class="mx-auto px-5 md:px-4 lg:px-6 xl:px-4 2xl:px-10">
              </button>
              <button class="flex-1 bg-white rounded-md hover:bg-gray-300 transition text-gray-700">
                <img src="/logos/apple-pay.png" alt="applepay" class="mx-auto px-5 md:px-4 lg:px-6 xl:px-4 2xl:px-10">
              </button>
            </div>
          </div>

          <div class="relative my-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-600"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="box-bg px-2 text-gray-400 text-xs">Express Payment</span>
            </div>
          </div>
          <form class="space-y-4">
            <div>
              <label class="block text-text-white3 mb-1 text-sm">Cardholder Name</label>
              <input type="text" placeholder="John Doe"
                class="w-full p-3 box-bg text-text-white4 border-2 border-gray2 rounded">
            </div>
            <div class="flex gap-4">
              <div class="w-1/2"> 
                <label class="block text-text-white3 mb-1 text-sm">Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456"
                  class="w-full p-3 box-bg text-text-white4 border-2 border-gray2 rounded">
              </div>
              <div class="w-1/4">
                <label class="block text-text-white3 mb-1 text-sm">Expiry Date</label>
                <input type="text" placeholder="MM/YY"
                  class="w-full p-3 box-bg text-text-white4 border-2 border-gray2 rounded">
              </div>
              <div class="w-1/4">
                <label class="block text-text-white3 mb-1 text-sm">CVV/CVC</label>
                <input type="text" placeholder="123"
                  class="w-full p-3 box-bg text-text-white4 border-2 border-gray2 rounded">
              </div>
            </div>
            <div>
              <label class="block text-text-white3 mb-1 text-sm">Email Address</label>
              <input type="email" placeholder="email@example.com"
                class="w-full p-3 box-bg text-text-white4 border-2 border-gray2 rounded">
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-gray-700 bg-gray-700 rounded">
              <label class="text-sm text-text-white3">Create an account with this email</label>
            </div>
          </form>
        </div>



        <button class="w-full mt-6 py-3 bg-white hover:bg-gray-300 text-black text-bold rounded">Pay</button>

        <!-- Additional Information -->
        <div class="mt-8">
          <h3 class="text-lg text-text-white3 mb-3">Why We Need Your Email</h3>
          <p class="text-sm text-text-white3">
            We will send your purchased file to the email you provide. Please allow up to 1 hour for delivery. If you
            don’t receive it, check your spam folder or contact our support team.
          </p>
        </div>
      </div>
    </div>
  </section>


</template>

<script setup>
import { ref, computed } from 'vue';
import CashGameTitle from './components/CashGameTitle.vue'; 
import SubscriptionTitle from './components/SubscriptionTitle.vue'; 
import SNGMTTTitle from './components/SNGMTTTitle.vue';
import CashGame from './components/CashGame.vue'; 
import Subscription from './components/Subscription.vue'; 
import SNGMTT from './components/SNGMTT.vue'; 

// Set the initial selected box to 1 (Cash Game) when the page loads
const selectedBox = ref(1);

// Function to select a box
function selectBox(boxNumber) {
  selectedBox.value = boxNumber;
}

// Computed property to determine the current title component based on selectedBox
const currentTitleComponent = computed(() => {
  switch (selectedBox.value) {
    case 1:
      return CashGameTitle;
    case 2:
      return SubscriptionTitle;
    case 3:
      return SNGMTTTitle;
    default:
      return null; // Or a default title component if needed
  }
});

// Computed property to determine the current title component based on selectedBox
const currentFormComponent = computed(() => {
  switch (selectedBox.value) {
    case 1:
      return CashGame;
    case 2:
      return Subscription;
    case 3:
      return SNGMTT;
    default:
      return null; // Or a default title component if needed
  }
});
</script>
