'use strict';

(function () {
  svg4everybody();

  objectFitImages();

  AOS.init({
    disable: function () {
      var maxWidth = 1024;
      return window.innerWidth < maxWidth;
    }
  });
})();

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

'use strict';

(function () {
  $(function () { objectFitImages() });
})();


'use strict';


//   var video = document.querySelector(".video__element");
//   var btn = document.getElementById("play");


//   if (video) {

//     btn.addEventListener('click', function videoPlay() {
//       var paused = video.paused;
//       var playBtn = video.play();
//       var pauseBtn = video.pause();

//       if (paused) {
//         video.play();
//         btn.innerHTML = "Pause";
//         btn.classList.add('video-play')
//       } else {
//         video.pause();
//         btn.innerHTML = "Play";
//         btn.classList.remove('video-play')
//       }
//     });
//   }
(function () {

  var btn = $('#top-button');

  $(window).scroll(function () {
    btn.removeClass('show');

    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

})();



// 'use strict';

// (function () {
//   var anchors = [];
//   var currentAnchor = -1;
//   var isAnimating = false;

//   $(function () {

//     function updateAnchors() {
//       anchors = [];
//       $('.fullpage-js').each(function (i, element) {
//         anchors.push($(element).offset().top);
//       });
//     }

//     $('body').on('mousewheel', function (e) {
//       e.preventDefault();
//       e.stopPropagation();
//       if (isAnimating) {
//         return false;
//       }
//       isAnimating = true;
//       // Increase or reset current anchor
//       if (e.originalEvent.wheelDelta >= 0) {
//         currentAnchor--;
//       } else {
//         currentAnchor++;
//       }
//       if (currentAnchor > (anchors.length - 1)
//         || currentAnchor < 0) {
//         currentAnchor = 0;
//       }
//       isAnimating = true;
//       $('html, body').animate({
//         scrollTop: parseInt(anchors[currentAnchor])
//       }, 500, 'swing', function () {
//         isAnimating = false;
//       });
//     });

//     updateAnchors();

//   });
// })();


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
