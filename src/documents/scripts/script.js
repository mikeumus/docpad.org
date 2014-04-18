$(function(){
	
	window.onscroll = function(){
		document.documentElement.scrollTop || document.body.scrollTop > 366 ?
			document.getElementById('main-menu').style.borderBottom = '7px solid #005EAC'
			: document.getElementById('main-menu').style.borderBottom = 0;
	}
	
});