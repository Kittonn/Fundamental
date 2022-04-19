<script>
  let people = [
    { name: "Ton", color: "red", age: 12, id: 1 },
    { name: "Lam", color: "blue", age: 15, id: 2 },
    { name: "Kittipod", color: "green", age: 17, id: 3 },
  ];
</script>

<main>
  {#each people as person (person.id)}
    <div>
      <div>{person.name}</div>
      <div style="color: {person.color}">{person.age}</div>
    </div>
  {:else}
    <!-- show went no data in people -->
    <p>There are many.....</p>
  {/each}
</main>
