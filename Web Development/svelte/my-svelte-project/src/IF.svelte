<script>
  const num = 11;
</script>

<main>
  {#if num > 20}
    <p>more than 20</p>
  {:else if num > 10}
    <p>more than 10</p>
  {:else}
    <p>else</p>
  {/if}
</main>
