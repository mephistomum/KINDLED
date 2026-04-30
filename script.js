// Load YouTube API
let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

let players = [];

// Create players
function onYouTubeIframeAPIReady() {
  document.querySelectorAll(".video").forEach((iframe, index) => {
    players[index] = new YT.Player(iframe, {
      events: {
        "onReady": () => {}
      }
    });
  });

  setupObserver();
}

// Observe which video is in view
function setupObserver() {
  const options = {
    threshold: 0.7 // play when 70% visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const index = [...document.querySelectorAll(".video-card")].indexOf(entry.target);

      if (entry.isIntersecting) {
        players[index]?.playVideo();
      } else {
        players[index]?.pauseVideo();
      }
    });
  }, options);

  document.querySelectorAll(".video-card").forEach((card) => {
    observer.observe(card);
  });
}

  const hint = document.getElementById("scrollHint");

  let hasScrolled = false;

  // Hide when user scrolls
  window.addEventListener("scroll", () => {
    if (!hasScrolled) {
      hint.classList.add("hide");
      hasScrolled = true;
    }
  });

  // Auto hide after 4 seconds (if user doesn't scroll)
  setTimeout(() => {
    hint.classList.add("hide");
  }, 4000);
