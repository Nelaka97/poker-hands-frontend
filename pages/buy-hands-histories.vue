<template>
  <section class="bg-black py-16 px-[5%]">
    <h2 class="text-4xl font-normal text-text-white2 mb-8 font-gloock">Buy Hand Histories</h2>

    <!-- Container for the boxes -->
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Box 1 -->
      <div @click="selectBox(1)" :class="[
        'w-full md:w-1/4 p-6 border-2 rounded-lg transition-colors duration-300 cursor-pointer',
        selectedBox === 1 ? 'border-white' : 'border-gray-700'
      ]" class="bg-primary text-white">
        <h3 class="text-xl font-semibold mb-2">Cash Game</h3>
        <p class="text-sm">Gain the Winning Edge: Purchase Hand Histories for Cash Games</p>
      </div>

      <!-- Box 2 -->
      <div @click="selectBox(2)" :class="[
        'w-full md:w-1/4 p-6 border-2 rounded-lg transition-colors duration-300 cursor-pointer',
        selectedBox === 2 ? 'border-white' : 'border-gray-700'
      ]" class="box-bg text-white">
        <h3 class="text-xl font-semibold mb-2">Subscription</h3>
        <p class="text-sm">Unlock Exclusive Access to Premium Content with Flexible Subscription Plans</p>
      </div>

      <!-- Box 3 -->
      <div @click="selectBox(3)" :class="[
        'w-full md:w-1/4 p-6 border-2 rounded-lg transition-colors duration-300 cursor-pointer',
        selectedBox === 3 ? 'border-white' : 'border-gray-700'
      ]" class="box-bg text-white">
        <h3 class="text-xl font-semibold mb-2">Sit and Go - MTT Hand Histories</h3>
        <p class="text-sm">Master the Game: Buy Hand Histories for SNG & MTT Tournaments</p>
      </div>
    </div>
  </section>


  <section class="bg-black pb-16 px-[5%]">
    <!-- Title and Subtitle -->
    <h2 class="text-3xl font-normal text-text-white2 font-gloock mb-2">Cash Game Hand Histories</h2>
    <p class="text-xl text-text-white3 mb-8">Gain the Winning Edge: Purchase Hand Histories for Cash Games</p>

    <!-- Container for the two columns -->
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Left Side (Form) -->
      <div class="lg:w-8/12 box-bg border-2 border-gray2 p-6 rounded-md">
        <!-- Poker Platform Selection -->
        <div class="mb-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-5/6">
            <button class="flex-1 bg-white border border-gray p-4 rounded-md hover:border-white transition text-white">
              <img src="/logos/pokerstars.png" alt="PokerStars" class="mx-auto h-6">
            </button>
            <button class="flex-1 bg-white border border-gray p-4 rounded-md hover:border-white transition text-white">
              <img src="/logos/ipoker.png" alt="iPoker" class="mx-auto h-6">
            </button>
            <button class="flex-1 bg-white border border-gray p-4 rounded-md hover:border-white transition text-white">
              <img src="/logos/888poker.png" alt="888poker" class="mx-auto h-6">
            </button>
            <button class="flex-1 bg-white border border-gray p-4 rounded-md hover:border-white transition text-white">
              <img src="/logos/ggpoker.png" alt="GGpoker" class="mx-auto h-6">
            </button>
          </div>
        </div>


        <!-- Game Selection -->
        <div class="mb-6">
          <div class="text-text-white3 mb-2">Games:</div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-5/6">
            <button
              class="flex-1 box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">Hold'em
              NL</button>
            <button
              class="flex-1 box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">Hold'em
              FL</button>
            <button
              class="flex-1 box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">Omaha
              PL</button>
            <button
              class="flex-1 box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">Omaha
              HL PL</button>
            <button
              class="flex-1 box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">Omaha
              HL NL</button>
            <button
              class="flex-1 box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">Omaha
              HL FL</button>
          </div>
        </div>

        <!-- Stakes Selection -->
        <div class="mb-6">
          <div class="text-text-white3 mb-2">Stakes:</div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL2</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL5</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL10</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL16</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL25</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL50</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL100</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL200</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL400</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL500</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL600</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL1000</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL2000</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL4000</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL5000</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL10000</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL20000</button>
            <button
              class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL40000</button>
          </div>
        </div>

        <!-- Table Type Selector -->
        <div class="mb-6">
          <div class="text-text-white3 mb-2">Table Type:</div>
          <div class="flex flex-wrap gap-2 box-bg border border-gray rounded-lg w-full md:w-1/2">
            <button
              class="flex-1 p-2 text-text-white3 border-b border-gray hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200 md:border-b-0 md:border-r">
              All
            </button>
            <button
              class="flex-1 p-2 text-text-white3 border-b border-gray hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200 md:border-b-0 md:border-r">
              Short-Handed
            </button>
            <button
              class="flex-1 p-2 text-text-white3 hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200">
              Full Ring
            </button>
          </div>
        </div>

        <!-- Date Range Selector -->
        <div class="mb-6">
          <div class="text-text-white3 mb-2">Date Range:</div>
          <div class="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
            <input type="date" placeholder="Start Date"
              class="w-full box-bg border border-gray p-2 rounded-md text-text-white3">
            <input type="date" placeholder="End Date"
              class="w-full box-bg border border-gray p-2 rounded-md text-text-white3">
          </div>
        </div>




        <!-- Hands Selector -->
        <div class="mb-6">
          <div class="text-text-white3 mb-2">Hands:</div>
          <div class="flex items-center gap-6">
            <input type="range" min="1000" max="3000000" class="w-5/6">
            <input type="number" class="w-1/6 box-bg border border-gray p-3 rounded-md text-text-white3" value="1000">
          </div>
          <div class="mt-4 flex flex-wrap gap-4">
            <button class="box-bg border border-gray p-2 px-4 rounded-3xl hover:border-white transition text-white">100
              000</button>
            <button class="box-bg border border-gray p-2 px-4 rounded-3xl hover:border-white transition text-white">250
              000</button>
            <button class="box-bg border border-gray p-2 px-4 rounded-3xl hover:border-white transition text-white">500
              000</button>
            <button class="box-bg border border-gray p-2 px-4 rounded-3xl hover:border-white transition text-white">1
              000 000</button>
            <button class="box-bg border border-gray p-2 px-4 rounded-3xl hover:border-white transition text-white">2
              000 000</button>
            <button class="box-bg border border-gray p-2 px-4 rounded-3xl hover:border-white transition text-white">3
              000 000</button>

            <!-- Add other hand count buttons as needed -->
          </div>
        </div>
      </div>

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
              <label class="block text-text-white3 mb-1">Cardholder Name</label>
              <input type="text" placeholder="John Doe"
                class="w-full p-3 box-bg text-text-white4 border-2 border-gray2 rounded">
            </div>
            <div class="flex gap-4">
              <div class="w-1/2">
                <label class="block text-text-white3 mb-1">Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456"
                  class="w-full p-3 box-bg text-text-white4 border-2 border-gray2 rounded">
              </div>
              <div class="w-1/4">
                <label class="block text-text-white3 mb-1">Expiry Date</label>
                <input type="text" placeholder="MM/YY"
                  class="w-full p-3 box-bg text-text-white4 border-2 border-gray2 rounded">
              </div>
              <div class="w-1/4">
                <label class="block text-text-white3 mb-1">CVV/CVC</label>
                <input type="text" placeholder="123"
                  class="w-full p-3 box-bg text-text-white4 border-2 border-gray2 rounded">
              </div>
            </div>
            <div>
              <label class="block text-text-white3 mb-1">Email Address</label>
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
import { ref } from 'vue';

const selectedBox = ref(null);

function selectBox(boxNumber) {
  selectedBox.value = boxNumber;
}
</script>
