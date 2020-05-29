// Grab all player elements
const player = document.querySelector('.player');
const display = player.querySelector('.viewer');
const progressBar = player.querySelector('.progress');
const progress = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip');
const ranges = player.querySelectorAll('.player__slider');

// Create handlers
function togglePlay() {
  const method = display.paused ? 'play' : 'pause';
  display[method]();
}

function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip(){
  const skipAmount = parseInt(this.dataset.skip);
  display.currentTime += skipAmount;

}

function handleRangeUpdate(){
  display[this.name] = this.value;

}

function handleProgress(){
  const percent = (display.currentTime / display.duration) * 100;
  progress.style.flexBasis = `${percent}%`;
}

function scrub(e){
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * display.duration;
  display.currentTime = scrubTime;
}

// Hook up handler functions with listeners
display.addEventListener('click', togglePlay);
display.addEventListener('play', updateButton);
display.addEventListener('pause', updateButton);
display.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
progressBar.addEventListener('click', scrub);
