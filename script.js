const title = document.getElementById("title");
const play = document.querySelector(".icon-play-sign");
const prev = document.querySelector(".icon-fast-backward");
const next = document.querySelector(".icon-fast-forward");
const audio = document.getElementById("audio");
const img = document.getElementById("img");

let isPlaying = false;
const playMusic = () => {
    isPlaying = true;
    audio.play();
    play.classList.replace("icon-play-sign", "icon-pause");
    img.classList.add("ani");
};

const songs = [
    {
        name: "m1",
        title: "Alon Walker",
    },
    {
        name: "m2",
        title: "Calm Music",
    },
    {
        name: "m3",
        title: "Best Music",
    },
];
const stopMusic = () => {
    isPlaying = false;
    audio.pause();
    play.classList.replace("icon-pause", "icon-play-sign");
    img.classList.remove("ani");
};

play.addEventListener("click", () => {
    if (isPlaying) {
        stopMusic();
    } else {
        playMusic();
    }
});

const loadSongs = (songs) => {
    title.textContent = songs.title;
    audio.src = "./Music/" + songs.name + ".mp3";
    img.src = "./img/" + songs.name + ".jpg";
}

songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);