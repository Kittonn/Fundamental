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
</script>

<div>
  <!-- <If /> -->
  <!-- <Loop /> -->
  <!-- <Basic /> -->
  <button on:click={toggleText}>Show Text</button>
  <Prop name="Kitton" {showText} on:click={toggleText}>
    <Form />
    <!-- <div slot="name">slot name</div> -->
  </Prop>
</div>

<style>
</style>
