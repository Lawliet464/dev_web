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