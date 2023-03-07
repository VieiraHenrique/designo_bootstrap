// NAVBAR

const navbar = document.querySelector(".navbar");

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    navbar.classList.add("small-menu");
  } else {
    navbar.classList.remove("small-menu");
  }
};

// OFFCANVAS

const offcanvas = document.querySelectorAll(".offcanvas a");
const hamburger = document.querySelector(".hamburger button");

offcanvas.forEach((e) => {
  e.addEventListener("click", () => {
    hamburger.click();
  });
});
