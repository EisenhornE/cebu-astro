<script>
  import eventsJson from "../../../data/events.json";
  import Icon from "@iconify/svelte";
  let month = "January";
  $: selectedData = eventsJson.contents.find((item) => item.month === month);
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
  let activeSlide = 0;

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }

  function selectOption(option) {
    month = option;
    showDropdown = false;
    activeSlide = 0;
    goToSlide(activeSlide);
  }

  function nextSlide(move = true) {
    if (!carousel) return;

    if (move) {
      activeSlide++;

      if (activeSlide > selectedData.festivals.length - 1) {
        activeSlide = 0;
      }
      // carousel.scrollLeft += carousel.offsetWidth;

      goToSlide(activeSlide);
    } else {
      activeSlide--;

      if (activeSlide < 0) {
        activeSlide = selectedData.festivals.length - 1;
      }
      // carousel.scrollLeft -= carousel.offsetWidth;

      goToSlide(activeSlide);

      function updateFeatureImg(index) {
        activeSlide = index;
      }
      if (showDropdown) {
        showDropdown = false;
      }
    }
  }

  function goToSlide(index) {
    if (!carousel) return;

    const CurrentWidth = carousel.offsetWidth;
    const TargetWidth = CurrentWidth * index;

    carousel.scrollIntoView({ behavior: "smooth", block: "start" });
    carousel.scrollLeft = TargetWidth;
    activeSlide = index;
  }
</script>

<section id="events" class="pt-16">
  <div class="pl-20 relative">
    <h1 class="inline-block border-b-4 border-border-green ml-2">
      Upcoming Events in
      <button on:click={toggleDropdown} class="text-violet-600">
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
          class="dropdown-menu absolute z-10 left-56 mt-2 py-2 w-28 bg-white rounded-lg shadow-lg text-center"
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

      <button
        on:click={toggleDropdown}
        class=" absolute top-[7px] left-[19.3%] bg-purple-500 rounded-full text-white hover:bg-purple-600 focus:bg-purple-800"
      >
        {#if showDropdown}
          <Icon icon="material-symbols:arrow-drop-down-rounded" rotate={2} />
        {:else}
          <Icon icon="material-symbols:arrow-drop-down-rounded" />
        {/if}
      </button>
    </div>
  </div>

  <section class="relative py-6 my-6 mx-8 w-50">
    <div class="flex">
      <div class="w-1/2 mr-4 h-max-3/4">
        <img
          src={selectedData.festivals[activeSlide].featureimg}
          alt={selectedData.featurealt}
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
      <section class="w-1/2 relative">
        <ul
          bind:this={carousel}
          class="flex gap-4 overflow-hidden scroll-smooth snap-x mr-8"
        >
          {#each selectedData.festivals as festival}
            <li class="snap-start justify-center mt-4 w-full shrink-0">
              <figure>
                <div class="flex mr-6">
                  <div class="w-[75%] h-60 ml-4 overflow-hidden others">
                    <img
                      src={festival.image1}
                      alt={festival.alt1}
                      class="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div class="w-[75%] h-60 ml-4 overflow-hidden others">
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
            class="absolute top-1/2 -translate-y-1/2 -left-10 bg-fuchsia-500 rounded-full text-white w-10 h-10 text-xl pb-1 pl-2 pt-1 hover:bg-fuchsia-800"
          >
            <Icon icon="material-symbols:arrow-back-ios-new" />
          </button>
          <button
            on:click={nextSlide}
            class="absolute top-1/2 -translate-y-1/2 right-0 bg-fuchsia-500 rounded-full text-white w-10 h-10 text-xl pb-1 pl-2.5 pt-1 hover:bg-fuchsia-800"
          >
            <Icon icon="material-symbols:arrow-forward-ios" />
          </button>
        {:else}
          <div class="hidden" />
        {/if}
        <div class="text-center flex justify-center">
          {#each selectedData.festivals as _, i}
            <button
              class="w-max-1/2 py-2 px-4 m-4 hover:bg-purple-500 focus:bg-purple-500 active:bg-purple-500 border-b-4 border-b-border-green {activeSlide ===
              i
                ? 'selected bg-purple-500 text-white'
                : ''}"
              on:click={() => goToSlide(i)}>{_.name}</button
            >
          {/each}
        </div>
      </section>
    </div>
  </section>
</section>

<style>
  .others {
    transition: transform 0.2s ease-in-out;
  }
  .others:hover {
    transform: scale(1.1);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    overflow: visible;
    border-radius: 9999px;
  }
</style>
