console.log("Welcome to Spotify");
let songIndex = 0
let audioElement = new Audio('songs/om ॐ नम शवय सचत परपर फल सनग गग धर शव Sachet Parampara Shiv Ji Song [TubeRipper.com]');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('singItem'));
// audioElement.play();
let songs = [
    {songName: "Om NAmah Sivay", filePath:"songs/om ॐ नम शवय सचत परपर फल सनग गग धर शव Sachet Parampara Shiv Ji Song [TubeRipper.com].mp3", coverPath:"covers/om_namah_sivaya.jpg"},
    {songName: "Hua Hain Ajj Pehli Bar", filePath:"songs/Hua Hain Aaj Pehli Baar Song (Lyrics) Armaan Malik Palak Muchhal [TubeRipper.com].mp3", coverPath:"covers/Hua_hain_aaj_pehli_bar.jpg"},
    {songName: "Main Hoon Hero Tera", filePath:"songs/Main Hoon Hero Tera VIDEO Song - Armaan Malik Amaal Mallik Hero T-Series [TubeRipper.com].mp3", coverPath:"covers/Main_hoon_hero_tera.jpg"},
    {songName: "Chale Ana", filePath:"songs/Full Video CHALE AANA De De Pyaar De I Ajay Devgn Tabu Rakul Preet l Armaan M Amaal MKunaal V [TubeRipper.com].mp3", coverPath:"covers/Chale-Aana-Lyrics-810x456.jpg"},
    {songName: "Wajah Tum Ho", filePath:"songs/WAJAH TUM HO .mp3", coverPath:"covers/Wajah_tum_ho.jpg"},
]
songItems.forEach((element,i)=> {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});
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
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})
songItems.forEach((element,i)=> {
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('span')[0].innerText = songs[i].songName;
});
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    })
})
