let textAnzeige = document.getElementById("text").innerHTML;   
let isTyping = false;   //für Animation des Textes
let textArray = [
    "Hi bbg das ist ein test",
    "das ist der zweite test",
    "img",
    "das ist der dritte test",
    "das ist der vierte testttttttttttt tttttttttttttttt tttttttttttttttttttttttt ttttttttttttttttttttttttttttttttttttttttttt",
]
let textStelle = 0;
let bildStelle = 0;

function Spielzug() {
    if (textArray[textStelle] === "img") {
       nextBild();
    } else {
        nextText();
        textStelle++;
    }

    if (textStelle >= textArray.length){
        console.log("ende von text")
        
    }
}

function nextBild (){
    document.body.style.backgroundImage = "url('picture1/img" + bildStelle + ".jpg')";
        bildStelle++;
        textStelle++;
        console.log(bildStelle + "Bild changing success");
        Spielzug();
}

    function nextText() {
        document.getElementById("text").innerHTML = "";
        let text = textArray[textStelle];
        let i = 0;
        isTyping = true;

       function smoothTextAnzeige(){
       if (i < text.length && isTyping) {
            document.getElementById("text").innerHTML += text.charAt(i);
            setTimeout(smoothTextAnzeige, 70);
            i++;
        } else {
            isTyping = false;
        }
    }

       smoothTextAnzeige();
       
    }
    


onkeydown = function (event) {
    if (event.code === "Space") {
        if(isTyping){
            document.getElementById("text").innerHTML = textArray[textStelle - 1];
            isTyping = false;
        } else {
            Spielzug();
        }
    }
}


if (localStorage.getItem("dark-mode") === "true") {                 //Settet den Darkmode und Fontsize beim Start, auch ohne localStorage change
    console.log("darkmode");
    var element = document.body;
    element.classList.add("dark-mode");
    document.getElementById("text-container").classList.add("dark-mode");
} else {
    console.log("hellmode");
    var element = document.body;                
    element.classList.remove("dark-mode");
    document.getElementById("text-container").classList.remove("dark-mode");
}

let fontSize = localStorage.getItem('fontSize');            //Fontsize Einstellen beim Start
document.getElementById("text-container").style.fontSize = fontSize + "px";



window.addEventListener('storage', (event) => {     //wird direkt ausgeführt wenn sich der Localstorage ändert
    if ( event.key == "fontSize") {                 //Fontsize Einstellen mit Localstorage

        let fontSize = localStorage.getItem('fontSize');
        if (fontSize) {
            document.getElementById("text-container").style.fontSize = fontSize + "px";         
        }

    }

    if (event.key == "dark-mode") {                 //Für Darkmode Einstellungen
        if (localStorage.getItem("dark-mode") === "true") {
            console.log("darkmode");
            var element = document.body;
            element.classList.add("dark-mode");
            document.getElementById("text-container").classList.add("dark-mode");
        } else {
            console.log("hellmode");
            var element = document.body;
            element.classList.remove("dark-mode");
            document.getElementById("text-container").classList.remove("dark-mode");
        }
    }
})

