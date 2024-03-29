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
  var disableBodyScroll = bodyScrollLock.disableBodyScroll;
  var enableBodyScroll = bodyScrollLock.enableBodyScroll;

  burgerItem.addEventListener('click', function (open) {
    menu.classList.add('header__nav--active');
    disableBodyScroll();
  });
  menuCloseItem.addEventListener('click', function (close) {
    menu.classList.remove('header__nav--active');
    enableBodyScroll();
  });

  if (window.innerWidth <= 767) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener('click', function () {
        menu.classList.remove('header__nav--active');
      });
    }
  }

})();

// Scroll to anchors class .js-scroll minus header height
(function () {

  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector('.header').clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);

  };

  const scrollTo = function () {
    const links = document.querySelectorAll('.js-scroll');
    links.forEach(each => {
      each.addEventListener('click', function () {
        const currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
}());
