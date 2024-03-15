// Seleziona il pulsante
const nostriCorsiBtn = document.getElementById("nostri-corsi");
// Seleziona la tendina del menu
const menuContainer = document.getElementById("tendina-menù");

// Aggiungi un gestore di eventi per il clic sul pulsante
nostriCorsiBtn.addEventListener("click", function() {
    // Controlla se la tendina del menu è visibile o nascosta
    if (menuContainer.style.visibility === "visible") {
        // Se è visibile, nascondila
        menuContainer.style.visibility = "hidden";
    } else {
        // Altrimenti, mostrala
        menuContainer.style.visibility = "visible";
    }
});

nostriCorsiBtn.addEventListener("mouseover", function() {
    // Controlla se la tendina del menu è visibile o nascosta
    if (menuContainer.style.visibility === "visible") {
        // Se è visibile, nascondila
        menuContainer.style.visibility = "hidden";
    } else {
        // Altrimenti, mostrala
        menuContainer.style.visibility = "visible";
    }
});

var n_img = 4;
var corrente = 1;

function succ(){
    corrente++;
    if(corrente > n_img){
        corrente = 1;
    }
  
    for(var i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
      }
    document.querySelector("#img_slider img:nth-child(" + corrente + ")").style.display = "block";
}

function prec(){
    corrente--;
    if(corrente == 0){
        corrente = n_img;
    }
  
    for(var i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child(" + corrente + ")").style.display = "block";
}

setInterval(succ, 5000);

// Seleziona il pulsante
const languageBtn = document.getElementById("language-button");
// Seleziona la tendina del menu
const footerContainer = document.getElementById("finestra-footer");

// Aggiungi un gestore di eventi per il clic sul pulsante
languageBtn.addEventListener("click", function() {
    // Controlla se la tendina del menu è visibile o nascosta
    if (footerContainer.style.visibility === "visible") {
        // Se è visibile, nascondila
        footerContainer.style.visibility = "hidden";
    } else {
        // Altrimenti, mostrala
        footerContainer.style.visibility = "visible";
    }
});

languageBtn.addEventListener("mouseover", function() {
    // Controlla se la tendina del menu è visibile o nascosta
    if (footerContainer.style.visibility === "visible") {
        // Se è visibile, nascondila
        footerContainer.style.visibility = "hidden";
    } else {
        // Altrimenti, mostrala
        footerContainer.style.visibility = "visible";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.getElementById('toggleBtn1');
    var toggleDivs = document.getElementById('offerta-corpo1');
  
    toggleBtn.addEventListener('click', function () {
      
        if (toggleDivs.style.display === "block") {
            // Se è visibile, nascondila
            toggleDivs.style.display = "none";
        } else {
            // Altrimenti, mostrala
            toggleDivs.style.display = "block";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.getElementById('toggleBtn2');
    var toggleDivs = document.getElementById('offerta-corpo2');
  
    toggleBtn.addEventListener('click', function () {
      
        if (toggleDivs.style.display === "block") {
            // Se è visibile, nascondila
            toggleDivs.style.display = "none";
        } else {
            // Altrimenti, mostrala
            toggleDivs.style.display = "block";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.getElementById('toggleBtn3');
    var toggleDivs = document.getElementById('offerta-corpo3');
  
    toggleBtn.addEventListener('click', function () {
      
        if (toggleDivs.style.display === "block") {
            // Se è visibile, nascondila
            toggleDivs.style.display = "none";
        } else {
            // Altrimenti, mostrala
            toggleDivs.style.display = "block";
        }
    });
});

// Definisci un array di frasi da digitare
var phrases = [
    "Benvenuto.",
    "Welcome.",
    "Bienvenido.",
    "환영."
];

// Seleziona l'elemento HTML dove vuoi mostrare il testo
var outputElement = document.getElementById('welcome-container');

// Definisci la velocità di digitazione (in millisecondi per carattere)
var typingSpeed = 90;
// Definisci il tempo di pausa tra una frase e l'altra (in millisecondi)
var pauseTime = 1000;

// Funzione per l'effetto di scrittura automatica
function typePhrases(phrases, index) {
    var text = phrases[index % phrases.length]; // Utilizza l'operatore modulo per ciclare attraverso l'array
    typeWriter(text, 0, function() {
        setTimeout(function() {
            outputElement.innerHTML = "";
            typePhrases(phrases, index + 1); // Passa all'indice successivo
        }, pauseTime);
    });
}

// Funzione per l'effetto di scrittura automatica di una singola frase
function typeWriter(text, index, callback) {
    if (index < text.length) {
        outputElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(function() {
            typeWriter(text, index, callback);
        }, typingSpeed);
    } else {
        if (callback) {
            callback();
        }
    }
}

// Avvia l'effetto di scrittura automatica delle frasi
typePhrases(phrases, 0);










