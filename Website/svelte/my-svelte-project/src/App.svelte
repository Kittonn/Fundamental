<script>
  let date = 8;
  export let name;

  const handleClick = () => {
    date = 19;
  };
</script>

<div>
  <div>Hello {date} {name}</div>
  <button on:click={handleClick}>Change</button>
</div>

<style>
  div {
    color: aquamarine;
    background-color: black;
  }
</style>
