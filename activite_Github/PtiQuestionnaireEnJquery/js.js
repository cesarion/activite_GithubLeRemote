$(function(){

// $('#reponse1').hide();
// $('#reponse2').hide();
// $('#reponse3').hide();

$('a').mouseover(function(){
////////////////  ********************** //////////////////////////


	if ($('.container').find('input[id=r1]').is(':checked')){
		$('#img1').hide();
		$('#imga1').show();
		$('#reponse1').hide().css('color', '#27ae60').slideDown();
	}
	else{
		$('#img1').hide();
		$('#imgb1').show();
		$('#reponse1').show().css('color', '#c0392b');
	}

////////////////  ********************** //////////////////////////

	if ($('.container').find('input[id=r5]').is(':checked')){
		$('#img2').hide();
		$('#imga2').show();
		$('#reponse2').show().css('color', '#27ae60');
	}
	else{
		$('#img2').hide();
		$('#imgb2').show();
		$('#reponse2').show().css('color', '#c0392b');
	}

////////////////  ********************** //////////////////////////

	if ($('.container').find('input[id=r8]').is(':checked')){
		$('#img3').hide();
		$('#imga3').show();
		$('#reponse3').show().css('color', '#27ae60');
	}
	else{
		$('#img3').hide();
		$('#imgb3').show();
		$('#reponse3').show().css('color', '#c0392b');
	}
	
////////////////  ********************** //////////////////////////

});



});
