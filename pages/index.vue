<template>
  <section id="relume" class="relative flex items-center justify-start h-screen px-[5%] overflow-hidden">
    <!-- Background Video -->
    <video autoplay loop muted class="absolute inset-0 w-full h-full object-cover">
      <source src="/bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay with Gradient -->
    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-md">
      <h1 class="mb-3 text-3xl font-normal text-text-white2 md:mb-4 md:text-4xl lg:text-5xl font-gloock">
        Elevate Your Game with Hand Histories
      </h1>
      <p class="text-sm leading-5 text-text-white3 md:text-base">
        Dive deep into the world of poker with our extensive collection of hand histories.
        Analyze, learn, and elevate your game with insights tailored for both players and coaches.
      </p>
      <div class="mt-4 flex flex-col gap-2 md:mt-6 md:flex-row md:justify-start">
        <button
          class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-black px-4 py-2 text-sm md:text-base"
          title="Button">
          Buy Now
        </button>
      </div>
    </div>
  </section>

  <section id="relume2" class="px-[5%] py-16 md:py-24 lg:py-28 bg-black text-text-white">
    <div class="container mx-auto flex flex-col items-center">
      <div class="mb-12 text-center md:mb-18 lg:mb-20">
        <div class="w-full max-w-lg mx-auto">
          <p class="mb-3 font-semibold md:mb-4">Analyze</p>
          <h2 class="mb-5 text-5xl font-normal md:mb-6 md:text-7xl lg:text-5xl font-gloock">
            Unlock Your Poker Potential with Data
          </h2>
          <p class="md:text-md">
            Enhance your poker game with our powerful hand analysis tools. Dive deep into your gameplay and discover
            insights that elevate your strategy.
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
        <div class="flex w-full flex-col items-center text-center">
          <div class="mb-5 md:mb-6">
            <img src="/poker-chip.png" class="w-12 h-12" alt="Relume logo 1" />
          </div>
          <h3 class="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-3xl">
            Comprehensive Hand Analysis Tools for Players
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div class="flex w-full flex-col items-center text-center">
          <div class="mb-5 md:mb-6">
            <img src="/poker-chip.png" class="w-12 h-12" alt="Relume logo 2" />
          </div>
          <h3 class="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Advanced Statistics to Track Your Progress
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div class="flex w-full flex-col items-center text-center">
          <div class="mb-5 md:mb-6">
            <img src="/poker-chip.png" class="w-12 h-12" alt="Relume logo 3" />
          </div>
          <h3 class="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Downloadable Histories for Your Review
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
      </div>
      <div class="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
        <button
          class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
          title="Button">
          Learn More
        </button>
      </div>
    </div>
  </section>

  <section id="relume3" class="px-[5%] py-16 md:py-24 lg:py-28 bg-black text-white">
    <div class="container mx-auto flex flex-col items-center">
      <div class="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-stretch md:gap-x-12 lg:gap-x-20">
        <!-- Image on the left -->
        <div class="md:order-1 flex items-center">
          <img src="/card-pack.png" class="w-full object-cover" alt="Relume placeholder image" />
        </div>
        <!-- Text content on the right -->
        <div class="md:order-2 flex flex-col justify-between h-full">
          <div class="mb-6">
            <p class="mb-3 font-semibold md:mb-4">Analyze</p>
            <h2 class="mb-5 text-4xl font-normal leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl font-gloock">
              Unlock Your Poker Potential with Data
            </h2>
            <p class="mb-6 md:mb-8 md:text-md">
              Analyzing historical poker hands can significantly enhance your strategy. Gain insights into your gameplay
              and identify areas for improvement.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 mb-6">
            <div>
              <h3 class="mb-2 text-5xl font-bold md:text-7xl lg:text-5xl">50%</h3>
              <p>Enhance your skills and boost your winnings.</p>
            </div>
            <div>
              <h3 class="mb-2 text-5xl font-bold md:text-7xl lg:text-5xl">50%</h3>
              <p>Gain insights from every hand you play.</p>
            </div>
          </div>
          <!-- Smaller Button -->
          <button
            class="self-start border border-gray-500 text-white bg-black px-6 py-3 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 transition-colors inline-block"
            title="Learn More">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>

  <section id="newsletter-signup" class="px-[5%] py-16 md:py-24 lg:py-28 bg-black">
    <div class="container border border-gray2 p-6 md:p-8 lg:p-10 mx-auto">
      <div
        class="grid w-full grid-cols-1 items-start justify-between gap-6 md:gap-x-12 md:gap-y-8 lg:grid-cols-[1fr_max-content] lg:gap-x-20">
        <!-- Heading Section -->
        <div class="w-full max-w-2xl">
          <h2
            class="mb-3 text-4xl md:text-4xl lg:text-5xl font-gloock font-normal leading-[1.2] md:mb-4 text-text-white">
            Unlock Your Poker Potential
          </h2>
          <p class="md:text-md text-text-white">
            Dive into our extensive hand history collection today!
          </p>
        </div>

        <!-- Form Section -->
        <div class="flex justify-center w-full">
          <form
            class="rb-4 mb-4 grid w-full max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4 items-center"
            method="post" action="#">
            <!-- Email Input -->
            <div class="relative flex w-full items-center">
              <input type="email"
                class="flex w-full min-h-11 border border-gray2 box-bg text-white py-2 align-middle file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 px-3"
                id="email" name="email" placeholder="Enter your email" required />
            </div>

            <!-- Submit Button -->
            <button
              class="focus-visible:ring-border-primary inline-flex w-full sm:w-auto gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-white text-black font-bold px-6 py-3"
              type="submit" title="Subscribe">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>


  <section id="relume" class="px-[5%] py-16 md:py-24 lg:py-28 bg-black">
    <div class="container mx-auto">
      <div class="flex items-center justify-center text-center">
        <div class="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-3 md:gap-x-16 md:gap-y-20">
          <div class="flex flex-col items-center text-center">
            <div class="mb-5 md:mb-6">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                class="size-12 text-text-white3" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z">
                </path>
              </svg>
            </div>
            <h3 class="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-text-white2">
              Email
            </h3>
            <p class="mb-5 md:mb-6 text-text-white3">
              We'd love to hear from you with any inquiries.
            </p>
            <a class="underline text-text-white" href="#">hello@vitaly.lv</a>
          </div>

          <div class="flex flex-col items-center text-center">
            <div class="mb-5 md:mb-6">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                class="size-12 text-text-white3" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z">
                </path>
              </svg>
            </div>
            <h3 class="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-text-white2">
              Phone
            </h3>
            <p class="mb-5 md:mb-6 text-text-white3">
              Reach out for support or questions anytime.
            </p>
            <a class="underline text-text-white" href="#">+1 (555) 000-0000</a>
          </div>

          <div class="flex flex-col items-center text-center">
            <div class="mb-5 md:mb-6">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                class="size-12 text-text-white3" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z">
                </path>
                <path
                  d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z">
                </path>
              </svg>
            </div>
            <h3 class="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-text-white2">
              Office
            </h3>
            <p class="mb-5 md:mb-6 text-text-white3">
              Visit us for a chat or consultation.
            </p>
            <a class="underline text-text-white" href="#">123 Sample St, Sydney NSW 2000 AU</a>
          </div>
        </div>
      </div>
    </div>
  </section>



</template>
