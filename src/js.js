function pingPongVideo() {
  const video = document.getElementById("backgroundVideo");
  let reverse = false;

  // garante que o vídeo começou a carregar
  video.addEventListener("loadedmetadata", () => {
    video.play(); // força o play (resolve alguns bloqueios)
  });

  video.addEventListener("timeupdate", () => {
    if (!reverse && video.currentTime >= video.duration - 0.1) reverse = true;
    if (reverse && video.currentTime <= 0.1) reverse = false;
    if (reverse) video.currentTime -= 0.03;
  });
}

pingPongVideo();
