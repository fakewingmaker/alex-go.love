let videoElement = document.getElementById("video-element");
let videoOverlay = document.getElementById("video-overlay");
let pageContent = document.getElementById("page-content");
let videoPlayed = false;

videoElement.addEventListener("canplay", () => {
  videoElement.style.display = "block";
});

videoOverlay.addEventListener("click", () => {
  if (!videoPlayed) {
    videoElement.play();
    videoPlayed = true;
  } else {
    videoOverlay.style.display = "none";
    pageContent.style.display = "block";
    videoElement.pause();
  }
});
