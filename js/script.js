$(document).ready(function() {
	$('.nav__work').click(function() {
		$('body').addClass('noscroll');
		$('.work').show("fade", 500);
	})

	$('.work__close').click(function() {
		$('.work').hide("fade", 500);
		$('body').removeClass('noscroll');
	})

	$('.main__close').click(function() {
		$('.main').hide("fade", 500);
		$('.page').removeClass('noscroll');
	})

	if ($('body').hasClass('pace-done')) {
		console.log("pace done");
		$('.intro').addClass('intro--ready')
		$('.intro__content').addClass('intro--active');
	}

	var breakpoint = 960;
	if($(window).width() > breakpoint) {
		$(window).scroll(function() {
			previousTop: 0
			var currentTop = $(window).scrollTop();
			if (currentTop < this.previousTop) {
				if(currentTop > 0 && $('.nav').hasClass('nav--fixed')) {
					$('.nav').removeClass('nav--hidden');
					$('.nav').addClass('nav--active');
					$('.nav__item').addClass('transition--subtle');
				} else {
					$('.nav').removeClass('nav--active nav--fixed nav--hidden');
				}
			} else {
				$('.nav__item').removeClass('transition--subtle');
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

$(window).load(function() {
    Pace.on('done', function() {
    	var contentReady = function() {
			$('.nav--preload').show("fade", 1500);
			$('.footer--preload').show("fade", 1500);
			$('.intro').addClass('intro--ready');
			$('.intro__content').addClass('intro--active');
			$('.project').addClass('project--active');
			$('.hero').addClass('hero--active');
    	};
		$('.cover--preload').show("fade", 1000);
		if ($('.cover').hasClass('cover--preload')) {
			setTimeout(contentReady, 300);
			console.log('preload');
		} else {
			contentReady();
			console.log('content');
		}
    });
})