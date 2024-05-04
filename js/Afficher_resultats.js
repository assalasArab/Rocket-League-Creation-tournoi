$(document).ready(function () {
    loadstorage();
    function loadstorage() {
        var Matchs = JSON.parse(sessionStorage.getItem('Resultats')) || [];
        var slectresultat = $('#matchSelect');
        Matchs.forEach(function (Match,index) {
            slectresultat.append($('<option>').val(index).text(Match.joueur1 + ' contre ' + Match.joueur2));    
        });

    }
})


$("#matchSelect").change(function (event) {
    var Resultat = JSON.parse(sessionStorage.getItem('Resultats')) || [];
    var h = $('#infoh3');
    var p = $('#infop');
    if($(this).val()!="base"){
        h.text("Résultat du match : " + Resultat[$(this).val()].score) ;
        p.text( "Joueurs : " + Resultat[$(this).val()].joueur1 + " vs " + Resultat[$(this).val()].joueur2);
    }
})
