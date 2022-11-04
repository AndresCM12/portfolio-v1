import { navColor } from "../source/navColor.js";
let $swiperWrapper;
let currentNavigation = 1;

console.group("Bienvenido, curioso");
console.log("Hola 😈");
console.log("Proyecto 100% JS vanilla.");
console.log("Con planes de migrar a react, haha.");
console.groupEnd();

const setCurrentNavigation = (value) => {
  currentNavigation = value;
};

document.addEventListener("DOMContentLoaded", () => {
  $swiperWrapper = document.querySelector(
    ".swiper-backface-hidden .swiper-slide"
  );

  const hash = location.hash;

  const $navP = document.querySelectorAll("nav p");
  $navP.forEach((element) => {
    element.classList.remove("selected");
  });

  setInitialStateSwiperNavigation(hash, $navP);
});

window.addEventListener("hashchange", () => {
  navColor(setCurrentNavigation);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 560) {
    $swiperWrapper.style.overflowY = "scrollable";
  } else {
    $swiperWrapper.style.overflowY = "hidden";
  }
});

const setInitialStateSwiperNavigation = (hash, $navP) => {
  if (hash.includes("#info")) {
    $navP[0].classList.add("selected");
  }
  if (hash.includes("#work")) {
    $navP[1].classList.add("selected");
  }
  if (hash.includes("#about")) {
    $navP[2].classList.add("selected");
  }
};
