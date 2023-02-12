const video = document.querySelector('video');
const btnPlay = document.querySelector('.play-btn');
const btnPlayPause = document.querySelector('.play');
const progressBar = document.querySelector('.progress-bar');
const btnVolume = document.querySelector('.volume');
const progressVolume = document.querySelector('.progress-volume');

function playVideo() {
  if (video.paused === true) {
    btnPlay.style.display = 'none';
    btnPlayPause.classList.add('pause');
    btnPlayPause.classList.remove('play');
    video.play();
  } else {
    btnPlay.style.display = 'block';
    btnPlayPause.classList.remove('pause');
    btnPlayPause.classList.add('play');
    video.pause();
  }
}
btnPlayPause.addEventListener('click', playVideo);

btnPlay.addEventListener('click', playVideo);

video.onloadedmetadata = function () {
  progressBar.max = video.duration;
  progressBar.value = video.currentTime;
};

progressBar.onchange = function () {
  video.currentTime = progressBar.value;
};

setInterval(() => {
  progressBar.value = video.currentTime;
}, 500);

progressVolume.addEventListener('mousemove', (e) => {
  video.volume = e.target.value;
  if (progressVolume.value === '0') {
    btnVolume.classList.add('mute');
    btnVolume.classList.remove('volume');
  } else {
    btnVolume.classList.add('volume');
    btnVolume.classList.remove('mute');
  }
});

btnVolume.addEventListener('click', () => {
  if (progressVolume.value !== '0') {
    btnVolume.classList.add('mute');
    btnVolume.classList.remove('volume');
    video.volume = '0';
    progressVolume.value = '0';
  } else {
    btnVolume.classList.add('volume');
    btnVolume.classList.remove('mute');
    video.volume = '0.5';
    progressVolume.value = '0.5';
  }
});
