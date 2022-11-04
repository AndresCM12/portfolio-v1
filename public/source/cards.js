const $cardscanner = document.querySelector("div.work-card.scanner");
const $cardnews = document.querySelector("div.work-card.news");
const $cardMichi = document.querySelector("div.work-card.cat");
const $cardMovies = document.querySelector("div.work-card.movies");
const $cardRickAndMorty = document.querySelector("div.work-card.rickandmorty");

$cardMichi.addEventListener("click", () => {
  location.href = "https://petcat-api.web.app";
});
$cardMovies.addEventListener("click", () => {
  location.href = "https://movies-prueba-api.web.app";
});
$cardRickAndMorty.addEventListener("click", () => {
  location.href = "https://rickandmorty-api-app.web.app";
});
$cardnews.addEventListener("click", () => {
});
$cardscanner.addEventListener("click", () => {
});
