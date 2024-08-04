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
