'use strict';

(function () {

  var video = document.querySelector(".video__element");
  var btn = document.getElementById("play");


  if (video) {

    btn.addEventListener('click', function videoPlay() {
      var paused = video.paused;
      var playBtn = video.play();
      var pauseBtn = video.pause();

      if (paused) {
        video.play();
        btn.innerHTML = "Pause";
        btn.classList.add('video-play')
      } else {
        video.pause();
        btn.innerHTML = "Play";
        btn.classList.remove('video-play')
      }
    });
  }
})();
