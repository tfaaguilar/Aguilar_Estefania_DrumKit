// drum kit: press a key to play the sound. use JavaScript to retrieve the data-key attribute and then use that as a selector to find the matching audio file and play it!
console.log('music player script file');
let allDivs = document.querySelectorAll('.key');

//Listen for keyboard events happening in the browser window
window.addEventListener('keyup', findMatchingAudio);

function findMatchingAudio(event) {
    //debugger
    // try to find the matching audio element using the KeyCode that we get from the event object
    let targetAudio = document.querySelector(`audio[data-key="${event.KeyCode}"]`),
        targetDiv = document.querySelector(`div[data-key="${event.KeyCode}"]`),
        allKeys = document.querySelector('.key');

    // the operator ! checks for a negative condition (it's the NOT operator element to play

    if (!targetAudio) {return; } // no point in running if theres no audio element to play
    targetAudio.currenTime = 0;
    targetAudio.play();

    targetDiv.classList.add('playing');
}

function resetKey() { this.classList.remove('playing');}

allKeys.forEach(key => key.addEventListener('transitionend', resetKey));



    

