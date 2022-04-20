<script>
  import { createEventDispatcher } from "svelte";
  let name;
  let age;
  //   let swim = false;
  //   let ball = false;
  //   let bat = false;
  let color;
  let skills = [];
  const dispatch = createEventDispatcher();

  const handleSubmit = (e) => {
    const data = { id: Math.random(), name: name, age: age };
    dispatch("AddPerson", data);
    console.log(data);
  };
</script>

<div>
  <form on:submit|preventDefault={handleSubmit}>
    <input placeholder="name" type="text" bind:value={name} />
    <input placeholder="age" type="number" bind:value={age} />

    <!-- <input type="checkbox" bind:checked={swim} />Swim
    <input type="checkbox" bind:checked={ball} />Ball
    <input type="checkbox" bind:checked={bat} />Bat -->

    <!-- <input type="checkbox" bind:group={skills} value="swim" />Swim <br />
    <input type="checkbox" bind:group={skills} value="ball" />Ball <br />
    <input type="checkbox" bind:group={skills} value="bat" />Bat
    <select bind:value={color}>
      <option value="blacck">black</option>
      <option value="red">red</option>
    </select> -->
    <button>Add</button>
  </form>
</div>
