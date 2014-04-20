$(function(){
	
    function scrolledPast(){
        
    }
    function scrolledTop(){
        
    }
    
	window.onscroll = function(){
		document.documentElement.scrollTop || document.body.scrollTop > 366 ?
			scrolledPast()
			: scrolledTop();
	}
	
});