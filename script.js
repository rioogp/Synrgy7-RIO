$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".slick-prev").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });

  $(".slick-next").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });
});
