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

	$('.docpad-love').on('click',function(){
		window.location.hash = "#docpad-love";
	});
	$('.whats-docpad').on('click',function(){
		window.location.hash = "#whats-docpad";
	});
	$('.got-plugins').on('click',function(){
		window.location.hash = "#got-plugins";
	});
	$('.docpad-support').on('click',function(){
		window.location.hash = "#docpad-support";
	});
	$('.tech-stack').on('click',function(){
		window.location.hash = "#tech-stack";
	});
	$('.four-points').on('click',function(){
		window.location.hash = "#four-points";
	});

	// Get DocPad latest version from register.npmjs.com
	$.ajax({
	   url: 'https://registry.npmjs.org/docpad',
		crossDomain: true,
		dataType: "jsonp",
	   success: function(data) {
	      var $docpadVersion = data.dist-tags; //data.talks[0].talk_title
	      $('#docpadVersion').text($docpadVersion);
	   }
	});/*,
	   error: function(xhr, status) {
			//handle errors
			console.log(xhr, status);
	      $('#docpadVersion').text('6.71.0');
	   }
	});
	// End DocPad version
/*
	crossDomain: true,
dataType: "jsonp",
success: function (response) {
	//Do something with the response
	//console.log(response.results.collection1[0].total_submissions);
	var $valid_phises = $('<h1>').text(response.results.collection1[0].valid_phises);
	var $total_submissions = $('<p>').text(response.results.collection1[0].total_submissions);
	$('#info')
		.append($valid_phises)
		.append($total_submissions);
} /*,
error: function (xhr, status) {
	//handle errors
	console.log(xhr, status);
} */

	// Parallax starts
	// src http://jsfiddle.net/9R4hZ/40/

});
