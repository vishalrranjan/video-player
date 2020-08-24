const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timeStamp = document.getElementById('timestamp');

// play and pause video
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    } else{
        video.pause();
    }
}

// update play/pause icon
function updateIcon(){
    const playPauseTitle = document.createAttribute('title');
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
        playPauseTitle.value = 'Play';
        play.setAttributeNode(playPauseTitle);
    } else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
        playPauseTitle.value = 'Pause';
        play.setAttributeNode(playPauseTitle);
    }
}

// update progress and timestamp
function updateProgress(){
    progress.value = (video.currentTime / video.duration)*100;

    let minutes = Math.floor(video.currentTime / 60);
    if(minutes < 10){
        minutes = '0' + String(minutes);
    }
    
    let seconds = Math.floor(video.currentTime % 60);
    if(seconds < 10){
        seconds = '0' + String(seconds);
    }

    timeStamp.innerHTML = `${minutes}:${seconds}`;

}

// set video time to progress
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100;
}

// stop video
function stopvideo(){
    video.currentTime=0;
    video.pause();
}



// event listeners on video tag
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopvideo);
progress.addEventListener('change', setVideoProgress);