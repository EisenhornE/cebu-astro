<script lang="ts">
  let selectedUrl: string = "I8zv3prp6MA";
</script>

<section class="">
  <!-- Iframe -->
  <div class="video-container w-1/2 mx-auto pl-16">
    <iframe
      title="test"
      width="560"
      height="315"
      src={`https://www.youtube-nocookie.com/embed/${selectedUrl}`}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>

  <!-- Select Video -->
  <div class="w-1/4 mx-auto pl-5 pt-3 flex gap-4">
    <button
      class="px-4 py-2 bg-blue-500"
      on:click={() => (selectedUrl = "I8zv3prp6MA")}
      >1st
    </button>
    <button
      class="px-4 py-2 bg-blue-500"
      on:click={() => (selectedUrl = "gcEc0qS2pxs")}
      >2nd
    </button>
    <button
      class="px-4 py-2 bg-blue-500"
      on:click={() => (selectedUrl = "S-HZDq1DWUQ")}
      >3rd
    </button>
    <button
      class="px-4 py-2 bg-blue-500"
      on:click={() => (selectedUrl = "KGzI69BGOL8")}
      >4th
    </button>
  </div>
</section>

<!-- TODO: Convert every links to images. Svelte error Ln 2, 33, 38: Unknown word error -->
