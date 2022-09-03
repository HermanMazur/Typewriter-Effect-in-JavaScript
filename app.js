const textDisplay = document.getElementById('text');
const phrases = ['Hello.', 'I am Herman.', 'Bye.'];
let i = 0;
let j = 0;
let currentPhrase = [];

function loop() {
    textDisplay.innerHTML = currentPhrase.join('');

    if (i < phrases.length) {
        // console.log(phrases[i])

        if (j <= phrases[i].length) {
            // console.log(phrases[i][j])
            currentPhrase.push(phrases[i] [j])
            j += 1;

        }
        if (j == phrases[i].length) {
            i  += 1;
}
    }

    setTimeout(loop, 500)
}

loop();