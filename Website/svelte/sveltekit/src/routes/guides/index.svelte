<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("/guides.json");
    const { guilds } = await res.json();

    if (res.ok) {
      return {
        props: {
          guilds,
        },
      };
    }
    return {
      status: res.status,
      error: new Error("Not fetch"),
    };
  }
</script>

<script>
  export let guilds;
</script>

<div class="guilds">
  <ul>
    {#each guilds as guild}
      <li>
        <a sveltekit:prefetch href={`/guides/${guild.id}`}>{guild.title}</a>
      </li>
    {/each}
  </ul>
</div>
