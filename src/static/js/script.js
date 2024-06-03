document.addEventListener("DOMContentLoaded", function () {
  feather.replace(); // Replace feather icons

  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const heroSection = document.getElementById("mainSection");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden"); // Toggle hidden class

    // Shift hero section when menu is opened
    if (!mobileMenu.classList.contains("hidden")) {
      heroSection.style.transition = "transform 300ms ease-in-out";
      heroSection.style.transform = `translateY(${mobileMenu.offsetHeight}px)`;
      heroSection.style.marginTop = `-${mobileMenu.offsetHeight / 1}px`; // Atur nilai sesuai kebutuhan
    } else {
      heroSection.style.transition = "transform 300ms ease-in-out";
      heroSection.style.transform = "translateY(0)";
      heroSection.style.marginTop = "0";
    }
  });
});
