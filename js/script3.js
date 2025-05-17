/* #index{

}
#actualites
#histoire
#calendrier
#pays
#classement */

//envoie du formulaire 
function envoyezFormulaire() {
   // Récupération des valeurs des champs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("commentaires").value;
    
    //alert("Nom : " + name + "\nEmail : " + email + "\nMessage : " + message);
    
    alert("Merci pour votre commentaire ...");
    // Optionnel : vider les champs après l'envoi
    document.getElementById("comm-form").reset();
}