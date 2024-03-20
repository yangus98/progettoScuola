let currentSlideIndex = 0;
const slides = document.querySelectorAll('.map-description .Sede');
const intervalDuration = 5000; // 5 secondi

function showSlide(index) {
    // Nascondi tutti gli articoli
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Mostra l'articolo corrente
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

function previousSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
}

// Funzione per passare allo slide successivo ogni 5 secondi
function autoSlide() {
    nextSlide();
}

// Imposta il primo slide come visibile all'avvio
showSlide(currentSlideIndex);

// Aggiungi event listener ai pulsanti di movimento
document.querySelector('.mov-btn-iframe button').addEventListener('click', previousSlide);
document.querySelector('.mov-btn-iframe2 button').addEventListener('click', nextSlide);

// Avvia l'auto scorrimento
setInterval(autoSlide, intervalDuration);