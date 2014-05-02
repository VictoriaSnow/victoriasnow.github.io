



$(document).ready(function(e) {
	
	
	
var $container = $('#container');
var $container2 = $('#container-total');


	
    $('#container').masonry({
    // options
    itemSelector : '.item'
  });




$container2.imagesLoaded( function() {
	$container2.fadeIn(500);
	
	$container.imagesLoaded( function() {
    $container.masonry();
});	

});	
	
	
	

	$("#contact-form").submit(function(e) {
		
		var errorModule = "";

		var nomeCognome_regExp = /^[a-zA-Zàèìòù \'\-]{4,40}$/;
		
		if(!nomeCognome_regExp.test($("#name").val())){
			errorModule += "Invalid name.\n";
			$("#name").addClass("check-error");}
		else{ $("#name").removeClass("check-error");}

		var mail_regExp = /^([a-zA-Z0-9]+([\.+_-][a-zA-Z0-9]+)*)@(([a-zA-Z0-9]+((\.|[-]{1,2})[a-zA-Z0-9]+)*)\.[a-zA-Z]{2,})$/;
		if(!mail_regExp.test($("#email").val())){
			errorModule += "Invalid email.\n";
			$("#email").addClass("check-error");}
		else{ $("#email").removeClass("check-error");}
		
		if($("#message").val() == ""){
			errorModule += "insert request \n";
			$("#message").addClass("check-error");
			}
		else{ 
		$("#message").removeClass("check-error");
		}
	

		if(errorModule != ""){
			alert("You filled out the form incorrectly"/* + errorModule*/)}
		else{
			alert("Thank you for contacting me. I'll answer you as soon as possible.").stop();
			$("#contact-form").submit();
			
			}
		
        
		
		e.preventDefault();
    });
	
	
	
	
	
	
	$("#menu ul li").click(function(e) {
		
		$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
		$(this).addClass("li-a-active");
		$("html, body").animate({scrollTop: ((dimension/4) + 30)},1000);
		if($(window).width() <= 768){ $("#menu").fadeOut(500);}
		e.preventDefault();
		    });
	
	

	$(".me").click(function(e) {
		$("html, body").animate({scrollTop: ((dimension/4) + 30)},1000);
		$("#menu ul li").removeClass("li-a-active");
		$("#menu ul li .me").addClass("li-a-active");
		
        $(".level-0").animate({
			top:"-100%"
			}, 500);
		$("#up").show(); $("#up2").hide(); 
		$("#down").show(); $("#down2").hide();
		e.preventDefault();
		    });
	$(".skills").click(function(e) {
		$("html, body").animate({scrollTop: ((dimension/4) + 30)},1000);
		$("#menu ul li").removeClass("li-a-active");
		$("#menu ul li .skills").addClass("li-a-active");
		
		$("#photoshop").delay(500).animate({width:"75%"});
		$("#illustrator").delay(600).animate({width:"55%"});
		$("#indesign").delay(700).animate({width:"30%"});
		$("#dreamweaver").delay(800).animate({width:"75%"});
		$("#html5").delay(500).animate({width:"90%"});
		$("#css3").delay(600).animate({width:"85%"});
		$("#jquery").delay(700).animate({width:"60%"});
		$("#php").delay(800).animate({width:"30%"});
		$("#wordpress").delay(900).animate({width:"60%"});
		$("#magento").delay(1000).animate({width:"70%"});
        
		
		$(".level-0").animate({
			top:"-200%"
			}, 500);// barre .animate({width:"300px"});
		$("#up").show(); $("#up2").hide(); 
		$("#down").show(); $("#down2").hide();
		e.preventDefault();
		
		    });
	$(".experience").click(function(e) {
		$("html, body").animate({scrollTop: ((dimension/4) + 30)},1000);
		
		$("#menu ul li").removeClass("li-a-active");
		$("#menu ul li .experience").addClass("li-a-active");
		
        $(".level-0").animate({
			top:"-300%"
			}, 500);
		$("#up").show(); $("#up2").hide(); 
		$("#down").show(); $("#down2").hide();
		e.preventDefault();
		    });
	$(".contact").click(function(e) {
		$("html, body").animate({scrollTop: ((dimension/4) + 30)},1000);
		$("#menu ul li").removeClass("li-a-active");
		$("#menu ul li .contact").addClass("li-a-active");
        $(".level-0").animate({
			top:"-400%"
			}, 500);
		$("#up").show(); $("#up2").hide(); 
		$("#down2").show(); $("#down").hide();
		e.preventDefault();
		    });

	
    var topPosition = $( ".level-0" ).position().top;
	
	if(topPosition == 0) {$("#up").hide(); $("#up2").show();}
    else if (topPosition != 0 ){ $("#up").show(); $("#up2").hide(); $("#down").show(); $("#down2").hide(); };
	
	
	
	$( "#down" ).click(function() {
		$("#up").show(); $("#up2").hide();
		$("#down").hide(); $("#down2").show();
		var topPosition = $( ".level-0" ).position().top;
		
		if(topPosition > (-dimension*3)){
        $( ".level-0" ).stop().animate({ "top": "-=100%" }, 500, function(){$("#down2").hide(); $("#down").show();});
		}
		else if (topPosition == (-dimension*3)) { 
		    $( ".level-0" ).stop().animate({ "top": "-=100%" }, 500, function(){$("#down").hide(); $("#down2").show();});
		    }
		
		if (topPosition == 0){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			$("#menu ul li .me").addClass("li-a-active");
			}
			
		else if (topPosition == (-dimension)){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			$("#menu ul li .skills").addClass("li-a-active");
			
		$("#photoshop").delay(500).animate({width:"75%"});
		$("#illustrator").delay(600).animate({width:"55%"});
		$("#indesign").delay(700).animate({width:"30%"});
		$("#dreamweaver").delay(800).animate({width:"75%"});
		$("#html5").delay(500).animate({width:"90%"});
		$("#css3").delay(600).animate({width:"85%"});
		$("#jquery").delay(700).animate({width:"60%"});
		$("#php").delay(800).animate({width:"30%"});
		$("#wordpress").delay(900).animate({width:"60%"});
		$("#magento").delay(1000).animate({width:"70%"});
			}
		else if (topPosition == (-dimension*2)){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			$("#menu ul li .experience").addClass("li-a-active");
			
			}
		else if (topPosition == (-dimension*3)){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			$("#menu ul li .contact").addClass("li-a-active");
			};
		
		 
	});
	
	
	$( "#up" ).click(function() {
		$("#down").show(); $("#down2").hide();
		$("#up2").show(); $("#up").hide();
		var topPosition = $( ".level-0" ).position().top;
		if (topPosition != 0 && topPosition != (-dimension)){
			$( ".level-0" ).stop().animate({ "top": "+=100%" }, 500, function(){ 
		$("#up").show(); $("#up2").hide();
		 });
		}
		
		else if( topPosition == (-dimension)) { 
		    $( ".level-0" ).stop().animate({ "top": "+=100%" }, 500, function(){ 
		$("#up2").show(); $("#up").hide();
		 });
		   
			}
		
		if (topPosition == (-dimension)){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			}
			
		else if (topPosition == (-dimension*2)){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			$("#menu ul li .me").addClass("li-a-active");
			
			}
		else if (topPosition == (-dimension*3)){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			$("#menu ul li .skills").addClass("li-a-active");
			
		$("#photoshop").delay(500).animate({width:"75%"});
		$("#illustrator").delay(600).animate({width:"55%"});
		$("#indesign").delay(700).animate({width:"30%"});
		$("#dreamweaver").delay(800).animate({width:"75%"});
		$("#html5").delay(500).animate({width:"90%"});
		$("#css3").delay(600).animate({width:"85%"});
		$("#jquery").delay(700).animate({width:"60%"});
		$("#php").delay(800).animate({width:"30%"});
		$("#wordpress").delay(900).animate({width:"60%"});
		$("#magento").delay(1000).animate({width:"70%"});
			}
		else if (topPosition == (-dimension*4)){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			$("#menu ul li .experience").addClass("li-a-active");
			};
		});
	

$("#hamburger img").click(function(e) { $("#menu").slideToggle(500);}); 

var dimension;
var columns;
   
 
	
	if($(window).width() <= 650) { // mobile
		columns = 1;
		dimension = Math.floor($(window).width() - 50 - 4);
		
		$('#hamburger').css({
		'width': (dimension/4) + 'px',
		'height': (dimension/4) + 'px'
	});
		
	$("#hamburger").css("display","block");
	
	$('#menu').css({
		'width': dimension + 'px',
		'height': dimension + 'px'
	});
	$('#menu ul li a').css({
		'line-height': (dimension/4) + 'px',
		'height': (dimension/4) + 'px'
	});
	$('#logo').css({
		'width': dimension + 'px',
		'height': (dimension/4) + 'px'
	});
	
	$(".back a").css('line-height' , dimension + 'px'); $("input[type='submit']").css('height' , (0.1*dimension) + 'px'); 
		
		$('#container, #header').css('width', $(window).width() - 40 - columns + 4 + 'px');
		
		$('#header').css({
		'height': (dimension/4) + 'px'
	});
	
	}


	else if($(window).width() <= 768) { // mobile
		columns = 1;
		dimension = Math.floor($(window).width() - 100 - 4);
		
		$('#hamburger').css({
		'width': (dimension/4) + 'px',
		'height': (dimension/4) + 'px'
	});
		
	$("#hamburger").css("display","block");
	
	$('#menu').css({
		'width': dimension + 'px',
		'height': dimension + 'px'
	});
	$('#menu ul li a').css({
		'line-height': (dimension/4) + 'px',
		'height': (dimension/4) + 'px'
	});
	$('#logo').css({
		'width': dimension + 'px',
		'height': (dimension/4) + 'px'
	});
    $(".back a").css('line-height' , dimension + 'px'); $("input[type='submit']").css('height' , (0.1*dimension) + 'px'); 
		
		$('#container, #header').css('width', $(window).width() - 40 - columns + 4 + 'px');
		
		$('#header').css({
		'height': (dimension/4) + 'px'
	});
	
	} 
	
	  else if($(window).width() <= 1024) { // tablet
		columns = 2;
		dimension = Math.floor(($(window).width() - 100 - 8) / 2);
		$(".back a").css('line-height' , dimension + 'px'); $("input[type='submit']").css('height' , (0.1*dimension) + 'px'); 
		$('#container, #header').css('width', $(window).width() - 100 - columns + 4 + 'px');
		
		$('#header').css({
		'height': (dimension/4) + 'px'
	});
		$('#menu').css({
		'width': ((1/2)*dimension) + dimension + 'px',
		'height': (dimension/4) + 'px'
	});
	$('#logo').css({
		'width': (dimension/3) + 'px',
		'height': (dimension/4) + 'px'
	});
		
	} else if($(window).width() <= 1400) { // desktop
		columns = 3;
		dimension = Math.floor(($(window).width() - 100 - 12) / 3);
		$(".back a").css('line-height' , dimension + 'px'); $("input[type='submit']").css('height' , (0.1*dimension) + 'px'); 
		$('#container, #header').css('width', $(window).width() - 100 - columns + 4 + 'px');
		$('#menu').css({
		'width': ((1/2)*dimension) + (2*dimension)  + 'px',
		'height': (dimension/4) + 'px'
	});
	
	$('#logo').css({
		'width': (dimension/3) + 'px',
		'height': (dimension/4) + 'px'
	});
		
	} else if($(window).width() >= 1401) { // desktop
		columns = 3;
		dimension = Math.floor((1401 - 100 - 12) / 3);
		$(".back a").css('line-height' , dimension + 'px'); $("input[type='submit']").css('height' , (0.1*dimension) + 'px');
		$('#container, #header').css('width', (1299) + 'px');
		$('#menu').css({
		'width': ((1/2)*dimension) + (2*dimension)  + 'px',
		'height': (dimension/4) + 'px'
	});
	
	$('#logo').css({
		'width': (dimension/3) + 'px',
		'height': (dimension/4) + 'px'
	});
		
	} 
	
	$('.item').css({
		'width': dimension + 'px',
		'height': dimension + 'px'
	});
	$('.halfitem').css({
		'width': dimension + 'px',
		'height': (dimension/2) - 2 + 'px'
	});

	
	
	
	
	
	
	
$(window).resize(function(e) { 



   if($(window).width() <= 768) {
		$("#hamburger").css("display","block");
		$("#menu").css("display","none");
		}
	else{
		$("#hamburger").css("display","none");
		$("#menu").css("display","block");
		$("#menu ul li a").css({
		'line-height':'inherit',
		'height':'inherit'});
	}
	
	
	/*FUNZIONI FRECCETTE*/
	
    var topPosition = $( ".level-0" ).position().top;
	
	if(topPosition == 0) {$("#up").hide(); $("#up2").show();}
    else if (topPosition != 0 ){ $("#up").show(); $("#up2").hide(); $("#down").show(); $("#down2").hide(); };
	
	
	
	$( "#down" ).click(function() {
		$("#up").show(); $("#up2").hide();
		$("#down").hide(); $("#down2").show();
		var topPosition = $( ".level-0" ).position().top;
		
		if(topPosition > (-dimension*3)){
        $( ".level-0" ).stop().animate({ "top": "-=100%" }, 500, function(){$("#down2").hide(); $("#down").show();});
		}
		else if (topPosition == (-dimension*3)) { 
		    $( ".level-0" ).stop().animate({ "top": "-=100%" }, 500, function(){$("#down").hide(); $("#down2").show();});
		    }
		
		if (topPosition == 0){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			$("#menu ul li .me").addClass("li-a-active");
			}
			
		else if (topPosition == (-dimension)){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			$("#menu ul li .skills").addClass("li-a-active");
			
		$("#photoshop").delay(500).animate({width:"75%"});
		$("#illustrator").delay(600).animate({width:"55%"});
		$("#indesign").delay(700).animate({width:"30%"});
		$("#dreamweaver").delay(800).animate({width:"75%"});
		$("#html5").delay(500).animate({width:"90%"});
		$("#css3").delay(600).animate({width:"85%"});
		$("#jquery").delay(700).animate({width:"60%"});
		$("#php").delay(800).animate({width:"30%"});
		$("#wordpress").delay(900).animate({width:"60%"});
		$("#magento").delay(1000).animate({width:"70%"});
			}
		else if (topPosition == (-dimension*2)){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			$("#menu ul li .experience").addClass("li-a-active");
			
			}
		else if (topPosition == (-dimension*3)){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			$("#menu ul li .contact").addClass("li-a-active");
			};
		
		 
	});
	
	
	$( "#up" ).click(function() {
		$("#down").show(); $("#down2").hide();
		$("#up2").show(); $("#up").hide();
		var topPosition = $( ".level-0" ).position().top;
		if (topPosition != 0 && topPosition != (-dimension)){
			$( ".level-0" ).stop().animate({ "top": "+=100%" }, 500, function(){ 
		$("#up").show(); $("#up2").hide();
		 });
		}
		
		else if( topPosition == (-dimension)) { 
		    $( ".level-0" ).stop().animate({ "top": "+=100%" }, 500, function(){ 
		$("#up2").show(); $("#up").hide();
		 });
		   
			}
		
		if (topPosition == (-dimension)){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			}
			
		else if (topPosition == (-dimension*2)){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			$("#menu ul li .me").addClass("li-a-active");
			
			}
		else if (topPosition == (-dimension*3)){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			$("#menu ul li .skills").addClass("li-a-active");
			
		$("#photoshop").delay(500).animate({width:"75%"});
		$("#illustrator").delay(600).animate({width:"55%"});
		$("#indesign").delay(700).animate({width:"30%"});
		$("#dreamweaver").delay(800).animate({width:"75%"});
		$("#html5").delay(500).animate({width:"90%"});
		$("#css3").delay(600).animate({width:"85%"});
		$("#jquery").delay(700).animate({width:"60%"});
		$("#php").delay(800).animate({width:"30%"});
		$("#wordpress").delay(900).animate({width:"60%"});
		$("#magento").delay(1000).animate({width:"70%"});
			}
		else if (topPosition == (-dimension*4)){
			$("#menu ul li, .me, .skills, .experience, .contact").removeClass("li-a-active");
			$("#menu ul li .experience").addClass("li-a-active");
			};
		});
	

	
	var dimension;
var columns;
   
    if($(window).width() <= 650) { // mobile
		columns = 1;
		dimension = Math.floor($(window).width() - 50 - 4);
		
		$('#hamburger').css({
		'width': (dimension/4) + 'px',
		'height': (dimension/4) + 'px'
	});
		
	$("#hamburger").css("display","block");
	
	$('#menu').css({
		'width': dimension + 'px',
		'height': dimension + 'px'
	});
	$('#menu ul li a').css({
		'line-height': (dimension/4) + 'px',
		'height': (dimension/4) + 'px'
	});
	$('#logo').css({
		'width': dimension + 'px',
		'height': (dimension/4) + 'px'
	});
	
	$(".back a").css('line-height' , dimension + 'px'); $("input[type='submit']").css('height' , (0.1*dimension) + 'px'); 
		
		$('#container, #header').css('width', $(window).width() - 40 - columns + 4 + 'px');
		
		$('#header').css({
		'height': (dimension/4) + 'px'
	});
	
	}


	else if($(window).width() <= 768) { // mobile
		columns = 1;
		dimension = Math.floor($(window).width() - 100 - 4);
		
		$('#hamburger').css({
		'width': (dimension/4) + 'px',
		'height': (dimension/4) + 'px'
	});
		
	$("#hamburger").css("display","block");
	
	$('#menu').css({
		'width': dimension + 'px',
		'height': dimension + 'px'
	});
	$('#menu ul li a').css({
		'line-height': (dimension/4) + 'px',
		'height': (dimension/4) + 'px'
	});
	$('#logo').css({
		'width': dimension + 'px',
		'height': (dimension/4) + 'px'
	});
    $(".back a").css('line-height' , dimension + 'px'); $("input[type='submit']").css('height' , (0.1*dimension) + 'px'); 
		
		$('#container, #header').css('width', $(window).width() - 40 - columns + 4 + 'px');
		
		$('#header').css({
		'height': (dimension/4) + 'px'
	});
	
	} 
	
	  else if($(window).width() <= 1024) { // tablet
		columns = 2;
		dimension = Math.floor(($(window).width() - 100 - 8) / 2);
		$(".back a").css('line-height' , dimension + 'px'); $("input[type='submit']").css('height' , (0.1*dimension) + 'px'); 
		$('#container, #header').css('width', $(window).width() - 100 - columns + 4 + 'px');
		
		$('#header').css({
		'height': (dimension/4) + 'px'
	});
		$('#menu').css({
		'width': ((1/2)*dimension) + dimension + 'px',
		'height': (dimension/4) + 'px'
	});
	$('#logo').css({
		'width': (dimension/3) + 'px',
		'height': (dimension/4) + 'px'
	});
		
	} else if($(window).width() <= 1400) { // desktop
		columns = 3;
		dimension = Math.floor(($(window).width() - 100 - 12) / 3);
		$(".back a").css('line-height' , dimension + 'px'); $("input[type='submit']").css('height' , (0.1*dimension) + 'px'); 
		$('#container, #header').css('width', $(window).width() - 100 - columns + 4 + 'px');
		$('#menu').css({
		'width': ((1/2)*dimension) + (2*dimension)  + 'px',
		'height': (dimension/4) + 'px'
	});
	
	$('#logo').css({
		'width': (dimension/3) + 'px',
		'height': (dimension/4) + 'px'
	});
		
	} else if($(window).width() >= 1401) { // desktop
		columns = 3;
		dimension = Math.floor((1401 - 100 - 12) / 3);
		$(".back a").css('line-height' , dimension + 'px'); $("input[type='submit']").css('height' , (0.1*dimension) + 'px');
		$('#container, #header').css('width', (1299) + 'px');
		$('#menu').css({
		'width': ((1/2)*dimension) + (2*dimension)  + 'px',
		'height': (dimension/4) + 'px'
	});
	
	$('#logo').css({
		'width': (dimension/3) + 'px',
		'height': (dimension/4) + 'px'
	});
		
	} 
	$('.item').css({
		'width': dimension + 'px',
		'height': dimension  + 'px'
	});
	$('.halfitem').css({
		'width': dimension + 'px',
		'height': (dimension/2) - 2 + 'px'
	});
	

	
	});


	});




