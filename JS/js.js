"use strict";

// PRODUKTY SELECT MENU

const mobileProductGroupSelect = document.querySelector(
  ".products__group__mobile__select"
);
const mobileProductGroupList = document.querySelector(
  ".products__group__mobile__dropdown-list"
);
const mobileProductGroupListItem = document.querySelectorAll(
  ".products__group__mobile__dropdown-list li"
);
const mobileSelector = document.querySelector(".mobile__select_selector");
mobileProductGroupSelect.addEventListener("click", () => {
  mobileProductGroupList.classList.toggle("active");
});

mobileProductGroupListItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    mobileSelector.textContent = e.target.textContent;
  });
});
// KARUZELA PRODUKTÓW
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
