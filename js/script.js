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
  