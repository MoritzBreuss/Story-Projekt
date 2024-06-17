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

    }

    
    if (textStelle >= textArray.length+1){
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
        document.getElementById("text").innerHTML = textArray[textStelle];
        textStelle++;
       
    }
    

onkeydown = function (event) {
    if (event.code === "Space") {
        Spielzug();
    }
}