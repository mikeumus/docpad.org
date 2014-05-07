$(function(){
	
    function scrolledPast(){
		$('.pure-menu.pure-menu-open.pure-menu-fixed').css('height','inherit');
        $('.learning-centre-btn').removeClass('opacity-zero');
    }
    function scrolledTop(){
		$('.pure-menu.pure-menu-open.pure-menu-fixed').css('height','100%');
        $('.learning-centre-btn').addClass('opacity-zero');
    }
    
	window.onscroll = function(){
		document.documentElement.scrollTop || document.body.scrollTop > 424 ?
			scrolledPast()
			: scrolledTop();
	}
	
});