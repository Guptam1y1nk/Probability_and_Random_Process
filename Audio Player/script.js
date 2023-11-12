console.log("Welcome to Sur Sarang");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Hum Honge Kamyab By Mayank", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg" },
    {songName: "Jaane Kyun By Ved and Yash", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg" },
    {songName: "Neela Neela Amber By Dushyant and Snehil", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    {songName: "Telegu Song11", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Ganesh Vandana By ", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Chhath Puja Song By Aman and Jay", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Saraswati Vandana By Ved and Tanmay", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Teri Mitti By Dhruv and Sameer", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg"},
    {songName: "Sham By Dushyant", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Khaab By Sammer", filePath: "songs/10.mp3", coverPath: "covers/10.jpeg"},
    {songName: "Bhrart's song", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Phir Bhi Tumko Chaahunga By Sujal", filePath: "songs/12.mp3", coverPath: "covers/16.jpeg"},
    {songName: "Ajay's Song", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Aankhein Khuli By Dhruv", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Chhi-Chha Ledar By Jay", filePath: "songs/15.mp3", coverPath: "covers/15.jpeg"},
    {songName: "Raabta By Aryan", filePath: "songs/16.mp3", coverPath: "covers/16.jpeg"},
    {songName: "Pehla Nasha By Ved", filePath: "songs/17.mp3", coverPath: "covers/17.jpeg"},
    {songName: "Telegu Song10", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {songName: "Satvik's Song", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    {songName: "Shayarana By Anupama", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
    {songName: "Tum Hi Ho By Aman", filePath: "songs/21.mp3", coverPath: "covers/16.jpeg"},
    {songName: "Main Agar Kahoon By Tanmay", filePath: "songs/22.mp3", coverPath: "covers/22.jpg"},
    {songName: "Kartikeya's Song", filePath: "songs/23.mp3", coverPath: "covers/23.jpg"},
    {songName: "Waalian By Gagan", filePath: "songs/24.mp3", coverPath: "covers/24.jpeg"},
    {songName: "Why This Kolabry Di By Sarvesh", filePath: "songs/25.mp3", coverPath: "covers/25.jpg"},
    {songName: "Tum Sath ho By Sayyam", filePath: "songs/26.mp3", coverPath: "covers/16.jpeg"},
    {songName: "Pashmina By Anek", filePath: "songs/27.mp3", coverPath: "covers/26.jpeg"},
    {songName: "Telegu Song9", filePath: "songs/28.mp3", coverPath: "covers/28.jpg"},
    {songName: "Khalasi By Rusna", filePath: "songs/29.mp3", coverPath: "covers/29.jpeg"},
    {songName: "Give Me Some Sunshine By Devansh", filePath: "songs/30.mp3", coverPath: "covers/30.jpeg"},
    {songName: "Telegu Song8", filePath: "songs/31.mp3", coverPath: "covers/31.jpeg"},
    {songName: "Prayer", filePath: "songs/32.mp3", coverPath: "covers/32.jpeg"},
    {songName: "Zalima By Chaithanya", filePath: "songs/33.mp3", coverPath: "covers/16.jpeg"},
    {songName: "Telegu Song7", filePath: "songs/34.mp3", coverPath: "covers/33.jpeg"},
    {songName: "Telegu Song6 ", filePath: "songs/35.mp3", coverPath: "covers/35.jpeg"},
    {songName: "Bande hai hum uske ", filePath: "songs/36.mp3", coverPath: "covers/36.jpeg"},
    {songName: "Parvesh's Song", filePath: "songs/37.mp3", coverPath: "covers/37.jpg"},
    {songName: "Telegu Song5", filePath: "songs/38.mp3", coverPath: "covers/38.jpg"},
    {songName: "Telegu Song4", filePath: "songs/39.mp3", coverPath: "covers/39.jpg"},
    {songName: "Pasori By Siri", filePath: "songs/40.mp3", coverPath: "covers/40.jpg"},
    {songName: "Deh Shiva By Rajiv", filePath: "songs/41.mp3", coverPath: "covers/41.jpg"},
    {songName: "Telegu Song3", filePath: "songs/42.mp3", coverPath: "covers/42.jpg"},
    {songName: "Dil Dhadakne Do By Yash", filePath: "songs/43.mp3", coverPath: "covers/43.jpg"},
    {songName: "Pal By ", filePath: "songs/44.mp3", coverPath: "covers/44.jpg"},
    {songName: "Khuda Jaane By Yogitha", filePath: "songs/45.mp3", coverPath: "covers/45.jpg"},
    {songName: "Telegu Song2", filePath: "songs/46.mp3", coverPath: "covers/46.jpg"},
    {songName: "Telegu Song1", filePath: "songs/47.mp3", coverPath: "covers/47.jpg"},
    {songName: "Group Song", filePath: "songs/48.mp3", coverPath: "covers/48.jpg"},
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Call the shuffleArray function on the songs array to shuffle it initially
shuffleArray(songs);

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

// Add event listener for the shuffle button
document.getElementById('shuffle').addEventListener('click', () => {
    // Shuffle the songs array
    shuffleArray(songs);

    // Reset the songIndex to 0
    songIndex = 0;

    // Update the audioElement source with the first song in the shuffled array
    audioElement.src = songs[songIndex].filePath;

    // Update masterSongName
    masterSongName.innerText = songs[songIndex].songName;

    // Reset the play button
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');

    // Update the song items in the UI
    songItems.forEach((element, i) => {
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    });
});

// Add event listener for the original order button
document.getElementById('originalOrder').addEventListener('click', () => {
    // Sort the songs array back to its original order
    songs.sort((a, b) => a.songName.localeCompare(b.songName));

    // Reset the songIndex to 0
    songIndex = 0;

    // Update the audioElement source with the first song in the original array
    audioElement.src = songs[songIndex].filePath;

    // Update masterSongName
    masterSongName.innerText = songs[songIndex].songName;

    // Reset the play button
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');

    // Update the song items in the UI
    songItems.forEach((element, i) => {
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    });
});

