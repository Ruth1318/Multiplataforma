const songs = [
    { title: 'Rosa pastel', artist: 'Belanova', src: 'music/Belanova - Rosa Pastel.mp3', cover: 'img/rosaPastel.jpg' },
    { title: 'Corre', artist: 'Jesy&joy', src: 'music/Corre!.mp3', cover: 'img/corre.jpg' },
    { title: 'El chico del apartamento 512', artist: 'Selena Quitanilla', src: 'music/El Chico Del Apartamento 512.mp3', cover: 'img/apartamento.jpg' },
    { title: 'Me Voy', artist: 'Julieta Venegas', src: 'music/Julieta Venegas - Me Voy (Video Stereo).mp3', cover: 'img/meVoy.jpg' },
    { title: 'Tu falta de querer', artist: 'no me acuerdo xd', src: 'music/Tu Falta De Querer.mp3', cover: 'img/flataDeQuerer.jpg' }

];

let currentSongIndex = 0;
let isPlaying = false;
let audio;

function playCurrentSong() {
    if (audio) {
        audio.stop();
    }


    audio = new Howl({
        src: [songs[currentSongIndex].src],
        autoplay: isPlaying,
        volume: volumeSlider.value,
        onend: function () {
            playNextSongs();
        }
    });
    updateSongInfo();
}



const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const volumeSlider = document.getElementById('volume');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const albumCover = document.querySelector('.card-img-top');


playButton.addEventListener('click',()=>{
    isPlaying = true;
    playCurrentSong();
});

pauseButton.addEventListener('click',()=>{
    isPlaying = false;
    audio.pause();
});

nextButton.addEventListener('click',()=>{
    playNextSongs();
});

prevButton.addEventListener('click',()=>{
   if (audio.seek()>5) {
    audio.seek(0);
   }else{
    currentSongIndex=(currentSongIndex-1+songs.length)%songs.length;
    playCurrentSong();
   }
});


volumeSlider.addEventListener('input',()=>{
    audio.volume(volumeSlider.value)
});

function updateSongInfo() {
    songTitle.textContent=songs[currentSongIndex].title;
    songArtist.textContent=songs[currentSongIndex].artist;
    albumCover.src=songs[currentSongIndex].cover;
}

function playNextSongs() {
    currentSongIndex=(currentSongIndex+1)%songs.length;
    playCurrentSong();
}

playCurrentSong();


