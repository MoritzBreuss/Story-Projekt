let textAnzeige = document.getElementById("text").innerHTML;
let isTyping = false; //für Animation des Textes
let menuOpen = false; //für das Menü
let changingSlotName = false; //für das umbenennen des Speicherstandes
let willSlotUmbenennen = false; //für das umbenennen des Speicherstandes
let willSpeicherstandLaden = false; //für das Laden des Speicherstandes
let musicIsPlaying = false; //für das Musik abspielen
let textArray = [
  "Hi bbg das ist ein test",
  "das ist der zweite test",
  "img",
  "das ist der dritte test",
  "startMusic",
  "das ist der vierte testttttttttttt tttttttttttttttt tttttttttttttttttttttttt ttttttttttttttttttttttttttttttttttttttttttt",
  "stopMusic",
  "das ist der fünfte test",
  "opt",
];
let text1A = [
  "Oh... ich dachte nicht das du so nett zu mir seien würdest",
  "Du schaust immer so schlecht drauf aus, was nichts dran ändert das du auch gut Ausschaust",
  "Sehr gut sogar",
  "Ich bin froh das ich dich getroffen habe",
  "Ich hoffe wir können uns noch öfter sehen",
];
let text1B = [
  "Was meine Mutter?",
  "Soll ich dich küssen??!, Soll ich dich küssen??!",
  "Ja pass lieber auf wo du hintrittst",
  "Sonst schieb ich noch meinen Lörres in dein Gesicht",
];
let textStelle = 0;
let bildStelle = 0;
let optionenStelle = 0;
let musicStelle = 0;

function starteSpielHinweisText() {
  let text = document.getElementById("spielStartHinweis")
  if (textStelle === 0) {
    text.innerHTML = 'Drücke "Space" zum starten...'
  } else {
    text.innerHTML = ""
  }
}
starteSpielHinweisText();

function Spielzug() {
  switch(textArray[textStelle]) {
    case "img": 
    nextBild();
    break;
    case "opt":
      optionenErstellen();
    break;
    case "startMusic":
      playMusic();
    break;
    case "stopMusic":
      stopMusic();
    break;
    default:
      nextText();
      textStelle++;
  }
    


  if (textStelle === 1) {
    starteSpielHinweisText();
  }
  if (textStelle >= textArray.length) {
    console.log("ende von text");
  }

  if (!localStorage.getItem("SpeicherstandArray")) {
    //Wenn es noch keine Speicherstände gibt, wird es erstellt
    localStorage.setItem("SpeicherstandArray", JSON.stringify([]));
    localStorage.setItem(
      "SpeicherstandAnzeige",
      `<h3>Deine Speicherstände</h3>
          <div class="speicherstaende">
            <div onclick="slotButtonClicked(event)" id="slot1" class="slot">
                <div class="slot-number">Leerer Slot</div>
                <div class="slot-date">Datum: ---</div>
              </div>
              <div onclick="slotButtonClicked(event)" id="slot2" class="slot">
                <div class="slot-number">Leerer Slot</div>
                <div class="slot-date">Datum: ---</div>
              </div>
              <div onclick="slotButtonClicked(event)" id="slot3" class="slot">
                <div class="slot-number">Leerer Slot</div>
                <div class="slot-date">Datum: ---</div>
              </div>
              <div onclick="slotButtonClicked(event)" id="slot4" class="slot">
                <div class="slot-number">Leerer Slot</div>
                <div class="slot-date">Datum: ---</div>
              </div>
              <div onclick="slotButtonClicked(event)" id="slot5" class="slot">
                <div class="slot-number">Leerer Slot</div>
                <div class="slot-date">Datum: ---</div>
              </div>
              <div onclick="slotButtonClicked(event)" id="slot6" class="slot">
                <div class="slot-number">Leerer Slot</div>
                <div class="slot-date">Datum: ---</div>
              </div>
              <div onclick="slotButtonClicked(event)" id="slot7" class="slot">
                <div class="slot-number">Leerer Slot</div>
                <div class="slot-date">Datum: ---</div>
              </div>
              <div onclick="slotButtonClicked(event)" id="slot8" class="slot">
                <div class="slot-number">Leerer Slot</div>
                <div class="slot-date">Datum: ---</div>
              </div>
              <div onclick="slotButtonClicked(event)" id="slot9" class="slot">
                <div class="slot-number">Leerer Slot</div>
                <div class="slot-date">Datum: ---</div>
              </div>
          </div>`
    );
  }

}

function nextBild() {
  document.body.style.backgroundImage =
    "url('picture1/img" + bildStelle + ".jpg')";
  bildStelle++;
  textStelle++;
  console.log(bildStelle + "Bild changing success");
  Spielzug();
}

function showCurrentBild() {
  //nur für den Bildwechsel bei Speicherständen verwenden!!!! sonst nextbild verwenden
  document.body.style.backgroundImage =
    "url('picture1/img" + bildStelle + ".jpg')";
}

function playMusic() {
  let body = document.body;
  body.innerHTML += `<audio id="startAudio" class="audio" autoplay> <source src="music/music` + musicStelle +  `.mp3" type="audio/mpeg">
  </audio>`
  musicStelle++;
  textStelle++;
  console.log("music playing");
  Spielzug();
}

function stopMusic() {
  let audio = document.getElementById("startAudio");
  audio.pause();
  audio.currentTime = 0;
  console.log("music stopped");
  textStelle++;
  Spielzug();

}

function optionenErstellen() {
  //Hidet den textcontainer und zeigt die Optionen an, je nachdem welche OptionenStelle gerade ist
  console.log("Optionen fuktion gestartet");
  let textContainer = document.getElementById("text-container");
  textContainer.style.display = "none";

  if (optionenStelle === 0) {
    //Optionen für die Erste Option
    let optionenContainer = document.getElementById("optionen-container");
    optionenContainer.innerHTML = `
       <button id="optionA" onclick='optionenHantieren("A")' > ihn</button>
        <button id="optionB" onclick='optionenHantieren("B")' >Spuck im</button>
       `;
  }
}

function optionenHantieren(option) {
  //Pusht den Optionen Array in den TextArray entsprechend der Option die bei dem buttononclick übergeben wird. Dann cleared sie den optionen-container und zeigt den Textcontainer wieder an, dann kriegen optionen, textstelle ++ und Spielzug wird aufgerufen
  if (option == "A") {
    textArray = textArray.concat(text1A);
    console.log("in den Array erfolgreich eingefügt" + textArray);
  } else if (option == "B") {
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

function nextText() {
  //macht isTyping true und fängt an den Text zu schreiben
  document.getElementById("text").innerHTML = "";
  let text = textArray[textStelle];
  let i = 0;
  isTyping = true;

  function smoothTextAnzeige() {
    //Funktion für die Animation des Textes, checkes ob Istyping true ist und sobald es fertig ist macht es isTyping false
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

function openMenu() {
  //Öffnet das Menü
  menuOpen = true;
  let menudiv = document.getElementById("menu-div");
  let text = document.getElementById("text-container");
  let insidemenu = document.getElementById("inside-menu");
  menudiv.style.opacity = "90%";
  text.style.opacity = "30%";
  menudiv.style.zIndex = 3;
  insidemenu.style.display = "block";
  insidemenu.style.zIndex = 4;
  getSpeicherstandAnzeige();
}

function closeMenu() {
  //closed das menü
  menuOpen = false;
  let menudiv = document.getElementById("menu-div");
  let text = document.getElementById("text-container");
  let insidemenu = document.getElementById("inside-menu");
  menudiv.style.opacity = "0%";
  text.style.opacity = "100%";
  menudiv.style.zIndex = -6;
  insidemenu.style.display = "none";
  insidemenu.style.zIndex = -5;
}

function confirmHauptmenu() {
  closeMenu();
  menuOpen = true;
  let menudiv = document.getElementById("menu-div");
  let text = document.getElementById("text-container");
  let confirmdiv = document.getElementById("confirm-button-container");
  menudiv.style.opacity = "90%";
  text.style.opacity = "30%";
  menudiv.style.zIndex = 3;
  confirmdiv.style.display = "block";
  confirmdiv.innerHTML = `<div id="confirm-buttons">
      <p id="confirm-button-container-text"> Bist du dir Sicher? Ungespeicheter Fortschritt geht verloren</p>
      <button class="confirm-button red-button" onclick="confirmHauptmenuZurueck()" id="back">Zurück</button>
      <button class="confirm-button green-button" onclick="confirmHauptmenuWeiter()" id="hauptmenu">Zum Hauptmenü</button>
    </div>`
}

function confirmHauptmenuZurueck() {
  let confirmdiv = document.getElementById("confirm-button-container");
  confirmdiv.innerHTML = "";
  confirmdiv.style.display = "none";
  closeMenu();
}

function confirmHauptmenuWeiter() {
  window.location.href = "../start.html";
}

function getSpeicherstandAnzeige() {
  //Holt die Speicherstände aus dem Localstorage und zeigt sie an
  let currentAnzeige = document.getElementById("speicherstaende-container-id");
  currentAnzeige.innerHTML = localStorage.getItem("SpeicherstandAnzeige");
}

function setSpeicherstandAnzeige() {
  //Settet die Speicherstände in den Localstorage
  let currentAnzeige = document.getElementById("speicherstaende-container-id");
  localStorage.setItem("SpeicherstandAnzeige", currentAnzeige.innerHTML);
}

function slotButtonClicked(event) {
  //Wird ausgeführt wenn einer der Speicherstandbuttons geklickt wird und führt die entsprechenden Funktionen aus
  if (!changingSlotName) {
    let element = event.target;
    while (element && !element.classList.contains("slot")) {
      element = element.parentElement;
    }
    // If we found an element with a class of 'slot', log its id
    if (element) {
      console.log("slot button: " + element.id + " clicked");

      if (willSlotUmbenennen) {
        //Für das Umbenennen des Speicherstandes
        changingSlotName = true;
        slotUmbenennen(element);
      } else if (!willSpeicherstandLaden && !willSlotUmbenennen) {
        //Für das Speichern des Speicherstandes
        changingSlotName = true;
        slotUmbenennen(element);
        speicherstandSpeichern(element);
      }
      if (willSpeicherstandLaden) {
        //Für das Laden des Speicherstandes
        console.log("Speicherstand wird geladen");
        speicherStandLaden(element);
        willSpeicherstandLaden = false;
        speicherStandLadenAnimation();
        //sdsdd
      }
    }
  }
}

function willSpeicherstandLadenFunc() {
  willSpeicherstandLaden = !willSpeicherstandLaden;
  speicherStandLadenAnimation();
}

function speicherStandLaden(element) {
  if (isTyping == true) {   //verhindert das Laden des Speicherstandes wenn der Text noch getippt wird
    return false;
  }
  //Lädt den Speicherstand aus dem localstorage und setzt die Werte für den Spielzug macht isTyping false und benutzt ShowCurrentBild
  let speicherstandArray = JSON.parse(
    localStorage.getItem("SpeicherstandArray")
  );
  let filteredSpeicherstand = speicherstandArray.filter((speicherstand) => {
    if (speicherstand.id == element.id) {
      return speicherstand;
    }
  });
  isTyping = false;
  textStelle = filteredSpeicherstand[0].speicherTextStelle - 1;     //nimmt die Werte aus dem Speicherstandarray und setzt sie im spiel um den Speicherstand 
  bildStelle = filteredSpeicherstand[0].speicherBildStelle;
  optionenStelle = filteredSpeicherstand[0].speicherOptionenStelle;
  musicStelle = filteredSpeicherstand[0].speicherMusicStelle;
  closeMenu();
  Spielzug();
  showCurrentBild();
}

function speicherStandLadenAnimation() {
  const buttons = document.querySelectorAll(".slot");
  if (willSpeicherstandLaden) {
    buttons.forEach((button) => {
      console.log("Adding bounce to:", button);
      button.classList.add("bounce");
    });
  } else if (!willSpeicherstandLaden || button.classList.contains("bounce")) {
    buttons.forEach((button) => {
      console.log("Removing bounce from:", button);
      button.classList.remove("bounce");
    });
  }
}

function speicherstandSpeichern(element) {
  //Ändert den SpeicherstandArray im localstorage, In porgress
  let speicherstandArray = JSON.parse(
    localStorage.getItem("SpeicherstandArray")
  );
  let speicherstand = {
    id: element.id,
    name: element.children[0].innerHTML,
    date: element.children[1].innerHTML,
    speicherTextStelle: textStelle,
    speicherBildStelle: bildStelle,
    speicherOptionenStelle: optionenStelle,
    speicherMusicStelle: musicStelle,
    speicherTextArray: textArray,
  };
  console.log(speicherstand + "wurde gespeichert");
  speicherstandArray.push(speicherstand);
  localStorage.setItem(
    "SpeicherstandArray",
    JSON.stringify(speicherstandArray)
  );
}

function willSlotUmbenennenFunc() {
  //kehr WILLslotumbenennen um und updated die Visuals
  willSlotUmbenennen = !willSlotUmbenennen;
  updateSlotUmbennenVisual();
}

function slotUmbenennen(element) {
  //Nennt nur den Speicherstab um und ändert den SpeicherstandArray im localstorage nicht
  element.children[0].innerHTML = `<input id="slot-input-id" class="slot-input" type="text">`;

  if (changingSlotName) {
    let input = document.getElementById("slot-input-id");
    input.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        if (input.value === "") {
          input.value = "Slot Name";
        }
        element.children[1].innerHTML = getDate();
        element.children[0].innerHTML = input.value;
        changingSlotName = false;
        willSlotUmbenennen = false;
        setSpeicherstandAnzeige();
        updateSlotUmbennenVisual();
      }
    });
  }
}

function updateSlotUmbennenVisual() {
  // Updated die Visuals während des umbenennen des Speicherstandes, abhänigig von willSlotUmbenennen
  if (willSlotUmbenennen) {
    document.querySelectorAll(".slot").forEach((slot) => {
      slot.style.border = "3px solid #5a0b0b";
      console.log("slot umbennen visual changed ");
    });
  } if (!willSlotUmbenennen) {
    document.querySelectorAll(".slot").forEach((slot) => {
      slot.style.border = "3px solid #e84a5f";
      console.log("slot umbennen visual changed ");
      setSpeicherstandAnzeige();
    });
  }
}

function getDate() {
  var date = new Date();
  return (
    "Datum: " +
    date.getDate() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getFullYear()
  );
}

function changeDarkmode() {
  if (localStorage.getItem("dark-mode") === "true") {
    //Settet den Darkmode und Fontsize beim Start, auch ohne localStorage change
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
changeDarkmode(); //Darkmode Einstellen beim Start

function changeFontSize() {
  let fontSize = localStorage.getItem("fontSize");
  if (fontSize) {
    document.getElementById("text-container").style.fontSize = fontSize + "px";
    console.log("Fontsize changed");
  }
}
changeFontSize(); //Fontsize Einstellen beim Start

window.addEventListener("storage", (event) => {   //wird direkt ausgeführt wenn sich der Localstorage ändert für Fontsize und Darkmode
  //wird direkt ausgeführt wenn sich der Localstorage ändert für Fontsize und Darkmode
  if (event.key == "fontSize") {
    //Fontsize Einstellen mit Localstorage
    changeFontSize();
  }
  if (event.key == "dark-mode") {
    //Für Darkmode Einstellungen
    changeDarkmode();
  }
});


onkeydown = function (event) {
  //öffnet und schließt das Menü mit Escape
  if (event.code === "Escape") {
    //Für das Menü, Escape
    if (menuOpen) {
      console.log("Menu closed");
      closeMenu();
    } else if (!menuOpen) {
      console.log("Menu opened");
      openMenu();
    }
  }

  if (event.code === "Space") {
    //Für den SPielzug, Leertase
    if (isTyping) {
      console.log("Text wird vollständig angezeigt");
      document.getElementById("text").innerHTML = textArray[textStelle - 1];
      isTyping = false;
    } else {
      console.log("Spielzug wird gestartet");
      Spielzug();
    }
  }
};