// Seleziona il pulsante
const nostriCorsiBtn = document.getElementById("nostri-corsi");
// Seleziona la tendina del menu
const divContainer = document.getElementById("tendina-menù");

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































