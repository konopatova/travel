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

