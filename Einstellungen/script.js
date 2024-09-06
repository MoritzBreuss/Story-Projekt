document.getElementById('fontSize').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        changeFontSize();
    }
});

const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Light Mode';
        localStorage.setItem("dark-mode", "true")
    } else {
        modeToggle.textContent = 'Dark Mode';
        localStorage.setItem("dark-mode", "false")
    }
});

function changeMusicVolume(){
    let givenMusicVolume = document.getElementById('musicVolumeGiven').value;
    if(givenMusicVolume < 0 || givenMusicVolume > 100 || !givenMusicVolume){
        alert('Please enter a value between 1 and 100.');
        return;
    }
    localStorage.setItem("musicVolume", givenMusicVolume)
    console.log(localStorage.getItem("musicVolume") + "set")
}

function changeWritingSpeed(){
    let givenWrtitingSpeed = document.getElementById('writingSpeedGiven').value;
    if(givenWrtitingSpeed < 1 || givenWrtitingSpeed > 100 || !givenWrtitingSpeed){
        alert('Please enter a value between 1 and 100.');
        return;
    }
    localStorage.setItem("writingSpeed", givenWrtitingSpeed)
    console.log(localStorage.getItem("writingSpeed") + "set")
}
function changeFontSize() {
    var fontSizeInput = document.getElementById('fontSize');
    var fontSize = parseInt(fontSizeInput.value, 10);
    localStorage.setItem('fontSize', fontSize);
    var elements = document.getElementsByClassName('text');
    var minFontSize = parseInt(fontSizeInput.min, 10);
    var maxFontSize = parseInt(fontSizeInput.max, 10);

    if (isNaN(fontSize)) {
        alert('Please enter a number.');
        return;
    }

    if (fontSize < minFontSize || fontSize > maxFontSize) {
        alert(`Please enter a value between ${minFontSize} and ${maxFontSize}.`);
        return;
    }

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = fontSize + 'px';
    }
}
