<script>
  import { onMount, onDestroy } from "svelte";

  let lis = [];

  onMount(() => {
    lis = document.querySelectorAll("ul li");
  });

  onDestroy(() => {
    lis = [];
  });

  function handleClick(index) {
    lis[index].scrollIntoView({ behavior: "smooth" });
  }
</script>

<div class="flex flex-wrap">
  {#each Array.from({ length: lis.length }, (_, index) => index + 1) as buttonIndex}
    <div class="button" on:click={() => handleClick(buttonIndex - 1)}>
      {buttonIndex}
    </div>
  {/each}
</div>

<ul>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ut pretium nisl eget sapien malesuada tristique.</li>
  <li>Praesent rhoncus condimentum mauris, at ultricies leo viverra ac.</li>
  <li>In hac habitasse platea dictumst. Sed nec iaculis elit.</li>
  <li>Donec id massa augue. Fusce eget sapien vel nisi sagittis vehicula.</li>
</ul>

<style>
  .button {
    display: inline-block;
    margin-right: 0.5rem;
    padding: 0.5rem;
    background-color: #eee;
    border-radius: 0.25rem;
    cursor: pointer;
  }
</style>
