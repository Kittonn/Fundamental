const timeline = gsap.timeline();

timeline
  .from(".title", { y: 40, ease: "power3.out",duration:0.7,opacity:0 })
  .from(".para1", { y: 10, ease: "power3.out", duration: 0.4,opacity:0 })
  .from(".para2", { y: 10, ease: "power3.out", duration: 0.4,opacity:0 });
