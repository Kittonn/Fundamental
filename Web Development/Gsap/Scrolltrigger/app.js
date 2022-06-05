gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".box",
  start:"top 80%",
  end:"top 50%",
  markers:true,
  toggleClass:'box-red'
})


// let timeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".box",
//     markers: true,
//     start: "top 80%",
//     end: "top 30%",
//     scrub: 1,
//   },
// });
// timeline
//   .to(".box", { x: 500, duration: 2 })
//   .to(".box", { y: 200, duration: 3 })
//   .to(".box", { x: 0, duration: 3 });

// gsap.to(".box",{x:500,duration:2})
// gsap.to('.box',{y:200,duration:2,delay:2})
// gsap.to(".square", {
// //   x: 700,
//   duration: 5,
//   scrollTrigger: {
//     trigger: ".square2",
//     start: "top 70%",
//     end:"top 30%",
//     scrub:true,
//     pin:".square",
//     pinSpacing:false,
//     toggleActions: 'restart none none none',
//     // play pause resume reverse restart reset complete none
//     //              onEnter OnLeave onEnterBack onLeaveBack

//     // end: () => `+=${document.querySelector(".square").offsetHeight}`,
//     markers: true,
//   },
// });
