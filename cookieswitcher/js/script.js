var carouselIndex = 1;
var carouselSlide = function() {
	var carouselCurrent = $('.carousel__item:nth-child(' + carouselIndex + ')');
	if (carouselIndex == 8) {
		var carouselNext = $('.carousel__item:nth-child(1)');
		carouselIndex = 1;
	} else {
		var carouselNext = $('.carousel__item:nth-child(' + (carouselIndex + 1) + ')');
		carouselIndex++;
	}
	carouselNext.removeClass('carousel--inactive');
	setTimeout(function() {
		carouselCurrent.addClass('carousel--hidden');
		carouselNext.addClass('carousel--active');
		setTimeout(function() {
			carouselCurrent.addClass('carousel--inactive');
			setTimeout(function() {
				carouselCurrent.removeClass('carousel--hidden carousel--active');
			}, 0);
		}, 1200);
	}, 0);
}

var breakpoint = 960;
var windowSize = $(window).width();
var navAnimate = function() {
	if (!$('.nav').hasClass('nav--home')) {
		$(window).scroll(function() {
			if ($(this).width() > breakpoint) {
				previousTop: 0;
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
			}
		});
		$(window).resize(function() { 
			if ($(this).width() < breakpoint) {
				$('.nav').removeClass('nav--active nav--fixed nav--hidden');
			}
		});
	}
}

$(document).ready(function() {

	navAnimate();

	$('.nav__work, .intro__more').click(function() {
		$('body').addClass('noscroll');
		$('.work').show('fade', 500);
		$('.work__menu').addClass('work--active');
	});

	$('.work__close').click(function() {
		$('.work__menu').removeClass('work--active');
		$('.work').hide('fade', 500);
		$('body').removeClass('noscroll');
	});

	$('.main__close').click(function() {
		$('.main').hide('fade', 500);
		$('.page').removeClass('noscroll');
	});
	Pace.on('done', function() {
		var contentReady = function() {
			$('.nav--preload').show('fade', 1000);
			$('.footer--preload').show('fade', 1000);
			$('.intro').addClass('intro--ready');
			if ($(window).width() < 960) {
				$('.more').show('fade', 1000);	
			}
			$('.intro__content').addClass('intro--active');
			$('.project').addClass('project--active');
		};
		$('.carousel--preload').show('fade', 1000);
		if ($('.carousel').hasClass('carousel--preload')) {
			setTimeout(contentReady, 200);
		} else {
			contentReady();
		}
		setInterval(function() {
			carouselSlide();
		}, 4000);
	});
});

$(window).resize(function() {
	windowSize = $(window).width();
	if (windowSize > breakpoint) {
		$('.more').hide();
		$('.nav').removeClass('nav--mobile');
	} else {
		$('.more').show();
		$('.nav').addClass('nav--mobile');
	}
});



