<script>
  import itineraryJson from "../../data/itinerary.json";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  let carousel;

  onMount(() => {
    carousel = document.querySelector("#itinerary-carousel");
  });
</script>

<section id="itinerary">
  <!-- Header  -->
  <header
    class="border-b-4 border-border-green inline-block w-fit-content mb-4 ml-20 mt-16"
  >
    <h1>Itinerary Tips</h1>
  </header>
  <section class="relative pb-16">
    <ul id="itinerary-carousel" class="flex overflow-hidden snap-x">
      {#each itineraryJson.itinerary as itinerary}
        <li class="shrink-0 w-full snap-start">
          <figure class="flex justify-between items-center">
            <div
              class="mt-4 ml-20 grid grid-cols-2 grid-rows-2 gap-2 h-3/4 w-1/2"
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
            <figcaption class="text-base ml-12 mr-24 leading-6 w-1/2">
              <h1 class="font-bold">Day {itinerary.day}</h1>
              <p>{itinerary.tip}</p>
            </figcaption>
          </figure>
        </li>
      {/each}
    </ul>
    <button
      on:click={() => {
        carousel.scrollBy({
          left: -1500,
          behavior: "smooth",
        });
        console.log(carousel);
      }}
      class="absolute top-1/2 -translate-y-1/2 left-6 bg-fuchsia-500 rounded-full text-white text-center w-10 h-10 text-xl pb-1 overflow-hidden pl-2 pt-1 hover:bg-fuchsia-800"
      ><Icon icon="material-symbols:arrow-back-ios-new" /></button
    >
    <button
      on:click={() => {
        carousel.scrollBy({
          left: 1500,
          behavior: "smooth",
        });
        console.log(carousel);
      }}
      class="absolute bg-fuchsia-500 rounded-full text-white text-center w-10 h-10 text-xl pb-1 right-10 top-1/2 -translate-y-1/2 overflow-hidden pl-2.5 pt-1 hover:bg-fuchsia-800"
      ><Icon icon="material-symbols:arrow-forward-ios" /></button
    >
    <section
      class="absolute bg-[#718DA6] w-3/4 h-1/4 right-0 bottom-0 -z-10 mb-2 pr-8 rounded-l-full"
    >
      <p class="pl-28 pb-6 absolute bottom-0 text-white text-lg font-bold">
        See More Itineraries
      </p>
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
