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

// Hook up handler functions with listeners
display.addEventListener('click', handleVideo);
