<script>
  import Header from "./Components/Header.svelte";
  import Footer from "./Components/Footer.svelte";
  import Taps from "./Shared/Tap.svelte";
  import CreatePollForm from "./Components/CreatePollForm.svelte";
  import PollList from "./Components/PollList.svelte";
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const changeActive = (e) => {
    activeItem = e.detail;
  };

  const handleAdd = (e) => {
    activeItem = "Current Polls";
  };

  // const handleVote = (e) => {

  // };
</script>

<Header />
<main>
  <Taps {items} {activeItem} on:changeActiveItem={changeActive} />
  {#if activeItem === "Current Polls"}
    <PollList />
  {:else}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
