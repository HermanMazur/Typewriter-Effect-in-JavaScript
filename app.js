const textDisplay = document.getElementById('text');
const phrases = ['Hello.', 'I am Herman.', 'Bye.'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;

function loop() {
    textDisplay.innerHTML = currentPhrase.join('');

    if (i < phrases.length) {
        // console.log(phrases[i])

        if (!isDeleting && j <= phrases[i].length) {
            // console.log(phrases[i][j])
            currentPhrase.push(phrases[i] [j])
            j += 1;
            console.log('add a letter', j)
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j -= 1;
            console.log('remove a letter', j)
        }

        if (j == phrases[i].length) {
            // i  += 1;
            isDeleting = true;   
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i += 1;
        }
    }

    setTimeout(loop, 300)
}

loop();