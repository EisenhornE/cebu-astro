<script>
  import itineraryJson from "../../../data/itinerary.json";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  let carousel;
  let activeSlide = 0;
  let timer = null;

  function nextSlide(move = true) {
    if (!carousel) return;

    if (move) {
      if (activeSlide === carousel.children.length - 1) {
        carousel.scrollBy({
          left: -carousel.scrollWidth,
          behavior: "smooth",
        });
        activeSlide = 0;
      } else {
        carousel.scrollBy({
          left:
            carousel.children[activeSlide + 1].offsetLeft - carousel.scrollLeft,
          behavior: "smooth",
        });
        activeSlide++;
      }
    } else {
      event.stopPropagation();
      if (activeSlide === 0) {
        carousel.scrollBy({
          left: carousel.scrollWidth,
          behavior: "smooth",
        });
        activeSlide = carousel.children.length - 1;
      } else {
        carousel.scrollBy({
          left:
            carousel.children[activeSlide - 1].offsetLeft - carousel.scrollLeft,
          behavior: "smooth",
        });
        activeSlide--;
      }
    }
    clearTimeout(timer);
    timer = setTimeout(() => nextSlide(true), 10000);
  }

  onMount(() => {
    if (screen.width >= 1024) {
      timer = setTimeout(() => nextSlide(true), 10000);
    }
  });
</script>

<section>
  <!-- Header  -->
  <header
    class="border-b-4 border-border-green inline-block w-fit-content mb-4 ml-20 pt-16"
    id="itinerary"
  >
    <h1 class="text-2xl">Itinerary Tips</h1>
  </header>
  <section class="relative pb-16 md:pb-2">
    <ul
      id="itinerary-carousel"
      bind:this={carousel}
      class="flex overflow-hidden snap-x h-1/2"
    >
      {#each itineraryJson.itinerary as itinerary}
        <li class="shrink-0 w-full snap-start">
          <figure class="flex justify-between items-center md:h-3/4 lg:h-full">
            <div
              class="mt-4 ml-20 grid grid-cols-2 grid-rows-2 gap-2 h-3/4 w-1/2 md:h-full"
            >
              <div class="row-span-2">
                <img
                  src={itinerary.img1}
                  alt={itinerary.img1alt}
                  class="w-full h-full object-cover object-center max-w-xl"
                />
              </div>
              <div>
                <img
                  src={itinerary.img2}
                  alt={itinerary.img2alt}
                  class="w-full h-full object-cover object-center max-w-2xl"
                />
              </div>
              <div>
                <img
                  src={itinerary.img3}
                  alt={itinerary.img3alt}
                  class="w-full h-full object-cover object-center max-w-2xl"
                />
              </div>
            </div>
            <figcaption
              class="text-base ml-12 mr-24 leading-6 w-1/2 md:overflow-auto md:touch-pan-y lg:overflow-hidden md:max-h-full"
            >
              <h1 class="font-bold lg:h-full md:h-full">Day {itinerary.day}</h1>
              <p class="mb-16">{itinerary.tip}</p>
            </figcaption>
          </figure>
        </li>
      {/each}
    </ul>
    <button
      on:click={() => nextSlide(false)}
      class="absolute top-1/2 -translate-y-1/2 left-6 bg-fuchsia-500 rounded-full text-white text-center w-10 h-10 text-xl pb-1 overflow-hidden pl-2 pt-1 lg:hover:bg-fuchsia-800"
    >
      <Icon icon="material-symbols:arrow-back-ios-new" />
    </button>
    <button
      on:click={nextSlide}
      class="absolute bg-fuchsia-500 rounded-full text-white text-center w-10 h-10 text-xl pb-1 right-10 top-1/2 -translate-y-1/2 overflow-hidden pl-2.5 pt-1 lg:hover:bg-fuchsia-800"
    >
      <Icon icon="material-symbols:arrow-forward-ios" />
    </button>
    <section
      class="absolute bg-[#718DA6] w-1/2 h-1/2 right-0 mb-2 pr-8 rounded-l-full md:bottom-20 md:h-[10%] lg:h-1/4 lg:-bottom-16"
    >
      <a
        href="itinerary-page"
        class="pl-28 pb-2 absolute lg:top-[3.5rem] lg:-left-16 text-white text-lg font-bold md:-left-16 md:top-5"
      >
        See More Itineraries
      </a>
    </section>
  </section>
</section>

<style>
  img {
    border-radius: 8px;
    transition: transform 0.2s ease-in-out;
  }
  img:hover {
    transform: scale(1.1);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }
</style>
