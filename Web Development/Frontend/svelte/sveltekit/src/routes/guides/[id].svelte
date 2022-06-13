<script context="module">
  export async function load({ fetch, params }) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const id = params.id;
    const res = await fetch(`/guides/${id}.json`);
    const { guild } = await res.json();

    if (res.ok) {
      return {
        props: {
          guild,
        },
      };
    }
    return {
      status: 301,
      //   error: new Error("Not fetch"),
      redirect: "/guides",
    };
  }
</script>

<script>
  export let guild;
</script>

<div class="guild">
  <h2>{guild.title}</h2>
  <!-- <p>{guild.body}</p> -->
</div>

<style>
  .guild {
    margin-top: 40px;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
</style>
