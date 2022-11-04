
let swiper = new Swiper(".swiper.mySwiper", {
  // Optional parameters
  speed: 300,
  direction: "horizontal",
  loop: false,

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    clickable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  hashNavigation: {
    watchState: true,
  },
});

