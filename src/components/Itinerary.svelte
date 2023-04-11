<script>
  import itineraryJson from "../../data/itinerary.json";
</script>

<section>
  <!-- Header  -->
  <header class="border-b-4 inline-block w-fit-content mb-4 ml-20">
    <h1>Itinerary Tips</h1>
  </header>
  <section class="relative pb-16">
    {#each itineraryJson.itinerary as itinerary}
      <figure class="mx-24 flex justify-between">
        <section
          class="mt-4 mr-12 grid grid-cols-2 grid-rows-2 gap-2 justify-items-center mx-auto w-1/2 h-full"
        >
          <div class="row-span-2">
            <img
              src={itinerary.img1}
              alt={itinerary.img1alt}
              class="w-full h-full object-cover object-center max-w-xs"
            />
          </div>
          <div>
            <img
              src={itinerary.img2}
              alt={itinerary.img2alt}
              class="w-full h-full object-cover object-center max-w-xs"
            />
          </div>
          <div>
            <img
              src={itinerary.img3}
              alt={itinerary.img3alt}
              class="w-full h-full object-cover object-center max-w-xs"
            />
          </div>
        </section>
        <figcaption class="text-base my-28 w-1/2 leading-6">
          <h1 class="font-bold">Day {itinerary.day}</h1>
          <p>{itinerary.tip}</p>
        </figcaption>
      </figure>
      <section
        class="absolute bg-[#718DA6] w-3/4 h-1/4 right-0 bottom-0 -z-10 mb-2 pr-8 rounded-l-full"
      >
        <p class="pl-28 pb-8 absolute bottom-0 text-white text-lg font-bold">
          See More Itineraries
        </p>
      </section>
    {/each}
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
