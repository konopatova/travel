'use strict';

(function () {

  var landingSlider = document.querySelector('.swiper-container--intro');
  if (landingSlider) {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      cssWidthAndHeight: "width",

      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev"
      // }
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }
})();
