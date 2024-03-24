document.addEventListener("DOMContentLoaded", function () {
  // creo il DIV
  let navPrimaria = document.createElement("div");
  navPrimaria.id = "NavPrimaria";

  // creo LOGO
  let logoImg = document.createElement("img");
  logoImg.src = "/assets/logo.svg";
  logoImg.title = "Torna alla Homepage";
  logoImg.alt = "Logo Homepage";
  logoImg.classList.add("logo");

  // Aggiungi un event listener per il click sull'immagine del logo
  logoImg.addEventListener("click", function () {
    var lang = document.documentElement.lang;

    if(lang === "it"){
      window.location.href = "../index.html";
    }else{
      window.location.href = "../pagine/index-eng.html";
    }
  });

  let textNav = document.createElement("div");
  textNav.id = "TextNav";

  let h1 = document.createElement("h1");
  h1.textContent = "I. S. K. SCHOOL";

  let h2 = document.createElement("h2");
  h2.textContent = "ONE FOR ALL";

  let welcomeContainer = document.createElement("article");
  welcomeContainer.id = "welcome-container";

  textNav.appendChild(h1);
  textNav.appendChild(h2);

  navPrimaria.appendChild(logoImg);
  navPrimaria.appendChild(textNav);
  navPrimaria.appendChild(welcomeContainer);

  document.getElementById("parentDiv").appendChild(navPrimaria);

  var phrases = ["Benvenuto.", "Welcome.", "Bienvenido.", "환영."];
  var typingSpeed = 90;
  var pauseTime = 1000;
  var currentIndex = 0;
  var interval;

  function typePhrases() {
    var text = phrases[currentIndex];
    typeWriter(text, 0);
  }
  
  function typeWriter(text, index) {
    interval = setInterval(function () {
      if (index < text.length) {
        welcomeContainer.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(function () {
          welcomeContainer.innerHTML = "";
          currentIndex++; // Incrementiamo l'indice
  
          // Verifichiamo se l'indice ha superato la lunghezza dell'array phrases
          if (currentIndex >= phrases.length) {
            currentIndex = 0; // Reimpostiamo l'indice a 0
          }
  
          typePhrases();
        }, pauseTime);
      }
    }, typingSpeed);
  }
  
  typePhrases();
});
