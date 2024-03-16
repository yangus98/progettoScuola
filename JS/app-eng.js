const questionsEng = [
    {
      questionEng: "What type of places do you prefer to visit?",
      optionsEng: ["Historical sites", "Untouched nature", "Urban beauties"],
    },
    {
      questionEng: "Which of these hobbies do you prefer?",
      optionsEng: ["Playing soccer", "Watching bullfighting", "Singing k-pop songs"],
    },
    {
      questionEng: "Choose the food you prefer from these",
      optionsEng: ["Tea", "Paella", "Ramen with rice"],
    },
    {
      questionEng: "What type of climate do you prefer?",
      optionsEng: ["Cold", "Hot", "Spring-like"],
    },
  ];
  
  let currentQuestionIndexEng = 0;
  let scoresEng = [
    { typeEng: "English", valueEng: 0 },
    { typeEng: "Spanish", valueEng: 0 },
    { typeEng: "Korean", valueEng: 0 },
  ];
  
  function displayQuestionEng() {
    const currentQuestionEng = questionsEng[currentQuestionIndexEng];
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
  }
  
  function nextQuestionEng() {
    currentQuestionIndexEng++;
    if (currentQuestionIndexEng < questionsEng.length) {
      displayQuestionEng();
    } else {
      displayScoreEng();
    }
  }
  
  function displayScoreEng() {
    const maxScoreIndexEng = scoresEng.findIndex(scoreEng => scoreEng.valueEng === Math.max(...scoresEng.map(scoreEng => scoreEng.valueEng)));
    document.getElementById("scoreEng").innerText = `The right language for you is: ${scoresEng[maxScoreIndexEng].typeEng}`;
    document.getElementById("scoreEng").style.display = "block";
  }
  
  displayQuestionEng();