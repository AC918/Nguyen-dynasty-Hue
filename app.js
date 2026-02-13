// Mobile menu
const btnMenu = document.getElementById("btnMenu");
const mobileNav = document.getElementById("mobileNav");

btnMenu?.addEventListener("click", () => {
  const isOpen = mobileNav.style.display === "block";
  mobileNav.style.display = isOpen ? "none" : "block";
  btnMenu.setAttribute("aria-expanded", String(!isOpen));
});

// Close mobile nav when clicking a link
mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileNav.style.display = "none";
    btnMenu.setAttribute("aria-expanded", "false");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Swiper slideshow
const swiper = new Swiper("#mainSwiper", {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  effect: "slide",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

// Lightbox gallery
const lightbox = GLightbox({
  selector: ".glightbox",
  touchNavigation: true,
  loop: true
});
