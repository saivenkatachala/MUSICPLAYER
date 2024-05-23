const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const nextBtn = document.getElementById('nextBtn');
const songTitle = document.getElementById('songTitle');
const songImage = document.getElementById('songImage'); // Added this line

const songs = [
    { title: 'Rubberu Gajulu Song', source: 'song1.mp3', image: 'song1.jpg' },
    { title: 'Noonoogu Meesalodu Song', source: 'song2.mp3', image: 'song2.jpg' },
    { title: 'O Lammi Thikkareginda song', source: 'song3.mp3', image: 'song3.jpg' },
    { title: 'Nuv Muttukunte song', source: 'song4.mp3', image: 'song4.jpg' },
    { title: 'Srikarakarunda song', source: 'song5.mp3', image: 'song5.jpg' },
    { title: 'Chala Challaga Gali song', source: 'song6.mp3', image: 'song6.jpg' },
    { title: 'Young Yama song', source: 'song7.mp3', image: 'song7.jpg' },
];

let currentSongIndex = 0;

function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.source;
    songTitle.textContent = song.title;
    songImage.src = song.image; // Set the image source based on the current song
}

function playSong() {
    audioPlayer.play();
}

function pauseSong() {
    audioPlayer.pause();
}

function stopSong() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    if (!audioPlayer.paused) {
        audioPlayer.play();
    }
}

loadSong(currentSongIndex);

playBtn.addEventListener('click', playSong);
pauseBtn.addEventListener('click', pauseSong);
stopBtn.addEventListener('click', stopSong);
nextBtn.addEventListener('click', nextSong);

audioPlayer.addEventListener('ended', () => {
    nextSong();
});
