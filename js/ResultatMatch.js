$(document).ready(function () {
    loadstorage();
    function loadstorage() {
        var Matchs = JSON.parse(sessionStorage.getItem('Match')) || [];
        var slectmatch = $('#matchSelect');
        Matchs.forEach(function (Match,index) {
            slectmatch.append($('<option>').val(index).text(Match.joueur1 + ' contre ' + Match.joueur2));
        });

    }
})

$(".create-button").click(function (event) {
    event.preventDefault();
    var score = $("#score").val();
    var select = $("#matchSelect").val();
    var resultat=JSON.parse(sessionStorage.getItem("Resultats")) || [];
    var Match=JSON.parse(sessionStorage.getItem("Match")) || [];
    resultat.push({
        joueur1:Match[select].joueur1,
        joueur2:Match[select].joueur2,
        date: Match[select].date,
        score:score
    });
    sessionStorage.setItem("Resultats", JSON.stringify(resultat));
    alert("enregistrement des résultats  réussie!");
})