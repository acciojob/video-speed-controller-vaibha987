const video = document.querySelector('#player');
const toggle = document.querySelector('#toggle');
const volume = document.querySelector('#volume');
const playbackSpeed = document.querySelector('#playbackSpeed');
const rewind = document.querySelector('#rewind');
const forward = document.querySelector('#forward');
const progress = document.querySelector('.progress__filled');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.flexBasis = `${percent}%`;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
rewind.addEventListener('click', skip);
forward.addEventListener('click', skip);

volume.addEventListener('change', handleRangeUpdate);
playbackSpeed.addEventListener('change', handleRangeUpdate);