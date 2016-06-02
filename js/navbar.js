$(document).ready(function(){
	/*var affixElement = '#navbar';

	$(affixElement).affix({
	  offset: {
	    // Distance of between element and top page
	    top: function () {
	      return (this.top = $(affixElement).offset().top)
	    },
	    // when start #footer 
	    bottom: function () { 
	      return (this.bottom = $('#footer').outerHeight(true))
	    }
	  }
	});*/

	/*$('#navbar').affix({
	  offset: {
	    top: 50
	  }
	});
*/
	if($(window).width() > 768) {
		var navbarThreshold = $(window).height() - 64;

		$(window).scroll(function (event) {
		    var scroll = $(window).scrollTop();
		    console.log(scroll);
		    console.log();
		    if(scroll >= navbarThreshold) {
		    	$("#navbar").addClass("navbar-fixed-top");
				$("#about").css("padding-top", "64px");
			}
		    else {
		    	$("#navbar").removeClass("navbar-fixed-top");
		    	$("#about").css("padding-top", "0");
		    }
		    // Do something
		});	
	}
	else {
		$("#navbar").addClass("navbar-fixed-top");
	}
	

});