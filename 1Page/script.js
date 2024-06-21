let textAnzeige = document.getElementById("text").innerHTML;   
let isTyping = false;   //für Animation des Textes
let textArray = [
    "Hi bbg das ist ein test",
    "das ist der zweite test",
    "img",
    "das ist der dritte test",
    "das ist der vierte testttttttttttt tttttttttttttttt tttttttttttttttttttttttt ttttttttttttttttttttttttttttttttttttttttttt",
    "opt"
]
let text1A = [
    "Oh... ich dachte nicht das du so nett zu mir seien würdest",
    "Du schaust immer so schlecht drauf aus, was nichts dran ändert das du auch gut Ausschaust",
    "Sehr gut sogar",
    "Ich bin froh das ich dich getroffen habe",
    "Ich hoffe wir können uns noch öfter sehen",
]
let text1B = [
    "Was meine Mutter?",
    "Soll ich dich küssen??!, Soll ich dich küssen??!",
    "Ja pass lieber auf wo du hintrittst",
    "Sonst schieb ich noch meinen Lörres in dein Gesicht",]
let textStelle = 0;
let bildStelle = 0;
let optionenStelle = 0;

function Spielzug() {
    if (textArray[textStelle] === "img") {
       nextBild();
       
    } else if (textArray[textStelle] === "opt") {
       optionenErstellen();

    } else {
        nextText();
        textStelle++;
    }

    if (textStelle >= textArray.length){
        console.log("ende von text")}
}

function nextBild (){
    document.body.style.backgroundImage = "url('picture1/img" + bildStelle + ".jpg')";
        bildStelle++;
        textStelle++;
        console.log(bildStelle + "Bild changing success");
        Spielzug();
}

function optionenErstellen(){       //Hidet den textcontainer und zeigt die Optionen an, je nachdem welche OptionenStelle gerade ist
    console.log("Optionen fuktion gestartet");
    let textContainer = document.getElementById("text-container");
    textContainer.style.display = "none";

    if (optionenStelle === 0) {         //Optionen für die Erste Option              
       let optionenContainer = document.getElementById("optionen-container");
       optionenContainer.innerHTML = `
       <button id="optionA" onclick='optionenHantieren("A")' > ihn</button>
        <button id="optionB" onclick='optionenHantieren("B")' >Spuck im</button>
       `;
    }
}

function optionenHantieren(option) {            //Pusht den Optionen Array in den TextArray entsprechend der Option die bei dem buttononclick übergeben wird. Dann cleared sie den optionen-container und zeigt den Textcontainer wieder an, dann kriegen optionen, textstelle ++ und Spielzug wird aufgerufen
    if (option == "A"){                        
       textArray = textArray.concat(text1A);
        console.log("in den Array erfolgreich eingefügt" + textArray);
    } else if (option == "B"){
       textArray = textArray.concat(text1B);
        console.log("in den Array erfolgreich eingefügt" + textArray);
    }

    document.getElementById("optionen-container").innerHTML = "";
    let textContainer = document.getElementById("text-container");
    textContainer.style.display = "block";
    
    textStelle++;
    optionenStelle++;
    Spielzug();
}


    function nextText() {       //macht isTyping true und fängt an den Text zu schreiben
        document.getElementById("text").innerHTML = "";
        let text = textArray[textStelle];
        let i = 0;
        isTyping = true;

       function smoothTextAnzeige(){ //Funktion für die Animation des Textes, checkes ob Istyping true ist und sobald es fertig ist macht es isTyping false
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
    


onkeydown = function (event) {          //startet Spielzug wenn Space gedrückt wird abhängig davon ob isTyping true ist oder nicht
    if (event.code === "Space") {
        if(isTyping){
            document.getElementById("text").innerHTML = textArray[textStelle - 1];
            isTyping = false;
        } else {
            Spielzug();
        }
    }
}



function changeDarkmode () {
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
}
changeDarkmode();                                           //Darkmode Einstellen beim Start

function changeFontSize() {
    let fontSize = localStorage.getItem('fontSize');
        if (fontSize) {
            document.getElementById("text-container").style.fontSize = fontSize + "px";
            console.log("Fontsize changed");   
        }
}
changeFontSize();                                           //Fontsize Einstellen beim Start


window.addEventListener('storage', (event) => {     //wird direkt ausgeführt wenn sich der Localstorage ändert für Fontsize und Darkmode
    if ( event.key == "fontSize") {                 //Fontsize Einstellen mit Localstorage
      changeFontSize();        
        }
    if (event.key == "dark-mode") {                 //Für Darkmode Einstellungen
       changeDarkmode();
        
    }});


