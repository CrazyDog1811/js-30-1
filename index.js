const birdsBlock = document.querySelector('ul');
const birds = birdsBlock.querySelectorAll('.bird');
const audio = new Audio();
let isPlay = false;

function playAudio(ev) {

    const targetClass = ev.target.classList;

    if(!targetClass.contains('checked') && isPlay) {
        audio.pause();
        isPlay = false;
    }

    checkBtn(ev);

    if (ev.target.classList.contains('bird')) {

        const birdName = ev.target.dataset.birdName;
        audio.src = `./assets/audio/${birdName}.mp3`;
        audio.currentTime = 0;
        if (!isPlay) {
            audio.play();
            isPlay = true;
        } else {
            audio.pause();
            isPlay = false;
        }
    }
}

const checkBtn = (ev) => {
    const check = ev.target;
    if (check.classList.contains('checked')) {
        check.classList.remove('checked');
    } else {
        birds.forEach((bird) => {
            bird.classList.remove('checked');
        });
        check.classList.add('checked');
    }
}

birdsBlock.addEventListener('click', playAudio);