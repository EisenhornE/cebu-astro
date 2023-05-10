<script>
  import videosJson from "../../../data/videospage.json";
  $: selectedVideo = videosJson.contents;
</script>

<section class="">
  <div>
    <div class="text-center bg-water-fall bg-cover text-white pt-10">
      <div class="py-20 backdrop-blur-sm">
        <h1 class="inline-block border-b-4 border-border-green text-2xl">
          Videos from Cebu
        </h1>
        <p class="mb-10 mt-8 mx-28 bg-[#2B5F8F] p-4 bg-opacity-60 rounded-3xl">
          Welcome to our website's video gallery, where you can explore
          captivating content featuring bloggers' adventures and captivating
          tourism ads showcasing the beauty of Cebu. Immerse yourself in the
          vibrant culture, stunning landscapes, and awe-inspiring attractions of
          this enchanting Philippine province. Our curated collection brings
          together an array of videos that capture the essence of Cebu's diverse
          destinations, from pristine white-sand beaches to lush mountains and
          bustling cityscapes.
        </p>
      </div>
    </div>
  </div>
</section>

<section>
  {#each videosJson.videos as videos}
    <div class="flex py-12">
      <div class="w-1/2">
        <!-- Iframe -->
        <div class="video-container mx-auto p-0 w-fit-content pl-2">
          <iframe
            class="lg:w-[50rem] h-[25rem] sm:w-full"
            title="test"
            src={`https://www.youtube-nocookie.com/embed/${videos.url}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
      <div class="w-1/2">
        <h1 class="pl-6 text-xl">{videos.name}</h1>
        <p class="pl-6 pt-4">
          {videos.description}
        </p>
      </div>
    </div>
  {/each}
</section>
