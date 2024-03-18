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

const questionsIta = [
  {
    questionIta: "Che tipo di luoghi preferisci visitare?",
    optionsIta: ["Siti storici", "Natura incontaminata", "Bellezze urbane"],
  },
  {
    questionIta: "Quali di questi hobby preferisci?",
    optionsIta: ["Giocare a calcio", "Guardare una corrida", "Cantare canzoni k-pop"],
  },
  {
    questionIta: "Scegli il cibo che preferisci tra questi",
    optionsIta: ["Tè", "Paella", "Ramen con riso"],
  },
  {
    questionIta: "Che tipo di clima preferisci?",
    optionsIta: ["Freddo", "Caldo", "Primaverile"],
  },
];

let currentQuestionIndexIta = 0;
let scoresIta = [
  { typeIta: "Inglese", valueIta: 0 },
  { typeIta: "Spagnolo", valueIta: 0 },
  { typeIta: "Coreano", valueIta: 0 },
];

function displayQuestionIta() {
  const currentQuestionIta = questionsIta[currentQuestionIndexIta];
  if (currentQuestionIta) {
    document.getElementById("questionIta").innerText = currentQuestionIta.questionIta;

    const optionsDivIta = document.getElementById("optionsIta");
    optionsDivIta.innerHTML = "";

    currentQuestionIta.optionsIta.forEach((optionIta, indexIta) => {
      const buttonIta = document.createElement("button");
      buttonIta.innerText = optionIta;
      buttonIta.onclick = () => {
        scoresIta[indexIta].valueIta++;
        nextQuestionIta();
      };
      optionsDivIta.appendChild(buttonIta);
    });
  } else {
    document.getElementById("questionIta").style.display = "none";
    document.getElementById("optionsIta").style.display = "none";
    displayScoreIta();
  }
}

function nextQuestionIta() {
  currentQuestionIndexIta++;
  displayQuestionIta();
}

function displayScoreIta() {
  const maxScoreIndexIta = scoresIta.findIndex(scoreIta => scoreIta.valueIta === Math.max(...scoresIta.map(scoreIta => scoreIta.valueIta)));
  document.getElementById("scoreIta").innerText = `La lingua giusta per te è: ${scoresIta[maxScoreIndexIta].typeIta}`;
  document.getElementById("scoreIta").style.display = "block";
}

displayQuestionIta();



