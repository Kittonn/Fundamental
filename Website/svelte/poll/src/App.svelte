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
  let polls = [
    {
      id: 1,
      question: "Python or JavaScript?",
      answerA: "Python",
      answerB: "JavaScript",
      votesA: 9,
      votesB: 12,
    },
  ];

  const handleAdd = (e) => {
    let poll = e.detail;
    polls = [poll, ...polls];
  };

  const handleVote = (e) => {
    const { id, option } = e.detail;
    let copyPolls = [...polls];
    let upvotePoll = copyPolls.find((poll) => poll.id == id);
    if (option === "a") {
      upvotePoll.votesA++;
    } else {
      upvotePoll.votesB++;
    }
    polls = copyPolls;
  };
</script>

<Header />
<main>
  <Taps {items} {activeItem} on:changeActiveItem={changeActive} />
  {#if activeItem === "Current Polls"}
    <PollList {polls} on:vote={handleVote} />
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
