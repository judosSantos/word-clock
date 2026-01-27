function pingPongVideo() {
  const video = document.getElementById("backgroundVideo");
  let reverse = false;

  video.addEventListener("timeupdate", () => {
    if (!reverse && video.currentTime >= video.duration - 0.1) {
      reverse = true;
    }
    if (reverse && video.currentTime <= 0.1) {
      reverse = false;
    }
    if (reverse) {
      video.currentTime -= 0.03; // velocidade de volta
    }
  });
}
pingPongVideo();
