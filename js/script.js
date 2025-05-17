/* --- CAN 2025 : données officielles au 17 mai 2025 --- */
const paysParticipants = {
  "maroc": {
    image: "images/can-2025-drapeaux/ma.png",
    groupe: "1",
    entraineur: "Walid Regragui",
    capitaine: "Achraf Hakimi"
  },
  "mali": {
    image: "images/can-2025-drapeaux/ml.png",
    groupe: "1",
    entraineur: "Éric Chelle",
    capitaine: "Hamari Traoré"
  },
  "zambie": {
    image: "images/can-2025-drapeaux/zm.png",
    groupe: "1",
    entraineur: "Avram Grant",
    capitaine: "Patson Daka"
  },
  "comores": {
    image: "images/can-2025-drapeaux/km.png",
    groupe: "1",
    entraineur: "Stefano Cusin",
    capitaine: "El Fardou Ben"
  },

  "egypte": {
    image: "images/can-2025-drapeaux/eg.png",
    groupe: "2",
    entraineur: "Rui Vitória",
    capitaine: "Mohamed Salah"
  },
  "angola": {
    image: "images/can-2025-drapeaux/ao.png",
    groupe: "2",
    entraineur: "Pedro Gonçalves",
    capitaine: "Gelson Dala"
  },
  "afrique du sud": {
    image: "images/can-2025-drapeaux/za.png",
    groupe: "2",
    entraineur: "Hugo Broos",
    capitaine: "Ronwen Williams"
  },
  "zimbabwe": {
    image: "images/can-2025-drapeaux/zw.png",
    groupe: "2",
    entraineur: "Sunday Chidzambwa",
    capitaine: "Marshall Munetsi"
  },

  "nigeria": {
    image: "images/can-2025-drapeaux/ng.png",
    groupe: "3",
    entraineur: "Finidi George",
    capitaine: "William Troost-Ekong"
  },
  "tunisie": {
    image: "images/can-2025-drapeaux/tn.png",
    groupe: "3",
    entraineur: "Montasser Louhichi",
    capitaine: "Yassine Meriah"
  },
  "ouganda": {
    image: "images/can-2025-drapeaux/ug.png",
    groupe: "3",
    entraineur: "Micho Sredojević",
    capitaine: "Khalid Aucho"
  },
  "tanzanie": {
    image: "images/can-2025-drapeaux/tz.png",
    groupe: "3",
    entraineur: "Adel Amrouche",
    capitaine: "Mbwana Samatta"
  },

  "sénégal": {
    image: "images/can-2025-drapeaux/sn.png",
    groupe: "4",
    entraineur: "Aliou Cissé",
    capitaine: "Sadio Mané"
  },
  "rd congo": {
    image: "images/can-2025-drapeaux/cd.png",
    groupe: "4",
    entraineur: "Sébastien Desabre",
    capitaine: "Chancel Mbemba"
  },
  "bénin": {
    image: "images/can-2025-drapeaux/bj.png",
    groupe: "4",
    entraineur: "Gernot Rohr",
    capitaine: "Cédric Hountondji"
  },
  "botswana": {
    image: "images/can-2025-drapeaux/bw.png",
    groupe: "4",
    entraineur: "Didier Gomes da Rosa",
    capitaine: "Thatayaone Ditlhokwe"
  },

  "algérie": {
    image: "images/can-2025-drapeaux/dz.png",
    groupe: "5",
    entraineur: "Vladimir Petković",
    capitaine: "Ismaël Bennacer"
  },
  "guinée équatoriale": {
    image: "images/can-2025-drapeaux/gq.png",
    groupe: "5",
    entraineur: "Juan Micha",
    capitaine: "Emilio Nsue"
  },
  "burkina faso": {
    image: "images/can-2025-drapeaux/bf.png",
    groupe: "5",
    entraineur: "Bruno Metsu Jr (intérim)",
    capitaine: "Edmond Tapsoba"
  },
  "soudan": {
    image: "images/can-2025-drapeaux/sd.png",
    groupe: "5",
    entraineur: "James Kwesi Appiah",
    capitaine: "Salaheldin Bakhit"
  },

  "côte d’ivoire": {
    image: "images/can-2025-drapeaux/ci.png",
    groupe: "6",
    entraineur: "Emerse Faé",
    capitaine: "Franck Kessié"
  },
  "cameroun": {
    image: "images/can-2025-drapeaux/cm.png",
    groupe: "6",
    entraineur: "Marc Bryce",
    capitaine: "Vincent Aboubakar"
  },
  "gabon": {
    image: "images/can-2025-drapeaux/ga.png",
    groupe: "6",
    entraineur: "Thierry Boukambou",
    capitaine: "Denis Bouanga"
  },
  "mozambique": {
    image: "images/can-2025-drapeaux/mz.png",
    groupe: "6",
    entraineur: "Chiquinho Conde",
    capitaine: "Reinildo Mandava"
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

// Élément HTML où s'affiche le compte à rebours
const countdownElement = document.getElementById("timer");

// Exécution de la fonction toutes les secondes
const interval = setInterval(() => {
    const now = new Date().getTime();   //recupere la date actuelle
    
    // Calcule la différence entre la date cible et la date actuelle
   const diff = targetDate - now;

   // Si la date cible est atteinte ou dépassée
    if (diff <= 0) {
    clearInterval(interval);// Stoppe le compte à rebours
    countdownElement.innerHTML = "Bienvenue à la CAN édition 2025 au Maroc !";
    return;
    }

    // Conversion de la différence en jours, heures, minutes, secondes
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

     // Affiche le résultat dans l'élément HTML
     const pad = (n) => (n < 10 ? "0" + n : n);
    countdownElement.innerHTML =
    `${pad(days)}j ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}, 1000);  // Répète toutes les 1000 ms (1 seconde)

//permettre le clignotement du temps restant sur la page d'accueil
// Récupère l’élément HTML avec l’ID 'timer'
const element = document.getElementById('timer');
let visible = true; // Variable d’état : indique si l’élément est actuellement visible

// Fonction pour alterner la visibilité de l’élément
function toggleVisibility() {
  // Bascule la valeur de 'visible' (true <-> false)
    visible = !visible;
    // Applique l’opacité : 1 (visible) ou 0 (invisible)
    element.style.opacity = visible ? '1' : '0';
    
    //  changer de couleur de fond
    if (visible) {
        //element.textContent = "Me revoilà !";
        element.style.backgroundColor = "#4CAF50";
    } else {
        //element.textContent = "Je disparais...";
        //element.style.backgroundColor = "#f44336";
    }
}

// Démarrer l'animation toutes les 1 seconde
setInterval(toggleVisibility, 1000); // 1000 ms = 1 seconde
