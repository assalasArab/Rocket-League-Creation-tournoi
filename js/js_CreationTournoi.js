// Chemins des images correspondant à chaque option pour les terrains
var terrainImages = {
    standard: '../DATA/4.jpg',
    neotokyo: '../DATA/tokyo.jpg',
    wasteland: '../DATA/3.jpg',
    urban_central: '../DATA/urban_central.png',
    beckwith_park: '../DATA/beckwith_park.png',
    aquadome: '../DATA/aquadome.jpg',
    mannfield: '../DATA/4.jpg'
};

// Chemins des images correspondant à chaque option pour les modes de jeu
var modeImages = {
    selection: '   ',
    Classique: '../DATA/clsq.jpg',
    Rumble: '../DATA/rmbl.jpg',
    Basket: '../DATA/bskt.jpg'
};

// JavaScript pour mettre à jour l'image en fonction de l'option sélectionnée
document.addEventListener("DOMContentLoaded", function () {
    var nameselect = document.getElementById('nommatch')
    var terrainSelect = document.getElementById('terrain');
    var terrainImage = document.getElementById('terrain-image');
    var modeSelect = document.getElementById('mode');
    var modeImage = document.getElementById('mode-image');

    terrainSelect.addEventListener('change', function () {
        var selectedOption = this.options[this.selectedIndex].value;
        terrainImage.src = terrainImages[selectedOption];
    });

    modeSelect.addEventListener('change', function () {
        var selectedOption = this.options[this.selectedIndex].value;
        modeImage.src = modeImages[selectedOption];
    });

});
///////////////////////////////SLIDE//////////////////
// JavaScript pour le diaporama
$(document).ready(function () {
    // Ouvrir/fermer le diaporama lorsqu'un tournoi est enregistré
    $(".create-button").click(function (event) {
        event.preventDefault();
        // Capturer les informations du tournoi
        var joueur1Tournoi = $("#joueur1").val();
        var joueur2Tournoi = $("#joueur2").val();
        var dateTournoi = $("#date").val();
        var CommentateurTournoi = $("#Commentateurs").val();
        var modeTournoi = $("#mode").val();
        var terrainTournoi = $("#terrain").val();
        if (joueur1Tournoi && joueur2Tournoi && dateTournoi && CommentateurTournoi && modeTournoi!="selection" && terrainTournoi!='selection'){
            if(joueur1Tournoi!=joueur2Tournoi){
                var Match=JSON.parse(sessionStorage.getItem("Match")) || [];
                Match.push({
                    joueur1: joueur1Tournoi,
                    joueur2: joueur2Tournoi,
                    date: dateTournoi,
                    commentateur:CommentateurTournoi,
                    mode:modeTournoi,
                    terrain:terrainImages
                });
                sessionStorage.setItem("Match", JSON.stringify(Match));

                alert("Enregistrement match réussi!");

            // Générer le contenu HTML pour afficher les informations du tournoi
            var tournoiHTML = "<div class='tournoi'>";
            tournoiHTML += "<p><h3 class='nom-tournoi'><strong>joueur1:</strong> " + joueur1Tournoi + "</h3></p>";
            tournoiHTML += "<p><h3 class='nom-tournoi'><strong>joueur2:</strong> " + joueur2Tournoi + "</h3></p>";
            tournoiHTML += "<p><h3 class='nom-tournoi'><strong>Commentateur:</strong> " + CommentateurTournoi + "</h3></p>";
            tournoiHTML += "<p><h3 class='date-tournoi'><strong>Date du Tournoi :</strong> " + dateTournoi + "</h3></p>";
            tournoiHTML += "<p><h3 class='mode-tournoi'><strong>Mode de jeu :</strong> " + modeTournoi + "</h3></p>";
            tournoiHTML += "<p><h3 class='terrain-tournoi'><strong>Terrain :</strong> " + terrainTournoi + "</h3></p>";

            // Ajouter le bouton menant vers le lien
            tournoiHTML += "<a href='../HTML/RentrerScore.html' class='create-button'>Resultats</a>"

            tournoiHTML += "<p><h3><strong>            </strong></h3></p>";
            tournoiHTML += "</div>";

            // Ajouter le contenu HTML à la diapositive
            $(".slideshow").append(tournoiHTML);

            // Ouvrir le diaporama
            $("#slideshow").addClass("active");

            // Réinitialiser les champs du formulaire après avoir créé un tournoi
            $("#nommatch").val("");
            $("#date").val("");
            $("#mode").val("selection");
            $("#terrain").val("selection");
        }
        else{
            alert("Un joueur ne peut pas s'affonter lui-meme");
        }
    }

        else{
            alert("Tous les champs n'ont pas été completés");
        }
    });


    
});





