$(function(){
	
    function scrolledPast(){
		/*
		$('.pure-menu.pure-menu-open.pure-menu-fixed').css({
			'height': 'inherit',
			'z-index': '1'
		});
		*/
        $('.learning-centre-btn').removeClass('opacity-zero');
    }
    function scrolledTop(){
		/*
		$('.pure-menu.pure-menu-open.pure-menu-fixed').css({
			'height': '100%',
			'z-index': '-1'
		});
		*/
        $('.learning-centre-btn').addClass('opacity-zero');
    }
    
	window.onscroll = function(){
		document.documentElement.scrollTop || document.body.scrollTop > 424 ?
			scrolledPast()
			: scrolledTop();
	}
	
	// Parallax starts
	// src http://jsfiddle.net/9R4hZ/40/
	
});