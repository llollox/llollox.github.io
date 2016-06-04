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

/*	$('#navbar').affix({
      offset: {
        top: $('#hero').height()
      }
});*/	

	if($(window).width() > 768) {
		var heroHeight	= $("div#hero").height();
		var navbarHeight = $("div#navbar").height();
		/*var navbarThreshold = $(window).height() - 64;*/

		$(window).scroll(function (event) {
		    var scroll = $(window).scrollTop();
		    console.log(scroll);
		    console.log();
		    if(scroll >= heroHeight) {
		    	$("#navbar").addClass("navbar-fixed-top");
				$("#about").css("padding-top", navbarHeight + "px");
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