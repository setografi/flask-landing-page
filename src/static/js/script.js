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
      heroSection.style.transform =
        "translateY(" + mobileMenu.clientHeight + "px)";
    } else {
      heroSection.style.transition = "transform 300ms ease-in-out";
      heroSection.style.transform = "translateY(0)";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelectorAll(".card");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;

  function updateSlider() {
    slider.forEach((card, index) => {
      card.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < slider.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });
});
