afficherplayer();
$(document).ready(function () {
    $("#inscription-form").submit(function (event) {
        event.preventDefault();

        var nom = $("#nom").val().trim();
        var prenom = $("#prenom").val().trim();
        var genre = $("#genre").val().trim();
        var isValid = true;
        if (genre === "genre") {
            alert("Selectionne le Genre stp");
            isValid = false;
        }

        if (nom === "" || prenom === "") {
            alert("Le nom et le prénom sont obligatoires.");
            isValid = false;
        }

        if (!/^[A-Za-z]+$/.test(prenom)) {
            alert("Le prénom ne peut contenir que des lettres.");
            isValid = false;
        }
        if (!/^[A-Za-z]+$/.test(nom)) {
            alert("Le prénom ne peut contenir que des lettres.");
            isValid = false;
        }
        if (isValid) {
            $("#nom-error").text("");
            var Joueurs = JSON.parse(sessionStorage.getItem("Joueurs")) || []
            Joueurs.push({
                nom: nom,
                prenom: prenom,
                genre: genre
            });

            // Update local storage with the updated commentator array
            sessionStorage.setItem("Joueurs", JSON.stringify(Joueurs));
            afficherplayer();

        }
    });
});
function afficherplayer() {
    // Sélectionne l'élément où les joueurs seront affichés
    var listeJoueurs = document.getElementById("player");
  
    // Vide l'élément pour éviter d'afficher les joueurs en double
    listeJoueurs.innerHTML = "";
  
    // Récupérer la liste des joueurs depuis le sessionStorage
    var joueursListe = JSON.parse(sessionStorage.getItem('Joueurs')) || [];
  
    // Affiche chaque joueur dans la liste des joueurs
    joueursListe.forEach(function (joueur, index) {
        var joueurDiv = document.createElement("div");
        joueurDiv.innerHTML = "<strong>Joueur " + (index + 1) + "</strong><br>" +
            "Nom: " + joueur.nom + " " + joueur.prenom  +  "<br> genre: " +joueur.genre + "<br><br>" 
  
        listeJoueurs.appendChild(joueurDiv);
    });
  }
  
