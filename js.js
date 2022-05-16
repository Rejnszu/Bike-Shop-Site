"use strict";
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

const bikeIntroButton = document.querySelector(".bike__intro_button");

bikeIntroButton.addEventListener("click", () =>
  window.scrollTo(0, window.innerHeight)
);

// CONTACT FORM
(function formValidation() {
  const inputs = document.querySelectorAll(".input-container [data-input]");
  const formSubmitButton = document.getElementById("formSubmitButton");
  const warning = document.querySelectorAll(".warning");

  formSubmitButton.addEventListener("click", function (e) {
    warning.forEach((warn) => warn.classList.remove("active"));
    inputs.forEach((input) => {
      if (input.value == "") {
        e.preventDefault();
        input
          .closest(".input-wrapper")
          .closest(".input-container")
          .lastElementChild.classList.add("active");
      }
    });
  });

  inputs.forEach((input) =>
    input.addEventListener("input", () => {
      if (input.value !== "") {
        input
          .closest(".input-wrapper")
          .closest(".input-container")
          .lastElementChild.classList.remove("active");
      } else {
        input
          .closest(".input-wrapper")
          .closest(".input-container")
          .lastElementChild.classList.add("active");
      }
    })
  );
})();

// KARUZELA
const previousSlider = document.querySelector(".prev");
const nextSlider = document.querySelector(".next");
const productCardGroups = document.querySelectorAll(".product_card_group");
let sliderOffsetX = 100;
let currentSlider = 0;

nextSlider.addEventListener("click", function () {
  previousSlider.classList.remove("inactive");
  currentSlider += 1;
  if (currentSlider + 1 >= productCardGroups.length) {
    nextSlider.classList.add("inactive");
  }
  productCardGroups.forEach((group, i) => {
    group.style.transform =
      "translateX(" + 100 * (i - currentSlider * 2) + "%)";
  });
  console.log(currentSlider);
});
previousSlider.addEventListener("click", function () {
  nextSlider.classList.remove("inactive");
  currentSlider -= 1;
  if (currentSlider == 0) {
    previousSlider.classList.add("inactive");
  }

  productCardGroups.forEach((group, i) => {
    group.style.transform =
      "translateX(" + 100 * (i - currentSlider * 2) + "%)";
  });
  console.log(currentSlider);
});
