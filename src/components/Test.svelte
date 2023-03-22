<script lang="ts">
  let selectedUrl: string = "fJ1BHikwkQ0";
</script>

<section>
  <h1>Test</h1>

  <!-- Iframe -->
  <div class="video-container">
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
  <button
    class="px-4 py-2 bg-blue-500"
    on:click={() => (selectedUrl = "G7AFWdH3Qzg")}>1 video</button
  >
  <button
    class="px-4 py-2 bg-blue-500"
    on:click={() => (selectedUrl = "18IfhJz-1TM")}>2 video</button
  >
</section>