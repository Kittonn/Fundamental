gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
//   x: 700,
  duration: 5,
  scrollTrigger: {
    trigger: ".square2",
    start: "top 70%",
    end:"top 30%",
    scrub:true,
    pin:".square",
    pinSpacing:false,
    toggleActions: 'restart none none none',
    // play pause resume reverse restart reset complete none
    //              onEnter OnLeave onEnterBack onLeaveBack


    // end: () => `+=${document.querySelector(".square").offsetHeight}`,
    markers: true,
  },
});
