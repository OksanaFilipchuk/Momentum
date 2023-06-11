import playlist from './playlist.js';
const audio = new Audio();
audio.crossOrigin = 'anonymous';
let isPlay = false;
const play = document.querySelector('.play')
const prev = document.querySelector('.play-prev');
const next = document.querySelector('.play-next');
const playlistContainer = document.querySelector('.play-list')
// console.log(playlist);
function playAudio(){
    if(document.querySelector('.item-active')){        
        let currentTrack = [...playlistContainer.children].indexOf(document.querySelector('.item-active'));      
        audio.src = playlist[currentTrack].src; 
    } else {
        audio.src = playlist[0].src;
        playlistContainer.firstChild.classList.add('item-active')
    }  

    audio.currentTime = 0;    
    audio.play();
    isPlay = true;
}
function pauseAudio(){
    audio.pause();
    isPlay = false;
}
function playPause(){
    if(isPlay){
        pauseAudio();
                      
    } else if (!isPlay){
        playAudio();
        isPlay = true;
    }
    play.classList.toggle('pause')

}
playlist.forEach((el, index) => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    playlistContainer.append(li);
    li.textContent = el.title;
    li.addEventListener('click', () => {
        audio.src = playlist[index].src;
        audio.play();
        isPlay = true;
        play.classList.add('pause');        
        if(document.querySelector('.item-active')){
            document.querySelector('.item-active').classList.remove("item-active");
        }
        li.classList.add("item-active")
    });
})

play.addEventListener('click', playPause);
audio.addEventListener("ended", () => {
    let currentTrack = [...playlistContainer.children].indexOf(document.querySelector('.item-active'));
    document.querySelector('.item-active').classList.remove('item-active');
    let trackNumbers = [...playlistContainer.children].length;
    currentTrack ===trackNumbers-1?currentTrack = 0:currentTrack = currentTrack+1;
    audio.src = playlist[currentTrack].src;
    [...playlistContainer.children][currentTrack].classList.add("item-active")
    audio.currentTime = 0;    
    audio.play();
})
prev.addEventListener('click', ()=>{
    if(document.querySelector('.item-active')){
        let currentTrack = [...playlistContainer.children].indexOf(document.querySelector('.item-active'));
        document.querySelector('.item-active').classList.remove('item-active');
        let trackNumbers = [...playlistContainer.children].length;
        currentTrack ===0?currentTrack = trackNumbers-1:currentTrack = currentTrack-1;
        audio.src = playlist[currentTrack].src;
        [...playlistContainer.children][currentTrack].classList.add("item-active")
        audio.currentTime = 0;
    }    
    if(isPlay){    
        audio.play();
    }    
})

next.addEventListener('click', ()=>{
    if(document.querySelector('.item-active')){
        let currentTrack = [...playlistContainer.children].indexOf(document.querySelector('.item-active'));
        document.querySelector('.item-active').classList.remove('item-active');
        let trackNumbers = [...playlistContainer.children].length;
        currentTrack ===trackNumbers-1?currentTrack = 0:currentTrack = currentTrack+1;
        audio.src = playlist[currentTrack].src;
        [...playlistContainer.children][currentTrack].classList.add("item-active")
        audio.currentTime = 0;
    }    
    if(isPlay){    
        audio.play();
    }    
})
