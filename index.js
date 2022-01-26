const birdsBlock = document.querySelector('ul');
const birds = birdsBlock.querySelectorAll('.bird');
const img = document.querySelector('img');
const btnPlay = document.querySelector('.btn-play');

const audio = new Audio();
audio.src = './assets/audio/solovey.mp3';
let isPlay = false;

function playAudio(ev) {

    const targetClass = ev.target.classList;

    if (targetClass.contains('bird')) {

        btnPlay.classList.toggle('paused');

        changeBtn(ev);
        changeImg(ev);

        const birdName = ev.target.dataset.birdName;
        audio.src = `./assets/audio/${birdName}.mp3`;
        audio.currentTime = 0;
        pausePlay();
    }
}

const pausePlay = () => {
    if (!isPlay) {
        audio.play();
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false;
    }
}

const changeBtn = (ev) => {
    const checkClass = ev.target.classList;

    if(!checkClass.contains('checked') && isPlay) {
        audio.pause();
        isPlay = false;
    }

    if (checkClass.contains('checked')) {
        checkClass.remove('checked');
    } else {
        birds.forEach((bird) => {
            bird.classList.remove('checked');
        });
        checkClass.add('checked');
    }
}

const changeImg = (ev) => {
    const birdImg = ev.target.dataset.birdName;
  img.src = `./assets/img/${birdImg}.jpg`;
}

const mainPlayBtn = () => {
  btnPlay.classList.toggle('paused');
  pausePlay();
}



birdsBlock.addEventListener('click', playAudio);
btnPlay.addEventListener('click', mainPlayBtn);