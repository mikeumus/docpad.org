$(function(){
	
	// scrolling past header events
    function scrolledPast(){
		$('.pure-menu.pure-menu-open.pure-menu-fixed').css('background','#fff');
		$('.pure-menu-heading').css('opacity',1);
        $('.learning-centre-btn').removeClass('opacity-zero');
    }
    function scrolledTop(){
		$('.pure-menu.pure-menu-open.pure-menu-fixed').css('background','transparent');
		$('.pure-menu-heading').css('opacity',0);
        $('.learning-centre-btn').addClass('opacity-zero');
    }
    
	window.onscroll = function(){
		document.documentElement.scrollTop || document.body.scrollTop > 636 ?
			scrolledPast()
			: scrolledTop();
	}
	
	// #more-plugins events
	$('.more-plugins').on('click',function(){
		$('.more-plugins-li').remove();
	});
	
	$('#docpad-love').on('click',function(){
		window.location.hash = "#docpad-love";
	});
	$('#whats-docpad').on('click',function(){
		window.location.hash = "#whats-docpad";
	});
	$('#got-plugins').on('click',function(){
		window.location.hash = "#got-plugins";
	});
	
	// Parallax starts
	// src http://jsfiddle.net/9R4hZ/40/
	
});