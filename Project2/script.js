let tl = gsap.timeline();
let menu = document.querySelector("#menu");
let close = document.querySelector("#close");
tl.to(".sidebar", {
  right: 0,
  duration: 1,
  opacity: 1,
});
tl.from(".sidebar h3", {
  // duration: 0.3,
  stagger: 0.2,
  x: 130,
  opacity: 0,
});
tl.pause();
menu.addEventListener("click", () => {
  tl.play();
});
close.addEventListener("click", () => {
  tl.reverse();
});
