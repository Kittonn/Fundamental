<script>
  let date = 8;
  let color = "orange";
  let name = "Kittipod";
  let lastname = "lambangchang";

  $: FullName = `${name} ${lastname}`;

  const handleClick = () => {
    color = "red";
  };

  const handleInput = (e) => {
    color = e.target.value;
  };
</script>

<main>
  <div style="color: {color};">Hello {FullName} {color}</div>
  <button on:click={handleClick}>Change</button>

  <input type="text" on:input={handleInput} value={color} />
  <input type="text" bind:value={name} />
  <input type="text" bind:value={lastname} />
  <input type="text" bind:value={color} />
</main>
