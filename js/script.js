$(document).ready(function() {
	$('.nav__work').click(function() {
		$('.page').addClass('noscroll');
		$('.page').addClass('noscroll');
		$('.work').show();
	})
	$('.work__close').click(function() {
		$('.work').hide();
		$('.page').removeClass('noscroll');
	})
})