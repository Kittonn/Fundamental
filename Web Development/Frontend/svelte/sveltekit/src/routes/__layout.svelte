<script>
  import Title from "$lib/title.svelte";
  import "../styles/global.css";
</script>

<header>
  <Title title="Kitton Gaming Guides" />
</header>
<main>
  <!-- Page Content -->
  <slot />
</main>

<footer>
  <p>Copyright 2022 Kitton Gaming</p>
</footer>

<style>
  header {
    display: flex;
    justify-content: center;
  }
  main {
    max-width: 960px;
    margin: 20px auto;
  }
  footer {
    text-align: center;
  }
</style>
