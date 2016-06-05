$(document).ready(function(){

	 $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1000, 'easeInOutQuart', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        }); 
    });

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

		var sections = $("div.section");

		$(window).scroll(function (event) {
		    var scroll = $(window).scrollTop();

		    if(scroll >= heroHeight) {
		    	$("#navbar").addClass("navbar-fixed-top");
				$("#about").css("padding-top", navbarHeight + "px");
			}
		    else {
		    	$("#navbar").removeClass("navbar-fixed-top");
		    	$("#about").css("padding-top", "0");
		    }

		    onScroll();
		});	
	}
	else {
		$("#navbar").addClass("navbar-fixed-top");
	}

});

function onScroll() {
	if($(window).width() > 768) {
		
		var scroll = $(window).scrollTop();

		$('#navbar a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        var refTop = refElement.position().top;

	        if (refTop <= scroll && refTop + refElement.height() > scroll) {
	            console.log("activate: " + currLink.attr("href"));
	            $('#navbar ul li').removeClass("active");
	            currLink.closest("li").addClass("active");
	        }
	        else{
	            currLink.closest("li").removeClass("active");
	        }
	    });
	};
}