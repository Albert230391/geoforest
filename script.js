let slideIndex = 0;
showHeroSlides();

function showHeroSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("fade");

  setTimeout(showHeroSlides, 5000); // 5-second interval for slides
}

// Portfolio Slideshow Functionality
document
  .querySelectorAll(".portfolio-slideshow-container")
  .forEach((container) => {
    let portfolioSlideIndex = 0;
    showPortfolioSlides(container, portfolioSlideIndex);

    function showPortfolioSlides(container, slideIndex) {
      let slides = container.getElementsByClassName("portfolio-slide");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      portfolioSlideIndex++;
      if (portfolioSlideIndex > slides.length) {
        portfolioSlideIndex = 1;
      }

      slides[portfolioSlideIndex - 1].style.display = "block";
      slides[portfolioSlideIndex - 1].classList.add("fade");

      setTimeout(
        () => showPortfolioSlides(container, portfolioSlideIndex),
        5000
      );
    }
  });
function toggleMenu() {
  const navMenu = document.querySelector("nav ul");
  navMenu.classList.toggle("show");
}
