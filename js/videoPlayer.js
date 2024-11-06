document.addEventListener("DOMContentLoaded", () => {
    const videos = JSON.parse(document.getElementById("videos-data").getAttribute("data-videos"));
    const videoContainer = document.querySelector(".video-container");
    const timerModal = document.getElementById("timerModal");
    const timerDisplay = document.getElementById("timer");
    const skipButton = document.getElementById("skipButton");
    
    let currentIndex = 0;
    let countdown;
  
    function loadVideo(index) {
      const videoData = videos[index];
      if (!videoData) return;
  
      videoContainer.innerHTML = `
        <div class="w-full sm:w-4/5 md:w-3/5 lg:w-1/2">
          <video id="videoPlayer" class="w-full rounded-lg shadow-lg" controls autoplay>
            <source src="/public/videos/${videoData.fileName}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <h2 class="text-lg font-semibold mt-4 text-center">${videoData.title}</h2>
        </div>
      `;
  
      const videoPlayer = document.getElementById("videoPlayer");
  
      videoPlayer.addEventListener("ended", () => {
        showTimer();
      });
    }
  
    function showTimer() {
      let timeLeft = 10;
      timerDisplay.textContent = timeLeft;
      timerModal.classList.remove("hidden");
  
      countdown = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(countdown);
          timerModal.classList.add("hidden");
          playNextVideo();
        }
      }, 1000);
    }
  
    function playNextVideo() {
      currentIndex++;
      if (currentIndex < videos.length) {
        loadVideo(currentIndex);
      } else {
        alert("All videos have been completed!");
      }
    }
  
    skipButton.addEventListener("click", () => {
      clearInterval(countdown);
      timerModal.classList.add("hidden");
      playNextVideo();
    });
  
    loadVideo(currentIndex);
  });
  