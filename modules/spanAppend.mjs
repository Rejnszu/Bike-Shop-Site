"use strict";
export default function spanAppendScript() {
  function appendStyledSpansToElement(htmlElement) {
    htmlElement.forEach((element) => {
      for (let i = 0; i < 4; i++) {
        const span = document.createElement("span");
        span.classList.add("styled-spans");
        element.append(span);
      }
    });
  }

  // NAVLINKI DESKTOPOWOE

  const desktopNavLinks = document.querySelectorAll(".desktop__nav-link");
  appendStyledSpansToElement(desktopNavLinks);
  // Navlinki mobilne
  const mobileNavLinks = document.querySelectorAll(".mobile__nav-link");
  appendStyledSpansToElement(mobileNavLinks);

  // SEKCJA INTRO
  const introSectionTexts = document.querySelectorAll(".intro__text");
  appendStyledSpansToElement(introSectionTexts);
  //NAWIGACJA PRODUKTÓW
  const productGroupListItem = document.querySelectorAll(".group__list__item");

  appendStyledSpansToElement(productGroupListItem);
}
