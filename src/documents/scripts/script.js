$(function(){
	
    function scrolledPast(){
		/*
		$('.pure-menu.pure-menu-open.pure-menu-fixed').css({
			'height': 'inherit',
			'z-index': '1'
		});
		*/
		// $('.splash-bg').css('opacity',0.777);
		$('.pure-menu.pure-menu-open.pure-menu-fixed').css('background','#fff');
		$('.pure-menu-heading').css('opacity',1);
        $('.learning-centre-btn').removeClass('opacity-zero');
    }
    function scrolledTop(){
		/*
		$('.pure-menu.pure-menu-open.pure-menu-fixed').css({
			'height': '100%',
			'z-index': '-1'
		});
		*/
		// $('.splash-bg').css('opacity',0.1);
		$('.pure-menu.pure-menu-open.pure-menu-fixed').css('background','transparent');
		$('.pure-menu-heading').css('opacity',0);
        $('.learning-centre-btn').addClass('opacity-zero');
    }
    
	window.onscroll = function(){
		document.documentElement.scrollTop || document.body.scrollTop > 636 ?
			scrolledPast()
			: scrolledTop();
	}
	
	// Parallax starts
	// src http://jsfiddle.net/9R4hZ/40/
	
});