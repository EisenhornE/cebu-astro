<script>
  let selectedUrl = "I8zv3prp6MA";
</script>

<section class="">
  <div>
    <div class="text-center bg-water-fall bg-cover text-white">
        <div class="border-2 border-black pt-36 backdrop-blur-sm">
            <h1
            class="inline-block border-b-4 border-border-green text-2xl"
          >
            Videos from Cebu
          </h1>
          <p class="mb-16 mt-8 mx-28 bg-[#2B5F8F] p-4 bg-opacity-60 rounded-3xl">
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
    <div class="py-12">
            <!-- Iframe -->
    <div class="video-container mx-auto lg:w-fit lg:p-0 sm:w-fit-content">
        <iframe
          class="lg:w-[50rem] h-[25rem] sm:w-full"
          title="test"
          src={`https://www.youtube-nocookie.com/embed/${selectedUrl}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    
      <!-- Select Video -->
      <div class="mt-2 w-3/4 mx-auto pl-5 py-4 flex gap-4 bg-[#2B5F8F] rounded-3xl">
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
    </div>

  </section>