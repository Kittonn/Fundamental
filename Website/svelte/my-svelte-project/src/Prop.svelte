<script>
  //   export let name;

  export let showText;
</script>

{#if showText}
  <!-- on:click|once={handleClick} -->
  <main on:click|self>
    <slot />
    <!-- <slot name="name" /> -->
  </main>
{/if}

<style>
</style>
