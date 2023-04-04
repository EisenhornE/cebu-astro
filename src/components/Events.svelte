<script>
  import eventsJson from "../../data/events.json";
  let month = "January";

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
          class="absolute left-56 mt-2 py-2 w-28 bg-white rounded-lg shadow-lg"
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

<section class="py-6 my-6 mx-8 border-4 border-black flex gap-4">
  {#each eventsJson.contents as events}
    {#if selectedOption === "January" || month === "January"}
      <div class="w-[600px] h-[500px] ml-4">
        <img
          src={events.Image1}
          alt="Sinulog"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
      <figure class="justify-items-center w-[50%]">
        <div class="flex">
          <div class="w-[75%] h-60 ml-4 overflow-hidden">
            <img
              src={events.Image2}
              alt="Sinulog"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
          <div class="w-[75%] h-60 ml-4 overflow-hidden">
            <img
              src={events.Image3}
              alt="Sinulog"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <figcaption class="mx-4 my-16 text-left">
          <p>{events.Description}</p>
        </figcaption>
      </figure>
    {/if}
  {/each}
  <!-- {#if selectedOption == "January" || month == "January"}
    <fig class="px-24 py-4 border-4 border-black flex gap-4">
      {#each eventsJson.contents as item}
        <div class="w-[600px] h-[500px] rounded-lg">
          <img
            src={item.Image1}
            alt="Sinulog"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="w-[30%] h-1/2 rounded-full border-4 border-black overflow-hidden"
        >
          <img
            src={item.Image2}
            alt="Sinulog"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="w-[30%] h-1/2 rounded-full border-4 border-black overflow-hidden"
        >
          <img
            src={item.Image3}
            alt="Sinulog"
            class="w-full h-full object-cover"
          />
        </div>
      {/each}
    </fig>
  {/if} -->
</section>
