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













