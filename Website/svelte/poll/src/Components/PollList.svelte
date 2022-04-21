<script>
  import { fade, scale, slide } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { onMount, onDestroy } from "svelte";
  import PollStore from "../Stores/PollStore";
  import PollDetail from "./PollDetail.svelte";
  // export let polls = [];

  // subscribe + onDestroy ==> $variable

  // const unsub = PollStore.subscribe((data) => {
  //   polls = data;
  // });

  // onMount(() => console.log("mount"));
  // onDestroy(() => {
  //   console.log("destroy");
  //   unsub();
  // });
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetail {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
