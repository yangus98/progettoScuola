const questionsEng = [
  {
    "questionEng": "What kind of places do you prefer to visit?",
    "optionsEng": ["Historical sites", "Unspoiled nature", "Urban beauties"]
    },
    {
    "questionEng": "Which of these hobbies do you prefer?",
    "optionsEng": ["Playing soccer", "Watching a bullfight", "Singing k-pop songs"]
    },
    {
    "questionEng": "Choose your preferred food among these?",
    "optionsEng": ["Tea", "Paella", "Ramen"]
    },
    {
    "questionEng": "What type of climate do you prefer among these?",
    "optionsEng": ["Cold", "Hot", "Spring-like"]
    },
    {
    "questionEng": "Which soccer player do you prefer among these?",
    "optionsEng": ["Harry Kane", "Fernando Torres", "Son Heung-min"]
    },
    {
    "questionEng": "Which singer do you prefer among these?",
    "optionsEng": ["David Bowie", "Enrique Iglesias", "PSY"]
    },
    {
    "questionEng": "Which actor do you prefer among these?",
    "optionsEng": ["Emma Watson", "Pedro Alonso", "Lee Min-ho"]
    }
  ];
  
  let currentQuestionIndexEng = 0;
  let scoresEng = [
    { typeEng: "English", valueEng: 0 },
    { typeEng: "Spanish", valueEng: 0 },
    { typeEng: "Korean", valueEng: 0 },
  ];
  
  function displayQuestionEng() {
    const currentQuestionEng = questionsEng[currentQuestionIndexEng];
    if (currentQuestionEng) {
      document.getElementById("questionEng").innerText = currentQuestionEng.questionEng;
  
      const optionsDivEng = document.getElementById("optionsEng");
      optionsDivEng.innerHTML = "";
  
      currentQuestionEng.optionsEng.forEach((optionEng, indexEng) => {
        const buttonEng = document.createElement("button");
        buttonEng.innerText = optionEng;
        buttonEng.onclick = () => {
          scoresEng[indexEng].valueEng++;
          nextQuestionEng();
        };
        optionsDivEng.appendChild(buttonEng);
      });
    } else {
      document.getElementById("questionEng").style.display = "none";
      document.getElementById("optionsEng").style.display = "none";
      displayScoreEng();
    }
  }
  
  function nextQuestionEng() {
    currentQuestionIndexEng++;
    displayQuestionEng();
  }
  
  function displayScoreEng() {
    const maxScoreIndexEng = scoresEng.findIndex(scoreEng => scoreEng.valueEng === Math.max(...scoresEng.map(scoreEng => scoreEng.valueEng)));
    document.getElementById("scoreEng").innerText = `The right language for you is: ${scoresEng[maxScoreIndexEng].typeEng}`;
    document.getElementById("scoreEng").style.display = "block";
  }
  
  displayQuestionEng();

  document.getElementById("input-container").addEventListener("submit", function(event) {
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var sede = document.getElementById("sede").value;
    var email = document.getElementById("email").value;
    var lingua = document.getElementById("lingua").value;
  
    if (nome === "" && cognome === "" && sede === "" && email === "" && lingua === "") {
      alert("All fields are mandatory.");
      event.preventDefault(); // Impedisce l'invio del form
      return;
    }
  
    // Validazione del campo nome
    if (!/^[a-zA-Z]+$/.test(nome)) {
        alert("The Name field must contain only letters or cannot be empty.");
        event.preventDefault(); // Impedisce l'invio del form
        return;
    }
  
    // Validazione del campo cognome
    if (!/^[a-zA-Z]+$/.test(cognome)) {
        alert("The Surname field must contain only letters or cannot be empty.");
        event.preventDefault(); // Impedisce l'invio del form
        return;
    }
  
      // Validazione del campo sede
      if (sede === "") {
        alert("Please enter a location.");
        event.preventDefault(); // Impedisce l'invio del form
        return;
    }
  
      // Validazione del campo lingua
      if (lingua === "") {
        alert("Please enter a language.");
        event.preventDefault(); // Impedisce l'invio del form
        return;
    }
  
    if (email === "") {
      alert("Please enter an email.");
      event.preventDefault(); // Impedisce l'invio del form
      return;
  }});