let main = document.querySelector("main");
let cursor = document.querySelector(".cursor");
let image = document.querySelector(".image");
let video = document.querySelector("#video");

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
  });
});

image.addEventListener("mouseenter", () => {
  //   cursor.innerText = "View More";
  video.src = "./video.mp4";
  gsap.to(cursor, {
    scale: 4,
  });
});
image.addEventListener("mouseleave", () => {
  video.src = "";
  //   cursor.innerText = "";
  gsap.to(cursor, {
    scale: 1,
  });
});
