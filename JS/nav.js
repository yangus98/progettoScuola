document.addEventListener("DOMContentLoaded", function () {
    // creo il DIV
    let navPrimaria = document.createElement('div');
    navPrimaria.id = 'NavPrimaria';

    // creo LOGO
    let logoImg = document.createElement('img');
    logoImg.src = '/assets/LOGO.svg';
    logoImg.classList.add('logo');

       // Aggiungi un event listener per il mouseover sull'immagine del logo
    logoImg.addEventListener('mouseover', function() {
        logoImg.style.cursor = 'pointer'; // Imposta il cursore a "pointer"
    });
  
    // Aggiungi un event listener per il click sull'immagine del logo
    logoImg.addEventListener('click', function() {
        window.location.href = '../index.html'; // Reindirizza alla pagina index.html
    });

    let textNav = document.createElement('div');
    textNav.id = 'TextNav';

    let h1 = document.createElement('h1');
    h1.textContent = 'I. S. K. SCHOOL';

    let h2 = document.createElement('h2');
    h2.textContent = 'ONE FOR ALL';

    let welcomeContainer = document.createElement('article');
    welcomeContainer.id = 'welcome-container';

    textNav.appendChild(h1);
    textNav.appendChild(h2);

    navPrimaria.appendChild(logoImg);
    navPrimaria.appendChild(textNav);
    navPrimaria.appendChild(welcomeContainer);

    document.getElementById("parentDiv").appendChild(navPrimaria);

    // Definisci un array di frasi da digitare
    var phrases = ["Benvenuto.", "Welcome.", "Bienvenido.", "환영."];

    // Seleziona l'elemento HTML dove vuoi mostrare il testo
    var outputElement = document.getElementById("welcome-container");

    // Definisci la velocità di digitazione (in millisecondi per carattere)
    var typingSpeed = 90;
    // Definisci il tempo di pausa tra una frase e l'altra (in millisecondi)
    var pauseTime = 1000;

    // Funzione per l'effetto di scrittura automatica
    function typePhrases(phrases, index) {
        var text = phrases[index % phrases.length]; // Utilizza l'operatore modulo per ciclare attraverso l'array
        typeWriter(text, 0, function () {
            setTimeout(function () {
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
            setTimeout(function () {
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
});
