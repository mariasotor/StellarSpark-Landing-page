const closeNavBtn = document.querySelector(".close-nav");
const openNavBtn = document.querySelector(".open-nav-btn");
const nav = document.querySelector(".nav");

openNavBtn.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

closeNavBtn.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
