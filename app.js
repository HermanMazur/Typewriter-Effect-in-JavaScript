// const textDisplay = document.getElementById('text');
// conts phrases = ['Hello, my name is Herman.', 'I love to code.', 'I love to teach.'];

const animationTyped = function ({ el, arr }) {
    const textDisplay = document.getElementById(j
        (el));
    const phrases = arr;
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let isEnd = false;

    function loop() {
    isEnd = false;
    textDisplay.innerHTML = currentPhrase.join('');

    if (i < phrases.length) {
        
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i] [j])
            j += 1;
            textDisplay.innerHTML = currentPhrase.join('');
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j -= 1;
            textDisplay.innerHTML = currentPhrase.join('');
        }

        if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;   
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i += 1;
            if (i == phrases.length) {
                i = 0;
            }
        }


    } 
    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
}

loop();
};

animationTyped({
    el: 'text',
    arr: [
        'Hello, my name is Herman.',
        'I love to code.',
        'I love to teach.'
    ],
    intervalTime: 2000
});
        
animationTyped({
    el: 'text-1',
    arr: [
        'Bye, i was a human.',
        'Why, JS ? Why...?.',
        'Suicide club.'
    ],
    intervalTime: 3000
});

animationTyped({
    el: 'text-2',
    arr: [
        'FUCK!!!'
    ],
    intervalTime: 10000
});