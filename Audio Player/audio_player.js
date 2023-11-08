// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Song1", filePath: "../songs/song1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Song2", filePath: "../songs/song2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Song3", filePath: "../songs/song3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Song4", filePath: "../songs/song4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Song5", filePath: "../songs/song5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Song6", filePath: "../songs/song6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Song7", filePath: "../songs/song7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Song8", filePath: "../songs/song8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Song9", filePath: "../songs/song9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Song10", filePath: "songs/song10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song11", filePath: "songs/song11.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song12", filePath: "songs/song12.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song13", filePath: "songs/song13.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song14", filePath: "songs/song14.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song15", filePath: "songs/song15.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song16", filePath: "songs/song16.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song17", filePath: "songs/song17.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song18", filePath: "songs/song18.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song19", filePath: "songs/song19.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song20", filePath: "songs/song20.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song21", filePath: "songs/song21.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song22", filePath: "songs/song22.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song23", filePath: "songs/song23.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song24", filePath: "songs/song24.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song25", filePath: "songs/song25.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song26", filePath: "songs/song26.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song27", filePath: "songs/song27.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song28", filePath: "songs/song28.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song29", filePath: "songs/song29.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song30", filePath: "songs/song30.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song31", filePath: "songs/song31.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song32", filePath: "songs/song32.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song33", filePath: "songs/song33.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song34", filePath: "songs/song34.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song35", filePath: "songs/song35.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song36", filePath: "songs/song36.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song37", filePath: "songs/song37.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song38", filePath: "songs/song38.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song39", filePath: "songs/song39.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song40", filePath: "songs/song40.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song41", filePath: "songs/song41.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song42", filePath: "songs/song42.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song43", filePath: "songs/song43.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song44", filePath: "songs/song44.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song45", filePath: "songs/song45.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song46", filePath: "songs/song46.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song47", filePath: "songs/song47.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song48", filePath: "songs/song48.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song49", filePath: "songs/song49.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song50", filePath: "songs/song50.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
