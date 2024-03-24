document.addEventListener("DOMContentLoaded", function () {
    // Crea il footer
    const footer = document.createElement('footer');

    // Crea l'indirizzo
    const address = document.createElement('address');
    address.classList.add('footer-text');
    var lang = document.documentElement.lang;

    if(lang === "it"){
        address.textContent = "Sede legale: Via Vittorio Veneto, 4 - 70124 BARI";
    }else{
        address.textContent = "Registered office: Via Vittorio Veneto, 4 - 70124 BARI";
    }
    // Crea il div per gli icon
    const allIcons = document.createElement('div');
    allIcons.classList.add('all-icons');

    // Crea gli anchor per i link
    const facebookLink = document.createElement('a');
    facebookLink.href = "https://www.facebook.com/apuliadigitalmaker/?locale=it_IT";
    const facebookIcon = document.createElement('img');
    facebookIcon.src = "/assets/facebook-nav.svg";
    facebookIcon.alt = "facebook";
    facebookIcon.classList.add('footer-icons');
    facebookLink.appendChild(facebookIcon);

    const instagramLink = document.createElement('a');
    instagramLink.href = "https://www.instagram.com/apuliadigitalmaker/";
    const instagramIcon = document.createElement('img');
    instagramIcon.src = "/assets/instagram-nav.svg";
    instagramIcon.alt = "instagram";
    instagramIcon.classList.add('footer-icons');
    instagramLink.appendChild(instagramIcon);

    const twitterLink = document.createElement('a');
    twitterLink.href = "https://twitter.com/i/flow/login?redirect_after_login=%2FApuliaDigitalM";
    const twitterIcon = document.createElement('img');
    twitterIcon.src = "/assets/twitter-nav.svg";
    twitterIcon.alt = "twitter";
    twitterIcon.classList.add('footer-icons');
    twitterLink.appendChild(twitterIcon);

    // Aggiungi gli anchor al div
    allIcons.appendChild(facebookLink);
    allIcons.appendChild(instagramLink);
    allIcons.appendChild(twitterLink);

    // Crea l'articolo per il testo aggiuntivo
    const footerText = document.createElement('article');
    footerText.classList.add('footer-text2');
    if(lang === "it"){
        footerText.textContent = "Realizzato dal Freezer&Sayan Team.";
    }else{
        footerText.textContent = "Realized by Freezer&Sayan Team.";
    }
    // Aggiungi tutti gli elementi al footer
    footer.appendChild(address);
    footer.appendChild(allIcons);
    footer.appendChild(footerText);

    // Aggiungi il footer al body o ad un altro elemento esistente
    document.getElementById("footer").appendChild(footer);
});
