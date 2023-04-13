<script lang="ts">
  let selectedUrl: string = "I8zv3prp6MA";
</script>

<section class="">
  <p class="inline-block border-b-4 border-border-green ml-20 mb-8">
    Videos of Cebu
  </p>
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
  <div class="w-3/4 mx-auto pl-5 pt-3 flex gap-4">
    <button
      class="mx-4 my-2 transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl"
      on:click={() => (selectedUrl = "I8zv3prp6MA")}
      ><img
        src="https://i.ytimg.com/vi/I8zv3prp6MA/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhlIEsoQDAP&rs=AOn4CLBMytR1Yu-OEJKIWZY56pMudKf48Q"
        alt="First Video"
      />
    </button>
    <button
      class="mx-4 my-2 transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl"
      on:click={() => (selectedUrl = "gcEc0qS2pxs")}
      ><img
        src="https://i.ytimg.com/vi/gcEc0qS2pxs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwz6hdgqAg4ps61-ojBQ8yY5TlAA"
        alt="Second Video"
      />
    </button>
    <button
      class="mx-4 my-2 transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl"
      on:click={() => (selectedUrl = "S-HZDq1DWUQ")}
      ><img
        src="https://i.ytimg.com/vi/S-HZDq1DWUQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuU8eFIQiqgTvOfeWd2Ho19R665w"
        alt="Third Video"
      />
    </button>
    <button
      class="mx-4 my-2 transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl"
      on:click={() => (selectedUrl = "KGzI69BGOL8")}
      ><img
        src="https://i.ytimg.com/vi/KGzI69BGOL8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpIHY-lhUnaGy6wokhakmYywpfEw"
        alt="Fourth Video"
      />
    </button>
  </div>
</section>

<!-- TODO: Convert every links to images. -->
