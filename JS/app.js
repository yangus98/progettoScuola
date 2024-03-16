// Seleziona il pulsante
const nostriCorsiBtn = document.getElementById("nostri-corsi");
// Seleziona la tendina del menu
const menuContainer = document.getElementById("tendina-menù");

// Aggiungi un gestore di eventi per il clic sul pulsante
nostriCorsiBtn.addEventListener("click", function () {
  // Controlla se la tendina del menu è visibile o nascosta
  if (menuContainer.style.visibility === "visible") {
    // Se è visibile, nascondila
    menuContainer.style.visibility = "hidden";
  } else {
    // Altrimenti, mostrala
    menuContainer.style.visibility = "visible";
  }
});

nostriCorsiBtn.addEventListener("mouseover", function () {
  // Controlla se la tendina del menu è visibile o nascosta
  if (menuContainer.style.visibility === "visible") {
    // Se è visibile, nascondila
    menuContainer.style.visibility = "hidden";
  } else {
    // Altrimenti, mostrala
    menuContainer.style.visibility = "visible";
  }
});

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

var n_img = 3;
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

const questions = [
  {
    question: "Che tipo di luoghi preferisci visitare?",
    options: ["Posti storici", "Natura incontaminata", "Bellezze urbane"],
  },
  {
    question: "Quali di questi hobbies preferisci?",
    options: ["Giocare a calcio", "Vedere la corrida", "Cantare canzoni k-pop"],
  },
  {
    question: "Scegli il cibo che preferisci tra questi",
    options: ["The", "Paella", "Ramen con riso"],
  },
  {
    question: "Che tipo di clima preferisci?",
    options: ["Freddo", "Caldo", "Primaverile"],
  },
];

let currentQuestionIndex = 0;
let scores = [
  { type: "Inglese", value: 0 },
  { type: "Spagnolo", value: 0 },
  { type: "Coreano", value: 0 },
]; // Array per memorizzare i punteggi per ciascuna opzione

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").innerText = currentQuestion.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => {
      scores[index].value++;
      nextQuestion();
    };
    optionsDiv.appendChild(button);
  });
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    displayScore();
  }
}

function displayScore() {
  const maxScoreIndex = scores.findIndex(score => score.value === Math.max(...scores.map(score => score.value)));
  document.getElementById("score").innerText = `La lingua giusta per te é: ${scores[maxScoreIndex].type}`;
  document.getElementById("score").style.display = "block";
}

displayQuestion();
