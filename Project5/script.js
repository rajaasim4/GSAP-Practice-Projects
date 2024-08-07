window.addEventListener("mousemove", (e) => {
  gsap.to(".cursor", {
    x: e.x - 25,
    y: e.y - 25,
    ease: "power2.out",
  });
});

let tl = gsap.timeline();
tl.from("nav h3", {
  y: -30,
  opacity: 0,
  duration: 0.6,
});

tl.from("ul li", {
  stagger: 0.2,
  y: -30,
  opacity: 0,
  duration: 1.1,
});

tl.from(".hero .hero-left h1", {
  x: -100,
  duration: 0.4,
  opacity: 0,
});

tl.from(".hero .hero-left p", {
  x: -100,
  duration: 0.4,
  opacity: 0,
});
tl.from(".hero .hero-left button", {
  x: -100,
  duration: 0.4,
  opacity: 0,
});

// As Normal delay property not work well so we sue this as many seconds you can give them

tl.from(
  ".hero .hero-right img",
  {
    x: 100,
    duration: 0.4,
    opacity: 0,
  },
  "-=1"
);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    start: "top 30%",
  },
});
tl2.from(".partners img", {
  y: -40,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
});
tl2.from(".service h4", {
  x: -60,
  opacity: 0,
  duration: 0.4,
});

tl2.from(".service p", {
  x: 60,
  opacity: 0,
  duration: 0.4,
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    start: "top 40%",
  },
});

tl3.from(".card-top1", {
  x: -70,
  opacity: 0,
  duration: 0.3,
});

tl3.from(".card-top1 h3", {
  x: -60,
  opacity: 0,
  duration: 0.6,
});
tl3.from(".card-top1 .arrow-bottom", {
  x: -60,
  opacity: 0,
  duration: 0.6,
});
tl3.from(".card-top1 .card-right img", {
  x: -60,
  opacity: 0,
  duration: 0.6,
});

tl3.from(".card-top2", {
  x: 70,
  opacity: 0,
  duration: 0.3,
});

tl3.from(".card-top2 h3", {
  x: -60,
  opacity: 0,
  duration: 0.6,
});
tl3.from(".card-top2 .arrow-bottom", {
  x: -60,
  opacity: 0,
  duration: 0.6,
});
tl3.from(".card-top2 .card-right img", {
  x: -60,
  opacity: 0,
  duration: 0.6,
});

tl3.from(".card-bottom1", {
  x: -70,
  opacity: 0,
  duration: 0.3,
});

tl3.from(".card-bottom1 h3", {
  x: -60,
  opacity: 0,
  duration: 0.6,
});
tl3.from(".card-bottom1 .arrow-bottom", {
  x: -60,
  opacity: 0,
  duration: 0.6,
});
tl3.from(".card-bottom1 .card-right img", {
  x: -60,
  opacity: 0,
  duration: 0.6,
});

tl3.from(".card-bottom2", {
  x: -70,
  opacity: 0,
  duration: 0.3,
});

tl3.from(".card-bottom2 h3", {
  x: -60,
  opacity: 0,
  duration: 0.6,
});
tl3.from(".card-bottom2 .arrow-bottom", {
  x: -60,
  opacity: 0,
  duration: 0.6,
});
tl3.from(".card-bottom2 .card-right img", {
  x: 60,
  opacity: 0,
  duration: 0.6,
});

// if we want to Implement the aniamtion that both happens at same time even it is in timeline so we will pass any name but same to which we want as same appears

// tl3.from(".card-bottom1", {
//   x: -70,
//   opacity: 0,
//   duration: 0.3,
// },"anim1");

// tl3.from(".card-bottom2", {
//   x: -70,
//   opacity: 0,
//   duration: 0.3,
// },"anim1");
