$(document).ready(function(){
	$("div#resume div.place div.header-place").on('click', function(){
		var p = $(this).siblings("p");
		console.log(p);
		var icon = $(this).find("span.glyphicon");

		if ($(p).height() > 0) {

			// HIDE
			$(p).animate({
			    opacity: 0,
			    height: "0px"
			}, 500, 'easeInOutQuart', function() {
			    // Animation complete.
			});

			$(icon).removeClass("glyphicon-menu-up");
			$(icon).addClass("glyphicon-menu-down");
		}
		else {
			// SHOW

			$(p).animate({
			    opacity: 1,
			    height: "20px"
			}, 500, function() {
			    // Animation complete.
			});

			$(icon).removeClass("glyphicon-menu-down");
			$(icon).addClass("glyphicon-menu-up");
		}

		
	});
});