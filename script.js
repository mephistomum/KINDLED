const videos = document.querySelectorAll(".video");

videos.forEach(video => {
  const card = video.parentElement;
  const btn = card.querySelector(".play-btn");

  // Play / Pause on button click
  btn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  // Toggle button visibility
  video.addEventListener("play", () => {
    btn.classList.add("hide");
  });

  video.addEventListener("pause", () => {
    btn.classList.remove("hide");
  });

  // Click video itself to toggle
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});


// Auto play when in view (TikTok style)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;

    if (entry.isIntersecting) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}, { threshold: 0.7 });

videos.forEach(video => observer.observe(video));