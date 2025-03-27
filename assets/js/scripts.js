document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".header__hamburger").addEventListener("click", function () {

    // Adds class to make position relative from absolute of header.
    document.querySelector(".header").classList.toggle("header__show");

    // Show and hide elements with slide animation.
    document.querySelector(".header__top").classList.toggle("show");
    document.querySelector(".header__nav-bar").classList.toggle("show");
    document.querySelector(".header__cta").classList.toggle("show");
  });
});
