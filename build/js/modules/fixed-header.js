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

})();


(function () {

  var burgerItem = document.querySelector('.burger');
  var menu = document.querySelector('.header__nav');
  var menuCloseItem = document.querySelector('.header__nav-close');
  var menuLinks = document.querySelectorAll('.header__link');

  burgerItem.addEventListener('click', function (open) {
    menu.classList.add('header__nav--active');
  });
  menuCloseItem.addEventListener('click', function (close) {
    menu.classList.remove('header__nav--active');
  });

  if (window.innerWidth <= 767) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener('click', function () {
        menu.classList.remove('header__nav--active');
      });
    }
  }

})();
