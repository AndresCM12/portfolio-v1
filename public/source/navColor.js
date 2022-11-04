let setState = 0;
let $swiper;

export function navColor(setterCurrentNavigation) {
  $swiper = document.querySelector(".swiper-wrapper");
  const $navP = document.querySelectorAll("nav p");

  let hash = location.hash;

  if (hash.includes("#info")) {
    $swiper.style.height = "850px";
    scrollYTo(570);
    setState = 0;

    $navP[0].classList.add("selected");

    $navP[1].classList.remove("selected");
    $navP[2].classList.remove("selected");

  }

  if (hash.includes("#work")) {
    $swiper.style.height = "fit-content";
    scrollYTo(570);
    setState = 1;

    $navP[1].classList.add("selected");

    $navP[0].classList.remove("selected");
    $navP[2].classList.remove("selected");


  }

  if (hash.includes("#about")) {
    $swiper.style.height = "1200px";
    scrollYTo(570);
    setState = 2;

    $navP[2].classList.add("selected");

    $navP[0].classList.remove("selected");
    $navP[1].classList.remove("selected");


  }

  return setterCurrentNavigation(setState);
}

const scrollYTo = (y) => window.scrollTo(0, y);
