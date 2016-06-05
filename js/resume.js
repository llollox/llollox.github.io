$(document).ready(function(){
	$("div#resume span.glyphicon").on('click', function(){
		var p = $(this).siblings("p");
		
		$(p).animate({
		    opacity: 1,
		    height: "20px"
		  }, 500, function() {
		    // Animation complete.
		  });
	});
});