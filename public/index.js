document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Find the closest dropdown container
      const dropdown = btn.closest(".dropdown");

      // Toggle the visibility of the dropdown content
      const dropdownContent = dropdown.querySelector(".dropdown-content");
      dropdownContent.classList.toggle("hidden");
    });

    //animate products appearing
    const img = document.querySelector(".animated");
    img.classList.remove("opacity-0", "translate-y-1/4");
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (event) => {
    dropdownBtns.forEach((btn) => {
      if (!btn.contains(event.target)) {
        const dropdown = btn.closest(".dropdown");
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        dropdownContent.classList.add("hidden");
      }
    });
  });

  // Change slides
  const slide1Btn = document.getElementById("slide1Btn");
  const slide2Btn = document.getElementById("slide2Btn");

  const slide1 = document.querySelectorAll(".slide1");
  const slide2 = document.querySelectorAll(".slide2");

  slide1Btn.addEventListener("click", (event) => {
    slide1.forEach((element) => {
      element.classList.remove("hidden");
    });
    slide2.forEach((element) => {
      element.classList.add("hidden");
    });

    document.getElementById("banner").classList.add("bg-hero-banner1");
    document.getElementById("banner").classList.remove("bg-background-pink");
  });

  slide2Btn.addEventListener("click", (event) => {
    slide2.forEach((element) => {
      element.classList.remove("hidden");
    });
    slide1.forEach((element) => {
      element.classList.add("hidden");
    });

    document.getElementById("banner").classList.remove("bg-hero-banner1");
    document.getElementById("banner").classList.add("bg-background-pink");
  });
});

// Cookie

const cookieBox = document.querySelector(".cookie-wrapper"),
  buttons = document.querySelectorAll(".cookieBtn");

const executeCodes = () => {
  if (document.cookie.includes("Kęstutis Kirna")) return;
  cookieBox.classList.add("translate-x-[-859px]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("translate-x-[-859px]");

      if (button.id == "accept") {
        document.cookie =
          "cookieBy= Kęstutis Kirna; max-age=" + 60 * 60 * 24 * 14;
      }
    });
  });
};

window.addEventListener("load", executeCodes);
