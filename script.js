var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  dots: false,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
