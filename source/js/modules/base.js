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
