// <<Music Player Code>>

//<Play/Pause Button Code>

const player = document.getElementById("player");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

function playAudio() {
  player.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function pauseAudio() {
  player.pause();
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
}

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);

//<Play/Pause Button Code (end)>

//<Song Selector Code>

document.addEventListener("DOMContentLoaded", () => {
  const selectBtn = document.getElementById("selectBtn");
  const popup = document.getElementById("popup");
  const songList = document.getElementById("songList");
  const player = document.getElementById("player");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const songsPerPage = 3;
  let currentPage = 0;

  // Fetch songs from JSON file
  fetch("assets/songs.json")
    .then((response) => response.json())
    .then((data) => {
      songs = data;
      displaySongs();
    })
    .catch((error) => console.error("Error loading song data:", error));

  selectBtn.onclick = () => {
    popup.classList.toggle("hidden");
    displaySongs();
  };

  // Function to display the current page of songs
  function displaySongs() {
    songList.innerHTML = "";

    const startIndex = currentPage * songsPerPage;
    const endIndex = Math.min(startIndex + songsPerPage, songs.length);
    const visibleSongs = songs.slice(startIndex, endIndex);

    visibleSongs.forEach((song) => {
      const listItem = document.createElement("li");
      listItem.className =
        "p-2 cursor-pointer hover:bg-gray-200 text-lg font-semibold";
      listItem.textContent = `${song.name} by ${song.artist}`;
      listItem.onclick = () => {
        player.src = song.url;
        popup.classList.add("hidden");
      };
      songList.appendChild(listItem);
    });
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = endIndex >= songs.length;
  }
  prevBtn.onclick = () => {
    if (currentPage > 0) {
      currentPage--;
      displaySongs();
    }
  };
  nextBtn.onclick = () => {
    if ((currentPage + 1) * songsPerPage < songs.length) {
      currentPage++;
      displaySongs();
    }
  };

  // Hide the popup if clicking outside of it
  document.addEventListener("click", (e) => {
    if (!popup.contains(e.target) && e.target !== selectBtn) {
      popup.classList.add("hidden");
    }
  });
});
//<Song Selector Code (end)>

// <<Music Player Code (end)>>

// Img Changer Code

const rightImg = document.getElementById("rightImg");
const leftImg = document.getElementById("leftImg");
const midSun = document.getElementById("midSun");
player.addEventListener("play", () => {
  if (
    player.src ===
    "https://ia902805.us.archive.org/34/items/musicforanon/El%20Huervo%20-%20Daisuke.mp3"
  ) {
    rightImg.src = "assets/gundamHead.png";
    leftImg.src = "assets/gundamHeadMir.png";
    midSun.className = "blueSun -z-50";
  }
});

// Img Changer Code

//Star Generator Code
function generateStars() {
  const numStars = 120; // Adjust as needed
  let boxShadow = "";

  for (let i = 0; i < numStars; i++) {
    const xPos = Math.random() * 100; // Random x position in viewport width
    const yPos = Math.random() * 100; // Random y position in viewport height
    const blurSize = Math.random() * 2; // Random blur size
    const spreadSize = Math.random() * 2; // Random spread size

    boxShadow += `${xPos}vw ${yPos}vh ${blurSize}px ${spreadSize}px white, `;
  }

  // Remove the trailing comma and space
  boxShadow = boxShadow.slice(0, -2);

  // Apply the box-shadow to the .stars element
  document.documentElement.style.setProperty("--stars-box-shadow", boxShadow);
}

// Generate stars on page load
window.onload = generateStars();

//Star Generator Code (end)

//Info Modal Code

document.addEventListener("DOMContentLoaded", () => {
  const infoModal = document.getElementById("infoModal");
  const closeModal = document.getElementById("closeModal");

  // Show the modal when the site loads
  infoModal.classList.remove("hidden");

  // Close the modal when the close button is clicked
  closeModal.onclick = () => {
    infoModal.classList.add("hidden");
  };
});

//Info Modal Code (end)

// Screen Tear

// Screen Tear (end)
