$(document).ready(function () {
  $(".header__hamburger").click(function () {

    // Adds class to make position relative from absolute of header.
    $(".header").toggleClass("header__show");

    // Show and hide elements with slide animation.
    $(".header__top").slideToggle();
    $(".header__nav-bar").slideToggle();
    $(".header__cta").slideToggle();
  });
});
