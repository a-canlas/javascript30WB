// Grab all player elements
const player = document.querySelector('.player');
const display = player.querySelector('.viewer');
const controls = player.querySelector('.player__controls');
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

// Hook up handler functions with listeners
display.addEventListener('click', togglePlay);
