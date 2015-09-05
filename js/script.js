$(document).ready(function() {
	$('.nav__work').click(function() {
		$('body').addClass('noscroll');
		$('.work').show("fade", 500);
		// $('.work').slideDown();
		// $('.work').addClass('work--active');
	})


	$('.work__close').click(function() {
		$('.work').hide("fade", 500);
		// $('.work').slideUp();
		// $('.work').removeClass('work--active');
		$('body').removeClass('noscroll');
	})

	$('.main__close').click(function() {
		$('.main').hide("fade", 500);
		$('.page').removeClass('noscroll');
	})

	var breakpoint = 960;
	// if($(window).width() > breakpoint) {
	// 	$(window).scroll(function() {
	// 		previousTop: 0
	// 		var currentTop = $(window).scrollTop();
	// 		if (currentTop < this.previousTop) {
	// 			if (currentTop > 0 && $('.nav').hasClass('nav--fixed')) {
	// 				$('.nav--fixed').show("fade", 500);
	// 			} else {
	// 				$('.nav').removeClass('nav--fixed');
	// 			}
	// 		} else {
	// 			// $('.nav--fixed').hide();

	// 			if (currentTop > 60 && !$('.nav').hasClass('nav--fixed')) {
	// 				$('.nav').addClass('nav--fixed');
	// 			$('.nav--fixed').hide("fade", 500);
	// 			}
				
	// 		} 
	// 		this.previousTop = currentTop;
	// 	})
	// }
	if($(window).width() > breakpoint) {
		$(window).scroll(function() {
			previousTop: 0
			var currentTop = $(window).scrollTop();
			if (currentTop < this.previousTop) {
				if(currentTop > 0 && $('.nav').hasClass('nav--fixed')) {
					$('.nav').removeClass('nav--hidden');
					$('.nav').addClass('nav--active');
				} else {
					$('.nav').removeClass('nav--active nav--fixed nav--hidden');
				}
			} else {
				$('.nav').removeClass('nav--active');
				if(currentTop > 60 && !$('.nav').hasClass('nav--fixed')) {
					$('.nav').addClass('nav--fixed');
					$('.nav').addClass('nav--hidden');
				}
			} 
			this.previousTop = currentTop;
		})
	}
})