let textArray = [
    "Hi bbg das ist ein test",
    "das ist der zweite test",
    "img",
    "das ist der dritte test",
    "das ist der vierte test",
]
let textStelle = 0;
let bildStelle = 0;

function Spielzug() {
    if (ifImg()) {
        // Wenn ein Bild angezeigt wird, überspringe den Text und zeige das Bild an.
        textStelle++;
        setTimeout(Spielzug, 3000); // Nach 3 Sekunden zum nächsten Text wechseln
    } else {
        nextText();
        textStelle++;
    }
}

function ifImg() {
    if (textArray[textStelle] === "img") {
        document.body.style.backgroundImage = "url('picture1/img" + bildStelle + ".jpg')";
        bildStelle++;
        console.log(bildStelle + " success");
        return true;
    }
    return false;
}
    function nextText() {
        document.getElementById("text").innerHTML = textArray[textStelle];
        textStelle++;

    }
    

onkeydown = function (event) {
    if (event.code === "Space") {
        nextText();
        textStelle++;   
    }
}