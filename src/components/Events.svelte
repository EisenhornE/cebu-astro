<script>
  import eventsJson from "../../data/events.json";
  let month = "January";
  let selectedData = eventsJson.contents.find((item) => item.month == month);
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

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }

  function selectOption(option) {
    selectedOption = option;
    showDropdown = false;
  }
</script>

<section>
  <div class="pl-20 ">
    <button class="inline-block border-b-4 ml-2" on:click={toggleDropdown}>
      {#if selectOption == ""}
        Upcoming Events in {month}
      {:else if selectedOption == ""}
        Upcoming Events in {month}
      {:else}
        Upcoming Events in {selectedOption}
      {/if}
    </button>
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

<section class="relative py-6 my-6 mx-8 border-4 border-black w-50">
  {#each eventsJson.contents as events}
    {#if selectedOption === "January" || month === "January"}
      <div class="flex">
        <div class="w-[2000px] h-[500px] ml-16">
          <img
            src={events.featureImg}
            alt="Sinulog"
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
        <ul class="flex gap-4 overflow-auto">
          <li class="justify-center mt-4 w-full shrink-0">
            <figure class="">
              <div class="flex mr-4">
                <div class="w-[75%] h-60 ml-4 overflow-hidden">
                  <img
                    src={events.festivals[0].image1}
                    alt="Sinulog"
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div class="w-[75%] h-60 ml-4 overflow-hidden">
                  <img
                    src={events.festivals[0].image2}
                    alt="Sinulog"
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <figcaption class="mx-4 my-16 text-left">
                <h1 class="pb-2 font-semibold">{events.festivals[0].name}</h1>
                <p>{events.festivals[0].description}</p>
              </figcaption>
            </figure>
          </li>
          <li class="justify-center mt-4 w-full shrink-0">
            <figure class="">
              <div class="flex mr-4">
                <div class="w-[75%] h-60 ml-4 overflow-hidden">
                  <img
                    src={events.festivals[1].image1}
                    alt="Sinulog"
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div class="w-[75%] h-60 ml-4 overflow-hidden">
                  <img
                    src={events.festivals[1].image2}
                    alt="Sinulog"
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <figcaption class="mx-4 my-16 text-left">
                <h1 class="pb-2 font-semibold">{events.festivals[1].name}</h1>
                <p>{events.festivals[1].description}</p>
              </figcaption>
            </figure>
          </li>
          <li class="justify-center mt-4 w-full shrink-0">
            <figure class="">
              <div class="flex mr-4">
                <div class="w-[75%] h-60 ml-4 overflow-hidden">
                  <img
                    src={events.festivals[2].image1}
                    alt="Sinulog"
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div class="w-[75%] h-60 ml-4 overflow-hidden">
                  <img
                    src={events.festivals[2].image2}
                    alt="Sinulog"
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <figcaption class="mx-4 my-16 text-left">
                <h1 class="pb-2 font-semibold">{events.festivals[2].name}</h1>
                <p>{events.festivals[2].description}</p>
              </figcaption>
            </figure>
          </li>
          <li class="justify-center mt-4 w-full shrink-0">
            <figure class="">
              <div class="flex mr-4">
                <div class="w-[75%] h-60 ml-4 overflow-hidden">
                  <img
                    src={events.festivals[3].image1}
                    alt="Sinulog"
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div class="w-[75%] h-60 ml-4 overflow-hidden">
                  <img
                    src={events.festivals[3].image2}
                    alt="Sinulog"
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <figcaption class="mx-4 my-16 text-left">
                <h1 class="pb-2 font-semibold">{events.festivals[3].name}</h1>
                <p>{events.festivals[3].description}</p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    {/if}
  {/each}
</section>
