// Code for Sticky Navbar 
window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  const ul = document.querySelector("ul");
  const Dropdown1 = document.getElementById("Dropdown2");
  header.classList.toggle("sticky", window.scrollY > 0);
  Dropdown1.classList.toggle("Dropdown2", window.scrollY > 0);
  ul.classList.toggle("ul", window.scrollY > 0);
});
// Code for slide1 parallx  Effect
const slide1 = document.getElementById("slidecontent1");
const slide2 = document.querySelector("h1");
const slide3 = document.querySelector("button");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  slide1.style.marginTop = value * -0.7 + "px";
  slide2.style.marginTop = value * -0.1 + "px";
  slide3.style.marginTop = value * -0.1 + "px";
});
