$(function(){

	//Je crée mes variables de style qui proviendront de la division contrôles :

	var couleurFond = $("select[id=couleurFond] option:selected").val();
	var calibreTexte = $("select[id=texte] option:selected").val();
    var policeTexte = $("select[id=police] option:selected").val();
	//var policePremierePhrase = $("select[id=police] option:selected").val());

	//Les application au div contenu :

	$('#contenu').css('background-color', couleurFond);
	$('#contenu').css('font-weight', calibreTexte);
	$('#contenu').css('font-family', policeTexte);

});
