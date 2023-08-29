const nav = document.querySelectorAll(".navbar-nav li a");

nav[0].addEventListener("click", function () {
  nav[0].classList.add("active");
  nav[1].classList.remove("active");
  nav[2].classList.remove("active");
  nav[3].classList.remove("active");
});
nav[1].addEventListener("click", function () {
  nav[0].classList.remove("active");
  nav[1].classList.add("active");
  nav[2].classList.remove("active");
  nav[3].classList.remove("active");
});
nav[2].addEventListener("click", function () {
  nav[0].classList.remove("active");
  nav[1].classList.remove("active");
  nav[2].classList.add("active");
  nav[3].classList.remove("active");
});
nav[3].addEventListener("click", function () {
  nav[0].classList.remove("active");
  nav[1].classList.remove("active");
  nav[2].classList.remove("active");
  nav[3].classList.add("active");
});
