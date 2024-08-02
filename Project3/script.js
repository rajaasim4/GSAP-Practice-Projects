let h1 = document.querySelector("h1");
const breakText = () => {
  let textContent = h1.textContent;
  let splittedText = textContent.split("");

  let textJoin = "";
  let halfValue = Math.floor(splittedText.length / 2);
  splittedText.forEach((elem, index) => {
    if (index < halfValue) {
      textJoin += `<span class="a">${elem}</span>`;
    } else {
      textJoin += `<span class="b">${elem}</span>`;
    }
  });
  h1.innerHTML = textJoin;
};

breakText();

gsap.from("h1 .a", {
  y: 70,
  duration: 1.1,
  opacity: 0,
  stagger: 0.15,
});
gsap.from("h1 .b", {
  y: 70,
  duration: 1.1,
  opacity: 0,
  stagger: -0.15,
  delay: 0.4,
});
