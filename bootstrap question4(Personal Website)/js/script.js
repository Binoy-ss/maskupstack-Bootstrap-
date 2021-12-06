//menu button-> X 
$(document).ready(function(){

	$('#menu').click(function(){
		$(this).toggleClass('fa-times');
		$('header').toggleClass('toggle');
	});

	$(window).on('scroll load',function(){
		$('#menu').removeclass('fa-times');
		$('header').removeClass('toggle');



	});

	
// smoot scrolling


$('a[href*="#"]').('click',function(e){
	
	e.preventDefault();

	$('html,body').animate({
		scrollTOp :$($(this).atte('href')).offset().top,

	},
	  500,
	  'linear'


	);

});




});


