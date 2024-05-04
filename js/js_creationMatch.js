$(document).ready(function () {
    loadstorage();
    function loadstorage() {
        var commentateurs = JSON.parse(sessionStorage.getItem('commentateurs')) || [];
        var selectcomment = $('#Commentateurs');
        commentateurs.forEach(function (commentateur) {
            selectcomment.append($('<option>').val(commentateur.nom + ' ' + commentateur.prenom).text(commentateur.nom + ' ' + commentateur.prenom));
        });

    }
})
$(document).ready(function () {
    loadsName();
    function loadsName() {
        var Joueurs = JSON.parse(sessionStorage.getItem('Joueurs')) || [];
        var selectjoueur1 = $('#joueur1');
        var selectjoueur2 = $('#joueur2');
        var selectgenre = $('#genre').val();
        selectjoueur1.empty(); // Vider le menu déroulant avant d'ajouter de nouvelles équipes
        selectjoueur2.empty();
        Joueurs.forEach(function (joueur) {
            if (joueur.genre === selectgenre) {
                selectjoueur1.append($('<option>').val(joueur.nom + ' ' + joueur.prenom).text(joueur.nom + ' ' + joueur.prenom));
                selectjoueur2.append($('<option>').val(joueur.nom + ' ' + joueur.prenom).text(joueur.nom + ' ' + joueur.prenom));

            }
        });
    }

    $('#genre').change(function () {
        loadsName();
    })


})



