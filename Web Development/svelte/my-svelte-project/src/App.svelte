<script>
  // import Loop from "./Loop.svelte";
  // import Basic from "./Basic.svelte";
  // import If from "./IF.svelte";
  import Prop from "./Prop.svelte";
  import Form from "./Form.svelte";
  let showText = false;
  const toggleText = () => {
    showText = !showText;
  };
  let people = [
    { name: "Ton", color: "red", age: 12, id: 1 },
    { name: "Lam", color: "blue", age: 15, id: 2 },
    { name: "Kittipod", color: "green", age: 17, id: 3 },
  ];
  const handleClick = (id) => {
    people = people.filter((person) => person.id != id);
  };

  const add = (e) => {
    people = [...people, e.detail];
  };
</script>

<div>
  <!-- <If /> -->
  <!-- <Loop /> -->
  <!-- <Basic /> -->
  <button on:click={toggleText}>Show Text</button>
  <Prop name="Kitton" {showText} on:click={toggleText}>
    <Form on:AddPerson={add} />
    <!-- <div slot="name">slot name</div> -->
  </Prop>
</div>

<div>
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
</div>

<style>
</style>
