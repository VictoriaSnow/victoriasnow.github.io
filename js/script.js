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

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function submitForm() {
	var name = $('#name').val();
	var topic = $('#topic').val();
	var details = $('#details').val();
	var email = $('#email').val();	
	var comments = $('#comments').val();
    if ((name !== "") && (topic !== "") && (details !== "") && (email !== "") && (validateEmail(email))) {
        $.ajax({
            url: "https://docs.google.com/forms/d/1OVK0vTGsyEXaoeu-UspWhzZV0g67JAxtZsJF9KVGsqs/formResponse",
            data: {"entry.786838171" : name, "entry.1926658953" : topic, "entry.1794396059": details, "entry.1622086121" : email, "entry.1575326303" : comments},
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function (){
                    $('#name').val("");
                    $('#topic').val("");                  
                    $('#details').val("");
                    $('#email').val("");
                    $('#comments').val("");
                },
                200: function (){
                    $('#name').val("");
                    $('#topic').val("");                  
                    $('#details').val("");
                    $('#email').val("");
                    $('#comments').val("");
                }
            }
        });
    }
    else {

    }
}

var chatIndex = 1;
function sendMsg() {
	console.log(chatIndex);
	var chatCurrent = $('.chat__form:nth-child(' + chatIndex + ')');
	if (chatIndex <= 5 ) {
		var chatNext = $('.chat__form:nth-child(' + (chatIndex + 1) + ')');
		chatIndex++;
		chatCurrent.children('.chat__question').addClass('hidden--up');
		chatCurrent.children('.chat__answer').addClass('hidden--fade');
		setTimeout(function() {
			chatCurrent.hide();
			chatCurrent.children('.chat__question').removeClass('hidden--up');
			chatCurrent.children('.chat__answer').removeClass('hidden--fade');
			setTimeout(function() {
				if (chatIndex == 2) {
					$('.chat__placeholder').text($('#name').val());
				};
				chatNext.show('fade', 500);
				this.$('.chat__input').focus();
			}, 200);
		}, 800);
	}
	if (chatIndex == 6) {
		submitForm();
	};
}

function resetMsg() {
	chatIndex = 1;
	$('.chat__form').hide();
	var chatFirst = $('.chat__form:nth-child(' + chatIndex + ')');
	chatFirst.children('.chat__question').removeClass('hidden--up');
	chatFirst.children('.chat__answer').removeClass('hidden--fade');
	chatFirst.show('fade', 1000);
	$('.chat__input').val("");
	$('.chat__input').focus();
	$('.chat__placeholder').text("");
}

function openMenu() {
	$('.nav__bar:nth-child(1)').addClass('rotate--clockwise');
	$('.nav__bar:nth-child(2)').addClass('rotate--counterclockwise');
}

function closeMenu() {
	$('.nav__bar:nth-child(1)').removeClass('rotate--clockwise');
	$('.nav__bar:nth-child(2)').removeClass('rotate--counterclockwise');
}

$(document).ready(function() {
	navAnimate();
	$('.nav__work, .nav__mobile, .intro__more').click(function() {
		$('body').addClass('overflow--hidden');
		$('html').addClass('overflow--hidden');
		$('.work').show('fade', 500);
		$('.work__menu').addClass('work--active');
		$('.nav').addClass('menu--active');
		openMenu();
	});
	$('.intro__chat').click(function() {
		$('body').addClass('overflow--hidden');
		$('html').addClass('overflow--hidden');
		openMenu();
		$('.chat').show('fade', 500);
		resetMsg();
		$('.nav').addClass('menu--active');
		$('.nav__menu').addClass("clicked--once");
	});

	$('.chat__input').keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			var inputValue = $(this).val();
			if ((chatIndex != 5) && (inputValue == "")) {
				$('.chat__input').addClass('input--error');
			} else {
				sendMsg();
			};
		} else {
			$('.chat__input').removeClass('input--error');
		}
	});
	$('.nav__menu').click(function() {
		if ($(this).hasClass('clicked--once')) {
			closeMenu();
			if ($('.work__menu').hasClass('work--active')) {
				$('.work__menu').removeClass('work--active');
				$('.work').hide('fade', 500);
				$('.chat').hide('fade', 500);
			} else {
				$('.chat').hide('fade', 500);
			};
			$('body').removeClass('overflow--hidden');
			$('html').removeClass('overflow--hidden');			
			setTimeout(function() {
				$('.nav').removeClass('menu--active');				
			}, 300);
			$(this).removeClass('clicked--once');
		} else {
			$(this).addClass("clicked--once");
			openMenu();
			$('body').addClass('overflow--hidden');
			$('html').addClass('overflow--hidden');
			$('.work').show('fade', 500);
			$('.work__menu').addClass('work--active');
			$('.nav').addClass('menu--active');
		}
	});

	$('.work__close').click(function() {
		$('.work__menu').removeClass('work--active');
		closeMenu();
		$('.nav').removeClass('menu--active');
		$('.work').hide('fade', 500);
		$('body').removeClass('overflow--hidden');
		$('html').removeClass('overflow--hidden');
	});
	$('.chat__close').click(function() {
		$('.chat').hide('fade', 500);
		closeMenu();
		$('.nav').removeClass('menu--active');
		$('body').removeClass('overflow--hidden');
		$('html').removeClass('overflow--hidden');
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



