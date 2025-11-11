// music.js

// Create an audio element
const bgMusic = new Audio("websitemusic.mp3"); // just the file name
bgMusic.loop = true;
bgMusic.volume = 0.3;

// Play music after user interacts (required on most browsers)
function startMusic() {
  bgMusic.play().catch(err => {
    console.log("Music playback prevented by browser:", err);
  });
}

// Optional: start on first click anywhere on the page
document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });

// Optional: add a toggle button
const musicToggle = document.createElement("button");
musicToggle.textContent = "🔊 Music";
musicToggle.style.position = "fixed";
musicToggle.style.bottom = "20px";
musicToggle.style.right = "20px";
musicToggle.style.padding = "8px 12px";
musicToggle.style.borderRadius = "8px";
musicToggle.style.border = "none";
musicToggle.style.cursor = "pointer";
musicToggle.style.background = "#1e90ff";
musicToggle.style.color = "#fff";
document.body.appendChild(musicToggle);

let playing = false;
musicToggle.addEventListener("click", () => {
  if (playing) {
    bgMusic.pause();
    playing = false;
  } else {
    bgMusic.play();
    playing = true;
  }
});
