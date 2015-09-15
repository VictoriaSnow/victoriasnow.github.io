var carouselIndex = 1;
var carouselContainer = $('.carousel__container');
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
	console.log("inactive removed");
	setTimeout(function() {
		carouselCurrent.addClass('carousel--hidden');
		carouselNext.addClass('carousel--active');
		setTimeout(function() {
			carouselCurrent.addClass('carousel--inactive');
			setTimeout(function() {
				carouselCurrent.removeClass('carousel--hidden carousel--active');
			}, 0);
		}, 500);
	}, 0);
}

$(document).ready(function() {
	setInterval(function() {
		carouselSlide();
	}, 3000);
	$('.nav__work').click(function() {
		$('body').addClass('noscroll');
		$('.work').show('fade', 500);
		$('.work__menu').addClass('work--active');
	})

	$('.work__close').click(function() {
		$('.work__menu').removeClass('work--active');
		$('.work').hide('fade', 500);
		$('body').removeClass('noscroll');
	})

	$('.main__close').click(function() {
		$('.main').hide('fade', 500);
		$('.page').removeClass('noscroll');
	})

	if ($('body').hasClass('pace-done')) {
		console.log('pace done');
		$('.intro').addClass('intro--ready')
		$('.intro__content').addClass('intro--active');
	}

	if ($('.nav').hasClass('nav--dark')) {
		var breakpoint = 960;
		if ($(window).width() > breakpoint) {
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
	}
})

$(window).load(function() {
    Pace.on('done', function() {
    	var contentReady = function() {
			$('.nav--preload').show('fade', 1500);
			$('.footer--preload').show('fade', 1500);
			$('.intro').addClass('intro--ready');
			$('.intro__content').addClass('intro--active');
			$('.project').addClass('project--active');
			$('.hero').addClass('hero--active');
    	};
		$('.carousel--preload').show('fade', 1000);
		if ($('.carousel').hasClass('carousel--preload')) {
			setTimeout(contentReady, 200);
			console.log('preload');
		} else {
			contentReady();
		}
    });
})