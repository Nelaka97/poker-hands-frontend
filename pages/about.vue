<template>

<section id="relume" class="px-[5%] py-16 md:py-24 lg:py-28 bg-black">
  <div class="container mx-auto">
    <div class="flex flex-col lg:flex-row items-center lg:gap-16">
      <!-- Content on the left -->
      <div class="lg:w-1/2 mb-8 lg:mb-0">
        <h1 class="mb-5 text-4xl font-normal md:mb-6 md:text-4xl lg:text-5xl font-gloock text-text-white2">
         Understanding Poker: The Game of Skill, Strategy, and Chance
        </h1>
        <p class="md:text-md text-text-white3">
          Poker is a popular card game that combines elements of skill, strategy, and chance. Players compete against each other, aiming to win chips or money by forming the best hand or convincing opponents to fold.
        </p>
        <!-- <div class="mt-6 flex gap-x-4 md:mt-8">
          <button
            class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-black bg-black text-white px-6 py-3"
            title="Primary Button"
          >
            Primary Button
          </button>
          <button
            class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-black text-black bg-white px-6 py-3"
            title="Secondary Button"
          >
            Secondary Button
          </button>
        </div> -->
      </div>
      
      <!-- Image on the right -->
      <div class="lg:w-1/2">
        <img
          src="/header-card.png"
          class="w-full object-cover rounded-lg shadow-lg"
          alt="Relume placeholder image"
        />
      </div>
    </div>
  </div>
</section>


<section id="relume" class="px-[5%] py-16 md:py-24 lg:py-28 bg-black">
  <div class="flex flex-col items-start w-full max-w-[90%] lg:max-w-[100%] mx-auto px-4 lg:px-8">
  <div
    class="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20"
  >
      <div>
        <p class="mb-3 font-semibold md:mb-4 text-text-white">Statistics</p>
        <h2 class="text-5xl font-normal md:text-7xl lg:text-6xl font-gloock text-text-white2">
          Understanding Poker Statistics and Their Importance
        </h2>
      </div>
      <p class="md:text-md text-text-white3">
        Poker statistics provide invaluable insights into player behavior and hand outcomes. By analyzing historical hand data, players can identify trends and make informed decisions at the table. This analytical approach enhances strategic thinking and improves overall performance.
      </p>
    </div>
    <div
      class="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12"
    >
      <div>
        <div class="rb-5 mb-5 md:mb-6">
          <img
          src="/about-pic-1.png"
          alt="Relume placeholder image 1"
        />
        </div>
        <h3 class="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl text-text-white">
          How Poker Statistics Enhance Your Game
        </h3>
        <p class="text-text-white3">
          Statistics reveal patterns that can lead to winning strategies.
        </p>
      </div>
      <div>
        <div class="rb-5 mb-5 md:mb-6">
          <img
          src="/about-pic-2.png"
          alt="Relume placeholder image 1"
        />
        </div>
        <h3 class="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl text-text-white">
          Key Metrics to Track in<br/>Poker
        </h3>
        <p class="text-text-white3">
          Focus on metrics like VPIP, PFR, and aggression.
        </p>
      </div>
      <div>
        <div class="rb-5 mb-5 md:mb-6">
          <img
          src="/about-pic-3.png"
          alt="Relume placeholder image 1"
        />
        </div>
        <h3 class="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl text-text-white">
          Frequently Asked Questions About Poker Stats
        </h3>
        <p class="text-text-white3">
          Explore common queries to deepen your understanding.
        </p>
      </div>
    </div>
  </div>
</section>

<section id="faqs" class="px-4 py-16 md:py-24 lg:py-28 bg-black">
  <div class="container mx-auto max-w-[50%]"> <!-- Changed from max-w-[90%] to max-w-[70%] -->
    <div class="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
      <h2 class="rb-5 mb-5 text-5xl font-normal md:mb-6 md:text-7xl lg:text-6xl text-text-white font-gloock">FAQs</h2>
      <p class="md:text-lg text-text-white3">
       Find answers to your most pressing questions about poker hand histories and our services.
      </p>
    </div>
    <div>
      <div v-for="(faq, index) in faqs" :key="index" class="border-b border-t border-border-primary">
        <h3 class="flex w-full">
          <button
            @click="toggleFAQ(index)"
            :aria-controls="'faq' + index"
            :aria-expanded="openFAQ === index"
            class="flex flex-1 items-center justify-between py-4 font-bold transition-all md:py-5 md:text-md text-text-white"
          >
            {{ faq.question }}
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 15 15"
              class="size-7 shrink-0 text-text-white3 transition-transform duration-300 md:size-8"
              height="1em"
              width="1em"
              :style="{ transform: openFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)' }"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </h3>
        <div
          v-show="openFAQ === index"
          :id="'faq' + index"
          role="region"
          class="py-4 text-text-white3"
        >
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</section>

 
</template>

<script setup>
import { ref } from 'vue';

const openFAQ = ref(null);
const faqs = ref([
  {
    question: 'What is poker analysis?',
    answer: 'Poker analysis involves reviewing past hands to identify patterns and improve decision-making. By studying historical data, players can enhance their strategies and gameplay. This process is essential for both amateurs and professionals aiming to elevate their skills.'
  },
  {
    question: 'How does your service work?',
    answer: 'Our service allows you to access a vast database of poker hand histories. You can search, filter, and analyze hands to gain insights into your play. This data-driven approach helps you make informed decisions at the tables.'
  },
  {
    question: 'Who can benefit?',
    answer: 'Professional players, enthusiasts, and coaches can all benefit from our service. Whether you are looking to refine your skills or teach others, our analysis tools provide valuable insights. It is a resource for anyone serious about improving their poker game.'
  },
  {
    question: 'Is it easy to use?',
    answer: 'Yes, our platform is designed with user-friendliness in mind. You can easily navigate through the database and access the information you need. Our tutorials and support are also available to assist you.'
  },
  {
    question: 'What if I need help?',
    answer: 'If you have any questions or need assistance, our support team is here to help. You can reach out through our contact page for prompt responses. We’re committed to ensuring you have a great experience with our service.'
  }
]);

function toggleFAQ(index) {
  openFAQ.value = openFAQ.value === index ? null : index;
}
</script>

<style scoped>
.hidden {
  display: none;
}
</style>
