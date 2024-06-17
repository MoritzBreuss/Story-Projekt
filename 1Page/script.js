let textArray = [
    "Hi bbg das ist ein test",
    "das ist der zweite test",
    "das ist der dritte test",
    "das ist der vierte test",
]
let textStelle = 0;


function nextText() {
    document.getElementById("text").innerHTML = textArray[textStelle];
}




onkeydown = function (event) {
    if (event.code === "Space") {
        nextText();
        textStelle++;   
    }
}