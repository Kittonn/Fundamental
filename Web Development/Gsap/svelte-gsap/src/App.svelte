<script lang="ts">
  import { onMount } from "svelte/internal";
  import { gsap, Power3 } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);
  let title;
  let para;

  let heading;
  let content;

  onMount(() => {
    gsap
      .timeline()
      .from(title, { opacity: 0, duration: 1, y: 40, ease: Power3.easeOut })
      .from(para, { opacity: 0, y: 10, duration: 0.7, ease: Power3.easeOut });

    gsap
      .timeline({
        scrollTrigger:{
          trigger:".section2",
          markers:true,
          start:"top 40%",
          // scrub:true
        }
      })
      .from(heading, { delay:0.5,opacity: 0, duration: 1, y: 30, ease: Power3.easeOut })
      .from(content, { opacity: 0, duration: 0.7, y: 30, ease: Power3.easeOut })
  });
</script>

<main>
  <div class="section1">
    <h1 bind:this={title}>Kittipod Lambangchang</h1>
    <h2 bind:this={para}>กิตติพศ หลำบางช้าง</h2>
    <a href="#part2">click</a>
  </div>
  <div id="part2" class="section2">
    <h1 bind:this={heading}>Lorem ipsum dolor sit amet.</h1>
    <h2 bind:this={content}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, at!
    </h2>
  </div>
</main>
