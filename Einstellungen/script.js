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
    } else {
        modeToggle.textContent = 'Dark Mode';
    }
});

function changeFontSize() {
    var fontSizeInput = document.getElementById('fontSize');
    var fontSize = parseInt(fontSizeInput.value, 10);
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
