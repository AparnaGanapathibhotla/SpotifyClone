const songs = [
  {
    title: "Believer",
    artist: "Imagine Dragons",
    file: "1.mp3",
    cover: "cover1.jpeg"
  },
  {
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    file: "2.mp3",
    cover: "cover2.jpeg"
  },
  {
    title: "Kanne Kalaimane",
    artist: "Sid Sriram",
    file: "3.mp3",
    cover: "cover3.jpeg"
  },
  {
    title: "Nazara",
    artist: "Vishal Mishra",
    file: "4.mp3",
    cover: "cover4.jpeg"
  },
  {
    title: "Golden Sparrow",
    artist: "Arivu, Dhanush and Subhlakshmi",
    file: "5.mp3",
    cover: "cover5.jpeg"
  }
];

const playlist = document.getElementById("playlist");
const audio = document.getElementById("audio");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const cover = document.getElementById("cover");
const gifContainer = document.getElementById("gifContainer");
const searchInput = document.getElementById("searchInput");

function displaySongs(filteredSongs) {
  playlist.innerHTML = "";

  if (filteredSongs.length === 0) {
    const noResult = document.createElement("div");
    noResult.textContent = "No songs found.";
    noResult.style.color = "#aaa";
    playlist.appendChild(noResult);
    return;
  }

  filteredSongs.forEach(song => {
    const div = document.createElement("div");
    div.classList.add("song-item");
    div.textContent = `${song.title.toLowerCase()} – ${song.artist}`;
    div.addEventListener("click", () => playSong(song));
    playlist.appendChild(div);
  });
}

function playSong(song) {
  audio.src = song.file;
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  cover.src = song.cover;
  cover.style.display = "block";
  audio.play();
  gifContainer.style.display = "block";
}

audio.addEventListener("pause", () => {
  gifContainer.style.display = "none";
});

audio.addEventListener("ended", () => {
  gifContainer.style.display = "none";
});

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  const filtered = songs.filter(song =>
    song.title.toLowerCase().includes(query) ||
    song.artist.toLowerCase().includes(query)
  );
  displaySongs(filtered);
});

// Initial load
displaySongs(songs);
