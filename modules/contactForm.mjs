"use strict";

// CONTACT FORM
export default function formValidation() {
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
}
