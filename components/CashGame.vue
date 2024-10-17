<template>
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
        <button class="flex-1 box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">Hold'em
          NL</button>
        <button class="flex-1 box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">Hold'em
          FL</button>
        <button class="flex-1 box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">Omaha
          PL</button>
        <button class="flex-1 box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">Omaha
          HL PL</button>
        <button class="flex-1 box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">Omaha
          HL NL</button>
        <button class="flex-1 box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">Omaha
          HL FL</button>
      </div>
    </div>

    <!-- Stakes Selection -->
    <div class="mb-6">
      <div class="text-text-white3 mb-2">Stakes:</div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL2</button>
        <button class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL5</button>
        <button class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL10</button>
        <button class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL16</button>
        <button class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL25</button>
        <button class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL50</button>
        <button class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL100</button>
        <button class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL200</button>
        <button class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL400</button>
        <button class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL500</button>
        <button class="box-bg border border-gray p-4 rounded-md hover:border-white transition text-white">NL600</button>
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
        <button class="flex-1 p-2 text-text-white3 hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200">
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
</template>

<script lang="ts" setup>

</script>

<style></style>