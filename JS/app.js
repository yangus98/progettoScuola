// Seleziona il pulsante
const nostriCorsiBtn = document.getElementById("language-button");
// Seleziona la tendina del menu
const divContainer = document.getElementById("finestra-footer");

// Aggiungi un gestore di eventi per il clic sul pulsante
nostriCorsiBtn.addEventListener("click", function() {
    // Controlla se la tendina del menu è visibile o nascosta
    if (divContainer.style.visibility === "visible") {
        // Se è visibile, nascondila
        divContainer.style.visibility = "hidden";
    } else {
        // Altrimenti, mostrala
        divContainer.style.visibility = "visible";
    }
});

nostriCorsiBtn.addEventListener("mouseover", function() {
    // Controlla se la tendina del menu è visibile o nascosta
    if (divContainer.style.visibility === "visible") {
        // Se è visibile, nascondila
        divContainer.style.visibility = "hidden";
    } else {
        // Altrimenti, mostrala
        divContainer.style.visibility = "visible";
    }
});