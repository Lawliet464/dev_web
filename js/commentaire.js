function addCommentaire() {
    // Get the message of the new commentaire
    let commentaire = document.getElementById("new_commentaire");
    // If the user has left a commentaire, display a pop-up
    if (commentaire.value != null && commentaire.value.trim() != "") {
        console.log("New commentaire added");
        //Call showPopup here
        showPopup(true);
        // Create a new 'commentaire' element and set it's value to the user's message
        var element = document.createElement("div");
        element.setAttribute("class","commentaire");
        var name = document.getElementById("name").value;
        var continent = document.getElementById("continent").value;
        element.innerHTML = "\<span\>&#8220;\</span\>" + commentaire.value;
        element.innerHTML += "<br><b>- " + name + " (" + continent + ")</b>"  + "\<span\>&#8221;\</span\>";
        /* element.innerHTML += "<br><span class='name'>"+ name + "</span>";
        element.innerHTML += "<span class='continent'>"+ continent + "</span>";
         */// Add this element to the end of the list of commentaires
        document.getElementById("all_commentaires").appendChild(element); 
        
        // Reset the value of the textarea
        commentaire.value = "";
    }
}

function showPopup(bool) {
    if (bool) {
        document.getElementById('popup').style.visibility = 'visible'
    } else {
        document.getElementById('popup').style.visibility = 'hidden'
    }
}