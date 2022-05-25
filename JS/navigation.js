"use strict";
// ALL NAVIGATION STUFF
const desktopNavigation = document.querySelector(".navigation__desktop");
const mobileNavigation = document.querySelector(".navigation__mobile");
const bikeFirstSection = document.querySelector(".biker__first_section");
const navigationHamburger = document.querySelector(".hamburger");
const hamburgerElements = document.querySelectorAll(".hamburger__element");
const navLinks = document.querySelectorAll(".nav-link");

navigationHamburger.addEventListener("click", () => {
  hamburgerElements.forEach((element) => element.classList.toggle("active"));
  mobileNavigation.classList.toggle("active");
});
navLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => {
    mobileNavigation.classList.remove("active");
    hamburgerElements.forEach((element) => element.classList.remove("active"));
  })
);

const bikeIntroButton = document.querySelector(".bike__intro_button");

bikeIntroButton.addEventListener("click", () =>
  window.scrollTo(0, window.innerHeight)
);
