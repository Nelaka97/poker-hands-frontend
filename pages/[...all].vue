<template>
  <section id="relume" class="relative flex items-center justify-center h-screen px-[5%] overflow-hidden">
    <video autoplay loop muted class="absolute inset-0 w-full h-full object-cover">
      <source src="/bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="absolute inset-0 before:absolute before:inset-0 before:bg-black before:opacity-80 before:z-1"></div>

    <div class="relative z-10 text-center max-w-2xl">
      <h1 class="mb-5 text-6xl font-normal text-white md:text-7xl lg:text-8xl font-gloock">
        404
      </h1>
      <p class="text-2xl leading-8 text-white md:text-4xl lg:text-5xl font-normal font-gloock">
        This page could not be found.
      </p>
    </div>
  </section>
</template>