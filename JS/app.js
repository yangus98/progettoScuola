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

setInterval(succ, 7000);

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
    questionIta: "Scegli cibo preferisci tra questi?",
    optionsIta: ["Tè", "Paella", "Ramen"],
  },
  {
    questionIta: "Che tipo di clima preferisci tra questi?",
    optionsIta: ["Freddo", "Caldo", "Primaverile"],
  },
  {
    questionIta: "Quale calciatore preferisci tra questi?",
    optionsIta: ["Harry Kane", "Fernando Torres", "Son Heung-min"],
  },
  {
    questionIta: "Quale cantante preferisci tra questi?",
    optionsIta: ["David Bowie", "Enrique Iglesias", "PSY"],
  },
  {
    questionIta: "Quale attore preferisci tra questi?",
    optionsIta: ["Emma Watson", "Pedro Alonso", "Lee Min-ho"],
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

document.getElementById("input-container").addEventListener("submit", function(event) {
  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;
  var sede = document.getElementById("sede").value;
  var email = document.getElementById("email").value;
  var lingua = document.getElementById("lingua").value;

  if (nome === "" && cognome === "" && sede === "" && email === "" && lingua === "") {
    alert("Tutti i campi sono obbligatori.");
    event.preventDefault(); // Impedisce l'invio del form
    return;
  }

  // Validazione del campo nome
  if (!/^[a-zA-Z]+$/.test(nome)) {
      alert("Il campo Nome deve contenere solo lettere o non può essere vuoto.");
      event.preventDefault(); // Impedisce l'invio del form
      return;
  }

  // Validazione del campo cognome
  if (!/^[a-zA-Z]+$/.test(cognome)) {
      alert("Il campo Cognome deve contenere solo lettere o non può essere vuoto.");
      event.preventDefault(); // Impedisce l'invio del form
      return;
  }

    // Validazione del campo sede
    if (sede === "") {
      alert("Inserisci una sede.");
      event.preventDefault(); // Impedisce l'invio del form
      return;
  }

    // Validazione del campo lingua
    if (lingua === "") {
      alert("Inserisci una lingua.");
      event.preventDefault(); // Impedisce l'invio del form
      return;
  }

  if (email === "") {
    alert("Inserisci un email.");
    event.preventDefault(); // Impedisce l'invio del form
    return;
}});