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

      alert("Inscription réussie! Nom et prénom enregistrés.");
    }
  });
});
