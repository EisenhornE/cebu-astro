<script>
  let images = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/238/200/300",
    "https://picsum.photos/id/239/200/300",
    "https://picsum.photos/id/240/200/300",
  ];
  let currentImage = 0;

  function next() {
    currentImage++;
    if (currentImage > images.length - 1) {
      currentImage = 0;
    }
  }

  function prev() {
    currentImage--;
    if (currentImage < 0) {
      currentImage = images.length - 1;
    }
  }
</script>

<div class="relative">
  <button
    class="absolute top-1/2 left-0 transform -translate-y-1/2"
    on:click={prev}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
  <button
    class="absolute top-1/2 right-0 transform -translate-y-1/2"
    on:click={next}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
  <img
    src={images[currentImage]}
    alt="carousel"
    class="mx-auto rounded-lg transition-opacity duration-1000 ease-in-out"
  />
</div>
