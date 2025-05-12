const paysParticipants = {
    "sénégal": {
      image: "images/drapeaux/senegal.png",
      groupe: "A",
      entraineur: "Aliou Cissé",
      capitaine: "Kalidou Koulibaly"
    },
    "cameroun": {
      image: "images/drapeaux/cameroon.png",
      groupe: "B",
      entraineur: "Rigobert Song",
      capitaine: "Vincent Aboubakar"
    },
    "algérie": {
      image: "images/drapeaux/algeria.png",
      groupe: "C",
      entraineur: "Djamel Belmadi",
      capitaine: "Riyad Mahrez"
    },
    "burkina": {
      image: "images/drapeaux/burkina-faso.png",
      groupe: "D",
      entraineur: "Brama Traoré",
      capitaine: "Bertrand Traoré"
    },
    "égypte": {
      image: "images/drapeaux/egypt.png",
      groupe: "E",
      entraineur: "Carlos Queiroz",
      capitaine: "Mohamed Salah"
    },
    "maroc": {
      image: "images/drapeaux/maroc.png",
      groupe: "F",
      entraineur: "Vahid Halilhodžić",
      capitaine: "Romain Saïss"
    }
  };
  
  function rechercherPays() {
    const saisie = document.getElementById("champPays").value.toLowerCase().trim();
    const zoneResultat = document.getElementById("resultatPays");
    zoneResultat.innerHTML = "";
  
    if (paysParticipants[saisie]) {
      const pays = paysParticipants[saisie];
      zoneResultat.innerHTML = `
        <div class="card mx-auto" style="max-width: 400px;">
          <img src="${pays.image}" class="card-img-top" alt="${saisie}">
          <div class="card-body">
            <h5 class="card-title text-capitalize">${saisie}</h5>
            <p><strong>Groupe :</strong> ${pays.groupe}</p>
            <p><strong>Entraîneur :</strong> ${pays.entraineur}</p>
            <p><strong>Capitaine :</strong> ${pays.capitaine}</p>
          </div>
        </div>
      `;
    } else {
      zoneResultat.innerHTML = `<div class="alert alert-danger">Le pays "${saisie}" <strong>ne participe pas</strong> à la CAN 2025.</div>`;
    }
  }
  
//script.js

// Exemple de script JavaScript simple

// Message de bienvenue dans la console
console.log("Bienvenue sur le site de la CAN 2025 !");

// Vous pouvez ajouter ici des interactions JS supplémentaires

//compte à rebours
// Définir la date cible (ex : 21 decembre 2025 à 12h00)
const targetDate = new Date("Dec 21, 2025 12:00:00").getTime();

const countdownElement = document.getElementById("timer");

const interval = setInterval(() => {
    const now = new Date().getTime();   //recupere la date actuelle
    const diff = targetDate - now;

    if (diff <= 0) {
    clearInterval(interval);
    countdownElement.innerHTML = "Le temps est écoulé !";
    return;
    }

    // Calcul des jours, heures, minutes, secondes
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownElement.innerHTML =
    `${days}j ${hours}h ${minutes}m ${seconds}s`;
}, 1000);