const textDisplay = document.getElementById('text');
const phrases = ['Hello, my name is Herman.', 'I love to code.', 'I love to teach.'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    textDisplay.innerHTML = currentPhrase.join('');

    if (i < phrases.length) {
        
        // ('add a letter', j)
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i] [j])
            j += 1;
            textDisplay.innerHTML = currentPhrase.join('');
        }


        // ('remove a letter', j)
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

