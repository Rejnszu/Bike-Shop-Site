"use strict";

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
