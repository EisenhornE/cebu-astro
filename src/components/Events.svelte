<script>
  import eventsJson from "../../data/events.json";
  let month = "January";
  $: selectedData = eventsJson.contents.find((item) => item.month === month);
  $: console.log(selectedData);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let showDropdown = false;
  let selectedOption = "";
  let carousel;

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }

  function selectOption(option) {
    month = option;
    showDropdown = false;
  }

  function nextSlide(move = true) {
    if (!carousel) return;

    if (move) {
      carousel.scrollLeft += carousel.offsetWidth;
    } else {
      carousel.scrollLeft -= carousel.offsetWidth;
    }
  }
</script>

<section>
  <div class="pl-20">
    <h1 class="inline-block border-b-4 ml-2">
      Upcoming Events in <button on:click={toggleDropdown}>
        {#if selectOption == ""}
          {month}
        {:else if selectedOption == ""}
          {month}
        {:else}
          {selectedOption}
        {/if}
      </button>
    </h1>
    <div>
      {#if showDropdown}
        <div
          class="absolute z-10 left-56 mt-2 py-2 w-28 bg-white rounded-lg shadow-lg"
        >
          {#each months as option}
            <button
              class="px-4 py-2 cursor-pointer hover:bg-gray-100"
              on:click={() => selectOption(option)}
            >
              {option}
            </button>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</section>

<section class="relative py-6 px-8 my-6 mx-8 border-4 border-black w-50">
  <div class="flex">
    <div class="w-1/2 mr-4">
      <img
        src={selectedData.featureImg}
        alt={selectedData.altFeatured}
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
    <section class="w-1/2 relative">
      <ul
        bind:this={carousel}
        class="flex gap-4 overflow-hidden scroll-smooth snap-x"
      >
        {#each selectedData.festivals as festival}
          <li class="snap-start justify-center mt-4 w-full shrink-0">
            <figure class="">
              <div class="flex mr-4">
                <div class="w-[75%] h-60 ml-4 overflow-hidden">
                  <img
                    src={festival.image1}
                    alt={festival.alt1}
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div class="w-[75%] h-60 ml-4 overflow-hidden">
                  <img
                    src={festival.image2}
                    alt={festival.alt2}
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <figcaption class="mx-4 my-16 text-left">
                <h1 class="pb-2 font-semibold">{festival.name}</h1>
                <p>{festival.description}</p>
              </figcaption>
            </figure>
          </li>
        {/each}
      </ul>
      {#if selectedData.festivals.length > 1}
        <button
          on:click={() => nextSlide(false)}
          class="absolute top-1/2 -translate-y-1/2 left-0"
        >
          Prev
        </button>
        <button
          on:click={nextSlide}
          class="absolute top-1/2 -translate-y-1/2 right-0"
        >
          Next
        </button>
      {:else}
        <div class="hidden" />
      {/if}
    </section>
  </div>
</section>
