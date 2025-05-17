//envoie du formulaire 
function envoyezFormulaire() {
   // Récupération des valeurs des champs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("commentaires").value;
    
    //alert("Nom : " + name + "\nEmail : " + email + "\nMessage : " + message);
    
    if (!name || !email || !message) {
        alert("Veuillez remplir tous les champs avant d’envoyer.");
        return;
    }


    // Regex pour valider l'adresse e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return;
    }

    // Affichage d’un message de remerciement
    alert("Merci pour votre commentaire ...");
    // Réinitialisation du formulaire
    document.getElementById("comm-form").reset();
}