
var backgroundMusic = document.createElement('audio');
var boomSound = document.createElement('audio');

backgroundMusic.src = './audio/background.mp3';
backgroundMusic.loop = true;
backgroundMusic.volume = 0.1;
backgroundMusic.play();
//backgroundMusic.pause();

boomSound.src = './audio/boom.mp3';
boomSound.loop = false;
boomSound.volume = 0.5;
//boomSound.play();
//boomSound.pause();

