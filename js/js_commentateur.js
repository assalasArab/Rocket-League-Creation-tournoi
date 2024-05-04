affichercomment();
$(document).ready(function() {
  $("#inscription-form").submit(function(event) {
    event.preventDefault();

    var nom = $("#nom").val().trim();
    var prenom = $("#prenom").val().trim();

    var isValid = true;

    if (nom === "" || prenom === "") {
      $("#nom-error").text("Le nom et le prénom sont obligatoires.");
      isValid = false;
    }

    if (!/^[A-Za-z]+$/.test(prenom)) {
      $("#nom-error").text("Le prénom ne peut contenir que des lettres.");
      isValid = false;
    }
    if (!/^[A-Za-z]+$/.test(nom)) {
      $("#nom-error").text("Le prénom ne peut contenir que des lettres.");
      isValid = false;
    }
    if (isValid) {
      $("#nom-error").text("");

      // Retrieve existing commentator data from local storage (if any)
      var commentateurs = JSON.parse(sessionStorage.getItem("commentateurs")) || [];

      // Add new commentator to the array
      commentateurs.push({
        nom:nom,
        prenom:prenom
      });

      // Update local storage with the updated commentator array
      sessionStorage.setItem("commentateurs", JSON.stringify(commentateurs));


      affichercomment();
    }
  });
});
function affichercomment() {
  // Sélectionne l'élément où les joueurs seront affichés
  var listeJoueurs = document.getElementById("commentateurs");

  // Vide l'élément pour éviter d'afficher les joueurs en double
  listeJoueurs.innerHTML = "";

  // Récupérer la liste des joueurs depuis le sessionStorage
  var joueursListe = JSON.parse(sessionStorage.getItem('commentateurs')) || [];

  // Affiche chaque joueur dans la liste des joueurs
  joueursListe.forEach(function (commentateurs, index) {
      var joueurDiv = document.createElement("div");
      joueurDiv.innerHTML = "<strong>Joueur " + (index + 1) + "</strong><br>" +
          "Nom: " + commentateurs.nom + " " + commentateurs.prenom + "<br><br>" 

      listeJoueurs.appendChild(joueurDiv);
  });
}
