var carouselIndex = 1;
function carouselSlide() {
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
function navAnimate() {
	if (!$('.nav').hasClass('nav--home')) {

		$(window).scroll(function() {
			console.log("fire");
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

function submitMsg() {

}

var chatIndex = 1;
function sendMsg() {
	console.log(chatIndex);
	var chatCurrent = $('.chat__form:nth-child(' + chatIndex + ')');
	if (chatIndex == 5) {
		console.log("chat 5");
		submitMsg();
	} else {
		var chatNext = $('.chat__form:nth-child(' + (chatIndex + 1) + ')');
		chatIndex++;
		chatCurrent.children('.chat__question').addClass('hidden--up');
		chatCurrent.children('.chat__answer').addClass('hidden--fade');
		setTimeout(function() {
			chatCurrent.hide();
			chatCurrent.children('.chat__question').removeClass('hidden--up');
			chatCurrent.children('.chat__answer').removeClass('hidden--fade');
			console.log("chat inactive");
			setTimeout(function() {
				chatNext.show('fade', 500);
				console.log("next show");
				this.$('.chat__input').focus();
			}, 200);
		}, 800);
	}
}

function resetMsg() {
	console.log("reset msg");
	chatIndex = 1;
	$('.chat__form').hide();
	var chatFirst = $('.chat__form:nth-child(' + chatIndex + ')');
	chatFirst.children('.chat__question').removeClass('hidden--up');
	chatFirst.children('.chat__answer').removeClass('hidden--fade');
	chatFirst.show('fade', 1000);
	$('.chat__input').val("");
	$('.chat__input').focus();
}

$(document).ready(function() {
	navAnimate();
	$('.nav__work, .nav__mobile, .intro__more').click(function() {
		$('body').addClass('noscroll');
		$('.work').show('fade', 500);
		$('.work__menu').addClass('work--active');
	});
	$('.intro__chat').click(function() {
		$('body').addClass('noscroll');
		$('.nav__bar:nth-child(1)').addClass('rotate--clockwise');
		$('.nav__bar:nth-child(2)').addClass('rotate--counterclockwise');
		$('.chat').show('fade', 500);
		resetMsg();
		$('.nav').addClass('menu--active');
		$('.nav__menu').addClass("clicked--once");
	});

	$('.chat__input').keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			sendMsg();
		}
	});
	$('.nav__menu').click(function() {
		if ($(this).hasClass('clicked--once')) {
			$('.nav__bar:nth-child(1)').removeClass('rotate--clockwise');
			$('.nav__bar:nth-child(2)').removeClass('rotate--counterclockwise');
			if ($('.work__menu').hasClass('work--active')) {
				$('.work__menu').removeClass('work--active');
				$('.work').hide('fade', 500);
				$('.chat').hide('fade', 500);
			} else {
				$('.chat').hide('fade', 500);
			};
			$('body').removeClass('noscroll');
			setTimeout(function() {
				$('.nav').removeClass('menu--active');				
			}, 300);
			$(this).removeClass('clicked--once');
		} else {
			$(this).addClass("clicked--once");
			$('.nav__bar:nth-child(1)').addClass('rotate--clockwise');
			$('.nav__bar:nth-child(2)').addClass('rotate--counterclockwise');
			$('body').addClass('noscroll');
			$('.work').show('fade', 500);
			$('.work__menu').addClass('work--active');
			$('.nav').addClass('menu--active');
		}
	});

	$('.work__close').click(function() {
		$('.work__menu').removeClass('work--active');
		$('.work').hide('fade', 500);
		$('body').removeClass('noscroll');
	});
	$('.chat__close').click(function() {
		$('.chat').hide('fade', 500);
		$('body').removeClass('noscroll');
	});

	Pace.on('done', function() {
		function contentReady() {
			$('.nav--preload').show('fade', 1000);
			$('.footer--preload').show('fade', 1000);
			$('.intro').addClass('intro--ready');
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

// $(document).bind(
// 	'touchmove',
// 	function(e) {
// 		e.preventDefault();
// 	}
// );



