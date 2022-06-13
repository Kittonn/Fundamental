<script>
  let people = [
    { name: "Ton", color: "red", age: 12, id: 1 },
    { name: "Lam", color: "blue", age: 15, id: 2 },
    { name: "Kittipod", color: "green", age: 17, id: 3 },
  ];

  const handleClick = (id) => {
    people = people.filter((person) => person.id != id);
  };

  const isPromo = true;
</script>

<!-- class:Promo -> Add new clase with decision -->
<main class:Promo={isPromo}>
  {#each people as person (person.id)}
    <div>
      <div>{person.name}</div>
      <div style="color: {person.color}">{person.age}</div>
      <button on:click={() => handleClick(person.id)}>Delete</button>
    </div>
  {:else}
    <!-- show went no data in people -->
    <p>There are many.....</p>
  {/each}
</main>

<style>
  .Promo {
    background: red;
  }
</style>
