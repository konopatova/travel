'use strict';

(function () {
  // function headerScroll() {
  //   if (document.body.scrollTop > 350) {
  //     header.classList.add('header--active');
  //   }
  // }
  // window.addEventListener('scroll', headerScroll);

  window.addEventListener('scroll', function () {
    var scrolled = window.scrollY;
    var header = document.querySelector(".header");
    scrolled > 30 ? header.classList.add('header--active') : header.classList.remove('header--active')
  })

  console.log(header)

})();
