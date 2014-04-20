$(function(){
	
    function scrolledPast(){
        $('.learning-centre-btn').removeClass('opacity-zero');
    }
    function scrolledTop(){
        $('.learning-centre-btn').addClass('opacity-zero');
    }
    
	window.onscroll = function(){
		document.documentElement.scrollTop || document.body.scrollTop > 424 ?
			scrolledPast()
			: scrolledTop();
	}
	
});