document.addEventListener("DOMContentLoaded", function () {

  // Select dropdown icons 
  const icon_dropdown = document.querySelectorAll(".header__dropdown > i");

  // Select header nav bar
  const nav_bar = document.querySelector(".header__nav-bar");

  // Select header cta button
  const header_cta = document.querySelector(".header__cta-btn");

  // Select header
  const header = document.querySelector(".header");

  // Select primary header
  const header_primary = document.querySelector(".header__primary");

  if (nav_bar && icon_dropdown[1]) {
    
    // Handles Secondary Menu display
    icon_dropdown[1].addEventListener("click", function () {
      if (window.getComputedStyle(nav_bar).display === "none") {
        icon_dropdown[1].classList.add("fa-xmark");
        icon_dropdown[1].classList.remove("fa-bars");
        header.style.position = "relative";
        nav_bar.classList.add("active");
        nav_bar.classList.remove("inactive");
        header_cta.classList.add("active");
        header_cta.classList.remove("inactive");
      }
      else {
        icon_dropdown[1].classList.add("fa-bars");
        icon_dropdown[1].classList.remove("fa-xmark");
        header.style.position = "absolute"
        nav_bar.classList.add("inactive");
        nav_bar.classList.remove("active");
        header_cta.classList.add("inactive");
        header_cta.classList.remove("active");
      }
    });

    // Handles primary menu display
    icon_dropdown[0].addEventListener("click", function () {
      if (window.getComputedStyle(header_primary).display === "block") {
        header_primary.classList.add("inactive");
        header_primary.classList.remove("active");
      }
      else {
        header_primary.classList.add("active");
        header_primary.classList.remove("inactive");
      }
    });
  }
});
