let slideIndex = 0; // Menyimpan indeks slide saat ini
showHeroSlides(); // Menampilkan slide pertama

function showHeroSlides() {
  let i;
  const slides = document.getElementsByClassName("slide"); // Mendapatkan semua elemen dengan class 'slide'

  // Menyembunyikan semua slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Sembunyikan slide
  }

  slideIndex++; // Increment slideIndex
  if (slideIndex > slides.length) {
    slideIndex = 1; // Reset slideIndex jika lebih dari jumlah slide
  }

  slides[slideIndex - 1].style.display = "block"; // Tampilkan slide saat ini
  slides[slideIndex - 1].classList.add("fade"); // Tambahkan efek fade

  setTimeout(showHeroSlides, 5000); // Ulangi setiap 5 detik
}

// Slideshow untuk Portfolio
let portfolioSlides = document.querySelectorAll(
  ".portfolio-slideshow-container"
); // Mendapatkan semua kontainer slideshow portfolio

portfolioSlides.forEach((container) => {
  let portfolioSlideIndex = 0; // Indeks slide untuk setiap kontainer
  showPortfolioSlides(container, portfolioSlideIndex); // Tampilkan slide pertama untuk kontainer ini

  function showPortfolioSlides(container, slideIndex) {
    let slides = container.getElementsByClassName("portfolio-slide"); // Mendapatkan semua slide di kontainer ini

    // Menyembunyikan semua slide
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // Sembunyikan slide
    }

    portfolioSlideIndex++; // Increment slideIndex
    if (portfolioSlideIndex > slides.length) {
      portfolioSlideIndex = 1; // Reset jika lebih dari jumlah slide
    }

    slides[portfolioSlideIndex - 1].style.display = "block"; // Tampilkan slide saat ini
    slides[portfolioSlideIndex - 1].classList.add("fade"); // Tambahkan efek fade

    setTimeout(() => showPortfolioSlides(container, portfolioSlideIndex), 5000); // Ulangi setiap 5 detik
  }
});
